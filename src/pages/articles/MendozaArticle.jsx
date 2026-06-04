import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import WaitingListModal from '@/components/WaitingListModal';

const MendozaArticle = () => {
  const { i18n } = useTranslation();
  const es = i18n.language === 'es';
  const openWaitingList = () => {
    window.dispatchEvent(new Event('open-waitlist-modal'));
  };

  return (
    <>
      <Helmet>
        <title>Mendoza's Hidden Gems: Beyond the Malbec | The Wine Trips</title>
        <meta name="description" content="While Malbec dominates, Mendoza produces exceptional Cabernet Sauvignon, Chardonnay, and Syrah. Discover the high-altitude estates redefining Argentine wine excellence in the Uco Valley, Luján de Cuyo, and beyond." />
        <meta name="keywords" content="mendoza wine beyond malbec, uco valley wine, high altitude argentina wine, mendoza wine travel, argentine wine guide, luján de cuyo, mendoza bodegas visit" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://thewinetrips.com/journal/mendoza-hidden-gems-beyond-malbec" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://thewinetrips.com/journal/mendoza-hidden-gems-beyond-malbec" />
        <meta property="og:title" content="Mendoza's Hidden Gems: Beyond the Malbec | The Wine Trips" />
        <meta property="og:description" content="Discover the high-altitude estates redefining Argentine wine excellence." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/journal/mendoza-hidden-gems-beyond-malbec" />
        <meta property="twitter:title" content="Mendoza's Hidden Gems: Beyond the Malbec | The Wine Trips" />
        <meta property="twitter:description" content="Discover the high-altitude estates redefining Argentine wine excellence." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
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
              src="https://images.unsplash.com/photo-1690744231244-5e8f5beed61f" 
              alt="Mendoza vineyard with Andes mountains background" 
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
                {es ? "Descubrimiento" : "Discovery"}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] text-white leading-tight font-light mb-6">
                {es ? <>Los tesoros ocultos de Mendoza:<br />más allá del Malbec</> : <>Mendoza's Hidden Gems:<br />Beyond the Malbec</>}
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
              <span>{es ? "5 de noviembre de 2023" : "November 5, 2023"}</span>
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
              {es ? '"Mendoza no es un monolito. Es un paisaje vertical donde cada 100 metros de elevación reescriben las reglas de lo que es posible en la copa."' : '"Mendoza is not a monolith. It is a vertical landscape where every 100 meters of elevation rewrites the rules of what is possible in the glass."'}
            </p>

            <p className="mb-6">
              {es ? "Para el consumidor promedio, Mendoza es sinónimo de Malbec. Es una relación que le sirvió bien a la Argentina, posicionando al país con firmeza en el mapa mundial del vino con tintos frutados y aterciopelados que ofrecen un placer inmenso. Sin embargo, enfocarse únicamente en el Malbec es como visitar París y nunca alejarse de la Torre Eiffel; te perdés el verdadero alma del lugar." : "To the average consumer, Mendoza is synonymous with Malbec. It is a relationship that has served Argentina well, putting the country firmly on the global wine map with fruit-forward, velvety reds that offer immense pleasure. However, focusing solely on Malbec is like visiting Paris and never leaving the Eiffel Tower; you miss the true soul of the place."}
            </p>

            <p className="mb-6">
              {es ? "Una revolución silenciosa está ocurriendo al pie de los Andes. Los enólogos, tras dominar su varietal insignia, ahora empujan los límites del terroir con Cabernet Franc de clase mundial, Chardonnay de precisión quirúrgica y Pinot Noir que rivaliza con el Viejo Mundo." : "A quiet revolution is taking place in the foothills of the Andes. Winemakers, having mastered their flagship varietal, are now pushing the boundaries of terroir with world-class Cabernet Franc, laser-sharp Chardonnay, and Pinot Noir that rivals the Old World."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "El factor vertical" : "The Vertical Factor"}</h2>
            <p className="mb-6">
              {es ? <>En la mayoría de las regiones vitivinícolas, la latitud (la distancia al ecuador) determina el clima. En Mendoza, la <em>altura</em> es la reina. La diferencia entre un viñedo a 900 metros en Luján de Cuyo y otro a 1.500 metros en Gualtallary es profunda.</> : <>In most wine regions, latitude (distance from the equator) determines climate. In Mendoza, <em>altitude</em> is king. The difference between a vineyard at 900 meters in Luján de Cuyo and one at 1,500 meters in Gualtallary is profound.</>}
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#c9a96e]">
              <li>{es ? <><strong>Amplitud térmica:</strong> Los sitios de gran altura experimentan enormes variaciones de temperatura: días cálidos y noches heladas. Esto preserva la acidez mientras permite la acumulación de azúcar.</> : <><strong>Thermal Amplitude:</strong> High-altitude sites experience massive temperature swings—warm days and freezing nights. This preserves acidity while allowing sugar accumulation.</>}</li>
              <li>{es ? <><strong>Radiación UV:</strong> El aire fino de la montaña permite una intensa exposición a los rayos UV, lo que hace que las pieles de las uvas se engrosen como medida de protección. Esto da como resultado vinos de color profundo y potentes antioxidantes.</> : <><strong>UV Radiation:</strong> The thin mountain air allows for intense UV exposure, causing grape skins to thicken as a protective measure. This results in wines with deep color and powerful antioxidants.</>}</li>
            </ul>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "El ascenso del Cabernet Franc" : "The Rise of Cabernet Franc"}</h2>
            <p className="mb-6">
              {es ? "Si el Malbec es el rey de Mendoza, el Cabernet Franc es el príncipe en ascenso. Plantado originalmente como uva de corte, encontró una expresión única en los suelos ricos en caliza del Valle de Uco." : "If Malbec is the king of Mendoza, Cabernet Franc is the rising prince. Originally planted as a blending grape, it has found a unique expression in the limestone-rich soils of the Uco Valley."}
            </p>
            <p className="mb-6">
              {es ? "A diferencia de los ejemplares herbáceos del Valle del Loira, el Franc argentino de altura es floral, mineral y especiado, mostrando a menudo notas de pimiento rojo asado, grafito y hierbas silvestres. Productores como El Enemigo y Catena Zapata han demostrado que estos vinos pueden alcanzar puntajes de 100 puntos y competir mano a mano con los mejores de Bordeaux." : "Unlike the herbaceous examples from the Loire Valley, high-altitude Argentine Franc is floral, mineral, and spicy, often showing notes of roasted red pepper, graphite, and wild herbs. Producers like El Enemigo and Catena Zapata have proven that these wines can achieve 100-point scores and stand toe-to-toe with the best of Bordeaux."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Los vinos blancos del desierto" : "White Wines of the Desert"}</h2>
            <p className="mb-6">
              {es ? "Quizás el descubrimiento más sorprendente para los visitantes sea la calidad de los vinos blancos de Mendoza. Históricamente, se consideraba que la región era demasiado calurosa para blancos elegantes. ¿La solución? Subir más alto." : "Perhaps the most surprising discovery for visitors is the quality of Mendoza's white wines. Historically, the region was considered too hot for elegant whites. The solution? Go higher."}
            </p>
            <p className="mb-6">
              {es ? "En las alturas extremas de Tupungato y Gualtallary, el Chardonnay conserva una acidez filosa y una mineralidad salina que recuerda a Chablis, aunque con un distintivo perfil frutal sudamericano besado por el sol." : "In the extreme altitudes of Tupungato and Gualtallary, Chardonnay retains a razor-sharp acidity and saline minerality that is reminiscent of Chablis, yet with a distinct South American sun-kissed fruit profile."}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">{es ? "Luján de Cuyo vs. Uco Valley" : "Luján de Cuyo vs. Uco Valley"}</h3>
            <p className="mb-4">
              {es ? "Entender Mendoza requiere distinguir entre sus dos zonas principales:" : "Understanding Mendoza requires distinguishing between its two main zones:"}
            </p>
            <p className="mb-4">
              {es ? <><strong>Luján de Cuyo:</strong> El corazón tradicional. Menor altura, más cálido, con viñas viejas (algunas de más de 100 años). Los vinos de acá son exuberantes, suaves y generosos.</> : <><strong>Luján de Cuyo:</strong> The traditional heartland. Lower altitude, warmer, with old vines (some over 100 years old). The wines here are lush, soft, and generous.</>}
            </p>
            <p className="mb-8">
              {es ? <><strong>Uco Valley:</strong> La frontera salvaje. Más alto, más fresco y más rocoso. Los vinos son tensos, estructurados, florales y construidos para una larga guarda. Es acá donde se está definiendo la "nueva Argentina".</> : <><strong>Uco Valley:</strong> The wild frontier. Higher, cooler, and rockier. The wines are tense, structured, floral, and built for long aging. It is here that the "new Argentina" is being defined.</>}
            </p>

            <p className="mt-12 text-lg font-medium italic text-gray-800">
              {es ? "Visitar Mendoza hoy es presenciar una región en transición: segura de su herencia, pero explorando incansablemente nuevas fronteras. Es un lugar donde las montañas no solo aportan un telón de fondo; dictan la esencia misma del líquido en tu copa." : "To visit Mendoza today is to witness a region in transition—confident in its heritage, yet relentlessly exploring new frontiers. It is a place where the mountains don't just provide a backdrop; they dictate the very essence of the liquid in your glass."}
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
            
            <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-4">{es ? "Descubrí nuestra Experiencia Mendoza" : "Explore our Mendoza Experience"}</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              {es ? "Siete días recorriendo Luján de Cuyo, Maipú y el Valle de Uco de gran altura. Acceso privado a bodegas, visitas en época de vendimia y toda la amplitud del vino argentino. Limitado a 4 a 8 huéspedes." : "Seven days through Luján de Cuyo, Maipú, and the high-altitude Uco Valley. Private bodega access, harvest season visits, and the full breadth of Argentine wine. Limited to 4–8 guests."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/experiences"
                className="px-8 py-3 bg-[#1a1f2e] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c9a96e] transition-colors duration-300"
              >
                {es ? "Ver el itinerario de Mendoza" : "View the Mendoza Itinerary"}
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
            {(es ? ['Mendoza', 'Argentina', 'Malbec', 'Uco Valley', 'Vino de Altura', 'Vino Sudamericano', 'Viajes de Vino', 'Visitas a Bodegas'] : ['Mendoza', 'Argentina', 'Malbec', 'Uco Valley', 'High Altitude Wine', 'South American Wine', 'Wine Travel', 'Bodega Visits']).map((tag) => (
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
              <Link to="/journal/barolo-king-italian-wines" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1696636533515-c9f7fda368f2" 
                      alt="Piedmont Barolo wine region" 
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
            </div>
          </div>
        </section>

        <WaitingListModal />
      </div>
    </>
  );
};

export default MendozaArticle;