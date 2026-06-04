import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import WaitingListModal from '@/components/WaitingListModal';

const BordeauxLeftBankArticle = () => {
  const { i18n } = useTranslation();
  const es = i18n.language === 'es';
  return (
    <>
      <Helmet>
        <title>Bordeaux's Left Bank: A Masterclass in Terroir | The Wine Trips</title>
        <meta name="description" content="Discover the legendary châteaux and distinctive wines that define Bordeaux's Left Bank. An expert guide to Médoc appellations, Cabernet Sauvignon terroir, and what makes these wines the world's gold standard." />
        <meta name="keywords" content="bordeaux left bank, médoc wine guide, bordeaux châteaux, cabernet sauvignon terroir, pauillac wine, margaux wine, bordeaux wine travel" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://thewinetrips.com/journal/bordeaux-left-bank-masterclass-terroir" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://thewinetrips.com/journal/bordeaux-left-bank-masterclass-terroir" />
        <meta property="og:title" content="Bordeaux's Left Bank: A Masterclass in Terroir | The Wine Trips" />
        <meta property="og:description" content="Discover the legendary châteaux and distinctive wines that define Bordeaux's Left Bank." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/journal/bordeaux-left-bank-masterclass-terroir" />
        <meta property="twitter:title" content="Bordeaux's Left Bank: A Masterclass in Terroir | The Wine Trips" />
        <meta property="twitter:description" content="Discover the legendary châteaux and distinctive wines that define Bordeaux's Left Bank." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
      </Helmet>

      <div className="bg-[#f9f7f4] min-h-screen font-['Jost'] text-[#1a1f2e]">
        
        {/* Navigation Bar Placeholder (Absolute) */}
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
              src="https://images.unsplash.com/photo-1657117735687-50cda95e80cc" 
              alt="Bordeaux vineyard château" 
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
                {es ? <>La Orilla Izquierda de Bordeaux:<br />una clase magistral de terroir</> : <>Bordeaux's Left Bank:<br />A Masterclass in Terroir</>}
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
              <span>{es ? "12 de octubre de 2023" : "October 12, 2023"}</span>
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
              {es ? "\"Entender la Orilla Izquierda es entender la profunda conversación entre el océano Atlántico, los suelos de grava y la noble uva Cabernet Sauvignon.\"" : "\"To understand the Left Bank is to understand the profound conversation between the Atlantic ocean, the gravel soils, and the noble Cabernet Sauvignon grape.\""}
            </p>

            <p className="mb-6">
              {es ? "Cuando los amantes del vino hablan de \"la Orilla Izquierda\", invocan un tramo sagrado de tierra que alberga algunas de las marcas agrícolas más famosas de la historia: Lafite, Latour, Margaux, Mouton y Haut-Brion. Geográficamente, esta región se asienta sobre la orilla izquierda del estuario de la Gironda y del río Garona, abarcando las célebres regiones del Médoc y de Graves." : "When wine lovers speak of \"The Left Bank,\" they are invoking a hallowed stretch of land that houses some of the most famous agricultural brands in history: Lafite, Latour, Margaux, Mouton, and Haut-Brion. Geographically, this region sits on the left bank of the Gironde estuary and the Garonne river, encompassing the famous Médoc and Graves regions."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La importancia de la grava" : "The Importance of Gravel"}</h2>
            <p className="mb-6">
              {es ? <>Si hay una palabra que define el terroir de la Orilla Izquierda, es <em>grava</em>. Hace millones de años, los ríos arrastraron piedras lisas, capaces de retener el calor, desde los montes Pirineos y las depositaron acá. Estos suelos de grava cumplen dos funciones críticas:</> : <>If there is one word that defines the terroir of the Left Bank, it is <em>gravel</em>. Millions of years ago, the rivers carried smooth, heat-retaining stones from the Pyrenees mountains and deposited them here. These gravel soils serve two critical functions:</>}
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#c9a96e]">
              <li><strong>{es ? "Drenaje:" : "Drainage:"}</strong> {es ? "Las piedras permiten que el agua drene rápido, obligando a las raíces de la vid a hundirse en profundidad —a veces 10 metros o más— en el subsuelo para buscar humedad y nutrientes. Esta lucha genera intensidad y complejidad en la fruta." : "The stones allow water to drain away quickly, forcing the vines' roots to dig deep—sometimes 10 meters or more—into the subsoil to find moisture and nutrients. This struggle creates intensity and complexity in the fruit."}</li>
              <li><strong>{es ? "Retención de calor:" : "Heat Retention:"}</strong> {es ? "Las piedras pálidas reflejan la luz solar sobre las vides y retienen el calor durante la noche, favoreciendo la maduración de la tardía uva Cabernet Sauvignon." : "The pale stones reflect sunlight back onto the vines and retain heat during the night, aiding the ripening of the late-ripening Cabernet Sauvignon grape."}</li>
            </ul>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "El reino del Cabernet" : "The Kingdom of Cabernet"}</h2>
            <p className="mb-6">
              {es ? "Si bien casi todos los tintos de Bordeaux son ensamblajes, la Orilla Izquierda es el reino indiscutido del Cabernet Sauvignon. Acá, el ensamblaje suele estar dominado por el Cabernet (a menudo entre el 60 y el 80%), acompañado por Merlot, Cabernet Franc y Petit Verdot." : "While almost all red Bordeaux is a blend, the Left Bank is the undisputed kingdom of Cabernet Sauvignon. Here, the blend is typically dominated by Cabernet (often 60–80%), supported by Merlot, Cabernet Franc, and Petit Verdot."}
            </p>
            <p className="mb-6">
              {es ? "Los vinos que resultan son estructurados, tánicos y construidos para el largo plazo. Un Pauillac o un St-Estèphe joven puede ser austero, incluso intimidante. Pero dale 15, 20 o 40 años y se transforma en una bebida de profunda elegancia, con notas de cedro, mina de lápiz, grosella negra (cassis) y caja de cigarros." : "The resulting wines are structured, tannic, and built for the long haul. A young Pauillac or St-Estèphe can be austere, even forbidding. But give it 15, 20, or 40 years, and it transforms into a beverage of profound elegance, offering notes of cedar, pencil shavings, blackcurrant (cassis), and cigar box."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Recorré las denominaciones" : "Navigating the Appellations"}</h2>
            <p className="mb-6">
              {es ? "Manejando hacia el norte desde la ciudad de Bordeaux por la ruta D2 (la \"Route des Châteaux\"), atravesás las cuatro comunas legendarias del Haut-Médoc:" : "Driving north from the city of Bordeaux along the D2 highway (the \"Route des Châteaux\"), you pass through the four legendary communes of the Haut-Médoc:"}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Margaux</h3>
            <p className="mb-4">
              {es ? "La más al sur y la más extensa de las cuatro. Los vinos de Margaux son célebres por su perfume, su elegancia y su sedosidad. Se los suele describir como \"un puño de hierro en un guante de terciopelo\"." : "The most southerly and extensive of the four. Margaux wines are famed for their perfume, elegance, and silkiness. They are often described as the \"iron fist in a velvet glove.\""}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Saint-Julien</h3>
            <p className="mb-4">
              {es ? "La comuna más pequeña, pero quizás la más consistente. Saint-Julien ofrece el equilibrio perfecto entre la elegancia de Margaux y el poder de Pauillac. No tiene Premiers Crus, pero sí una abundancia de \"Super Seconds\"." : "The smallest commune, but arguably the most consistent. Saint-Julien offers the perfect balance between the elegance of Margaux and the power of Pauillac. It has no First Growths, but an abundance of \"Super Seconds.\""}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Pauillac</h3>
            <p className="mb-4">
              {es ? "La sede del poder. Hogar de tres de los cinco Premiers Crus (Lafite, Latour, Mouton), Pauillac produce el vino por excelencia de la Orilla Izquierda: oscuro, denso, poderoso y de una longevidad increíble." : "The seat of power. Home to three of the five First Growths (Lafite, Latour, Mouton), Pauillac produces the quintessential Left Bank wine: dark, dense, powerful, and incredibly long-lived."}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Saint-Estèphe</h3>
            <p className="mb-8">
              {es ? "La comuna más al norte, donde el suelo contiene más arcilla. Esto ayuda a las vides en los años calurosos y secos. Históricamente conocida por sus taninos rústicos, la elaboración moderna reveló acá un carácter especiado y terroso único que está conquistando el reconocimiento mundial." : "The northernmost commune, where the soil contains more clay. This helps the vines in hot, dry years. Historically known for rustic tannins, modern winemaking has revealed a unique spicy, earthy character here that is winning global acclaim."}
            </p>

            <p className="mt-12 text-lg font-medium italic text-gray-800">
              {es ? "Visitar estas propiedades no es apenas una oportunidad de cata; es adentrarse en la historia viva, donde las clasificaciones de 1855 todavía dictan la jerarquía de uno de los mercados de lujo más lucrativos del mundo." : "Visiting these estates is not merely a tasting opportunity; it is a step into living history, where the classifications of 1855 still dictate the hierarchy of one of the world's most lucrative luxury markets."}
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
            
            <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-4">{es ? "Descubrí nuestra Experiencia Bordeaux" : "Explore our Bordeaux Experience"}</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              {es ? "Siete días por la Orilla Izquierda, la Orilla Derecha y Graves. Acceso privado a châteaux, cenas con estrella Michelin y catas de añadas raras. Limitado a 4 u 8 invitados." : "Seven days across the Left Bank, Right Bank, and Graves. Private château access, Michelin-starred dining, and rare vintage tastings. Limited to 4–8 guests."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/experiences"
                className="px-8 py-3 bg-[#1a1f2e] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c9a96e] transition-colors duration-300"
              >
                {es ? "Ver el itinerario" : "View Itinerary"}
              </Link>
              {/* This button essentially does nothing visual in this mockup without state,
                  but in a real app would trigger the modal logic */}
              <button
                className="px-8 py-3 border border-[#1a1f2e] text-[#1a1f2e] text-xs font-bold tracking-widest uppercase hover:bg-[#1a1f2e] hover:text-white transition-colors duration-300"
              >
                {es ? "Sumate a la lista de espera" : "Join Waiting List"}
              </button>
            </div>
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {['Bordeaux', es ? 'Orilla Izquierda' : 'Left Bank', 'Médoc', 'Cabernet Sauvignon', es ? 'Visitas a Châteaux' : 'Château Visits', es ? 'Viajes de Vino' : 'Wine Travel', es ? 'Francia' : 'France'].map((tag) => (
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
              <Link to="/journal/barolo-king-italian-wines" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1696636533515-c9f7fda368f2" 
                      alt="Barolo vineyards" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">{es ? "Cultura del Vino" : "Wine Education"}</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {es ? "Barolo: el rey de los vinos italianos" : "Barolo: The King of Italian Wines"}
                    </h4>
                    <span className="mt-auto inline-flex items-center text-xs font-bold text-[#1a1f2e] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      {es ? "Leer más" : "Read More"} <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </Link>

              {/* Card 2 */}
              <Link to="/journal/mendoza-hidden-gems-beyond-malbec" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1636318414118-0b8f285082fc" 
                      alt="Mendoza vineyards" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">{es ? "Descubrimiento" : "Discovery"}</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {es ? "Los tesoros ocultos de Mendoza: más allá del Malbec" : "Mendoza's Hidden Gems: Beyond the Malbec"}
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

export default BordeauxLeftBankArticle;