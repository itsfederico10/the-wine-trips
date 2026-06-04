import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import WaitingListModal from '@/components/WaitingListModal';

const SaintEmilionArticle = () => {
  const { i18n } = useTranslation();
  const es = i18n.language === 'es';
  const openWaitingList = () => {
    window.dispatchEvent(new Event('open-waitlist-modal'));
  };

  return (
    <>
      <Helmet>
        <title>Saint-Émilion: A UNESCO Village Built on Wine | The Wine Trips</title>
        <meta name="description" content="Discover Saint-Émilion, the medieval UNESCO village at the heart of Bordeaux's Right Bank. An expert guide to its limestone terroir, Merlot-dominant wines, Grand Cru Classé estates, and how to visit one of France's most beautiful wine destinations." />
        <meta name="keywords" content="saint-émilion wine guide, saint emilion visit, bordeaux right bank, merlot bordeaux, saint emilion grand cru classé, right bank vs left bank bordeaux, visiting saint emilion" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://thewinetrips.com/journal/saint-emilion-unesco-village-wine-guide" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://thewinetrips.com/journal/saint-emilion-unesco-village-wine-guide" />
        <meta property="og:title" content="Saint-Émilion: A UNESCO Village Built on Wine | The Wine Trips" />
        <meta property="og:description" content="Discover Saint-Émilion, the medieval UNESCO village at the heart of Bordeaux's Right Bank." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/journal/saint-emilion-unesco-village-wine-guide" />
        <meta property="twitter:title" content="Saint-Émilion: A UNESCO Village Built on Wine | The Wine Trips" />
        <meta property="twitter:description" content="Discover Saint-Émilion, the medieval UNESCO village at the heart of Bordeaux's Right Bank." />
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
              src="https://images.unsplash.com/photo-1702742911910-7fabd36366a7" 
              alt="Saint-Émilion medieval village with vineyards" 
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
                {es ? <>Saint-Émilion: un pueblo UNESCO<br />construido sobre el vino</> : <>Saint-Émilion: A UNESCO Village<br />Built on Wine</>}
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
              <span>{es ? "10 de diciembre de 2023" : "December 10, 2023"}</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c9a96e]" />
              <span>{es ? "10 min de lectura" : "10 min read"}</span>
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
              {es ? '"Es un pueblo tallado en la misma piedra que nutre sus viñas. En Saint-Émilion, la historia no está solo en los libros; está en las cuevas de caliza, en la iglesia monolítica y en cada copa de Merlot."' : '"It is a village carved from the very stone that nourishes its vines. In Saint-Émilion, history isn\'t just in the books; it\'s in the limestone caves, the monolithic church, and every glass of Merlot."'}
            </p>

            <p className="mb-6">
              {es ? "Cruzar el puente de la Orilla Izquierda a la Orilla Derecha de Bordeaux es como entrar a otro país. Las grandes propiedades majestuosas del Médoc dan lugar a parcelas más pequeñas e íntimas. Los suelos de grava desaparecen, reemplazados por arcilla fresca y el arma secreta de la región: la caliza. Y en el corazón de todo está Saint-Émilion." : "Crossing the bridge from the Left Bank to the Right Bank of Bordeaux is like stepping into a different country. The grand, sweeping estates of the Médoc give way to smaller, intimate plots. The gravel soils disappear, replaced by cool clay and the region's secret weapon: limestone. And at the heart of it all lies Saint-Émilion."}
            </p>

            <p className="mb-6">
              {es ? "Reconocido como Patrimonio de la Humanidad por la UNESCO desde 1999, Saint-Émilion es visualmente deslumbrante: un anfiteatro de viñas que rodea un pueblo medieval de caliza. Pero para el enófilo, su belleza está bajo tierra, donde kilómetros de túneles guardan millones de botellas de algunos de los vinos más hedonistas del mundo." : "Recognized as a UNESCO World Heritage site since 1999, Saint-Émilion is visually stunning—an amphitheater of vines surrounding a medieval limestone village. But for the oenophile, its beauty lies underground, where miles of tunnels store millions of bottles of some of the world's most hedonistic wines."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "La trinidad del terroir" : "The Trinity of Terroir"}</h2>
            <p className="mb-6">
              {es ? "Saint-Émilion es complejo, pero su geología puede simplificarse a grandes rasgos en tres zonas distintas, cada una produciendo un estilo de vino diferente:" : "Saint-Émilion is complex, but its geology can be broadly simplified into three distinct zones, each producing a different style of wine:"}
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#c9a96e]">
              <li>{es ? <><strong>La meseta de caliza:</strong> El punto más alto de la denominación. Acá las viñas luchan por enterrar sus raíces a través de la roca (calcaire à astéries). Esto produce vinos de inmensa tensión, mineralidad y longevidad. (Pensá en Château Ausone, Château Canon).</> : <><strong>The Limestone Plateau:</strong> The highest point of the appellation. The vines here struggle to dig roots through the rock (calcaire à astéries). This produces wines of immense tension, minerality, and longevity. (Think Château Ausone, Château Canon).</>}</li>
              <li>{es ? <><strong>Las laderas (Côtes):</strong> Rodeando la meseta, estas colinas empinadas mezclan caliza con arcilla. Los vinos de acá son potentes y ricos, a menudo con un carácter "solar" por la exposición al sol. (Pensá en Château Pavie).</> : <><strong>The Slopes (Côtes):</strong> Surrounding the plateau, these steep hillsides mix limestone with clay. The wines here are powerful and rich, often with a "solar" character from the sun exposure. (Think Château Pavie).</>}</li>
              <li>{es ? <><strong>La llanura de grava y arena:</strong> Extendiéndose hacia Pomerol, esta zona tiene suelos de grava similares a los de la Orilla Izquierda. Produce vinos de elegancia y perfume, a menudo con un mayor porcentaje de Cabernet Franc. (Pensá en Château Cheval Blanc, Château Figeac).</> : <><strong>The Gravel/Sand Plain:</strong> Stretching towards Pomerol, this area has gravel soils similar to the Left Bank. It produces wines of elegance and perfume, often with a higher percentage of Cabernet Franc. (Think Château Cheval Blanc, Château Figeac).</>}</li>
            </ul>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "El Merlot y el Príncipe" : "Merlot and The Prince"}</h2>
            <p className="mb-6">
              {es ? <>Si el Cabernet Sauvignon es el Rey de la Orilla Izquierda, el <strong>Merlot</strong> es el Monarca indiscutido de la Derecha. En los suelos frescos de arcilla y caliza, el Merlot madura a la perfección, ofreciendo una textura exuberante, fruta de ciruela y una sensación aterciopelada en boca que hace que estos vinos sean accesibles incluso en su juventud.</> : <>If Cabernet Sauvignon is King of the Left Bank, <strong>Merlot</strong> is the undisputed Monarch of the Right. In the cool clay and limestone soils, Merlot ripens to perfection, offering lush texture, plum fruit, and a velvet mouthfeel that makes these wines approachable even in their youth.</>}
            </p>
            <p className="mb-6">
              {es ? <>Sin embargo, el ingrediente secreto de los grandes vinos de Saint-Émilion es el <strong>Cabernet Franc</strong>. A menudo llamado "el Príncipe", aporta especias, aromas florales (violetas) y estructura al corte, evitando que el Merlot se vuelva demasiado pesado o mermelado.</> : <>However, the secret ingredient in the greatest Saint-Émilion wines is <strong>Cabernet Franc</strong>. Often called "The Prince," it adds spice, floral aromatics (violets), and structure to the blend, preventing the Merlot from becoming too heavy or jammy.</>}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Las grandes propiedades" : "The Great Estates"}</h2>
            <p className="mb-6">
              {es ? "A diferencia de la Clasificación de 1855 del Médoc, que está grabada en piedra, la Clasificación de Saint-Émilion se revisa aproximadamente cada 10 años, creando una jerarquía dinámica (y a menudo controvertida)." : "Unlike the 1855 Classification of the Médoc which is set in stone, the Classification of Saint-Émilion is revised approximately every 10 years, creating a dynamic (and often controversial) hierarchy."}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Château Ausone</h3>
            <p className="mb-4">
              {es ? "Encaramado al borde del acantilado de caliza, lleva el nombre del poeta romano Ausonio. Con una producción minúscula y viñas que parecen crecer directamente de la roca, Ausone es quizás el vino más mineral e intelectual de la denominación." : "Perched on the edge of the limestone cliff, named after the Roman poet Ausonius. With a tiny production and vines that seem to grow directly out of the rock, Ausone is perhaps the most mineral and intellectual wine of the appellation."}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Château Cheval Blanc</h3>
            <p className="mb-4">
              {es ? "Situado en el límite con Pomerol, Cheval Blanc es único por su alto porcentaje de Cabernet Franc (a menudo más del 50%). Es famoso por sus aromas exóticos (cachemira, menta y especias) y por su increíble sedosidad." : "Sitting on the border with Pomerol, Cheval Blanc is unique for its high percentage of Cabernet Franc (often over 50%). It is famed for its exotic aromatics—cashmere, mint, and spice—and its incredible silkiness."}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Château Figeac</h3>
            <p className="mb-4">
              {es ? 'A menudo llamado "la más Médoc de las propiedades de Saint-Émilion" por sus suelos de grava y su alta proporción de Cabernet Sauvignon. Produce vinos estructurados y elegantes que envejecen durante décadas.' : 'Often called the "most Médoc of Saint-Émilion estates" because of its gravel soils and high proportion of Cabernet Sauvignon. It produces structured, elegant wines that age for decades.'}
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Château Canon & Bélair-Monange</h3>
            <p className="mb-8">
              {es ? "Estas propiedades representan el resurgir de la meseta de caliza. Bajo la propiedad de Chanel (Canon) y la familia Moueix (Bélair-Monange), han venido produciendo vinos de una pureza y precisión impresionantes en las añadas recientes." : "These estates represent the resurgence of the limestone plateau. Under the ownership of Chanel (Canon) and the Moueix family (Bélair-Monange), they have been producing wines of breathtaking purity and precision in recent vintages."}
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">{es ? "Visitar el pueblo" : "Visiting the Village"}</h2>
            <p className="mb-6">
              {es ? <>Una visita a Saint-Émilion tiene tanto que ver con la arquitectura como con el vino. El pueblo en sí es un monumento. No te pierdas la <strong>Iglesia Monolítica</strong>, tallada por completo en un único acantilado de caliza en el siglo XII; la más grande de su tipo en Europa.</> : <>A visit to Saint-Émilion is as much about architecture as it is about wine. The town itself is a monument. Do not miss the <strong>Monolithic Church</strong>, carved entirely out of a single limestone cliff in the 12th century—the largest of its kind in Europe.</>}
            </p>
            <p className="mb-8">
              {es ? "Recorré las calles empinadas y empedradas (tertres), parate por los macarons de almendra locales (una tradición desde 1620) y disfrutá de una copa de Grand Cru Classé al atardecer con vistas al valle del Dordoña. Es un lugar donde lo sagrado y lo profano (la iglesia y el vino) han convivido en armonía durante mil años." : "Wander the steep, cobbled streets (tertres), stop for the local almond macaroons (a tradition since 1620), and enjoy a sunset glass of Grand Cru Classé overlooking the Dordogne valley. It is a place where the sacred and the profane—church and wine—have lived in harmony for a thousand years."}
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
              {es ? "Siete días recorriendo la Orilla Izquierda, la Orilla Derecha y Graves. Acceso privado a châteaux, cenas con estrellas Michelin y degustaciones de añadas excepcionales. Limitado a 4 a 8 huéspedes." : "Seven days across the Left Bank, Right Bank, and Graves. Private château access, Michelin-starred dining, and rare vintage tastings. Limited to 4–8 guests."}
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
            {(es ? ['Saint-Émilion', 'Orilla Derecha de Bordeaux', 'Pomerol', 'Merlot', 'Pueblo Vinícola UNESCO', 'Francia', 'Viajes de Vino', 'Grand Cru Classé'] : ['Saint-Émilion', 'Bordeaux Right Bank', 'Pomerol', 'Merlot', 'UNESCO Wine Village', 'France', 'Wine Travel', 'Grand Cru Classé']).map((tag) => (
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
              <Link to="/journal/how-to-visit-bordeaux-chateaux-insider-guide" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1700593739220-a4ed2b998156" 
                      alt="Bordeaux chateau architecture" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">{es ? "Guía de Viaje" : "Travel Guide"}</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      {es ? "Cómo visitar los châteaux de Bordeaux: la guía del conocedor" : "How to Visit Bordeaux Châteaux: The Insider Guide"}
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

export default SaintEmilionArticle;