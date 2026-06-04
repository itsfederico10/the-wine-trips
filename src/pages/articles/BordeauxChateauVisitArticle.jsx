import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import WaitingListModal from '@/components/WaitingListModal';

const BordeauxChateauVisitArticle = () => {
  const { i18n } = useTranslation();
  const es = i18n.language === 'es';
  const openWaitingList = () => {
    window.dispatchEvent(new Event('open-waitlist-modal'));
  };

  return (
    <>
      <Helmet>
        <title>How to Visit Bordeaux Châteaux: The Insider Guide | The Wine Trips</title>
        <meta name="description" content="Planning a visit to Bordeaux châteaux? Our insider guide covers how to book appointments, which estates welcome visitors, what to expect at a tasting, the best seasons to go, and how to access experiences that most tourists never find." />
        <meta name="keywords" content="how to visit bordeaux chateaux, bordeaux wine tasting visit, bordeaux winery tours, visiting bordeaux estates, bordeaux wine tourism guide, médoc château visits, private bordeaux wine tour" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="bg-[#f9f7f4] min-h-screen font-['Jost'] text-[#1a1f2e]">

        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 w-full z-20 p-6">
          <Link to="/journal" className="inline-flex items-center gap-2 text-white/80 hover:text-[#c9a96e] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs font-bold">{es ? "Volver al Journal" : "Back to Journal"}</span>
          </Link>
        </nav>

        {/* Hero Section */}
        <header className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1669923804952-c72912e9250e"
              alt="Classic Bordeaux château architecture with vineyard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1a1f2e]/90"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-block py-1 px-3 border border-[#c9a96e]/50 text-[#c9a96e] text-[10px] font-bold tracking-[0.2em] uppercase mb-6 bg-black/30 backdrop-blur-sm">
                {es ? "Guía de Región" : "Region Guide"}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] text-white leading-tight font-light mb-6">
                {es ? <>Cómo visitar los châteaux de Bordeaux:<br />la guía del conocedor</> : <>How to Visit Bordeaux Châteaux:<br />The Insider Guide</>}
              </h1>
            </motion.div>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-[780px] mx-auto px-6 -mt-20 relative z-10">

          {/* Metadata Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-6 shadow-xl rounded-sm flex flex-wrap justify-between items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider border-t-4 border-[#c9a96e] mb-12"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#c9a96e]" />
              <span>{es ? "5 de febrero de 2024" : "February 5, 2024"}</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c9a96e]" />
              <span>{es ? "9 min de lectura" : "9 min read"}</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#c9a96e]" />
              <span>The Wine Trips</span>
            </div>
          </motion.div>

          {/* Body Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="prose prose-lg max-w-none font-light leading-relaxed text-[#1a1f2e]"
          >
            <p className="text-xl font-['Cormorant_Garamond'] italic text-gray-600 mb-8 border-l-2 border-[#c9a96e] pl-6 py-2">
              {es ? "«Bordeaux no es Napa Valley. No podés simplemente llegar hasta las puertas de Château Margaux y esperar una cata. Acá el acceso es una moneda, y el protocolo es tan estructurado como los propios vinos.»" : '"Bordeaux is not Napa Valley. You cannot simply drive up to the gates of Château Margaux and expect a tasting. Here, access is a currency, and the protocol is as structured as the wines themselves."'}
            </p>

            <p className="mb-6">
              {es ? "Para el no iniciado, planear un viaje a Bordeaux puede ser intimidante. Con más de 6.000 châteaux, una geografía compleja de orilla izquierda y orilla derecha, y una cultura que valora la privacidad y la tradición, es fácil cometer errores de principiante. Pero, bien encarada, una visita a Bordeaux es la cumbre del viaje de vino: la oportunidad de caminar por la historia y probar las referencias del mundo del vino." : "For the uninitiated, planning a trip to Bordeaux can be daunting. With over 6,000 châteaux, a complex geography of Left Bank versus Right Bank, and a culture that values privacy and tradition, it is easy to make rookie mistakes. But when navigated correctly, a visit to Bordeaux is the pinnacle of wine travel—a chance to walk through history and taste the benchmarks of the wine world."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La regla de oro: solo con cita" : "The Golden Rule: Appointment Only"}</h2>
            <p className="mb-6">
              {es ? <>La primera regla de Bordeaux es <em>Rendez-Vous</em>. A diferencia de las regiones del Nuevo Mundo, donde las salas de cata reciben sin reserva, casi todos los grandes estates de Bordeaux exigen cita previa.</> : <>The first rule of Bordeaux is <em>Rendez-Vous</em>. Unlike New World wine regions where cellar doors are open to walk-ins, nearly all top estates in Bordeaux require advance appointments.</>}
            </p>
            <p className="mb-6">
              {es ? <><strong>¿Por qué?</strong> Porque son estates agrícolas en funcionamiento, muchas veces con equipos chicos. Quien te sirve el vino puede ser el maestro de bodega o el propio dueño.</> : <><strong>Why?</strong> Because these are working agricultural estates, often with small teams. The person pouring your wine might be the cellar master or the owner.</>}
            </p>
            <p className="mb-6">
              {es ? <><strong>Cómo reservar:</strong></> : <><strong>How to Book:</strong></>}
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#c9a96e]">
              <li>{es ? <><strong>Directo:</strong> muchos estates ya tienen sitios web con formularios de reserva. Buscá la sección «Visites» u «Oenotourisme».</> : <><strong>Directly:</strong> Many estates now have websites with booking forms. Look for the "Visites" or "Oenotourisme" section.</>}</li>
              <li>{es ? <><strong>Oficinas de turismo locales:</strong> las oficinas de turismo de Pauillac, Saint-Émilion y la ciudad de Bordeaux son excelentes recursos y pueden reservarte las visitas.</> : <><strong>Local Tourist Offices:</strong> The tourist offices in Pauillac, Saint-Émilion, and Bordeaux city are excellent resources and can book appointments for you.</>}</li>
              <li>{es ? <><strong>Servicios de concierge:</strong> para los Premier Cru (Lafite, Latour, etc.), reservar de forma directa suele ser imposible. Esas visitas se gestionan normalmente a través de operadores de vino profesionales o negociants.</> : <><strong>Concierge Services:</strong> For the First Growths (Lafite, Latour, etc.), direct booking is often impossible. These visits are typically arranged through professional wine tour operators or negociants.</>}</li>
            </ul>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Estrategia geográfica: izquierda vs. derecha" : "Geography Strategy: Left vs. Right"}</h2>
            <p className="mb-6">
              {es ? "Bordeaux es enorme. Manejar de Saint-Estèphe (orilla izquierda) a Saint-Émilion (orilla derecha) puede llevar más de una hora y media. No intentes hacer las dos en un día." : "Bordeaux is massive. Driving from Saint-Estèphe (Left Bank) to Saint-Émilion (Right Bank) can take over an hour and a half. Do not attempt to do both in one day."}
            </p>
            <p className="mb-6">
              {es ? <><strong>La orilla izquierda (Médoc y Graves):</strong> es la tierra de los grandes châteaux. Los estates son maravillas arquitectónicas, grandes e imponentes. Estás visitando instituciones. Concentrate en la D2, la «Route des Châteaux», y planificá 2 o 3 visitas como máximo por día.</> : <><strong>The Left Bank (Médoc & Graves):</strong> This is the land of the grand châteaux. The estates are architectural marvels, large, and imposing. You are visiting institutions. Focus on the D2 "Route des Châteaux" and plan for 2-3 visits maximum per day.</>}
            </p>
            <p className="mb-6">
              {es ? <><strong>La orilla derecha (Saint-Émilion y Pomerol):</strong> acá la escala es más chica, más íntima. El «château» puede ser una granja modesta. El clima es más cálido y es más probable que conozcas a la familia.</> : <><strong>The Right Bank (Saint-Émilion & Pomerol):</strong> Here, the scale is smaller, more intimate. The "château" might be a modest farmhouse. The vibe is warmer, and you are more likely to meet the family.</>}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Qué esperar durante la visita" : "What to Expect During the Visit"}</h2>
            <p className="mb-6">
              {es ? "Una visita estándar suele durar entre 60 y 90 minutos y sigue una estructura clásica:" : "A standard visit usually lasts 60–90 minutes and follows a classic structure:"}
            </p>
            <ol className="list-decimal pl-5 space-y-2 mb-8 marker:text-[#c9a96e] marker:font-bold">
              <li>{es ? <><strong>El viñedo:</strong> una mirada al terroir, el suelo y las vides.</> : <><strong>The Vineyard:</strong> A look at the terroir, soil, and vines.</>}</li>
              <li>{es ? <><strong>La sala de cubas (Cuverie):</strong> donde ocurre la fermentación. Vas a ver cubas de acero inoxidable, hormigón o roble.</> : <><strong>The Vat Room (Cuverie):</strong> Where fermentation takes place. You'll see stainless steel, concrete, or oak vats.</>}</li>
              <li>{es ? <><strong>La sala de barricas (Chai):</strong> lo más destacado. Hileras de barricas de roble criando el vino. Suele hacer frío, así que llevá un abrigo.</> : <><strong>The Barrel Cellar (Chai):</strong> The highlight. Rows of oak barrels aging the wine. It is often cool, so bring a jacket.</>}</li>
              <li>{es ? <><strong>La cata:</strong> en general 1 a 3 vinos. Muchas veces el «Grand Vin» (el vino principal) y el «Second Vin».</> : <><strong>The Tasting:</strong> Usually 1–3 wines. Often the "Grand Vin" (the top wine) and the "Second Vin."</>}</li>
            </ol>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "Etiqueta y consejos" : "Etiquette & Tips"}</h3>
            <p className="mb-4">
              {es ? <><strong>Código de vestimenta:</strong> «smart casual» es el estándar. No necesitás traje, pero evitá las ojotas y la ropa de gimnasio. Estás entrando a un lugar de trabajo y de tradición.</> : <><strong>Dress Code:</strong> "Smart casual" is the standard. You don't need a suit, but avoid flip-flops and gym wear. You are entering a place of business and tradition.</>}
            </p>
            <p className="mb-4">
              {es ? <><strong>Escupir:</strong> si vas a visitar varios estates, escupir no es de mala educación; se espera que lo hagas. Los profesionales escupen.</> : <><strong>Spitting:</strong> If you are visiting multiple estates, spitting is not rude; it is expected. Professionals spit.</>}
            </p>
            <p className="mb-4">
              {es ? <><strong>Puntualidad:</strong> llegá exactamente a horario. Si llegás 15 minutos tarde, podés perder tu turno por completo.</> : <><strong>Punctuality:</strong> Arrive exactly on time. If you are 15 minutes late, you may miss your slot entirely.</>}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Cuándo ir" : "When to Go"}</h2>
            <p className="mb-6">
              {es ? <><strong>Evitá:</strong> la semana «En Primeur» (normalmente en abril), cuando el comercio del vino invade la ciudad y los châteaux cierran al público. Agosto también es la clásica temporada de vacaciones en Francia; algunos estates funcionan con personal mínimo.</> : <><strong>Avoid:</strong> "En Primeur" week (usually April) when the wine trade descends on the city and châteaux are closed to the public. Also, August is classic French holiday time; some estates may operate with skeleton crews.</>}
            </p>
            <p className="mb-6">
              {es ? <><strong>Mejor época:</strong> mayo, junio, septiembre y octubre. El clima es hermoso y los viñedos están verdes (o dorándose en otoño). La vendimia (septiembre/octubre) es apasionante pero ajetreada: reservá con mucha anticipación.</> : <><strong>Best Time:</strong> May, June, September, and October. The weather is beautiful, and the vineyards are green (or turning gold in autumn). Harvest (September/October) is exciting but busy—book well in advance.</>}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "El secreto del conocedor" : "The Insider Secret"}</h2>
            <p className="mb-6">
              {es ? <>La mayoría de los turistas hacen el tour, catan y se van. La verdadera movida de conocedor es reservar un <strong>almuerzo en el château</strong>. Varios estates (como Château Troplong Mondot en Saint-Émilion o Château Haut-Bailly en Pessac-Léognan) abrieron mesas privadas o restaurantes.</> : <>Most tourists do the tour, taste, and leave. The true insider move is to book a <strong>lunch at the château</strong>. Several estates (like Château Troplong Mondot in Saint-Émilion or Château Haut-Bailly in Pessac-Léognan) have opened private tables or restaurants.</>}
            </p>
            <p className="mb-8">
              {es ? "Comer en el corazón de las viñas, maridando las añadas más viejas del estate con la gastronomía local, es una experiencia que trasciende una simple cata. Es el recuerdo de toda una vida." : "Dining in the heart of the vines, pairing the estate's older vintages with local gastronomy, is an experience that transcends a simple tasting. It is the memory of a lifetime."}
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-16 border-2 border-[#c9a96e] p-8 md:p-12 text-center bg-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent opacity-50"></div>

            <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-4">{es ? "Viví Bordeaux como corresponde" : "Experience Bordeaux the Right Way"}</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              {es ? "Siete días por la orilla izquierda, la orilla derecha y Graves — con acceso privado a châteaux, catas verticales y charlas con los winemakers, gestionadas a través de nuestra red de estates. Limitado a 4–8 huéspedes." : "Seven days across Left Bank, Right Bank, and Graves — with private château access, vertical tastings, and winemaker conversations arranged through our estate network. Limited to 4–8 guests."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/experiences"
                className="px-8 py-3 bg-[#1a1f2e] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c9a96e] transition-colors duration-300"
              >
                {es ? "Ver el itinerario de Bordeaux" : "View the Bordeaux Itinerary"}
              </Link>
              <button
                onClick={openWaitingList}
                className="px-8 py-3 border border-[#1a1f2e] text-[#1a1f2e] text-xs font-bold tracking-widest uppercase hover:bg-[#1a1f2e] hover:text-white transition-colors duration-300"
              >
                {es ? "Sumate a la lista de espera" : "Join the Waiting List"}
              </button>
            </div>
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {(es
              ? ['Bordeaux', 'Visitas a Châteaux', 'Enoturismo', 'Orilla Izquierda', 'Médoc', 'Cómo Visitar', 'Viajes de Vino', 'Francia']
              : ['Bordeaux', 'Château Visits', 'Wine Tourism', 'Left Bank', 'Médoc', 'How To', 'Wine Travel', 'France']
            ).map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-[#c9a96e] text-[10px] font-bold tracking-widest uppercase hover:bg-[#c9a96e] hover:text-white transition-colors cursor-default">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

        </article>

        {/* Related Articles */}
        <section className="bg-white py-20 px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-center text-2xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-12">
              {es ? "Artículos relacionados" : "Related Articles"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <Link to="/journal/bordeaux-left-bank-masterclass-terroir" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1657117735687-50cda95e80cc"
                      alt="Bordeaux vineyard landscape"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">{es ? "Guía de Región" : "Region Guide"}</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {es ? "La Orilla Izquierda de Bordeaux: una clase magistral de terroir" : "Bordeaux's Left Bank: A Masterclass in Terroir"}
                    </h4>
                    <span className="mt-auto inline-flex items-center text-xs font-bold text-[#1a1f2e] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      {es ? "Leer más" : "Read More"} <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </Link>

              {/* Card 2 */}
              <Link to="/journal/saint-emilion-unesco-village-wine-guide" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1702742911910-7fabd36366a7"
                      alt="Saint-Émilion medieval village"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">{es ? "Guía de Región" : "Region Guide"}</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {es ? "Saint-Émilion: un pueblo UNESCO construido sobre el vino" : "Saint-Émilion: A UNESCO Village Built on Wine"}
                    </h4>
                    <span className="mt-auto inline-flex items-center text-xs font-bold text-[#1a1f2e] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      {es ? "Leer más" : "Read More"} <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </Link>
            </div>
          </div>
        </section>

        <WaitingListModal />
      </div>
    </>
  );
};

export default BordeauxChateauVisitArticle;
