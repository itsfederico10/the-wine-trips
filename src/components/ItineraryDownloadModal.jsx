import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

const STORAGE_BUCKET = 'itineraries';

const trackDownload = () => {
  if (window.gtag) window.gtag('event', 'download_itinerary');
  if (window.fbq) window.fbq('track', 'Lead');
};

// Email-gated download (lead magnet). Simple flow: capture name + email (saved
// as a lead in Supabase), then deliver the PDF immediately. No OTP — Supabase's
// default email sends a link, not a 6-digit code, which broke the old flow.
const ItineraryDownloadModal = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false);
  const [trip, setTrip] = useState(null); // { id, region, itineraryFile, pdfLink, title }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = (e) => {
      setTrip(e.detail || null);
      setName('');
      setEmail('');
      setPhone('');
      setConsent(true);
      setIsOpen(true);
    };
    window.addEventListener('open-itinerary-modal', handleOpen);
    return () => window.removeEventListener('open-itinerary-modal', handleOpen);
  }, []);

  const close = () => setIsOpen(false);

  const region = trip?.region || '';
  const source = `itinerary_${(trip?.id || region || 'general').toString().toLowerCase().replace(/\s+/g, '_')}`;

  // Resolve the actual download URL: signed URL from Supabase Storage, else direct PDF.
  const resolveDownloadUrl = async () => {
    if (trip?.itineraryFile) {
      try {
        const { data } = await supabase.storage.from(STORAGE_BUCKET).createSignedUrl(trip.itineraryFile, 300);
        if (data?.signedUrl) return data.signedUrl;
      } catch {
        /* bucket not configured -> fall through */
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
    const base = {
      full_name: name || null,
      email,
      country_residence: null,
      experience_interest: region || null,
      instagram: null,
      source,
    };
    // Try with phone; fall back if the column doesn't exist yet.
    let { error } = await supabase.from('The waiting list').insert([{ ...base, phone: phone || null }]);
    if (error) await supabase.from('The waiting list').insert([base]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name.trim() || !emailOk) {
      toast({ title: t('itinerary.errorTitle'), description: t('itinerary.invalidEmail'), variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      await saveLead();
      await triggerDownload();
      toast({ title: t('itinerary.successTitle'), description: t('itinerary.successBody') });
      close();
    } catch (err) {
      console.error('itinerary download error:', err);
      // Even if lead-saving fails, still let them download.
      await triggerDownload();
      close();
    } finally {
      setIsSubmitting(false);
    }
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

              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif text-gray-900 mb-3">{trip?.title || t('itinerary.title')}</h2>
                {region && <p className="text-[#c9a96e] font-sans text-xs font-bold tracking-[0.15em] uppercase mb-4">{region}</p>}
                <p className="text-gray-600 font-light text-sm leading-relaxed">{t('itinerary.subtitle')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('waitlist.phonePlaceholder')}
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
                  className="w-full py-3 bg-[#c9a96e] text-white font-sans text-xs font-bold tracking-[0.2em] uppercase rounded-[6px] hover:bg-[#b89a60] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <Loader2 className="w-3 h-3 animate-spin" /> : <Download className="w-4 h-4" />}
                  {isSubmitting ? t('itinerary.sending') : t('itinerary.downloadFallback')}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ItineraryDownloadModal;
