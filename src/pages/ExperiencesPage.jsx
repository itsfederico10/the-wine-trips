import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { experiences } from '@/data/experiences';
import { FileText, MessageCircle, ArrowRight } from 'lucide-react';
import { waLink, trackWhatsApp } from '@/components/WhatsAppButton';

const ExperiencesPage = () => {
  const { t } = useTranslation();

  // Descriptive SEO alt text mapping for experience cards
  const getExperienceAltText = title => {
    if (title.includes('Bordeaux')) return "Private wine tasting experience in exclusive Bordeaux château";
    if (title.includes('Toscana')) return "Curated vineyard tour through Tuscany wine region with expert winemaker";
    if (title.includes('Mendoza')) return "Exclusive bodega wine cellar experience in Mendoza Argentina";
    if (title.includes('Ribera')) return "Private dining with wine pairing at historic Ribera del Duero estate";
    return title;
  };

  // Live trips first, then coming_soon (preserves original order within each group).
  const orderedExperiences = [...experiences].sort(
    (a, b) => (a.status === 'live' ? 0 : 1) - (b.status === 'live' ? 0 : 1)
  );

  const openWaitlist = () => window.dispatchEvent(new Event('open-waitlist-modal'));
  const openItinerary = (exp) =>
    window.dispatchEvent(new CustomEvent('open-itinerary-modal', {
      detail: {
        id: exp.id,
        region: exp.hero?.title || exp.title,
        itineraryFile: exp.itineraryFile,
        pdfLink: exp.pdfLink,
      },
    }));

  return (
    <>
      <Helmet>
        <title>Our Wine Experiences - The Wine Trips</title>
        <meta name="description" content="Explore our curated collection of exclusive wine experiences across the world's most prestigious wine regions including Bordeaux, Tuscany, Mendoza, Ribera del Duero, and Piedmont." />
        <link rel="canonical" href="https://thewinetrips.com/experiences" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thewinetrips.com/experiences" />
        <meta property="og:title" content="Our Wine Experiences - The Wine Trips" />
        <meta property="og:description" content="Explore our curated collection of exclusive wine experiences across the world's most prestigious wine regions." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/experiences" />
        <meta property="twitter:title" content="Our Wine Experiences - The Wine Trips" />
        <meta property="twitter:description" content="Explore our curated collection of exclusive wine experiences across the world's most prestigious wine regions." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="px-6 pt-32 md:pt-40 pb-20 flex items-center justify-center">
          <div className="max-w-7xl mx-auto text-center w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
                {t('experiences.title')}
              </h1>
              <p className="text-lg font-light text-gray-600 leading-relaxed font-sans">
                {t('experiences.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Full Width Experience Cards */}
        <section className="flex flex-col gap-0 items-center w-full">
          {orderedExperiences.map((experience, index) => {
            const isLive = experience.status === 'live';
            const region = experience.hero?.title || experience.title;
            return (
              <div key={experience.id} className="flex flex-col md:flex-row min-h-[500px] w-full group">
                {/* Image Side */}
                <Link
                  to={`/experiences/${experience.id}`}
                  className={`w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden relative block ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}
                >
                  <img src={experience.image} alt={getExperienceAltText(experience.title)} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  {!isLive && (
                    <span className="absolute top-6 left-6 px-3 py-1.5 bg-[#c9a96e] text-[#1a1a1a] text-[10px] font-bold tracking-[0.2em] uppercase rounded-[6px]">
                      {t('experiences.upcoming')}
                    </span>
                  )}
                </Link>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 bg-[#1a1a1a] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <Link to={`/experiences/${experience.id}`} className="block group/title">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-tight group-hover/title:text-[#c9a96e] transition-colors">
                        {experience.title}
                      </h3>
                    </Link>
                    <p className="text-lg md:text-xl font-light italic text-[#c9a96e] mb-8 font-sans">
                      {experience.subtitle}
                    </p>

                    <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-xl">
                      {experience.description}
                    </p>

                    <ul className="mb-10 space-y-3">
                      {experience.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-light text-gray-300">
                          <span className="text-[#c9a96e] mt-1">✦</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 mb-10">
                      <span className="px-4 py-1 border border-[#c9a96e]/30 rounded-full text-xs uppercase tracking-widest text-[#c9a96e]">
                        {experience.duration}
                      </span>
                      <span className="px-4 py-1 border border-[#c9a96e]/30 rounded-full text-xs uppercase tracking-widest text-[#c9a96e]">
                        {experience.groupSize}
                      </span>
                      <span className="px-4 py-1 border border-[#c9a96e]/30 rounded-full text-xs uppercase tracking-widest text-[#c9a96e]">
                        {experience.season}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                      {/* Primary CTA */}
                      {isLive ? (
                        <a
                          href={waLink(t('whatsapp.experienceMessage', { region }))}
                          target="_blank" rel="noopener noreferrer"
                          onClick={trackWhatsApp}
                          className="inline-flex items-center gap-2 px-10 py-4 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest rounded-[6px] hover:bg-white transition-colors duration-300 shadow-lg"
                        >
                          <MessageCircle className="w-4 h-4" />
                          {t('cta.talkToExpert')}
                        </a>
                      ) : (
                        <button
                          onClick={openWaitlist}
                          className="inline-flex items-center gap-2 px-10 py-4 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest rounded-[6px] hover:bg-white transition-colors duration-300 shadow-lg"
                        >
                          {t('cta.joinTheList')}
                        </button>
                      )}

                      {/* View trip */}
                      <Link
                        to={`/experiences/${experience.id}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-[#c9a96e] transition-colors border-b border-transparent hover:border-[#c9a96e] pb-0.5"
                      >
                        {t('cta.viewTrip')} <ArrowRight className="w-3 h-3" />
                      </Link>

                      {/* Secondary: download itinerary (email-gated modal) */}
                      {experience.pdfLink && (
                        <button
                          onClick={() => openItinerary(experience)}
                          className="group/dl flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          <FileText className="w-4 h-4 opacity-70 group-hover/dl:opacity-100" />
                          <span className="text-xs uppercase tracking-widest border-b border-transparent group-hover/dl:border-white/50 pb-0.5 transition-all">
                            {t('experiences.downloadItinerary')}
                          </span>
                        </button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Bespoke CTA */}
        <section className="py-32 px-6 bg-white w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">{t('experiences.elsewhereTitle')}</h2>
            <p className="text-sm font-light text-gray-600 mb-10 leading-relaxed max-w-md mx-auto">{t('experiences.elsewhereSub')}</p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full text-xs font-light tracking-wide hover:bg-gray-800 transition-all duration-300">
              {t('cta.requestConsultation')}
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ExperiencesPage;
