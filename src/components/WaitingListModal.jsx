import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

const WaitingListModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    // Check if modal has been seen before
    const hasSeenModal = localStorage.getItem('waitingListModalSeen');

    // Show modal after a short delay if not seen (eased from 3s to 5s so the
    // visitor sees value first and the WhatsApp flow isn't interrupted).
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for custom open event from other components
  useEffect(() => {
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener('open-waitlist-modal', handleOpenEvent);
    return () => window.removeEventListener('open-waitlist-modal', handleOpenEvent);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('waitingListModalSeen', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: t('waitlist.invalidTitle'),
        description: t('waitlist.invalidBody'),
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert into 'The waiting list' table
      const { error } = await supabase
        .from('The waiting list')
        .insert([
          { 
            email: email,
            full_name: null,
            country_residence: null,
            experience_interest: null,
            instagram: null,
            source: 'popup'
          }
        ]);

      if (error) throw error;

      // PERSISTENCE: Save to localStorage as backup/analytics
      const existingList = JSON.parse(localStorage.getItem('generalWaitingList') || '[]');
      existingList.push({ email, date: new Date().toISOString(), source: 'WaitingListModal' });
      localStorage.setItem('generalWaitingList', JSON.stringify(existingList));

      toast({
        title: t('waitlist.successTitle'),
        description: t('waitlist.successBody'),
      });

      setEmail('');
      handleClose();
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: t('waitlist.errorTitle'),
        description: t('waitlist.errorBody'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none px-4"
          >
            <div className="bg-white w-full max-w-lg p-8 md:p-12 relative shadow-2xl rounded-sm pointer-events-auto">
              
              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif text-gray-900 mb-3">
                  {t('waitlist.title')}
                </h2>
                <p className="text-[#c9a96e] font-sans text-xs font-bold tracking-[0.15em] uppercase mb-4">
                  {t('waitlist.eyebrow')}
                </p>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {t('waitlist.body')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('waitlist.placeholder')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c9a96e] focus:bg-white focus:outline-none transition-all text-gray-900 text-sm font-sans disabled:opacity-50 disabled:bg-gray-100"
                    disabled={isSubmitting}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#c9a96e] text-white font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#b89a60] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3 h-3 animate-spin" />
                      {t('waitlist.submitting')}
                    </>
                  ) : (
                    t('waitlist.submit')
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-[10px] text-gray-400 leading-tight font-light font-sans max-w-xs mx-auto">
                  {t('waitlist.consent')}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitingListModal;