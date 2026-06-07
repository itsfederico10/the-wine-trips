import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

const STORAGE_BUCKET = 'itineraries';

const trackDownload = () => {
  if (window.gtag) window.gtag('event', 'download_itinerary');
  if (window.fbq) window.fbq('track', 'Lead');
};

// Email-gated itinerary download (lead magnet).
// Hybrid flow: email -> Supabase OTP -> signed URL from private bucket.
// If OTP / bucket aren't configured yet, it falls back to the Drive PDF so the
// download always works for review.
const ItineraryDownloadModal = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false);
  const [trip, setTrip] = useState(null); // { region, itineraryFile, pdfLink }
  const [step, setStep] = useState('form'); // 'form' | 'otp' | 'fallback'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(true);
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Open via global event dispatched from the experience CTAs.
  useEffect(() => {
    const handleOpen = (e) => {
      setTrip(e.detail || null);
      setStep('form');
      setName('');
      setEmail('');
      setCode('');
      setConsent(true);
      setIsOpen(true);
    };
    window.addEventListener('open-itinerary-modal', handleOpen);
    return () => window.removeEventListener('open-itinerary-modal', handleOpen);
  }, []);

  const close = () => setIsOpen(false);

  const region = trip?.region || '';
  const source = `itinerary_${(trip?.id || region || 'general').toString().toLowerCase().replace(/\s+/g, '_')}`;

  // Resolve the actual download URL: signed URL from Supabase Storage, else Drive.
  const resolveDownloadUrl = async () => {
    if (trip?.itineraryFile) {
      try {
        const { data } = await supabase.storage
          .from(STORAGE_BUCKET)
          .createSignedUrl(trip.itineraryFile, 300);
        if (data?.signedUrl) return data.signedUrl;
      } catch {
        /* bucket not configured yet -> fall through to Drive */
      }
    }
    return trip?.pdfLink || null;
  };

  const triggerDownload = async () => {
    const url = await resolveDownloadUrl();
    if (url) {
      trackDownload();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const saveLead = async () => {
    try {
      await supabase.from('The waiting list').insert([
        {
          full_name: name || null,
          email,
          country_residence: null,
          experience_interest: region || null,
          instagram: null,
          source,
        },
      ]);
    } catch {
      /* non-blocking: lead capture shouldn't stop the download */
    }
  };

  const handleSendCode = async (e) => {
    e.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name.trim() || !emailOk) {
      toast({ title: t('itinerary.errorTitle'), description: t('itinerary.invalidEmail'), variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    await saveLead();

    try {
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      setStep('otp');
    } catch {
      // OTP not available (not enabled / rate-limited): fall back to Drive download.
      setStep('fallback');
      toast({ title: t('itinerary.fallbackTitle'), description: t('itinerary.fallbackBody') });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      toast({ title: t('itinerary.errorTitle'), description: t('itinerary.invalidCode'), variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.verifyOtp({ email, token: code, type: 'email' });
      if (error) throw error;
      await triggerDownload();
      toast({ title: t('itinerary.successTitle'), description: t('itinerary.successBody') });
      close();
    } catch {
      toast({ title: t('itinerary.errorTitle'), description: t('itinerary.invalidCode'), variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFallbackDownload = async () => {
    await triggerDownload();
    close();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none px-4"
          >
            <div className="bg-white w-full max-w-lg p-8 md:p-12 relative shadow-2xl rounded-sm pointer-events-auto">
              <button onClick={close} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors">
                <X className="w-5 h-5" />
              </button>

              {/* STEP 1 — email */}
              {step === 'form' && (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif text-gray-900 mb-3">{trip?.title || t('itinerary.title')}</h2>
                    {region && <p className="text-[#c9a96e] font-sans text-xs font-bold tracking-[0.15em] uppercase mb-4">{region}</p>}
                    <p className="text-gray-600 font-light text-sm leading-relaxed">{t('itinerary.subtitle')}</p>
                  </div>
                  <form onSubmit={handleSendCode} className="space-y-4">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('itinerary.namePlaceholder')}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c9a96e] focus:bg-white focus:outline-none transition-all text-gray-900 text-sm font-sans disabled:opacity-50"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('itinerary.emailPlaceholder')}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c9a96e] focus:bg-white focus:outline-none transition-all text-gray-900 text-sm font-sans disabled:opacity-50"
                    />
                    <label className="flex items-start gap-2 text-[11px] text-gray-500 font-light font-sans cursor-pointer">
                      <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-[#c9a96e]" />
                      <span>{t('itinerary.consent')}</span>
                    </label>
                    <button
                      type="submit"
                      disabled={isSubmitting || !consent}
                      className="w-full py-3 bg-[#c9a96e] text-white font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#b89a60] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (<><Loader2 className="w-3 h-3 animate-spin" />{t('itinerary.sending')}</>) : t('itinerary.sendCode')}
                    </button>
                  </form>
                </>
              )}

              {/* STEP 2 — OTP */}
              {step === 'otp' && (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif text-gray-900 mb-3">{t('itinerary.verifyTitle')}</h2>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">{t('itinerary.verifySubtitle', { email })}</p>
                  </div>
                  <form onSubmit={handleVerify} className="space-y-6">
                    <div className="flex justify-center">
                      <InputOTP maxLength={6} value={code} onChange={setCode}>
                        <InputOTPGroup>
                          {[0, 1, 2, 3, 4, 5].map((i) => <InputOTPSlot key={i} index={i} />)}
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#c9a96e] text-white font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#b89a60] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (<><Loader2 className="w-3 h-3 animate-spin" />{t('itinerary.verifying')}</>) : t('itinerary.verify')}
                    </button>
                    <button type="button" onClick={() => setStep('form')} className="w-full text-center text-[11px] text-gray-400 hover:text-gray-600 font-sans">
                      {t('itinerary.resend')}
                    </button>
                  </form>
                </>
              )}

              {/* FALLBACK — OTP unavailable, deliver Drive PDF directly */}
              {step === 'fallback' && (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif text-gray-900 mb-3">{t('itinerary.fallbackTitle')}</h2>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">{t('itinerary.fallbackBody')}</p>
                  </div>
                  <button
                    onClick={handleFallbackDownload}
                    className="w-full py-3 bg-[#c9a96e] text-white font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#b89a60] transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {t('itinerary.downloadFallback')}
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ItineraryDownloadModal;
