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
    title: 'Bordeaux: Grands Crus Clasificados',
    subtitle: 'De la Rive Gauche a la Rive Droite',
    image: '/images/bordeaux/hero.webp',
    description: 'Seis días entre Premiers Crus clasificados, de la grava legendaria del Médoc a la piedra caliza de Saint-Émilion. Visitas privadas con cata en châteaux históricos, la Cité du Vin, Burdeos a pie y la gran mesa del Sudoeste francés, con base en un 5★ de diseño.',
    highlights: [
      'Visitas privadas con cata en châteaux clasificados',
      'Château Haut-Brion, Premier Cru Classé de 1855',
      'Saint-Émilion, pueblo Patrimonio de la Humanidad',
      'Cena 2★ Michelin en Le Pressoir d\'Argent',
    ],
    duration: '6 DAYS',
    groupSize: '8 Guests',
    season: 'May / Sept–Oct',
    itineraryFile: 'bordeaux.pdf',
    pdfLink: 'https://drive.google.com/file/d/1TvCkSweI0aPfHT3Sbs3CFcy_e_Rq7Zqi/view?usp=sharing',

    // --- Trip-detail (real content; dates tentative -> kept coming_soon) ---
    status: 'coming_soon',
    region: 'Médoc · Graves · Saint-Émilion',
    country: 'Francia',
    dates: 'Mayo 2027',
    summaryCities: 'Médoc · Pauillac · Graves · Saint-Émilion · Burdeos',
    priceLabel: 'A consultar',
    vol: 'VOL. 02 — BORDEAUX',
    tripHighlights: [
      { icon: 'star', text: 'Cena de despedida 2★ Michelin en Le Pressoir d\'Argent (Gordon Ramsay)' },
      { icon: 'wine', text: 'Visita privada y cata en Château Pichon Baron (Pauillac)' },
      { icon: 'castle', text: 'Château Haut-Brion, Premier Cru Classé de 1855' },
      { icon: 'search', text: 'Château Figeac, Premier Grand Cru Classé A en Saint-Émilion' },
      { icon: 'sparkles', text: 'La Cité du Vin con copa en el Belvédère y vista 360°' },
      { icon: 'home', text: 'Hotel 5★ Mondrian Les Carmes, base única del viaje' },
      { icon: 'utensils', text: 'Cena de bienvenida en La Tupina, el alma del Sudoeste' },
      { icon: 'compass', text: 'Burdeos a pie: Place de la Bourse, Grand Théâtre y casco UNESCO' },
      { icon: 'users', text: 'Grupo reducido de viajeros afines, nunca más de 8' },
      { icon: 'wine', text: 'Viaje founder-led y sin estrés: B&A coordina cada detalle' },
    ],
    hero: {
      image: '/images/bordeaux/hero.webp',
      eyebrow: 'PEQUEÑO GRUPO · FRANCIA · MAYO 2027',
      title: 'Bordeaux',
      subtitle: 'Seis días entre Premiers Crus clasificados, de la grava del Médoc a la piedra caliza de Saint-Émilion, con la Cité du Vin y la gran mesa del Sudoeste francés.',
    },
    stats: [
      { label: 'DURACIÓN', value: '6 días', sub: '5 noches' },
      { label: 'TIPO DE VIAJE', value: 'Pequeño grupo', sub: '8 viajeros' },
      { label: 'SALIDA', value: 'Mayo 2027', sub: 'Fechas tentativas' },
      { label: 'INVERSIÓN', value: 'A consultar', sub: 'Por persona' },
    ],
    intro: {
      title: 'Burdeos no se recorre: se saborea — seis días entre Premiers Crus, de la Rive Gauche a la Rive Droite.',
      body: [
        'De los gravas legendarios del Médoc a los terroirs de Graves, y cruzando el río a la Rive Droite del Merlot y la caliza de Saint-Émilion.',
      ],
      image: '/images/bordeaux/dia3.webp',
    },
    itinerary: [
      {
        n: 1, date: 'Dom · Día 1', dayTitle: 'Llegada',
        title: 'Bienvenue à Bordeaux',
        body: 'Llegada a Burdeos y traslado privado al Mondrian Les Carmes. Por la tarde, paseo de orientación a pie: desde Chartrons por los muelles del Garona hasta la Place de la Bourse y su Miroir d\'eau, el barrio Saint-Pierre y la Place du Parlement, con parada de café para entrar en clima. Al atardecer, aperitivo en el rooftop del hotel; a la noche, cena de bienvenida en La Tupina —cocina del Sudoeste a fuego de leña— y el primer gran tinto de la región.',
        image: IMG.bordeaux,
        meals: 'Cena', lodging: 'Mondrian Bordeaux',
        coords: [44.8413, -0.5715], label: 'Burdeos · Chartrons',
      },
      {
        n: 2, date: 'Lun · Día 2', dayTitle: 'Médoc',
        title: 'Route des Châteaux · Rive Gauche',
        body: 'Salida hacia el norte por la legendaria D2, la Route des Châteaux. Por la mañana, visita privada y cata en Château Léoville-Poyferré (Saint-Julien, 2ème Cru Classé); almuerzo en Café Lavinal, en la aldea de Bages (Pauillac). Por la tarde, la parada asegurada: Château Pichon Baron, uno de los grandes nombres de Pauillac. Regreso a Burdeos, aperitivo en Le Bar à Vin del CIVB y cena distendida en la Brasserie Bordelaise.',
        image: '/images/bordeaux/dia2.webp',
        meals: 'Pensión completa', lodging: 'Mondrian Bordeaux',
        coords: [45.1766, -0.7512], label: 'Saint-Julien · Pauillac',
      },
      {
        n: 3, date: 'Mar · Día 3', dayTitle: 'La ciudad',
        title: 'Burdeos a pie & La Cité du Vin',
        body: 'Bajamos el ritmo para conocer la ciudad. Tour histórico a pie por Burdeos: Quinconces y el Monumento a los Girondinos, el Grand Théâtre, la Place de la Bourse, la Porte Cailhau, la Grosse Cloche y la catedral de Saint-André. Almuerzo en Le Quatrième Mur, la brasserie de Philippe Etchebest. Por la tarde, La Cité du Vin —el museo del vino más inmersivo del mundo— con copa en el Belvédère del piso 8 y vista 360°. Cena en Le 7, panorámico frente al río.',
        image: '/images/bordeaux/dia3.webp',
        meals: 'Pensión completa', lodging: 'Mondrian Bordeaux',
        coords: [44.8624, -0.5506], label: 'Burdeos · La Cité du Vin',
      },
      {
        n: 4, date: 'Mié · Día 4', dayTitle: 'Graves',
        title: 'Graves · el gran highlight (Pessac-Léognan)',
        body: 'Rumbo al sur, a la cuna histórica del vino bordelés. Por la mañana, el gran momento del viaje: visita privada y cata en Château Haut-Brion (Pessac, Premier Cru Classé de 1855), el único premier fuera del Médoc. Almuerzo en La Table du Lavoir, el bistró de Les Sources de Caudalie entre viñedos. Por la tarde, visita y cata en Château Smith Haut Lafitte (Martillac, Cru Classé de Graves). Cena libre en Saint-Pierre, con recomendaciones del equipo.',
        image: '/images/bordeaux/dia4.webp', imgPos: 'center 20%',
        meals: 'Pensión completa', lodging: 'Mondrian Bordeaux',
        coords: [44.8167, -0.6086], label: 'Pessac · Martillac',
      },
      {
        n: 5, date: 'Jue · Día 5', dayTitle: 'Rive Droite',
        title: 'Rive Droite · Saint-Émilion',
        body: 'Cruzamos a la Rive Droite, tierra del Merlot. Paseo guiado por Saint-Émilion (Patrimonio de la Humanidad): calles medievales, la iglesia monolítica tallada en la roca y el claustro. Visita privada y cata en Château Figeac (Premier Grand Cru Classé A); almuerzo en L\'Envers du Décor, junto a la iglesia. Por la tarde, Château La Gaffelière (Premier Grand Cru Classé B). Cena de despedida en Le Pressoir d\'Argent —Gordon Ramsay, 2★ Michelin— frente a la Ópera.',
        image: '/images/bordeaux/dia5.webp',
        meals: 'Pensión completa', lodging: 'Mondrian Bordeaux',
        coords: [44.8933, -0.1564], label: 'Saint-Émilion',
      },
      {
        n: 6, date: 'Vie · Día 6', dayTitle: 'Despedida',
        title: 'C\'est fini',
        body: 'Desayuno y check-out. Según los horarios de salida, una última mañana relajada: ostras y una copa de blanco en el Marché des Capucins —ritual bordelés— o un paseo final por la Rue Sainte-Catherine. Traslado al aeropuerto Bordeaux-Mérignac (BOD) o a la Gare Saint-Jean. Au revoir, Bordeaux.',
        image: IMG.bordeaux,
        meals: 'Desayuno', lodging: '—',
        coords: [44.8303, -0.5678], label: 'Burdeos → BOD',
      },
    ],
    lodging: {
      eyebrow: 'EL ALOJAMIENTO',
      name: 'Mondrian Bordeaux Les Carmes',
      location: 'Chartrons · Burdeos · Francia',
      intro: 'Un 5★ de diseño, sereno y elegante, a pasos del río y muy bien comunicado. Nuestra base por logística: al norte del centro, acorta el trayecto al Médoc y deja la Cité du Vin a pocos minutos, sin sacrificar la cercanía a Graves (~25 min) ni a Saint-Émilion (~45 min). Restaurante, bar/rooftop, spa y desayuno abundante. Las cinco noches en la misma base, para deshacer las valijas una sola vez.',
      specs: [
        { label: 'HOTEL', value: 'Mondrian Bordeaux Les Carmes · 5★' },
        { label: 'BASE', value: 'Base única las 5 noches · barrio Chartrons' },
        { label: 'PAX', value: '10 personas — 8 huéspedes + 2 staff' },
        { label: 'TRANSPORTE', value: '2 coches (5 plazas) conducidos por el equipo' },
        { label: 'SERVICIOS', value: 'Restaurante · bar/rooftop · spa · desayuno' },
        { label: 'ENTORNO', value: 'Al norte del centro: cerca del Médoc y la Cité du Vin' },
      ],
      gallery: [
        { image: '/images/bordeaux/villa-1.webp', caption: 'El hotel' },
        { image: '/images/bordeaux/villa-2.webp', caption: 'La piscina' },
        { image: '/images/bordeaux/villa-3.webp', caption: 'Las habitaciones' },
        { image: '/images/bordeaux/villa-4.webp', caption: 'El patio' },
      ],
    },
    includes: [
      '5 noches en el Mondrian Bordeaux Les Carmes (5★) con desayuno',
      '2 coches (5 plazas c/u) para todos los desplazamientos, conducidos por el equipo',
      'Acompañamiento bilingüe del staff de The Wine Trips (2 personas)',
      '6 visitas privadas con cata en châteaux clasificados (Léoville-Poyferré, Pichon Baron, Haut-Brion, Smith Haut Lafitte, Figeac, La Gaffelière)',
      'Tour histórico a pie por Burdeos y paseo guiado por Saint-Émilion',
      'Entradas a La Cité du Vin con copa en el Belvédère',
      'Almuerzos y cenas indicados en el itinerario (con maridajes)',
    ],
    excludes: [
      'Vuelos internacionales y traslado aeropuerto ↔ hotel (cotizable aparte)',
      'Comidas y bebidas no detalladas en el itinerario',
      'Gastos personales, compras de vino y propinas',
      'Seguro de viaje',
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
    tripHighlights: [
      { icon: 'home', text: '[PLACEHOLDER] Villa toscana en uso exclusivo' },
      { icon: 'star', text: '[PLACEHOLDER] Cena con estrella Michelin' },
      { icon: 'wine', text: '[PLACEHOLDER] Cata privada en un estate histórico' },
      { icon: 'sparkles', text: '[PLACEHOLDER] Experiencia destacada de la región' },
      { icon: 'users', text: 'Grupo reducido de viajeros afines, nunca más de 8' },
      { icon: 'compass', text: 'Viaje founder-led y sin estrés: B&A coordina cada detalle' },
    ],
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
    tripHighlights: [
      { icon: 'home', text: '[PLACEHOLDER] Lodge de altura en uso exclusivo' },
      { icon: 'star', text: '[PLACEHOLDER] Asado de autor / alta cocina' },
      { icon: 'wine', text: '[PLACEHOLDER] Cata privada en una bodega icónica' },
      { icon: 'sparkles', text: '[PLACEHOLDER] Experiencia destacada de la región' },
      { icon: 'users', text: 'Grupo reducido de viajeros afines, nunca más de 8' },
      { icon: 'compass', text: 'Viaje founder-led y sin estrés: B&A coordina cada detalle' },
    ],
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
    tripHighlights: [
      { icon: 'home', text: '[PLACEHOLDER] Alojamiento con encanto en uso exclusivo' },
      { icon: 'star', text: '[PLACEHOLDER] Cena de alta cocina / tapas de autor' },
      { icon: 'wine', text: '[PLACEHOLDER] Cata privada en una bodega histórica' },
      { icon: 'sparkles', text: '[PLACEHOLDER] Experiencia destacada de la región' },
      { icon: 'users', text: 'Grupo reducido de viajeros afines, nunca más de 8' },
      { icon: 'compass', text: 'Viaje founder-led y sin estrés: B&A coordina cada detalle' },
    ],
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
    summaryCities: 'Alba · Barbaresco · Barolo · Treiso · Le Langhe · La Morra · Roddi',
    durationLabel: '7 días · 6 noches',
    groupLabel: '8 huéspedes + 2 staff',
    priceLabel: 'A consultar',
    vol: 'VOL. 01 — LE LANGHE',
    highlightImage: '/images/piedmont/highlight.webp',
    tripHighlights: [
      { icon: 'home', text: 'Villa privada en exclusiva con vistas Patrimonio UNESCO' },
      { icon: 'waves', text: 'Piscina salada climatizada asomada a los viñedos' },
      { icon: 'star', text: 'Almuerzo Michelin en La Ciau del Tornavento ★' },
      { icon: 'wine', text: 'Visita y degustación en Vietti, en pleno Barolo' },
      { icon: 'castle', text: 'Cena de lujo en el castillo de Grinzane Cavour ★' },
      { icon: 'search', text: 'Caza de trufa blanca al amanecer con los trifulau' },
      { icon: 'utensils', text: 'Cooking class privada en el Castello di Roddi' },
      { icon: 'sparkles', text: 'Entradas a la Fiera Internazionale del Tartufo de Alba' },
      { icon: 'users', text: 'Grupo reducido de viajeros afines, nunca más de 8' },
      { icon: 'compass', text: 'Viaje founder-led y sin estrés: B&A coordina cada detalle' },
    ],

    hero: {
      image: IMG.langhe,                              // [PLACEHOLDER] paisaje Langhe / villa entre viñedos
      eyebrow: 'PEQUEÑO GRUPO · ITALIA · 19–25 OCTUBRE 2026',
      title: 'Piemonte',
      subtitle: 'Siete días entre viñedos Patrimonio UNESCO, trufa blanca, mesas con estrella y una villa privada que respira Nebbiolo.',
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
        image: '/images/piedmont/dia1.webp',         // villa · welcome dinner
        meals: 'Cena', lodging: 'Villa Bella Vista',
        coords: [44.748, 8.122], label: 'Castiglione Tinella · Villa base',
      },
      {
        n: 2, date: 'Mar 20 Oct', dayTitle: 'Wellness · Treiso',
        title: 'Wellness al amanecer y una estrella Michelín',
        body: 'Desayuno de mesa larga con producto local, y a las 09:00 clase de yoga y pilates en el jardín, al borde del viñedo. Al mediodía bajamos a Treiso, a La Ciau del Tornavento ★ (chef Maurilio Garola): almuerzo degustación en una de las cocinas históricas de Le Langhe, con cava subterránea de 65.000 botellas y terraza panorámica sobre el Barbaresco. Tarde libre, aperitivo ligero en la villa o paseo por Neive.',
        image: '/images/piedmont/dia2.webp',          // terraza con vista a las Langhe
        meals: 'Pensión completa', lodging: 'Villa Bella Vista',
        coords: [44.683, 8.035], label: 'Treiso · La Ciau del Tornavento ★',
      },
      {
        n: 3, date: 'Mié 21 Oct', dayTitle: 'Caza · Barbaresco',
        title: 'Caza de trufa blanca y cierre en Barbaresco',
        body: 'Salida temprana al bosque de Tenuta Ronzano para el truffle hunt con una familia de trifulau de tres generaciones y sus perros, con cata final en la cantina propia. Almuerzo en Enoclub, bajo la plaza de Alba: tajarin, vitello tonnato, carne cruda all\'albese. Al atardecer subimos a la Torre di Barbaresco y la Enoteca Regionale, y cerramos con cena en la Osteria Tastè, en terraza con vista a las colinas.',
        image: '/images/piedmont/dia3.webp',          // trifulau y perros en el bosque
        meals: 'Pensión completa', lodging: 'Villa Bella Vista',
        coords: [44.723, 8.087], label: 'Barbaresco · Tenuta Ronzano · Alba',
      },
      {
        n: 4, date: 'Jue 22 Oct', dayTitle: 'Barolo',
        title: 'Cata icónica en Vietti y el casco histórico de Barolo',
        body: 'Por la mañana, cata en Vietti (Castiglione Falletto): recorrido por las cantinas y degustación guiada de los crus emblemáticos —Castiglione, Brunate, Rocche, Lazzarito—. Almuerzo en Le Torri, en terraza panorámica sobre los viñedos. La tarde es para el pueblo de Barolo: terraza Borgogno, copa en la Enoteca Barolo House (Conterno, Gaja, Giacosa). Cena íntima en Locanda In Cannubi, en el corazón del cru.',
        image: '/images/piedmont/dia4.webp',          // mirador Vietti sobre las Langhe
        meals: 'Pensión completa', lodging: 'Villa Bella Vista',
        coords: [44.612, 7.943], label: 'Castiglione Falletto · Barolo',
      },
      {
        n: 5, date: 'Vie 23 Oct', dayTitle: 'Ceretto · Roddi',
        title: 'Arquitectura del vino y cocina en el castillo de Roddi',
        body: 'Visita y degustación en Ceretto (Monsordo Bernardina): la finca histórica con The Cube suspendido sobre los viñedos, con opción de la Capilla del Barolo intervenida por Sol LeWitt y David Tremlett. Por la tarde, TasteLab Cooking Class en el Castello di Roddi —siete estaciones profesionales, una por pareja, sommelier AIS e intérprete EN/ES—. Aperitivo junto a la piscina y segunda cena del chef privado en la villa.',
        image: '/images/piedmont/dia5.webp',          // Ceretto con los Alpes nevados
        meals: 'Pensión completa', lodging: 'Villa Bella Vista',
        coords: [44.700, 8.020], label: 'Alba · Ceretto · Roddi',
      },
      {
        n: 6, date: 'Sáb 24 Oct', dayTitle: 'El día del tartufo',
        title: 'La Fiera del Tartufo y la cena en Grinzane Cavour',
        body: 'Desayuno premium en Gusto Madre (Fulvio Marino) en Alba, con llegada anticipada para sortear la cola del sábado. A las 10:45 entramos a la 96ª Fiera Internazionale del Tartufo Bianco: el Mercato Mondiale del Tartufo, los puestos de productores, la trufa blanca del día. Tarde libre por el casco antiguo. Al caer la noche, cena de cierre en Alessandro Mecca al Castello ★, en el castillo UNESCO de Grinzane Cavour, sede de la subasta mundial de la trufa.',
        image: '/images/piedmont/dia6.webp',          // cena en el castillo de Grinzane Cavour
        meals: 'Desayuno + cena', lodging: 'Villa Bella Vista',
        coords: [44.658, 7.998], label: 'Alba · Grinzane Cavour',
      },
      {
        n: 7, date: 'Dom 25 Oct', dayTitle: 'Despedida',
        title: 'Última mañana en la villa y transfers',
        body: 'Última mañana sin apuro —recordar que esa madrugada termina el horario de verano, el staff coordina alarmas y transfers—. Desayuno relajado con los productos de la semana, fotos finales en el jardín e intercambio de contactos. A las 11:00, transfers escalonados a Malpensa (MXP) o Torino (TRN) en van Mercedes V-Class según los vuelos de cada pareja. Arrivederci, Piemonte.',
        image: '/images/piedmont/dia7.webp',          // última mañana en la villa
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
        { label: 'SERVICIOS', value: 'Housekeeping diario · Yoga y Pilates' },
      ],
      gallery: [
        { image: '/images/piedmont/villa-1.webp', caption: 'La villa' },
        { image: '/images/piedmont/villa-2.webp', caption: 'La piscina' },
        { image: '/images/piedmont/villa-3.webp', caption: 'Las suites' },
        { image: '/images/piedmont/villa-4.webp', caption: 'La mesa larga' },
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
