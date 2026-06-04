import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();
  const { t } = useTranslation();
  const location = useLocation();

  // Partner Form State
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to section logic
  useEffect(() => {
    if (location.hash === '#partner-form') {
      const element = document.getElementById('partner-form');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const carouselImages = [
    { src: '/images/16926025ba2fb19aae7294d3f823e08d.webp', alt: 'Château Lafite Rothschild team at prestigious Bordeaux wine estate' },
    { src: '/images/1c156dd8c0b1e50bdd5ef5ecdfc1e632.webp', alt: 'Oak barrels in wine cellar at Château La Mission Haut-Brion Bordeaux' },
    { src: '/images/707a534ce9f8c1d70d5274195c58ee36.webp', alt: 'Vietti winery vineyard in Barolo Piedmont Italy wine region' },
    { src: '/images/f3d94d36ee5e95b7df1c77bdc0f4b888.webp', alt: 'Buenos Aires wine tasting with Piero Incisa Della Rocchetta' },
    { src: '/images/300c630549f5d07f5c9680cc7933252f.webp', alt: 'Tuscan vineyard sunset with cypress trees and rolling hills' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();

    if (!email || !message) {
      toast({ title: t('about.partnerMissingTitle'), description: t('about.partnerMissingBody'), variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('The waiting list')
        .insert([
          { email, message, full_name: null, country_residence: null, experience_interest: null, instagram: null, source: 'partner' }
        ]);

      if (error) throw error;

      toast({ title: t('about.partnerSuccessTitle'), description: t('about.partnerSuccessBody') });
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Submission error:', error);
      toast({ title: t('about.partnerErrorTitle'), description: t('about.partnerErrorBody'), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const values = [
    { title: t('about.valueSustainabilityTitle'), text: t('about.valueSustainabilityText') },
    { title: t('about.valueQualityTitle'), text: t('about.valueQualityText') },
    { title: t('about.valueRespectTitle'), text: t('about.valueRespectText') },
    { title: t('about.valuePartnershipTitle'), text: t('about.valuePartnershipText') },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - The Wine Trips</title>
        <meta name="description" content="The story behind The Wine Trips - born from a passion for wine, travel, and authentic connections." />
        <link rel="canonical" href="https://thewinetrips.com/about" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thewinetrips.com/about" />
        <meta property="og:title" content="About Us - The Wine Trips" />
        <meta property="og:description" content="The story behind The Wine Trips - born from a passion for wine, travel, and authentic connections." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/about" />
        <meta property="twitter:title" content="About Us - The Wine Trips" />
        <meta property="twitter:description" content="The story behind The Wine Trips - born from a passion for wine, travel, and authentic connections." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/f06d04c2a8d5d6a69378d7d33f086898.webp" alt="Château team at exclusive wine estate in Bordeaux France" className="hidden md:block w-full h-full object-cover" />
            <img src="/images/85e3ea806cd248d538a9217e5a3a22a1.webp" alt="Wine Trips team members in vineyard" className="block md:hidden w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-tight italic mb-8">
              “{t('about.heroQuote')}”
            </h1>
            <div className="w-24 h-[1px] bg-[#c9a96e] mx-auto" />
          </motion.div>
        </section>

        {/* MY STORY SECTION */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col justify-center">
              <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-8 font-sans">
                {t('about.storyEyebrow')}
              </span>
              <div className="space-y-6 text-gray-800 font-light leading-loose text-base md:text-lg font-sans text-justify">
                <p>{t('about.story1')}</p>
                <p>{t('about.story2')}</p>
                <p>{t('about.story3')}</p>
              </div>
            </motion.div>

            {/* Carousel */}
            <div className="relative h-full min-h-[500px] md:min-h-0">
              <div className="relative w-full h-full overflow-hidden rounded-xl shadow-xl bg-gray-100 group">
                <AnimatePresence mode="wait">
                  <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0">
                    <img src={carouselImages[currentSlide].src} alt={carouselImages[currentSlide].alt} className="w-full h-full object-cover transition-transform duration-[4000ms] ease-linear scale-100 group-hover:scale-105" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10 rounded-b-xl" />

                <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                  <a href="https://instagram.com/its.federico" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white border-b border-white/50 pb-1 hover:text-[#c9a96e] hover:border-[#c9a96e] transition-colors duration-300 font-sans shadow-sm">
                    <Instagram className="w-4 h-4" />
                    {t('about.instagram')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MANIFESTO SECTION */}
        <section className="py-24 bg-[#fafafa]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8 leading-relaxed italic">“{t('about.manifesto')}”</h2>
              <div className="w-16 h-[1px] bg-[#c9a96e] mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* OUR VALUES SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">
                {t('about.valuesEyebrow')}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">{t('about.valuesTitle')}</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {values.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 * (i + 1) }} className="space-y-4">
                  <h3 className="text-xl font-serif text-gray-900">{v.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed font-sans text-justify">{v.text}</p>
                </motion.div>
              ))}
            </div>

            {/* PARTNER FORM SECTION */}
            <motion.div id="partner-form" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-24 pt-16 border-t border-gray-100 max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">
                  {t('about.partnerEyebrow')}
                </span>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">{t('about.partnerTitle')}</h2>
                <p className="text-gray-600 font-light text-sm">
                  {t('about.partnerSub')}
                </p>
              </div>

              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-sans">
                    {t('about.partnerEmail')}
                  </label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isSubmitting}
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-[#c9a96e] transition-colors text-gray-900 text-sm placeholder-gray-300 focus:outline-none font-sans"
                    placeholder={t('about.partnerEmailPlaceholder')} required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-sans">
                    {t('about.partnerMessage')}
                  </label>
                  <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} disabled={isSubmitting} rows="4"
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-[#c9a96e] transition-colors text-gray-900 text-sm placeholder-gray-300 focus:outline-none font-sans resize-none"
                    placeholder={t('about.partnerMessagePlaceholder')} required />
                </div>

                <div className="text-center">
                  <p className="text-[#c9a96e] font-serif italic mb-6 text-sm">{t('about.partnerReply')}</p>

                  <button type="submit" disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-3 bg-[#1a1a1a] text-white rounded-none text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-white disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t('about.partnerSending')}
                      </span>
                    ) : (
                      t('about.partnerSubmit')
                    )}
                  </button>

                  <p className="text-[10px] text-gray-400 text-center mt-6 leading-tight font-light max-w-xs mx-auto">
                    {t('waitlist.consent')}
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
