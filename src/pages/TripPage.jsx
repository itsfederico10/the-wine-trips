import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Star, Search, Home, Utensils, ShieldCheck, Sparkles,
  Check, X as XIcon, ChevronRight, MessageCircle, ArrowRight,
} from 'lucide-react';
import { experiences } from '@/data/experiences';
import { waLink, trackWhatsApp } from '@/components/WhatsAppButton';

const GOLD = '#c9a96e';
const INK = '#1a1a1a';

const ICONS = { star: Star, search: Search, home: Home, utensils: Utensils, shield: ShieldCheck };
const pillarIcon = (name) => ICONS[name] || Sparkles;

// Numbered marker matching the Wine Trips palette.
const makeIcon = (n, active) =>
  L.divIcon({
    className: 'twt-marker',
    html: `<div style="
      width:30px;height:30px;border-radius:9999px;display:flex;align-items:center;justify-content:center;
      font-family:Inter,sans-serif;font-size:13px;font-weight:600;
      background:${active ? GOLD : INK};color:#fff;border:2px solid #fff;
      box-shadow:0 2px 8px rgba(0,0,0,.35);transition:all .2s;">${n}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

// Flies the map to the active day's marker as the user scrolls.
const MapController = ({ points, activeIndex }) => {
  const map = useMap();
  useEffect(() => {
    const p = points[activeIndex];
    if (p) map.flyTo(p.coords, map.getZoom(), { duration: 0.8 });
  }, [activeIndex, points, map]);
  return null;
};

const ItineraryMap = ({ points, activeIndex }) => {
  const center = points[0]?.coords || [44.7, 8.0];
  return (
    <MapContainer
      center={center}
      zoom={11}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', minHeight: 420 }}
      className="rounded-sm overflow-hidden z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {points.map((p, i) => (
        <Marker key={i} position={p.coords} icon={makeIcon(p.n, i === activeIndex)} />
      ))}
      <MapController points={points} activeIndex={activeIndex} />
    </MapContainer>
  );
};

const TripPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const exp = useMemo(() => experiences.find((e) => e.id === id), [id]);

  const [activeIndex, setActiveIndex] = useState(0);
  const dayRefs = useRef([]);

  const itinerary = exp?.itinerary || [];
  const points = useMemo(
    () => itinerary.filter((d) => Array.isArray(d.coords)).map((d) => ({ n: d.n, coords: d.coords, label: d.label })),
    [itinerary]
  );

  // Highlight the day currently in the viewport.
  useEffect(() => {
    if (!itinerary.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    dayRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [itinerary.length]);

  if (!exp) return <Navigate to="/experiences" replace />;

  const isLive = exp.status === 'live';
  const hero = exp.hero || {};
  const stats = exp.stats || [];
  const intro = exp.intro || {};
  const pillars = exp.pillars || [];
  const lodging = exp.lodging || {};
  const includes = exp.includes || [];
  const excludes = exp.excludes || [];
  const regionName = hero.title || exp.title;

  const tripMsg = t('whatsapp.tripMessage', {
    region: regionName,
    dates: exp.dates || '',
  });
  const openWaitlist = () => window.dispatchEvent(new Event('open-waitlist-modal'));

  const others = experiences.filter((e) => e.id !== exp.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{`${regionName} — The Wine Trips`}</title>
        <meta name="description" content={hero.subtitle || exp.description} />
        <link rel="canonical" href={`https://thewinetrips.com/experiences/${exp.id}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${regionName} — The Wine Trips`} />
        <meta property="og:description" content={hero.subtitle || exp.description} />
        <meta property="og:image" content={hero.image || exp.image} />
        <meta property="og:site_name" content="THE WINE TRIPS" />
      </Helmet>

      <div className="bg-white text-[#1a1a1a]">
        {/* ===================== HERO ===================== */}
        <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={hero.image || exp.image} alt={regionName} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-28">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase mb-6 font-sans">
              <Link to="/experiences" className="hover:text-white transition-colors">{t('trip.breadcrumbHome')}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{regionName}</span>
            </nav>

            {!isLive && (
              <span className="inline-block mb-5 px-4 py-1.5 bg-[#c9a96e] text-[#1a1a1a] text-[11px] font-bold tracking-[0.2em] uppercase">
                {t('experiences.upcoming')}
              </span>
            )}

            <p className="text-[#e9d9b8] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 font-sans">
              {hero.eyebrow}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-none">
              {regionName}
            </h1>
            <p className="text-lg md:text-xl font-light text-white/85 max-w-2xl leading-relaxed font-sans mb-10">
              {hero.subtitle || exp.description}
            </p>

            {isLive ? (
              <a
                href={waLink(tripMsg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsApp}
                className="inline-flex items-center gap-3 px-9 py-4 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                {t('cta.priceOnRequest')}
              </a>
            ) : (
              <button
                onClick={openWaitlist}
                className="inline-flex items-center gap-3 px-9 py-4 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-lg"
              >
                {t('cta.joinTheList')}
              </button>
            )}
          </div>
        </section>

        {/* ===================== STATS BAR ===================== */}
        {stats.length > 0 && (
          <section className="relative z-20 max-w-6xl mx-auto px-6 -mt-12">
            <div className="bg-white shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {stats.map((s, i) => (
                <div key={i} className="p-6 md:p-8 text-center">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 font-sans">{s.label}</p>
                  <p className="text-lg md:text-xl font-serif text-[#1a1a1a]">{s.value}</p>
                  {s.sub && <p className="text-xs font-light text-gray-500 mt-1 font-sans">{s.sub}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===================== INTRO ===================== */}
        {(intro.title || intro.body) && (
          <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-6 font-sans">{exp.vol || t('trip.intro')}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8">{intro.title}</h2>
              <div className="space-y-5 text-gray-600 font-light leading-relaxed font-sans">
                {(intro.body || []).map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </motion.div>
            {intro.image && (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="h-[400px] md:h-[560px] overflow-hidden rounded-sm shadow-xl">
                <img src={intro.image} alt={intro.title || regionName} className="w-full h-full object-cover" />
              </motion.div>
            )}
          </section>
        )}

        {/* ===================== PILLARS ===================== */}
        {pillars.length > 0 && (
          <section className="bg-[#1a1a1a] text-white py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">{t('trip.pillars')}</h2>
                <div className="w-20 h-px bg-[#c9a96e] mx-auto" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {pillars.map((p, i) => {
                  const Icon = pillarIcon(p.icon);
                  return (
                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-10 border border-[#c9a96e]/20 bg-[#222]">
                      <Icon className="w-10 h-10 text-[#c9a96e] mb-6 stroke-[1.5]" />
                      <h3 className="text-xl font-serif mb-4">{p.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed text-sm">{p.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ===================== ITINERARY (map + days) ===================== */}
        {itinerary.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="text-center mb-16">
              <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">{t('trip.itinerary')}</span>
              <h2 className="text-3xl md:text-4xl font-serif">{intro.title ? regionName : t('trip.itinerary')}</h2>
            </div>

            <div className="grid lg:grid-cols-[420px_1fr] gap-12">
              {/* Sticky map */}
              {points.length > 0 && (
                <div className="hidden lg:block">
                  <div className="sticky top-28">
                    <div className="h-[480px] w-full shadow-lg border border-gray-100">
                      <ItineraryMap points={points} activeIndex={activeIndex} />
                    </div>
                    <div className="mt-5 space-y-2">
                      {itinerary.map((d, i) => (
                        <button
                          key={i}
                          onClick={() => dayRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                          className={`flex items-center gap-3 text-left w-full text-sm transition-colors ${i === activeIndex ? 'text-[#1a1a1a] font-medium' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                          <span className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-[11px] font-semibold ${i === activeIndex ? 'bg-[#c9a96e] text-white' : 'bg-gray-200 text-gray-600'}`}>{d.n}</span>
                          <span className="font-sans font-light">{d.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Day blocks */}
              <div className="space-y-20">
                {itinerary.map((d, i) => (
                  <motion.div
                    key={i}
                    ref={(el) => { dayRefs.current[i] = el; }}
                    data-index={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-28"
                  >
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="text-5xl md:text-6xl font-serif text-[#c9a96e]/30 leading-none">{String(d.n).padStart(2, '0')}</span>
                      <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-gray-400 font-sans">
                        {d.date} · {t('trip.day')} {d.n}{d.dayTitle ? ` · ${d.dayTitle}` : ''}
                      </p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif mb-5 leading-snug">{d.title}</h3>
                    {d.image && (
                      <div className="h-[260px] md:h-[380px] overflow-hidden rounded-sm mb-6 shadow-md">
                        <img src={d.image} alt={d.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <p className="text-gray-600 font-light leading-relaxed font-sans mb-5">{d.body}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-sans border-t border-gray-100 pt-4">
                      {d.meals && <span><span className="text-[#c9a96e]">{t('trip.meals')}:</span> {d.meals}</span>}
                      {d.meals && d.lodging && <span className="mx-2">·</span>}
                      {d.lodging && <span><span className="text-[#c9a96e]">{t('trip.lodgingLabel')}:</span> {d.lodging}</span>}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================== LODGING GALLERY ===================== */}
        {lodging.name && (
          <section className="bg-[#fafafa] py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 text-center">
                <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">{lodging.eyebrow || t('trip.lodging')}</span>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">{lodging.name}</h2>
                {lodging.intro && <p className="max-w-2xl mx-auto text-gray-600 font-light leading-relaxed font-sans">{lodging.intro}</p>}
              </div>
              {Array.isArray(lodging.gallery) && lodging.gallery.length > 0 && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {lodging.gallery.map((g, i) => (
                    <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-sm">
                      <img src={g.image} alt={g.caption || lodging.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      {g.caption && (
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent">
                          <span className="text-white text-xs tracking-widest uppercase p-4 font-sans">{g.caption}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ===================== INCLUDES / EXCLUDES (50/50) ===================== */}
        {(includes.length > 0 || excludes.length > 0) && (
          <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Includes */}
              <div>
                <h3 className="text-2xl font-serif mb-8">{t('trip.includesTitle')}</h3>
                <ul className="space-y-4">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-light text-gray-700 font-sans">
                      <Check className="w-4 h-4 text-[#c9a96e] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Excludes */}
              <div>
                <h3 className="text-2xl font-serif mb-8">{t('trip.excludesTitle')}</h3>
                <ul className="space-y-4">
                  {excludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-light text-gray-500 font-sans">
                      <XIcon className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {exp.disclaimer && (
              <p className="mt-16 text-xs text-gray-400 font-light leading-relaxed font-sans border-t border-gray-100 pt-8 max-w-3xl">
                {exp.disclaimer}
              </p>
            )}
          </section>
        )}

        {/* ===================== FINAL CTA ===================== */}
        <section className="bg-[#1a1a1a] text-white py-24 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">{t('trip.ctaTitle')}</h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto mb-10 font-sans">{t('trip.ctaBody')}</p>
          {isLive ? (
            <a
              href={waLink(tripMsg)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsApp}
              className="inline-flex items-center gap-3 px-9 py-4 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              {t('cta.talkToExpert')}
            </a>
          ) : (
            <button
              onClick={openWaitlist}
              className="inline-flex items-center gap-3 px-9 py-4 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              {t('cta.joinTheList')}
            </button>
          )}
        </section>

        {/* ===================== ALSO LIKE ===================== */}
        {others.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-2xl md:text-3xl font-serif mb-12 text-center">{t('trip.alsoLike')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {others.map((o) => (
                <Link key={o.id} to={`/experiences/${o.id}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm mb-5">
                    <img src={o.image} alt={o.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="text-lg font-serif mb-1">{o.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-sans">{o.country}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#1a1a1a] group-hover:text-[#c9a96e] transition-colors">
                    {t('cta.viewTrip')} <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default TripPage;
