// ============================================================
// THE WINE TRIPS — Experiences data
// Catalog fields (title, subtitle, image, description, highlights, duration,
// groupSize, season) feed /experiences and the cards.
// Trip-detail fields (status, country, dates, priceLabel, hero, stats, intro,
// pillars, itinerary, lodging, includes, excludes, disclaimer) feed TripPage
// (/experiences/:id).
//
// status: 'live'        -> sellable page with dates + "Precio a consultar"
// status: 'coming_soon' -> same structure, [PLACEHOLDER] content, "Upcoming trip"
//
// NOTE ON IMAGES: every image below currently reuses an existing optimized webp
// already in /public/images as a TEMPORARY visual placeholder so the Vercel
// preview looks complete. Replace with licensed/own photography before launch.
// The piedmont [PLACEHOLDER] comments preserve the original intended shot.
// ============================================================

// Local placeholder image pool (existing assets in /public/images).
const IMG = {
  langhe: '/images/707a534ce9f8c1d70d5274195c58ee36.webp',      // Vietti vineyard, Barolo Piedmont
  cellar: '/images/1c156dd8c0b1e50bdd5ef5ecdfc1e632.webp',      // oak barrels cellar
  tuscanSunset: '/images/300c630549f5d07f5c9680cc7933252f.webp',// vineyard sunset
  vineyardHills: '/images/53490d75f77d93ebfd62b50cb3e9ea40.webp',
  bordeaux: '/images/6e7ac65143eb04d13fa541251cefc917.webp',
  toscana: '/images/7b385dec483db559f6ede32c163e47e7.webp',
  mendoza: '/images/7dbbafdc335bd67dfbd883f761481c69.webp',
  team: '/images/85e3ea806cd248d538a9217e5a3a22a1.webp',
  chateauTeam: '/images/f06d04c2a8d5d6a69378d7d33f086898.webp',
  tasting: '/images/f3d94d36ee5e95b7df1c77bdc0f4b888.webp',
  lafite: '/images/16926025ba2fb19aae7294d3f823e08d.webp',
  misc: '/images/86aaa53d2b11e3925c08185f0a884df3.webp',
};

export const experiences = [
  {
    id: 'bordeaux',
    title: 'The Crown Jewel of Wine',
    subtitle: 'Bordeaux: The Crown Jewel of Wine',
    image: IMG.bordeaux,
    description: 'Journey through the world\'s most prestigious wine region, where centuries-old châteaux produce legendary Grand Crus. Experience private tastings at classified estates, explore the historic vineyards of Médoc and Saint-Émilion, and immerse yourself in the art of French winemaking excellence.',
    highlights: [
      'Private tours of classified growth châteaux',
      'Exclusive tastings of rare vintages',
      'Gourmet dining in Michelin-starred restaurants',
      'Expert-guided vineyard explorations'
    ],
    duration: '7 DAYS',
    groupSize: '4–8 Guests',
    season: 'May–October',
    itineraryFile: 'bordeaux.pdf',
    pdfLink: 'https://drive.google.com/file/d/1TvCkSweI0aPfHT3Sbs3CFcy_e_Rq7Zqi/view?usp=sharing',

    // --- Trip-detail (coming_soon placeholders) ---
    status: 'coming_soon',
    country: 'Francia',
    dates: null,
    priceLabel: 'A consultar',
    vol: 'VOL. 02 — BORDEAUX',
    hero: {
      image: IMG.bordeaux,
      eyebrow: 'PEQUEÑO GRUPO · FRANCIA · PRÓXIMAMENTE',
      title: 'Bordeaux',
      subtitle: '[PLACEHOLDER] Châteaux clasificados, Grand Crus y la orilla izquierda del Médoc.',
    },
    stats: [
      { label: 'DURACIÓN', value: '7 días', sub: '6 noches' },
      { label: 'TIPO DE VIAJE', value: 'Pequeño grupo', sub: '4–8 viajeros' },
      { label: 'SALIDA', value: 'Por confirmar', sub: '2026' },
      { label: 'INVERSIÓN', value: 'A consultar', sub: 'Por persona' },
    ],
    intro: {
      title: '[PLACEHOLDER] Bordeaux, la cuna del vino clasificado.',
      body: [
        '[PLACEHOLDER] Texto narrativo de introducción al viaje a Bordeaux. Reemplazar por la historia real del itinerario.',
        '[PLACEHOLDER] Segundo párrafo de introducción. Reemplazar antes del lanzamiento.',
      ],
      image: IMG.chateauTeam,
    },
    pillars: [
      { icon: 'star', title: '[PLACEHOLDER] Mesas con estrella', text: '[PLACEHOLDER] Describir las experiencias gastronómicas del viaje.' },
      { icon: 'search', title: '[PLACEHOLDER] Châteaux clasificados', text: '[PLACEHOLDER] Describir las catas y visitas a bodegas.' },
      { icon: 'home', title: '[PLACEHOLDER] Alojamiento exclusivo', text: '[PLACEHOLDER] Describir el alojamiento del viaje.' },
    ],
    itinerary: [
      { n: 1, date: 'Día 1', dayTitle: 'Llegada', title: '[PLACEHOLDER] Llegada a Bordeaux', body: '[PLACEHOLDER] Descripción del primer día. Reemplazar.', image: IMG.bordeaux, meals: 'Cena', lodging: 'Por confirmar', coords: [44.841, -0.580], label: 'Bordeaux' },
      { n: 2, date: 'Día 2', dayTitle: 'Médoc', title: '[PLACEHOLDER] La orilla izquierda', body: '[PLACEHOLDER] Descripción del día. Reemplazar.', image: IMG.cellar, meals: 'Pensión completa', lodging: 'Por confirmar', coords: [45.166, -0.749], label: 'Médoc' },
      { n: 3, date: 'Día 3', dayTitle: 'Saint-Émilion', title: '[PLACEHOLDER] Pueblo UNESCO', body: '[PLACEHOLDER] Descripción del día. Reemplazar.', image: IMG.vineyardHills, meals: 'Pensión completa', lodging: 'Por confirmar', coords: [44.894, -0.155], label: 'Saint-Émilion' },
    ],
    lodging: {
      eyebrow: 'EL ALOJAMIENTO',
      name: '[PLACEHOLDER] Château por confirmar',
      intro: '[PLACEHOLDER] Descripción del alojamiento. Reemplazar antes del lanzamiento.',
      gallery: [
        { image: IMG.chateauTeam, caption: '[PLACEHOLDER]' },
        { image: IMG.cellar, caption: '[PLACEHOLDER]' },
        { image: IMG.bordeaux, caption: '[PLACEHOLDER]' },
        { image: IMG.vineyardHills, caption: '[PLACEHOLDER]' },
      ],
    },
    includes: [
      '[PLACEHOLDER] Alojamiento de lujo en uso exclusivo',
      '[PLACEHOLDER] Desayunos y cenas privadas',
      '[PLACEHOLDER] Catas en châteaux seleccionados',
      '[PLACEHOLDER] Todos los transportes del grupo',
    ],
    excludes: [
      '[PLACEHOLDER] Vuelos internacionales',
      '[PLACEHOLDER] Seguro de viaje',
      '[PLACEHOLDER] Gastos personales',
    ],
    disclaimer: 'Cada experiencia de este viaje ha sido cuidadosamente seleccionada. Por cuestiones operativas, climáticas o de disponibilidad, algunos servicios o reservas podrán ser modificados o sustituidos por alternativas de categoría equivalente, manteniendo siempre el nivel y la esencia de la experiencia prevista.',
  },
  {
    id: 'toscana',
    title: 'La Dolce Vita, Elevated',
    subtitle: 'Toscana: La Dolce Vita, Elevated',
    image: IMG.toscana,
    description: 'Discover the rolling hills and medieval villages of Tuscany, where Sangiovese reigns supreme. From the prestigious estates of Chianti Classico to the modern elegance of Bolgheri, experience the perfect harmony of tradition, innovation, and la dolce vita.',
    highlights: [
      'Private access to historic wine estates',
      'Truffle hunting and olive oil tastings',
      'Renaissance art and architecture tours',
      'Farm-to-table culinary experiences'
    ],
    duration: '7 DAYS',
    groupSize: '4–8 Guests',
    season: 'April–November',
    itineraryFile: 'toscana.pdf',
    pdfLink: 'https://drive.google.com/file/d/1teLWVxF3j8AmzyDTbfrKsWpwaNmjVvLX/view?usp=sharing',

    status: 'coming_soon',
    country: 'Italia',
    dates: null,
    priceLabel: 'A consultar',
    vol: 'VOL. 03 — TOSCANA',
    hero: {
      image: IMG.tuscanSunset,
      eyebrow: 'PEQUEÑO GRUPO · ITALIA · PRÓXIMAMENTE',
      title: 'Toscana',
      subtitle: '[PLACEHOLDER] Sangiovese, Chianti Classico y la dolce vita entre cipreses.',
    },
    stats: [
      { label: 'DURACIÓN', value: '7 días', sub: '6 noches' },
      { label: 'TIPO DE VIAJE', value: 'Pequeño grupo', sub: '4–8 viajeros' },
      { label: 'SALIDA', value: 'Por confirmar', sub: '2026' },
      { label: 'INVERSIÓN', value: 'A consultar', sub: 'Por persona' },
    ],
    intro: {
      title: '[PLACEHOLDER] Toscana, la dolce vita en su forma más pura.',
      body: [
        '[PLACEHOLDER] Texto narrativo de introducción al viaje a Toscana. Reemplazar.',
        '[PLACEHOLDER] Segundo párrafo de introducción. Reemplazar antes del lanzamiento.',
      ],
      image: IMG.tuscanSunset,
    },
    pillars: [
      { icon: 'star', title: '[PLACEHOLDER] Cocina toscana', text: '[PLACEHOLDER] Describir las experiencias gastronómicas.' },
      { icon: 'search', title: '[PLACEHOLDER] Estates históricos', text: '[PLACEHOLDER] Describir las catas y visitas.' },
      { icon: 'home', title: '[PLACEHOLDER] Villa entre viñedos', text: '[PLACEHOLDER] Describir el alojamiento.' },
    ],
    itinerary: [
      { n: 1, date: 'Día 1', dayTitle: 'Llegada', title: '[PLACEHOLDER] Llegada a Toscana', body: '[PLACEHOLDER] Descripción del primer día. Reemplazar.', image: IMG.tuscanSunset, meals: 'Cena', lodging: 'Por confirmar', coords: [43.771, 11.255], label: 'Firenze' },
      { n: 2, date: 'Día 2', dayTitle: 'Chianti', title: '[PLACEHOLDER] Chianti Classico', body: '[PLACEHOLDER] Descripción del día. Reemplazar.', image: IMG.toscana, meals: 'Pensión completa', lodging: 'Por confirmar', coords: [43.471, 11.303], label: 'Chianti' },
      { n: 3, date: 'Día 3', dayTitle: 'Montalcino', title: '[PLACEHOLDER] Brunello', body: '[PLACEHOLDER] Descripción del día. Reemplazar.', image: IMG.vineyardHills, meals: 'Pensión completa', lodging: 'Por confirmar', coords: [43.058, 11.489], label: 'Montalcino' },
    ],
    lodging: {
      eyebrow: 'EL ALOJAMIENTO',
      name: '[PLACEHOLDER] Villa toscana por confirmar',
      intro: '[PLACEHOLDER] Descripción del alojamiento. Reemplazar antes del lanzamiento.',
      gallery: [
        { image: IMG.tuscanSunset, caption: '[PLACEHOLDER]' },
        { image: IMG.toscana, caption: '[PLACEHOLDER]' },
        { image: IMG.vineyardHills, caption: '[PLACEHOLDER]' },
        { image: IMG.cellar, caption: '[PLACEHOLDER]' },
      ],
    },
    includes: [
      '[PLACEHOLDER] Alojamiento de lujo en uso exclusivo',
      '[PLACEHOLDER] Desayunos y cenas privadas',
      '[PLACEHOLDER] Catas en estates seleccionados',
      '[PLACEHOLDER] Todos los transportes del grupo',
    ],
    excludes: [
      '[PLACEHOLDER] Vuelos internacionales',
      '[PLACEHOLDER] Seguro de viaje',
      '[PLACEHOLDER] Gastos personales',
    ],
    disclaimer: 'Cada experiencia de este viaje ha sido cuidadosamente seleccionada. Por cuestiones operativas, climáticas o de disponibilidad, algunos servicios o reservas podrán ser modificados o sustituidos por alternativas de categoría equivalente, manteniendo siempre el nivel y la esencia de la experiencia prevista.',
  },
  {
    id: 'mendoza',
    title: 'Malbec at the Roof of the World',
    subtitle: 'Mendoza: Malbec at the Roof of the World',
    image: IMG.mendoza,
    description: 'Venture to the foothills of the Andes, where high-altitude vineyards produce some of the world\'s finest Malbec. Experience the perfect blend of Argentine hospitality, breathtaking mountain vistas, and wines that capture the essence of terroir at elevation.',
    highlights: [
      'High-altitude vineyard tours',
      'Traditional Argentine asado experiences',
      'Andean adventure activities',
      'Boutique winery private tastings'
    ],
    duration: '7-14 DAYS',
    groupSize: '4–8 Guests',
    season: 'Mar–May / Sept–Nov',
    itineraryFile: 'mendoza.pdf',
    pdfLink: 'https://drive.google.com/file/d/1lb4eRsJSdaTUnWNy8fYpvQA-ltX3RCfR/view?usp=sharing',

    status: 'coming_soon',
    country: 'Argentina',
    dates: null,
    priceLabel: 'A consultar',
    vol: 'VOL. 04 — MENDOZA',
    hero: {
      image: IMG.mendoza,
      eyebrow: 'PEQUEÑO GRUPO · ARGENTINA · PRÓXIMAMENTE',
      title: 'Mendoza',
      subtitle: '[PLACEHOLDER] Malbec de altura al pie de los Andes.',
    },
    stats: [
      { label: 'DURACIÓN', value: '7 días', sub: '6 noches' },
      { label: 'TIPO DE VIAJE', value: 'Pequeño grupo', sub: '4–8 viajeros' },
      { label: 'SALIDA', value: 'Por confirmar', sub: '2026' },
      { label: 'INVERSIÓN', value: 'A consultar', sub: 'Por persona' },
    ],
    intro: {
      title: '[PLACEHOLDER] Mendoza, el Malbec en el techo del mundo.',
      body: [
        '[PLACEHOLDER] Texto narrativo de introducción al viaje a Mendoza. Reemplazar.',
        '[PLACEHOLDER] Segundo párrafo de introducción. Reemplazar antes del lanzamiento.',
      ],
      image: IMG.mendoza,
    },
    pillars: [
      { icon: 'star', title: '[PLACEHOLDER] Asado y alta cocina', text: '[PLACEHOLDER] Describir las experiencias gastronómicas.' },
      { icon: 'search', title: '[PLACEHOLDER] Viñedos de altura', text: '[PLACEHOLDER] Describir las catas y visitas.' },
      { icon: 'home', title: '[PLACEHOLDER] Lodge entre los Andes', text: '[PLACEHOLDER] Describir el alojamiento.' },
    ],
    itinerary: [
      { n: 1, date: 'Día 1', dayTitle: 'Llegada', title: '[PLACEHOLDER] Llegada a Mendoza', body: '[PLACEHOLDER] Descripción del primer día. Reemplazar.', image: IMG.mendoza, meals: 'Cena', lodging: 'Por confirmar', coords: [-32.889, -68.845], label: 'Mendoza' },
      { n: 2, date: 'Día 2', dayTitle: 'Valle de Uco', title: '[PLACEHOLDER] Valle de Uco', body: '[PLACEHOLDER] Descripción del día. Reemplazar.', image: IMG.vineyardHills, meals: 'Pensión completa', lodging: 'Por confirmar', coords: [-33.683, -69.150], label: 'Valle de Uco' },
      { n: 3, date: 'Día 3', dayTitle: 'Luján de Cuyo', title: '[PLACEHOLDER] Luján de Cuyo', body: '[PLACEHOLDER] Descripción del día. Reemplazar.', image: IMG.tasting, meals: 'Pensión completa', lodging: 'Por confirmar', coords: [-33.038, -68.882], label: 'Luján de Cuyo' },
    ],
    lodging: {
      eyebrow: 'EL ALOJAMIENTO',
      name: '[PLACEHOLDER] Lodge mendocino por confirmar',
      intro: '[PLACEHOLDER] Descripción del alojamiento. Reemplazar antes del lanzamiento.',
      gallery: [
        { image: IMG.mendoza, caption: '[PLACEHOLDER]' },
        { image: IMG.vineyardHills, caption: '[PLACEHOLDER]' },
        { image: IMG.tasting, caption: '[PLACEHOLDER]' },
        { image: IMG.cellar, caption: '[PLACEHOLDER]' },
      ],
    },
    includes: [
      '[PLACEHOLDER] Alojamiento de lujo en uso exclusivo',
      '[PLACEHOLDER] Desayunos y cenas privadas',
      '[PLACEHOLDER] Catas en bodegas seleccionadas',
      '[PLACEHOLDER] Todos los transportes del grupo',
    ],
    excludes: [
      '[PLACEHOLDER] Vuelos internacionales',
      '[PLACEHOLDER] Seguro de viaje',
      '[PLACEHOLDER] Gastos personales',
    ],
    disclaimer: 'Cada experiencia de este viaje ha sido cuidadosamente seleccionada. Por cuestiones operativas, climáticas o de disponibilidad, algunos servicios o reservas podrán ser modificados o sustituidos por alternativas de categoría equivalente, manteniendo siempre el nivel y la esencia de la experiencia prevista.',
  },
  {
    id: 'ribera-del-duero',
    title: 'Spain\'s Hidden Treasure',
    subtitle: 'Ribera del Duero: Spain\'s Hidden Treasure',
    image: IMG.vineyardHills,
    description: 'Explore the legendary Tempranillo heartland, where ancient vines and modern innovation create Spain\'s most celebrated wines. Journey through historic cellars, medieval castles, and discover the soul of Spanish winemaking in this UNESCO-recognized region.',
    highlights: [
      'Historic underground cellar visits',
      'Medieval castle wine experiences',
      'Traditional Spanish tapas tours',
      'Exclusive producer meetings'
    ],
    duration: '7 DAYS',
    groupSize: '4–8 Guests',
    season: 'June–October',
    itineraryFile: 'ribera-del-duero.pdf',
    pdfLink: 'https://drive.google.com/file/d/1kWUsfn-k6zPR_8q8QzUc4sQ6NqhBevlO/view?usp=sharing',

    status: 'coming_soon',
    country: 'España',
    dates: null,
    priceLabel: 'A consultar',
    vol: 'VOL. 05 — RIBERA DEL DUERO',
    hero: {
      image: IMG.vineyardHills,
      eyebrow: 'PEQUEÑO GRUPO · ESPAÑA · PRÓXIMAMENTE',
      title: 'Ribera del Duero',
      subtitle: '[PLACEHOLDER] Tempranillo, cepas viejas y bodegas excavadas en piedra.',
    },
    stats: [
      { label: 'DURACIÓN', value: '7 días', sub: '6 noches' },
      { label: 'TIPO DE VIAJE', value: 'Pequeño grupo', sub: '4–8 viajeros' },
      { label: 'SALIDA', value: 'Por confirmar', sub: '2026' },
      { label: 'INVERSIÓN', value: 'A consultar', sub: 'Por persona' },
    ],
    intro: {
      title: '[PLACEHOLDER] Ribera del Duero, el corazón del Tempranillo.',
      body: [
        '[PLACEHOLDER] Texto narrativo de introducción al viaje a Ribera del Duero. Reemplazar.',
        '[PLACEHOLDER] Segundo párrafo de introducción. Reemplazar antes del lanzamiento.',
      ],
      image: IMG.cellar,
    },
    pillars: [
      { icon: 'star', title: '[PLACEHOLDER] Tapas y alta cocina', text: '[PLACEHOLDER] Describir las experiencias gastronómicas.' },
      { icon: 'search', title: '[PLACEHOLDER] Bodegas históricas', text: '[PLACEHOLDER] Describir las catas y visitas.' },
      { icon: 'home', title: '[PLACEHOLDER] Alojamiento con encanto', text: '[PLACEHOLDER] Describir el alojamiento.' },
    ],
    itinerary: [
      { n: 1, date: 'Día 1', dayTitle: 'Llegada', title: '[PLACEHOLDER] Llegada a Ribera del Duero', body: '[PLACEHOLDER] Descripción del primer día. Reemplazar.', image: IMG.vineyardHills, meals: 'Cena', lodging: 'Por confirmar', coords: [41.670, -3.689], label: 'Aranda de Duero' },
      { n: 2, date: 'Día 2', dayTitle: 'Peñafiel', title: '[PLACEHOLDER] Castillo de Peñafiel', body: '[PLACEHOLDER] Descripción del día. Reemplazar.', image: IMG.cellar, meals: 'Pensión completa', lodging: 'Por confirmar', coords: [41.595, -4.115], label: 'Peñafiel' },
      { n: 3, date: 'Día 3', dayTitle: 'Roa', title: '[PLACEHOLDER] Bodegas de Roa', body: '[PLACEHOLDER] Descripción del día. Reemplazar.', image: IMG.tasting, meals: 'Pensión completa', lodging: 'Por confirmar', coords: [41.694, -3.918], label: 'Roa de Duero' },
    ],
    lodging: {
      eyebrow: 'EL ALOJAMIENTO',
      name: '[PLACEHOLDER] Alojamiento por confirmar',
      intro: '[PLACEHOLDER] Descripción del alojamiento. Reemplazar antes del lanzamiento.',
      gallery: [
        { image: IMG.vineyardHills, caption: '[PLACEHOLDER]' },
        { image: IMG.cellar, caption: '[PLACEHOLDER]' },
        { image: IMG.tasting, caption: '[PLACEHOLDER]' },
        { image: IMG.misc, caption: '[PLACEHOLDER]' },
      ],
    },
    includes: [
      '[PLACEHOLDER] Alojamiento de lujo en uso exclusivo',
      '[PLACEHOLDER] Desayunos y cenas privadas',
      '[PLACEHOLDER] Catas en bodegas seleccionadas',
      '[PLACEHOLDER] Todos los transportes del grupo',
    ],
    excludes: [
      '[PLACEHOLDER] Vuelos internacionales',
      '[PLACEHOLDER] Seguro de viaje',
      '[PLACEHOLDER] Gastos personales',
    ],
    disclaimer: 'Cada experiencia de este viaje ha sido cuidadosamente seleccionada. Por cuestiones operativas, climáticas o de disponibilidad, algunos servicios o reservas podrán ser modificados o sustituidos por alternativas de categoría equivalente, manteniendo siempre el nivel y la esencia de la experiencia prevista.',
  },
  {
    // ===========================================================
    // PIEMONTE · OCT 2026 — status: 'live' (real itinerary)
    // Source: piamonte-data.js (Federico's real PDF, structured).
    // Coords approximate per locality. Images are TEMPORARY local
    // placeholders; original intended shot kept in the comments.
    // ===========================================================
    id: 'piedmont',
    title: 'Piemonte: Italy\'s Most Tannic Hills',
    subtitle: 'Barolo, Barbaresco & White Truffle Country',
    image: IMG.langhe,
    description: 'Immerse yourself in the elegant world of Barolo and Barbaresco, where Nebbiolo grapes create Italy\'s most prestigious wines. Experience the Alba white truffle season, savor traditional Piedmontese cuisine, and explore the intersection of Alpine beauty and viticultural artistry.',
    highlights: [
      'Barolo and Barbaresco estate tours',
      'White truffle hunting experiences',
      'Traditional osteria dining',
      'Langhe hills scenic explorations'
    ],
    duration: '7 DAYS',
    groupSize: '4–8 Guests',
    season: 'Sept–Nov',
    itineraryFile: 'piedmont.pdf',
    pdfLink: 'https://drive.google.com/file/d/10bEeGuXMfked5kOaYWksWXaEuMnDY1t4/view?usp=sharing',

    // --- Trip-detail (LIVE, real content) ---
    status: 'live',
    region: 'Le Langhe',
    country: 'Italia',
    dates: '19–25 Octubre 2026',
    summaryCities: 'Alba · Barbaresco · Barolo · Le Langhe',
    durationLabel: '7 días · 6 noches',
    groupLabel: '8 huéspedes + 2 staff',
    priceLabel: 'A consultar',
    vol: 'VOL. 01 — LE LANGHE',

    hero: {
      image: IMG.langhe,                              // [PLACEHOLDER] paisaje Langhe / villa entre viñedos
      eyebrow: 'PEQUEÑO GRUPO · ITALIA · 19–25 OCTUBRE 2026',
      title: 'Piemonte',
      subtitle: 'Siete días entre viñedos Patrimonio UNESCO, trufa blanca, mesas con estrella y una villa privada que respira Barolo.',
    },

    stats: [
      { label: 'DURACIÓN', value: '7 días', sub: '6 noches' },
      { label: 'TIPO DE VIAJE', value: 'Pequeño grupo', sub: '8 viajeros' },
      { label: 'SALIDA', value: 'Octubre 2026', sub: 'Lun 19 – Dom 25' },
      { label: 'INVERSIÓN', value: 'A consultar', sub: 'Por persona' },
    ],

    intro: {
      title: 'Siete días en Le Langhe, en la única semana del año en que todo coincide.',
      body: [
        'Mediados de octubre es el momento: los grandes domaines terminan de cosechar el Nebbiolo, los trifulau salen al alba a buscar el primer tartufo bianco, las viñas se encienden de rojo y oro, y el sábado abre la Fiera Internazionale del Tartufo Bianco d\'Alba, la cita más importante del año en la mesa del Piemonte. Toda la semana está pensada para llegar a ese sábado en su mejor momento.',
        'Nos instalamos en Villa Bella Vista, una casa privada entre los viñedos de Castiglione Tinella, a un paso de Alba, Barbaresco y Barolo. Desde ahí salimos cada día a una cita distinta —una mesa con estrella, una bodega histórica, una caza de trufas, una clase de cocina en un castillo— y volvemos siempre al mismo lugar al caer la tarde. Grupo reducido, nunca más de ocho, con el equipo de B&A siempre cerca.',
      ],
      image: IMG.tuscanSunset,                        // [PLACEHOLDER] trifolau con perro / viñedos al amanecer
      // Proper nouns highlighted (bold) inside the intro paragraphs.
      highlights: [
        'Villa Bella Vista', 'Fiera Internazionale del Tartufo Bianco d\'Alba',
        'Nebbiolo', 'tartufo bianco', 'Castiglione Tinella', 'Barbaresco', 'Barolo', 'Alba',
      ],
    },

    pillars: [
      { icon: 'star', title: 'Mesas con estrella', text: 'La Ciau del Tornavento ★, con cava de 65.000 botellas y terraza sobre el Barbaresco, y la cena de cierre en Alessandro Mecca al Castello ★, en el castillo UNESCO de Grinzane Cavour, sede de la subasta mundial de la trufa.' },
      { icon: 'search', title: 'Vino y trufa, en su origen', text: 'Catas en Vietti y Ceretto, una copa en el Barolo histórico, y la caza de trufa al amanecer con la familia Ronzano, tres generaciones de trifulau, en su propio bosque.' },
      { icon: 'home', title: 'Una sola casa, una sola cocina', text: 'Una villa entera entre los viñedos, reservada solo para el grupo. Chef privado en la cocina, sommelier en la mesa, piscina climatizada y la mesa larga junto a la chimenea cada noche.' },
    ],

    itinerary: [
      {
        n: 1, date: 'Lun 19 Oct', dayTitle: 'Llegada',
        title: 'Recibimiento y welcome dinner',
        body: 'Check-in en Villa Bella Vista al caer la tarde, con la luz dorada sobre los viñedos. Acomodación en las suites, recorrido por la villa, la piscina climatizada y los jardines. A las 17:00, aperitivo de bienvenida con Alta Langa y bocados piemonteses; a las 20:00, welcome dinner del chef privado Jacopo Lanfranco —vitello tonnato, agnolotti del plin, brasato al Barolo, bonet— con maridaje y sobremesa larga junto a la chimenea.',
        image: IMG.lafite,                            // [PLACEHOLDER] villa al atardecer / mesa de bienvenida
        meals: 'Cena', lodging: 'Villa Bella Vista',
        coords: [44.748, 8.122], label: 'Castiglione Tinella · Villa base',
      },
      {
        n: 2, date: 'Mar 20 Oct', dayTitle: 'Wellness · Treiso',
        title: 'Wellness al amanecer y una estrella Michelín',
        body: 'Desayuno de mesa larga con producto local, y a las 09:00 clase de yoga y pilates en el jardín, al borde del viñedo. Al mediodía bajamos a Treiso, a La Ciau del Tornavento ★ (chef Maurilio Garola): almuerzo degustación en una de las cocinas históricas de Le Langhe, con cava subterránea de 65.000 botellas y terraza panorámica sobre el Barbaresco. Tarde libre, aperitivo ligero en la villa o paseo por Neive.',
        image: IMG.cellar,                            // [PLACEHOLDER] cava / terraza Tornavento
        meals: 'Pensión completa', lodging: 'Villa Bella Vista',
        coords: [44.683, 8.035], label: 'Treiso · La Ciau del Tornavento ★',
      },
      {
        n: 3, date: 'Mié 21 Oct', dayTitle: 'Caza · Barbaresco',
        title: 'Caza de trufa blanca y cierre en Barbaresco',
        body: 'Salida temprana al bosque de Tenuta Ronzano para el truffle hunt con una familia de trifulau de tres generaciones y sus perros, con cata final en la cantina propia. Almuerzo en Enoclub, bajo la plaza de Alba: tajarin, vitello tonnato, carne cruda all\'albese. Al atardecer subimos a la Torre di Barbaresco y la Enoteca Regionale, y cerramos con cena en la Osteria Tastè, en terraza con vista a las colinas.',
        image: IMG.team,                              // [PLACEHOLDER] trifolau y perros / Barbaresco
        meals: 'Pensión completa', lodging: 'Villa Bella Vista',
        coords: [44.723, 8.087], label: 'Barbaresco · Tenuta Ronzano · Alba',
      },
      {
        n: 4, date: 'Jue 22 Oct', dayTitle: 'Barolo',
        title: 'Cata icónica en Vietti y el casco histórico de Barolo',
        body: 'Por la mañana, cata en Vietti (Castiglione Falletto): recorrido por las cantinas y degustación guiada de los crus emblemáticos —Castiglione, Brunate, Rocche, Lazzarito—. Almuerzo en Le Torri, en terraza panorámica sobre los viñedos. La tarde es para el pueblo de Barolo: terraza Borgogno, copa en la Enoteca Barolo House (Conterno, Gaja, Giacosa). Cena íntima en Locanda In Cannubi, en el corazón del cru.',
        image: IMG.langhe,                            // [PLACEHOLDER] Vietti / Castello di Barolo
        meals: 'Pensión completa', lodging: 'Villa Bella Vista',
        coords: [44.612, 7.943], label: 'Castiglione Falletto · Barolo',
      },
      {
        n: 5, date: 'Vie 23 Oct', dayTitle: 'Ceretto · Roddi',
        title: 'Arquitectura del vino y cocina en un castillo',
        body: 'Visita y degustación en Ceretto (Monsordo Bernardina): la finca histórica con The Cube suspendido sobre los viñedos, con opción de la Capilla del Barolo intervenida por Sol LeWitt y David Tremlett. Por la tarde, TasteLab Cooking Class en el Castello di Roddi —siete estaciones profesionales, una por pareja, sommelier AIS e intérprete EN/ES—. Aperitivo junto a la piscina y segunda cena del chef privado en la villa.',
        image: IMG.tuscanSunset,                      // [PLACEHOLDER] The Cube Ceretto / Castello di Roddi
        meals: 'Pensión completa', lodging: 'Villa Bella Vista',
        coords: [44.700, 8.020], label: 'Alba · Ceretto · Roddi',
      },
      {
        n: 6, date: 'Sáb 24 Oct', dayTitle: 'El día',
        title: 'La Fiera del Tartufo y la cena en el castillo',
        body: 'Desayuno premium en Gusto Madre (Fulvio Marino) en Alba, con llegada anticipada para sortear la cola del sábado. A las 10:45 entramos a la 96ª Fiera Internazionale del Tartufo Bianco: el Mercato Mondiale del Tartufo, los puestos de productores, la trufa blanca del día. Tarde libre por el casco antiguo. Al caer la noche, cena de cierre en Alessandro Mecca al Castello ★, en el castillo UNESCO de Grinzane Cavour, sede de la subasta mundial de la trufa.',
        image: IMG.chateauTeam,                       // [PLACEHOLDER] Fiera del Tartufo / Castello Grinzane Cavour
        meals: 'Desayuno + cena', lodging: 'Villa Bella Vista',
        coords: [44.658, 7.998], label: 'Alba · Grinzane Cavour',
      },
      {
        n: 7, date: 'Dom 25 Oct', dayTitle: 'Despedida',
        title: 'Última mañana en la villa y transfers',
        body: 'Última mañana sin apuro —recordar que esa madrugada termina el horario de verano, el staff coordina alarmas y transfers—. Desayuno relajado con los productos de la semana, fotos finales en el jardín e intercambio de contactos. A las 11:00, transfers escalonados a Malpensa (MXP) o Torino (TRN) en van Mercedes V-Class según los vuelos de cada pareja. Arrivederci, Piemonte.',
        image: IMG.vineyardHills,                     // [PLACEHOLDER] mañana en la villa / despedida
        meals: 'Desayuno', lodging: '—',
        coords: [44.748, 8.122], label: 'Castiglione Tinella → MXP / TRN',
      },
    ],

    lodging: {
      eyebrow: 'EL ALOJAMIENTO',
      name: 'Villa Bella Vista',
      location: 'Castiglione Tinella · CN · Italia',
      intro: 'Una casa blanca al borde del viñedo, a media hora de Barolo y Barbaresco. Cinco habitaciones dobles con baño ensuite, una piscina salada climatizada de 14 m asomada a las colinas UNESCO, y el silencio del otoño piemontés. Diseñada para diez personas, reservada en exclusiva para el grupo.',
      specs: [
        { label: 'HAB.', value: '5 dobles con baño ensuite privado' },
        { label: 'EXTRA', value: '1 baño de cortesía' },
        { label: 'PISCINA', value: '14 m salada climatizada con vista a viñedos' },
        { label: 'CHEF', value: 'Jacopo Lanfranco, privado en cenas seleccionadas' },
        { label: 'PAX', value: '10 personas — 8 huéspedes + 2 staff' },
        { label: 'ENTORNO', value: 'Colinas UNESCO · viñedos privados al borde de Barolo y Barbaresco' },
        { label: 'SERVICIOS', value: 'Housekeeping diario · Yoga y Pilates · cava de vinos local en consumo libre' },
      ],
      gallery: [
        { image: IMG.langhe, caption: 'La villa' },          // [PLACEHOLDER]
        { image: IMG.vineyardHills, caption: 'La piscina' },  // [PLACEHOLDER]
        { image: IMG.misc, caption: 'Las suites' },           // [PLACEHOLDER]
        { image: IMG.lafite, caption: 'La mesa larga' },      // [PLACEHOLDER]
      ],
    },

    includes: [
      'Alojamiento de lujo en habitaciones dobles con baño ensuite privado (6 noches, villa en uso exclusivo)',
      'Desayunos diarios y cenas privadas preparadas por chef',
      'Servicio de limpieza diaria en la villa',
      'Selección de vinos locales, bebidas y snacks de consumo libre',
      'Clase grupal de yoga y/o pilates',
      'Todos los transportes del grupo (van Mercedes V-Class + sedán)',
      'Transfers aeropuerto–villa–aeropuerto (Malpensa o Torino Caselle)',
      'Entradas a la Fiera del Tartufo',
      'Experiencia de caza de trufa en Tenuta Ronzano',
      'Catas de vino en bodegas seleccionadas: Vietti y Ceretto',
      'TasteLab Cooking Class en el Castello di Roddi',
      'Almuerzos y cenas en restaurantes seleccionados bajo menú degustación',
      'Sommelier acompañando al grupo y anfitrión B&A durante los 7 días',
    ],
    excludes: [
      'Vuelos internacionales',
      'Seguro de salud y de viaje (B&A lo coordina a costo)',
      'Transportes individuales y taxis fuera del programa grupal',
      'Almuerzos indicados como "libres" en el itinerario',
      'Bebidas, maridajes o platos adicionales ("extras") solicitados en los restaurantes',
      'Propinas y gastos personales fuera del menú establecido',
    ],

    disclaimer: 'Cada experiencia de este viaje ha sido cuidadosamente seleccionada. Por cuestiones operativas, climáticas o de disponibilidad, algunos servicios o reservas podrán ser modificados o sustituidos por alternativas de categoría equivalente, manteniendo siempre el nivel y la esencia de la experiencia prevista.',
  },
];

export const processSteps = [
  {
    number: 1,
    title: 'Join The Waiting List',
    description: 'Experiences have extremely limited vacancies so we work on a first-come first-served approach.'
  },
  {
    number: 2,
    title: 'Wine Trip Launch',
    description: 'Our experts have crafted a bespoke itinerary, meticulously coordinating with world renowned wineries your visits. We also organize the accommodations and experiences tailored to you. Offer becomes available for booking with all details and contract sent through the waiting list first.'
  },
  {
    number: 3,
    title: 'Seamless Booking',
    description: 'We provide 1:1 sessions if you feel more information is needed before you secure your booking. We help you with the payment and the entire reservation process.'
  },
  {
    number: 4,
    title: 'Unforgettable Journey',
    description: 'Embark on your VinVoyage, supported by our dedicated team and technology, ensuring a flawless experience.'
  }
];

export const differentiators = [
  "Insider access through our local partners and a registered travel operator",
  "Small groups (4-8 guests) for genuine immersion, not crowd management",
  "Thoughtful curation balancing legendary appellations with hidden gems",
  "Seamless execution from boutique hotels to Michelin-starred dining",
  "Cultural integration—because great wine regions deserve to be experienced holistically"
];
