import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Key, Users, Compass, Bell, Globe, Wine, ShieldCheck } from 'lucide-react';
import TimelineStep from '@/components/TimelineStep';
import DestinationSlider from '@/components/DestinationSlider';
import { processSteps } from '@/data/experiences';

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();
  const differentiators = [
    { icon: Key, key: 'access' },
    { icon: Users, key: 'groups' },
    { icon: Compass, key: 'curation' },
    { icon: Bell, key: 'execution' },
    { icon: Globe, key: 'culture' },
    { icon: Wine, key: 'guidance' },
  ];

  return (
    <>
      <Helmet>
        <title>THE WINE TRIPS — The taste of the unforgettable</title>
        <meta name="description" content="End-to-end wine travel experiences with exclusive winery access in Bordeaux, Ribera del Duero, Piedmont, Toscana, and Mendoza. Join the waiting list." />
        <link rel="canonical" href="https://thewinetrips.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thewinetrips.com" />
        <meta property="og:title" content="THE WINE TRIPS — The taste of the unforgettable" />
        <meta property="og:description" content="End-to-end wine travel experiences with exclusive winery access in Bordeaux, Ribera del Duero, Piedmont, Toscana, and Mendoza. Join the waiting list." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com" />
        <meta property="twitter:title" content="THE WINE TRIPS — The taste of the unforgettable" />
        <meta property="twitter:description" content="End-to-end wine travel experiences with exclusive winery access in Bordeaux, Ribera del Duero, Piedmont, Toscana, and Mendoza. Join the waiting list." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/images/53490d75f77d93ebfd62b50cb3e9ea40.webp" 
              alt="Lush vineyard landscape with rolling hills and grapevines in wine country" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative z-10 text-center px-6 max-w-4xl">
            <p className="text-[16px] md:text-[18px] text-white/90 mb-6 font-light tracking-wide font-sans">
              {t('home.tagline')}
            </p>
            <h1 className="text-[32px] md:text-[48px] font-serif text-white mb-12 tracking-tight leading-tight">
              THE WINE TRIPS
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-light tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-all duration-500">
                {t('cta.joinWaitlist')}
              </Link>
              <Link to="/experiences" className="text-xs text-white font-light tracking-widest uppercase hover:text-white/70 transition-colors border-b border-transparent hover:border-white pb-1">
                {t('cta.ourExperiences')}
              </Link>
            </div>
          </motion.div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-32 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">
                {t('home.whatSetsApart')}
              </h2>
              <div className="w-20 h-[1px] bg-[#c9a96e] mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => {
              const Icon = item.icon;
              return <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.02, y: -5 }} className="p-10 border border-[#c9a96e]/20 bg-[#222] hover:bg-[#2a2a2a] hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 group">
                    <Icon className="w-10 h-10 text-[#c9a96e] mb-6 stroke-[1.5]" />
                    <h3 className="text-xl font-serif text-white mb-4 group-hover:text-[#c9a96e] transition-colors">
                      {t(`home.diff.${item.key}.title`)}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed text-sm">
                      {t(`home.diff.${item.key}.description`)}
                    </p>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* Destination Slider */}
        <section className="relative">
          <DestinationSlider />
        </section>

        {/* Signature Process Timeline */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20 text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 tracking-tight">
                {t('home.process')}
              </h2>
              <p className="text-sm font-light text-gray-500 font-sans">
                {t('home.processSub')}
              </p>
            </motion.div>

            <div className="flex flex-col items-center">
              {processSteps.map((step, index) => <TimelineStep key={step.number} step={step} index={index} isActive={activeStep === index} onClick={setActiveStep} />)}
            </div>
          </div>
        </section>

        {/* Testimonial Quote */}
        <section className="py-32 px-6 bg-gray-50">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl font-light text-gray-800 leading-loose italic mb-12 font-serif">"Whether you're a collector seeking unique experiences, a sommelier exploring new regions, or simply someone who enjoys the beauty of a glass of wine, we craft experiences worthy of your palate and curiosity. This isn't wine tourism. It's wine immersion."</p>
            <div className="w-16 h-[1px] bg-gray-300 mx-auto"></div>
          </motion.div>
        </section>

        {/* Trust & Backing (B&A) */}
        <section className="py-24 px-6 bg-[#1a1a1a] text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="w-10 h-10 text-[#c9a96e] mx-auto mb-6 stroke-[1.5]" />
            <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">
              {t('home.backingEyebrow')}
            </span>
            <h2 className="text-2xl md:text-3xl font-serif mb-6">{t('home.backingTitle')}</h2>
            <p className="text-gray-400 font-light leading-relaxed font-sans">
              {t('home.backingBody')}
            </p>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 bg-white">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-gray-900 mb-12 tracking-tight">
              {t('home.beginJourney')}
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* For Travelers */}
              <div className="text-center group w-full md:w-auto">
                <p className="text-xs font-bold text-[#c9a96e] uppercase tracking-[0.2em] mb-4">{t('home.forTravelers')}</p>
                <Link
                  to="/contact"
                  className="w-full md:w-auto inline-block px-10 py-4 bg-gray-900 text-white rounded-full text-xs font-light tracking-widest uppercase hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('cta.joinWaitlist')}
                </Link>
              </div>

              <div className="hidden md:block w-[1px] h-12 bg-gray-200"></div>

              {/* For Partners */}
              <div className="text-center group w-full md:w-auto">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">{t('home.forPartners')}</p>
                <Link
                  to="/about#partner-form"
                  className="w-full md:w-auto inline-block px-10 py-4 bg-white border border-gray-200 text-gray-900 rounded-full text-xs font-light tracking-widest uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
                >
                  {t('cta.collaborate')}
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};
export default HomePage;