import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Check, X as XIcon, ChevronRight, MessageCircle, ArrowRight } from 'lucide-react';
import { experiences } from '@/data/experiences';
import { waLink, trackWhatsApp } from '@/components/WhatsAppButton';

const GOLD = '#c9a96e';
const INK = '#1a1a1a';

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
      style={{ height: '100%', width: '100%', minHeight: 360 }}
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

// Bold the proper nouns listed in intro.highlights inside a paragraph.
const Highlighted = ({ text, terms }) => {
  if (!terms || !terms.length) return text;
  const escaped = terms.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp(`(${escaped.join('|')})`, 'g');
  return text.split(re).map((part, i) =>
    terms.includes(part)
      ? <strong key={i} className="font-semibold text-[#1a1a1a]">{part}</strong>
      : <React.Fragment key={i}>{part}</React.Fragment>
  );
};

// Title with the last word in italic accent, e.g. "Resumen del *itinerario*".
const AccentTitle = ({ text, className }) => {
  const words = (text || '').split(' ');
  const last = words.pop();
  return (
    <h2 className={className}>
      {words.join(' ')}{words.length ? ' ' : ''}<span className="italic text-[#c9a96e]">{last}</span>
    </h2>
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
  const lodging = exp.lodging || {};
  const specs = lodging.specs || [];
  const includes = exp.includes || [];
  const excludes = exp.excludes || [];
  const regionName = hero.title || exp.title;

  const tripMsg = t('whatsapp.tripMessage', { region: regionName, dates: exp.dates || '' });
  const openWaitlist = () => window.dispatchEvent(new Event('open-waitlist-modal'));
  const others = experiences.filter((e) => e.id !== exp.id).slice(0, 4);

  const PrimaryCTA = ({ className = '' }) =>
    isLive ? (
      <a href={waLink(tripMsg)} target="_blank" rel="noopener noreferrer" onClick={trackWhatsApp}
        className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest rounded-[6px] hover:bg-white transition-colors duration-300 shadow-lg ${className}`}>
        <MessageCircle className="w-4 h-4" />{t('cta.priceOnRequest')}
      </a>
    ) : (
      <button onClick={openWaitlist}
        className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest rounded-[6px] hover:bg-white transition-colors duration-300 shadow-lg ${className}`}>
        {t('cta.joinTheList')}
      </button>
    );

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
        {/* ===================== HERO (cinematic band) ===================== */}
        <section className="relative w-full">
          <div className="relative w-full aspect-[1.5/1] sm:aspect-[2/1] lg:aspect-[2.63/1] min-h-[460px] max-h-[90vh] overflow-hidden">
            <img src={hero.image || exp.image} alt={regionName} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/85" />
            <div className="absolute inset-x-0 bottom-0">
              <div className="max-w-7xl mx-auto px-6 pb-14 md:pb-24">
                <nav className="flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase mb-5 font-sans">
                  <Link to="/experiences" className="hover:text-white transition-colors">{t('trip.breadcrumbHome')}</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-white">{regionName}</span>
                </nav>

                {!isLive && (
                  <span className="inline-block mb-4 px-4 py-1.5 bg-[#c9a96e] text-[#1a1a1a] text-[11px] font-bold tracking-[0.2em] uppercase">
                    {t('experiences.upcoming')}
                  </span>
                )}

                <p className="text-[#e9d9b8] text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 font-sans">
                  {hero.eyebrow}
                </p>
                <h1 className="text-[40px] sm:text-6xl lg:text-[76px] font-serif text-white mb-4 md:mb-6 leading-[1.04]">
                  {regionName}
                </h1>
                <p className="font-serif italic text-xl md:text-[28px] text-white/90 max-w-2xl leading-relaxed mb-8">
                  {hero.subtitle || exp.description}
                </p>
                <PrimaryCTA className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* ===================== STATS BAR (overlaps hero) ===================== */}
        {stats.length > 0 && (
          <section className="relative z-20 max-w-6xl mx-auto px-6 -mt-10 md:-mt-12">
            <div className="bg-white shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
              {stats.map((s, i) => (
                <div key={i} className="p-5 md:p-8 text-center">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 font-sans">{s.label}</p>
                  <p className="text-base md:text-xl font-serif text-[#1a1a1a]">{s.value}</p>
                  {s.sub && <p className="text-xs font-light text-gray-500 mt-1 font-sans">{s.sub}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===================== INTRO (2 columns) ===================== */}
        {(intro.title || intro.body) && (
          <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-6 font-sans">{exp.vol || t('trip.intro')}</span>
              <h2 className="text-[28px] md:text-[38px] font-serif leading-[1.2] mb-8 max-w-[880px]">{intro.title}</h2>
              <div className="space-y-5 text-[15px] md:text-base text-gray-600 font-light leading-7 font-sans">
                {(intro.body || []).map((p, i) => (
                  <p key={i}><Highlighted text={p} terms={intro.highlights} /></p>
                ))}
              </div>
            </motion.div>
            {intro.image && (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="order-first md:order-last h-[280px] sm:h-[400px] md:h-[560px] overflow-hidden rounded-sm shadow-xl">
                <img src={intro.image} alt={intro.title || regionName} className="w-full h-full object-cover" />
              </motion.div>
            )}
          </section>
        )}

        {/* ===================== ITINERARY OVERVIEW (A1) ===================== */}
        {itinerary.length > 0 && (
          <section className="bg-[#fafafa] py-20 md:py-28 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase font-sans">{t('trip.overviewEyebrow')}</span>
                <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase font-sans">{t('trip.overviewIndex')}</span>
              </div>
              <AccentTitle text={t('trip.overviewTitle')} className="text-3xl md:text-5xl font-serif leading-tight mb-5" />
              <p className="text-gray-600 font-light leading-relaxed font-sans max-w-2xl mb-12">{t('trip.overviewIntro')}</p>

              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-start">
                {/* Day list */}
                <div>
                  {itinerary.map((d, i) => (
                    <div key={i} className="flex gap-4 md:gap-6 py-4 border-b border-gray-200 first:border-t">
                      <span className="text-3xl md:text-4xl font-serif text-[#c9a96e]/40 leading-none w-10 md:w-12 shrink-0">{String(d.n).padStart(2, '0')}</span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-gray-400 mb-1 font-sans">{d.date}{d.dayTitle ? ` · ${d.dayTitle}` : ''}</p>
                        <h4 className="text-base md:text-lg font-serif mb-1 leading-snug">{d.title}</h4>
                        <p className="text-xs italic text-gray-400 font-sans">{[d.meals, d.lodging].filter((x) => x && x !== '—').join(' · ')}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Villa card */}
                {lodging.name && (
                  <div className="border border-gray-300 p-6 md:p-8 bg-white">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-[#c9a96e] mb-3 font-sans">★★★★★ {t('trip.villaCardTitle')}</p>
                    <h3 className="text-2xl font-serif mb-1">{lodging.name}</h3>
                    {lodging.location && <p className="text-xs text-gray-500 mb-5 font-sans">{lodging.location}</p>}
                    {specs.length > 0 ? (
                      <dl className="divide-y divide-gray-100">
                        {specs.map((s, i) => (
                          <div key={i} className="flex gap-4 py-2.5">
                            <dt className="w-16 md:w-20 shrink-0 text-[10px] font-bold tracking-widest uppercase text-gray-400 pt-1 font-sans">{s.label}</dt>
                            <dd className="text-sm text-gray-700 font-light font-sans">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : (
                      lodging.intro && <p className="text-sm text-gray-600 font-light leading-relaxed font-sans">{lodging.intro}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ===================== ITINERARY (map + days) ===================== */}
        {itinerary.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
            <div className="grid lg:grid-cols-[440px_1fr] gap-10 lg:gap-12">
              {/* Left: title + intro + sticky map */}
              <div>
                <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-3 font-sans">{t('trip.itinerary')}</span>
                <h2 className="text-3xl md:text-[43px] font-serif leading-tight mb-4">{t('trip.itinerary')}</h2>
                <p className="text-gray-600 font-light leading-relaxed font-sans mb-8">{t('trip.itineraryIntro')}</p>
                {points.length > 0 && (
                  <div className="lg:sticky lg:top-24">
                    <div className="h-[320px] md:h-[440px] w-full shadow-lg border border-gray-100">
                      <ItineraryMap points={points} activeIndex={activeIndex} />
                    </div>
                    <div className="mt-5 hidden lg:block space-y-2">
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
                )}
              </div>

              {/* Right: day blocks */}
              <div className="space-y-16 md:space-y-20">
                {itinerary.map((d, i) => (
                  <motion.div
                    key={i}
                    ref={(el) => { dayRefs.current[i] = el; }}
                    data-index={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-24"
                  >
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="text-5xl md:text-6xl font-serif text-[#c9a96e]/30 leading-none">{String(d.n).padStart(2, '0')}</span>
                      <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-gray-400 font-sans">
                        {d.date} · {t('trip.day')} {d.n}
                      </p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif mb-5 leading-snug">{d.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed font-sans mb-5">{d.body}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-sans border-t border-gray-100 pt-4 mb-6">
                      {d.meals && <span><span className="text-[#c9a96e]">{t('trip.meals')}:</span> {d.meals}</span>}
                      {d.meals && d.lodging && d.lodging !== '—' && <span className="mx-2">·</span>}
                      {d.lodging && d.lodging !== '—' && <span><span className="text-[#c9a96e]">{t('trip.lodgingLabel')}:</span> {d.lodging}</span>}
                    </p>
                    {d.image && (
                      <div className="h-[240px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-sm shadow-md">
                        <img src={d.image} alt={d.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================== LODGING GALLERY ===================== */}
        {lodging.name && (
          <section className="bg-[#fafafa] py-20 md:py-32 px-6">
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
          <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
              <div>
                <h3 className="text-2xl font-serif mb-8">{t('trip.includesTitle')}</h3>
                <ul className="space-y-4">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-light text-gray-700 font-sans">
                      <Check className="w-4 h-4 text-[#c9a96e] mt-0.5 shrink-0" /><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-8">{t('trip.excludesTitle')}</h3>
                <ul className="space-y-4">
                  {excludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-light text-gray-500 font-sans">
                      <XIcon className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" /><span>{item}</span>
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
        <section className="bg-[#1a1a1a] text-white py-20 md:py-24 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">{t('trip.ctaTitle')}</h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto mb-10 font-sans">{t('trip.ctaBody')}</p>
          {isLive ? (
            <a href={waLink(tripMsg)} target="_blank" rel="noopener noreferrer" onClick={trackWhatsApp}
              className="inline-flex items-center gap-3 px-9 py-4 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest rounded-[6px] hover:bg-white transition-colors duration-300">
              <MessageCircle className="w-4 h-4" />{t('cta.talkToExpert')}
            </a>
          ) : (
            <button onClick={openWaitlist}
              className="inline-flex items-center gap-3 px-9 py-4 bg-[#c9a96e] text-[#1a1a1a] font-medium text-xs uppercase tracking-widest rounded-[6px] hover:bg-white transition-colors duration-300">
              {t('cta.joinTheList')}
            </button>
          )}
        </section>

        {/* ===================== ALSO LIKE (4 portrait cards) ===================== */}
        {others.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <div className="text-center mb-12">
              <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-3 font-sans">{t('trip.alsoLike')}</span>
              <h2 className="text-3xl md:text-[52px] font-serif">{t('trip.alsoLikeTitle')}</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
              {others.map((o) => {
                const days = o.itinerary?.length || 7;
                return (
                  <Link key={o.id} to={`/experiences/${o.id}`} className="group block shrink-0 w-[75%] sm:w-[45%] md:w-auto snap-start">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                      <img src={o.image} alt={o.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 text-[#1a1a1a] text-[10px] font-bold tracking-widest uppercase">
                        {days} {t('trip.daysShort')}
                      </span>
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5">
                        <p className="text-[#e9d9b8] text-[10px] font-bold tracking-[0.2em] uppercase mb-1 font-sans">{t('trip.smallGroupBadge')}</p>
                        <h3 className="text-white text-xl font-serif leading-tight">{o.hero?.title || o.title}</h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default TripPage;
