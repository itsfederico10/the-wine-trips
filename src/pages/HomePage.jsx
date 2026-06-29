import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Key, Users, Compass, Bell, Globe, Wine, MessageCircle } from 'lucide-react';
import DestinationSlider from '@/components/DestinationSlider';
import TripsShowcase from '@/components/TripsShowcase';
import { waLink, trackWhatsApp } from '@/components/WhatsAppButton';

const HomePage = () => {
  const { t } = useTranslation();

  const differentiators = [
    { icon: Key, key: 'access' },
    { icon: Users, key: 'groups' },
    { icon: Compass, key: 'curation' },
    { icon: Bell, key: 'execution' },
    { icon: Globe, key: 'culture' },
    { icon: Wine, key: 'guidance' },
  ];

  const steps = ['s1', 's2', 's3', 's4'];

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
            <p className="text-[16px] md:text-[18px] text-white/90 mb-6 font-light italic tracking-wide font-sans">
              {t('home.tagline')}
            </p>
            <h1 className="text-[32px] md:text-[48px] font-serif text-white mb-12 tracking-tight leading-tight">
              THE WINE TRIPS
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={waLink(t('whatsapp.defaultMessage'))}
                target="_blank" rel="noopener noreferrer" onClick={trackWhatsApp}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#c9a96e] text-[#1a1a1a] rounded-full text-xs font-medium tracking-widest uppercase hover:bg-white transition-all duration-500"
              >
                <MessageCircle className="w-4 h-4" />{t('cta.contactUs')}
              </a>
              <Link to="/experiences" className="text-xs text-white font-light tracking-widest uppercase hover:text-white/70 transition-colors border-b border-transparent hover:border-white pb-1">
                {t('cta.ourExperiences')}
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ¿A Dónde Vamos? — trips first, so visitors see the bookable journeys immediately */}
        <TripsShowcase />

        {/* Destination Slider */}
        <section className="relative">
          <DestinationSlider />
        </section>

        {/* What Sets Us Apart — compact single row */}
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif mb-5 text-gray-900">
                {t('home.whatSetsApart')}
              </h2>
              <div className="w-20 h-[1px] bg-[#c9a96e] mx-auto" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="text-center flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-full border border-[#c9a96e]/40 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#c9a96e] stroke-[1.5]" />
                    </div>
                    <h3 className="text-sm font-serif text-gray-900 mb-2 leading-tight">{t(`home.diff.${item.key}.title`)}</h3>
                    <p className="text-xs text-gray-500 font-light leading-relaxed font-sans">{t(`home.diff.${item.key}.short`)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 md:py-32 px-6 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 tracking-tight">
                {t('home.how.title')}
              </h2>
              <p className="text-sm font-light text-gray-500 font-sans">
                {t('home.how.sub')}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {steps.map((s, index) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="block text-4xl md:text-5xl font-serif text-[#c9a96e]/40 mb-4 leading-none">{`0${index + 1}`}</span>
                  <h3 className="text-lg font-serif text-gray-900 mb-3">{t(`home.how.${s}.title`)}</h3>
                  <p className="text-sm font-light text-gray-600 leading-relaxed font-sans">{t(`home.how.${s}.desc`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Quote */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl font-light text-gray-800 leading-loose italic mb-12 font-serif">“{t('home.testimonial')}”</p>
            <div className="w-16 h-[1px] bg-gray-300 mx-auto"></div>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 px-6 bg-[#fafafa]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-gray-900 mb-12 tracking-tight">
              {t('home.beginJourney')}
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* For Travelers → WhatsApp */}
              <div className="text-center w-full md:w-auto">
                <p className="text-xs font-bold text-[#c9a96e] uppercase tracking-[0.2em] mb-4">{t('home.forTravelers')}</p>
                <a
                  href={waLink(t('whatsapp.defaultMessage'))}
                  target="_blank" rel="noopener noreferrer" onClick={trackWhatsApp}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-gray-900 text-white rounded-full text-xs font-light tracking-widest uppercase hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />{t('cta.contactUs')}
                </a>
              </div>

              <div className="hidden md:block w-[1px] h-12 bg-gray-200"></div>

              {/* For Partners */}
              <div className="text-center w-full md:w-auto">
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
