import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { experiences } from '@/data/experiences';
import { waLink, trackWhatsApp } from '@/components/WhatsAppButton';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

// Home "Where are we going?" banner with two tabs: the next live trip + coming soon.
// The tabs auto-toggle every 4s until the visitor clicks one (then they stay put).
const TripsShowcase = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [tab, setTab] = useState('upcoming');
  const [autoToggle, setAutoToggle] = useState(true);

  // Notify-launch capture (for destinations not on sale yet).
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifyPhone, setNotifyPhone] = useState('');
  const [notifySubmitting, setNotifySubmitting] = useState(false);

  // Pin the home banner to Piemonte (the soonest departure); its copy lives in i18n home.trips.featured*.
  const featured = experiences.find((e) => e.id === 'piedmont') || experiences.find((e) => e.status === 'live') || experiences[0];
  const comingSoon = experiences.filter((e) => e.status === 'coming_soon');

  const monthBadge = featured.stats?.find((s) => s.label === 'SALIDA')?.value || featured.dates || '';
  const featuredMsg = t('whatsapp.tripMessage', {
    region: featured.hero?.title || featured.title,
    dates: featured.dates || '',
  });

  // Auto-alternate the tabs every 4s; any manual click stops it.
  useEffect(() => {
    if (!autoToggle) return;
    const timer = setInterval(() => {
      setTab((prev) => (prev === 'upcoming' ? 'coming' : 'upcoming'));
    }, 4000);
    return () => clearInterval(timer);
  }, [autoToggle]);

  const selectTab = (id) => {
    setTab(id);
    setAutoToggle(false);
  };

  const handleNotify = async (e) => {
    e.preventDefault();
    if (!notifyEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(notifyEmail)) {
      toast({
        title: t('home.trips.notify.invalidTitle'),
        description: t('home.trips.notify.invalidBody'),
        variant: 'destructive',
      });
      return;
    }
    setNotifySubmitting(true);
    try {
      const base = {
        email: notifyEmail,
        full_name: null,
        country_residence: null,
        experience_interest: null,
        instagram: null,
        source: 'notify_launch',
      };
      // Try to store the phone too; if the column doesn't exist, fall back so the
      // email lead is never lost.
      let { error } = await supabase.from('The waiting list').insert([{ ...base, phone: notifyPhone || null }]);
      if (error) {
        ({ error } = await supabase.from('The waiting list').insert([base]));
      }
      if (error) throw error;

      toast({
        title: t('home.trips.notify.successTitle'),
        description: t('home.trips.notify.successBody'),
      });
      setNotifyEmail('');
      setNotifyPhone('');
    } catch (err) {
      console.error('notify_launch submission error:', err);
      toast({
        title: t('home.trips.notify.errorTitle'),
        description: t('home.trips.notify.errorBody'),
        variant: 'destructive',
      });
    } finally {
      setNotifySubmitting(false);
    }
  };

  const TabButton = ({ id, label }) => {
    const active = tab === id;
    return (
      <button
        onClick={() => selectTab(id)}
        className={`relative px-6 sm:px-10 py-3 text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
          active ? 'text-[#1a1a1a] font-bold' : 'text-gray-400 font-medium hover:text-gray-700'
        }`}
      >
        {label}
        {active && <span className="absolute left-0 -bottom-px h-[2px] w-full bg-[#c9a96e]" />}
      </button>
    );
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">{t('home.trips.eyebrow')}</span>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900">{t('home.trips.title')}</h2>
        </div>

        {/* Tabs — one row, thin baseline, active bold with gold underline */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-b border-gray-200">
            <TabButton id="upcoming" label={t('home.trips.tabUpcoming')} />
            <TabButton id="coming" label={t('home.trips.tabComingSoon')} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'upcoming' ? (
            <motion.div key="upcoming" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              {/* Featured live trip (currently Piedmont — copy lives in i18n home.trips.featured*) */}
              <div className="grid md:grid-cols-2 border border-gray-200 overflow-hidden">
                <Link to={`/experiences/${featured.id}`} className="relative h-64 md:h-auto min-h-[280px] block group/img">
                  <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
                  {monthBadge && (
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-[#c9a96e] text-[#1a1a1a] text-[10px] font-bold tracking-[0.2em] uppercase rounded-[6px]">
                      {monthBadge}
                    </span>
                  )}
                </Link>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Link to={`/experiences/${featured.id}`} className="block group/title">
                    <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2 group-hover/title:text-[#c9a96e] transition-colors">
                      {t('home.trips.featuredTitle')}
                    </h3>
                  </Link>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#c9a96e] mb-5 font-sans">
                    {t('home.trips.daysGuests', { days: featured.itinerary?.length || 7, guests: 8 })}
                  </p>
                  <p className="text-gray-600 font-light leading-relaxed mb-5 font-sans">{t('home.trips.featuredDesc')}</p>
                  {featured.summaryCities && (
                    <p className="text-sm text-gray-500 font-light mb-8 font-sans">
                      <span className="text-[#c9a96e] uppercase tracking-widest text-xs font-bold">{t('home.trips.itineraryLabel')}:</span> {featured.summaryCities} {t('home.trips.andMore')}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={waLink(featuredMsg)} target="_blank" rel="noopener noreferrer" onClick={trackWhatsApp}
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest rounded-[6px] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
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
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 text-[#1a1a1a] text-[10px] font-bold tracking-widest uppercase rounded-[6px]">
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

        {/* Subtle notify-launch capture for destinations not on sale yet */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-500 font-light leading-relaxed mb-4 font-sans">{t('home.trips.notify.text')}</p>
          <form onSubmit={handleNotify} className="flex flex-col sm:flex-row items-stretch gap-2 max-w-xl mx-auto">
            <input
              type="email"
              value={notifyEmail}
              onChange={(ev) => setNotifyEmail(ev.target.value)}
              placeholder={t('home.trips.notify.emailPlaceholder')}
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c9a96e] focus:bg-white focus:outline-none transition-all text-gray-900 text-sm font-sans rounded-[6px] disabled:opacity-50"
              disabled={notifySubmitting}
            />
            <input
              type="tel"
              value={notifyPhone}
              onChange={(ev) => setNotifyPhone(ev.target.value)}
              placeholder={t('home.trips.notify.phonePlaceholder')}
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c9a96e] focus:bg-white focus:outline-none transition-all text-gray-900 text-sm font-sans rounded-[6px] disabled:opacity-50"
              disabled={notifySubmitting}
            />
            <button
              type="submit"
              disabled={notifySubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white font-medium text-xs uppercase tracking-widest rounded-[6px] hover:bg-[#c9a96e] hover:text-[#1a1a1a] disabled:bg-gray-400 transition-colors duration-300"
            >
              {notifySubmitting ? <Loader2 className="w-3 h-3 animate-spin" /> : null}
              {notifySubmitting ? t('home.trips.notify.submitting') : t('home.trips.notify.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TripsShowcase;
