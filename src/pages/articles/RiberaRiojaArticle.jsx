import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import WaitingListModal from '@/components/WaitingListModal';

const RiberaRiojaArticle = () => {
  const openWaitingList = () => {
    window.dispatchEvent(new Event('open-waitlist-modal'));
  };

  return (
    <>
      <Helmet>
        <title>Ribiera del Duero vs Rioja: Which Wine Region Should You Visit? | The Wine Trips</title>
        <meta name="description" content="Torn between Ribiera del Duero and Rioja? We compare Spain's two greatest red wine regions across terroir, grape varieties, winemaking style, and visitor experience to help you decide which belongs on your itinerary." />
        <meta name="keywords" content="ribiera del duero vs rioja, spain wine regions comparison, tempranillo wine guide, visiting ribiera del duero, visiting rioja, spanish wine travel, best wine regions spain" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://thewinetrips.com/journal/rioja-vs-ribiera-del-duero-spanish-wine-rivalry" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://thewinetrips.com/journal/rioja-vs-ribiera-del-duero-spanish-wine-rivalry" />
        <meta property="og:title" content="Ribiera del Duero vs Rioja: Which Wine Region Should You Visit? | The Wine Trips" />
        <meta property="og:description" content="Torn between Ribiera del Duero and Rioja? We compare Spain's two greatest red wine regions." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/journal/rioja-vs-ribiera-del-duero-spanish-wine-rivalry" />
        <meta property="twitter:title" content="Ribiera del Duero vs Rioja: Which Wine Region Should You Visit? | The Wine Trips" />
        <meta property="twitter:description" content="Torn between Ribiera del Duero and Rioja? We compare Spain's two greatest red wine regions." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
      </Helmet>

      <div className="bg-[#f9f7f4] min-h-screen font-['Jost'] text-[#1a1f2e]">
        
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 w-full z-20 p-6">
          <Link to="/journal" className="inline-flex items-center gap-2 text-white/80 hover:text-[#c9a96e] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs font-bold">Back to Journal</span>
          </Link>
        </nav>

        {/* Hero Section */}
        <header className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1603657289479-14ada3bb33a3" 
              alt="Spanish vineyard landscape in Rioja" 
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
                Discovery
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] text-white leading-tight font-light mb-6">
                Ribera del Duero vs Rioja:<br />The Great Spanish Rivalry
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
              <span>January 15, 2024</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c9a96e]" />
              <span>10 min read</span>
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
              "Two kings, one crown. While Rioja is the elegant aristocrat of Spanish wine, Ribera del Duero is the powerful warrior. Both are masters of Tempranillo, yet they express it in profoundly different ways."
            </p>

            <p className="mb-6">
              For decades, if you ordered a "fine red wine" in Spain, you were brought a bottle of Rioja. It was the undisputed benchmark. But in the last 40 years, a challenger has risen from the high plains of Castilla y León to challenge the throne. Today, the rivalry between Rioja and Ribera del Duero drives Spanish enology to new heights.
            </p>

            <p className="mb-6">
              Both regions rely on the same grape—Tempranillo—but climate, soil, and tradition have forged two distinct identities. Choosing between them for your next journey depends on what you seek in a glass and in a landscape.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">The Terrain: Valleys vs. Plateaus</h2>
            
            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Rioja: The Balanced Valley</h3>
            <p className="mb-4">
              Protected by the Cantabrian mountains to the north and the Demanda range to the south, Rioja enjoys a privileged climate. It is a valley region with significant Atlantic influence, bringing moderate rainfall and cooler temperatures.
            </p>
            <p className="mb-6">
              The soils here are varied—clay-limestone (arcillo-calcáreo) in the Alavesa and Alta zones, and ferrous clay in the Baja (Oriental) zone. This diversity allows for wines of great complexity and elegance.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Ribera del Duero: The Extreme Plateau</h3>
            <p className="mb-4">
              Ribera is not for the faint of heart. Located on the vast central plateau of Spain, vineyards here sit between 750 and 1,000 meters (2,400–3,300 ft) above sea level.
            </p>
            <p className="mb-8">
              The climate is extreme continental: scorching hot summers and freezing winters. Crucially, the diurnal range (temperature difference between day and night) can be 20°C or more during ripening. This thermal shock thickens the grape skins, locking in deep color and tannins while preserving acidity.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">The Grape: Tempranillo Two Ways</h2>
            <p className="mb-6">
              In <strong>Rioja</strong>, Tempranillo is often blended. Traditionally, it is joined by Garnacha (for body), Mazuelo (for acidity), and Graciano (for aroma). The result is a wine that prizes harmony and balance over sheer power. The fruit profile leans towards red cherries, strawberries, and dried herbs.
            </p>
            <p className="mb-6">
              In <strong>Ribera del Duero</strong>, the local clone is known as <em>Tinto Fino</em> or <em>Tinta del País</em>. It has adapted to the harsh climate by producing smaller berries and looser bunches. Ribera wines are frequently 100% Tempranillo. The result? Wines of immense concentration, black fruit (blackberry, plum), and firm structure.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Winemaking Philosophy</h2>
            <p className="mb-6">
              The classic distinction lies in the oak.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#c9a96e]">
              <li><strong>Rioja Tradition:</strong> Long aging in American oak barrels. This imparts those signature notes of vanilla, coconut, dill, and sweet spice. The wines are often released ready to drink, with silky, polished tannins.</li>
              <li><strong>Ribera Style:</strong> Generally favors French oak, which imparts subtler spice, cedar, and mocha notes, supporting the wine's structure rather than defining it. Ribera wines are "masculine," muscular, and often require time in the bottle to open up.</li>
            </ul>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Visitor Experience</h2>
            <p className="mb-6">
              <strong>Visit Rioja if...</strong> You love history, architecture, and tapas. The Haro Station District has the highest concentration of century-old wineries in the world. You can walk from López de Heredia to Muga to La Rioja Alta in five minutes. The architecture ranges from medieval stone cellars to Frank Gehry's titanium wave at Marques de Riscal.
            </p>
            <p className="mb-8">
              <strong>Visit Ribera if...</strong> You seek the "Golden Mile" of Spanish wine. Visit legends like Vega Sicilia and Pingus (appointment only). The landscape is vast, arid, and dramatic, punctuated by castles like Peñafiel that watch over the Duero river. It feels wilder, more elemental.
            </p>

            <p className="mt-12 text-lg font-medium italic text-gray-800">
              Ultimately, the choice is not which is better, but which expression of Spain speaks to you: the elegant, historical complexity of Rioja, or the modern, intense power of Ribera del Duero.
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
            
            <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-4">Explore our Ribera del Duero Experience</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Seven days through the Golden Mile of Ribera del Duero. Private bodega access, harvest season visits, and the full breadth of Spanish wine. Limited to 4–8 guests.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/experiences"
                className="px-8 py-3 bg-[#1a1f2e] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c9a96e] transition-colors duration-300"
              >
                View Itinerary
              </Link>
              <button 
                onClick={openWaitingList}
                className="px-8 py-3 border border-[#1a1f2e] text-[#1a1f2e] text-xs font-bold tracking-widest uppercase hover:bg-[#1a1f2e] hover:text-white transition-colors duration-300"
              >
                Join the Waiting List
              </button>
            </div>
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {['Ribera del Duero', 'Rioja', 'Spain', 'Tempranillo', 'Spanish Wine', 'Wine Travel', 'Wine Comparison', 'Castile'].map((tag) => (
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
              Related Articles
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
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">Region Guide</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      Bordeaux's Left Bank: A Masterclass in Terroir
                    </h4>
                    <span className="mt-auto inline-flex items-center text-xs font-bold text-[#1a1f2e] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </Link>

              {/* Card 2 */}
              <Link to="/journal/best-time-visit-wine-regions-seasonal" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1596388792657-f0645a5e4e83" 
                      alt="Vineyard in different seasons" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">Travel Guide</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      Best Time to Visit Wine Regions: A Seasonal Guide
                    </h4>
                    <span className="mt-auto inline-flex items-center text-xs font-bold text-[#1a1f2e] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
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

export default RiberaRiojaArticle;