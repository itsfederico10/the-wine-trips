import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { experiences } from '@/data/experiences';
import { waLink, trackWhatsApp } from '@/components/WhatsAppButton';

// Home "Our departures" banner with two tabs: the next live trip + coming soon.
const TripsShowcase = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState('upcoming');

  const featured = experiences.find((e) => e.status === 'live') || experiences[0];
  const comingSoon = experiences.filter((e) => e.status === 'coming_soon');

  const monthBadge = featured.stats?.find((s) => s.label === 'SALIDA')?.value || featured.dates || '';
  const featuredMsg = t('whatsapp.tripMessage', {
    region: featured.hero?.title || featured.title,
    dates: featured.dates || '',
  });

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setTab(id)}
      className={`px-5 sm:px-8 py-3 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-full flex-1 sm:flex-none ${
        tab === id ? 'bg-[#1a1a1a] text-white' : 'text-gray-500 hover:text-gray-900'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">{t('home.trips.eyebrow')}</span>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900">{t('home.trips.title')}</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex w-full sm:w-auto border border-gray-200 rounded-full p-1 bg-gray-50">
            <TabButton id="upcoming" label={t('home.trips.tabUpcoming')} />
            <TabButton id="coming" label={t('home.trips.tabComingSoon')} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'upcoming' ? (
            <motion.div key="upcoming" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              {/* Featured live trip */}
              <div className="grid md:grid-cols-2 border border-gray-200 overflow-hidden">
                <div className="relative h-64 md:h-auto min-h-[280px]">
                  <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />
                  {monthBadge && (
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-[#c9a96e] text-[#1a1a1a] text-[10px] font-bold tracking-[0.2em] uppercase">
                      {monthBadge}
                    </span>
                  )}
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">{featured.hero?.title || featured.title}</h3>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#c9a96e] mb-5 font-sans">
                    {t('home.trips.daysGuests', { days: featured.itinerary?.length || 7, guests: 8 })}
                  </p>
                  <p className="text-gray-600 font-light leading-relaxed mb-5 font-sans">{featured.hero?.subtitle || featured.description}</p>
                  {featured.summaryCities && (
                    <p className="text-sm text-gray-500 font-light mb-8 font-sans">
                      <span className="text-[#c9a96e] uppercase tracking-widest text-xs font-bold">{t('home.trips.itineraryLabel')}:</span> {featured.summaryCities}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={waLink(featuredMsg)} target="_blank" rel="noopener noreferrer" onClick={trackWhatsApp}
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />{t('cta.priceOnRequest')}
                    </a>
                    <Link to={`/experiences/${featured.id}`} className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-900 hover:text-[#c9a96e] transition-colors border-b border-transparent hover:border-[#c9a96e] pb-0.5">
                      {t('cta.viewTrip')} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="coming" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {comingSoon.map((e) => (
                  <Link key={e.id} to={`/experiences/${e.id}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-4">
                      <img src={e.image} alt={e.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 text-[#1a1a1a] text-[10px] font-bold tracking-widest uppercase">
                        {t('experiences.upcoming')}
                      </span>
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-[#e9d9b8] text-[10px] font-bold tracking-[0.2em] uppercase font-sans">{e.country}</p>
                        <h3 className="text-white text-lg font-serif leading-tight">{e.hero?.title || e.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TripsShowcase;
