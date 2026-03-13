import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import WaitingListModal from '@/components/WaitingListModal';

const TuscanyArticle = () => {
  const openWaitingList = () => {
    window.dispatchEvent(new Event('open-waitlist-modal'));
  };

  return (
    <>
      <Helmet>
        <title>Tuscany Wine Regions: Chianti, Brunello & the Supertuscans | The Wine Trips</title>
        <meta name="description" content="A complete guide to Tuscany's wine regions — from Chianti Classico's Sangiovese hillsides to Brunello di Montalcino's legendary aging cellars and the revolutionary Supertuscans of Bolgheri. Plan your perfect Tuscan wine journey." />
        <meta name="keywords" content="tuscany wine regions guide, chianti classico wine, brunello di montalcino, supertuscan wines, bolgheri wine, sangiovese italy, tuscany wine travel, visiting tuscany wineries" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
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
              src="https://images.unsplash.com/photo-1696260397199-258789095abe" 
              alt="Rolling Tuscan vineyard landscape at sunset" 
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
                Region Guide
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] text-white leading-tight font-light mb-6">
                Tuscany Wine Regions:<br />Chianti, Brunello & the Supertuscans
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
              <span>March 1, 2024</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c9a96e]" />
              <span>11 min read</span>
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
              "Tuscany is not a monolith. It is a mosaic of micro-climates, soils, and traditions. From the stony heights of Chianti to the sun-baked coast of Bolgheri, the region offers a diversity that rivals any in the world."
            </p>

            <p className="mb-6">
              When we think of Italian wine, we think of Tuscany. The image is indelible: cypress-lined driveways, medieval stone farmhouses, and rolling hills covered in vines. But beneath this postcard perfection lies a serious, complex wine region that has undergone a radical quality revolution in the last 40 years.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Sangiovese: The Grape That Defines a Region</h2>
            <p className="mb-6">
              At the heart of Tuscan wine is Sangiovese. Its name derives from <em>Sanguis Jovis</em> ("The Blood of Jove"). It is a grape that is notoriously difficult to grow—it ripens late, is thin-skinned, and can be overly acidic if not handled with care.
            </p>
            <p className="mb-6">
              However, when treated with respect in the right terroir, it produces wines of breathtaking beauty. The hallmark of great Sangiovese is its savory character: notes of sour cherry, tomato leaf, dried herbs, violets, and espresso. It is a wine built for food, with high acidity that cuts through the rich olive oil and meats of Tuscan cuisine.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Chianti Classico: The Heart of Tuscan Wine</h2>
            <p className="mb-6">
              Do not confuse "Chianti" with "Chianti Classico." The former is a large, variable region. The latter is the historic heartland, defined by the "Gallo Nero" (Black Rooster) symbol on the bottle neck.
            </p>
            <p className="mb-6">
              Chianti Classico stretches between Florence and Siena. It is a high-altitude region, with vineyards often sitting between 250 and 600 meters above sea level. This elevation preserves the acidity and fresh aromatics of the Sangiovese grape.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">The Soils of Chianti Classico</h3>
            <p className="mb-4">
              Two main soil types dominate: <strong>Galestro</strong> (a flaky, schist-like clay) and <strong>Alberese</strong> (hard limestone/marl). Galestro tends to produce more aromatic, elegant wines, while Alberese yields structured, powerful wines. The best estates often have a mix of both.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">The Gran Selezione Revolution</h3>
            <p className="mb-4">
              In 2014, the consortium introduced a new tier at the top of the pyramid: <strong>Gran Selezione</strong>. These wines must be grown exclusively on the estate (no purchased grapes) and aged for longer periods. It represents the pinnacle of what Chianti Classico can achieve.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">The Villages of Chianti Classico</h3>
            <p className="mb-8">
              Just as Burgundy has its villages, Chianti has communes with distinct styles. <strong>Radda</strong> is known for high-altitude elegance; <strong>Panzano</strong> (home to the famous "Conca d'Oro" or Golden Shell) produces rich, intense wines; <strong>Gaiole</strong> is wilder and more structured.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Brunello di Montalcino: Italy's Most Magnificent Red</h2>
            <p className="mb-6">
              If Chianti is the everyday heart of Tuscany, Brunello di Montalcino is its aristocratic soul. Located south of Siena, Montalcino is warmer, drier, and more maritime than Chianti.
            </p>
            <p className="mb-6">
              By law, Brunello must be 100% Sangiovese (specifically a clone called <em>Sangiovese Grosso</em>). It requires a minimum of four years of aging before release (five for Riserva). The result is a wine of immense power, tannin, and longevity.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">The Terroir of Montalcino</h3>
            <p className="mb-4">
              Montalcino is a single hill, but it has four distinct slopes. The <strong>North</strong> is cooler, producing perfumed wines. The <strong>South</strong> is hotter, facing the sea, producing powerful, ripe wines. The modern trend is blending plots from different exposures to achieve balance.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">The Producers Who Define Brunello</h3>
            <p className="mb-8">
              History lives here. <strong>Biondi-Santi</strong> invented the style in the late 1800s. Traditionalists like <strong>Soldera</strong> and <strong>Il Poggione</strong> age in large Slavonian casks, while modernists may use smaller French oak. The best wines need 10–20 years to fully reveal their complexity.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Vino Nobile di Montepulciano: The Overlooked Noble</h2>
            <p className="mb-8">
              Often confused with the grape Montepulciano d'Abruzzo (which is entirely different), Vino Nobile comes from the town of Montepulciano. It is made primarily from Prugnolo Gentile (a Sangiovese clone). These wines offer a bridge between Chianti and Brunello—more structure than the former, but more approachable than the latter.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">The Supertuscans: When Rules Were Made to Be Broken</h2>
            <p className="mb-6">
              In the 1970s, strict Italian wine laws forbade the use of French grapes (like Cabernet Sauvignon) in top-tier wines. Frustrated winemakers rebelled, making wines outside the DOC system using international varieties. They were labeled as lowly "Table Wine" but swept blind tastings globally. The press dubbed them "Supertuscans."
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Bolgheri: The Supertuscan Heartland</h3>
            <p className="mb-8">
              Located on the Tuscan coast, Bolgheri is Bordeaux with an Italian accent. The gravel soils here are perfect for Cabernet Sauvignon, Cabernet Franc, and Merlot. Legends like <strong>Sassicaia</strong>, <strong>Ornellaia</strong>, and <strong>Masseto</strong> hail from this region. These are opulent, world-class wines that command the highest prices in Italy.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">White Tuscany: Vernaccia, Vermentino, and the Overlooked Side</h2>
            <p className="mb-8">
              While red is king, Tuscany has white gems. <strong>Vernaccia di San Gimignano</strong> is Italy’s oldest documented white wine, offering crisp, almond-scented refreshment. On the coast, <strong>Vermentino</strong> thrives, producing saline, citrusy wines perfect for seafood.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">When to Visit and How to Plan</h2>
            <p className="mb-8">
              <strong>Spring (May-June)</strong> and <strong>Autumn (September-October)</strong> are ideal. The harvest in late September is magical but busy. Avoid August, when many Italians go on holiday and the heat can be stifling.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Experience Tuscany with The Wine Trips</h2>
            <p className="mb-8">
              We believe the only way to understand Tuscany is to walk the soil. Our curated journeys take you behind the gates of private estates in Chianti Classico, into the cellars of Brunello legends, and to the sea-breeze vineyards of Bolgheri.
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
            
            <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-4">Explore our Tuscany Experience</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Seven days through Chianti Classico, Montalcino, and Bolgheri — private estate access, long lunches in the vineyards, and the full arc of Tuscan wine. Limited to 4–8 guests.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/experiences"
                className="px-8 py-3 bg-[#1a1f2e] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c9a96e] transition-colors duration-300"
              >
                View the Tuscany Itinerary
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
            {['Tuscany', 'Chianti Classico', 'Brunello di Montalcino', 'Supertuscan', 'Bolgheri', 'Sangiovese', 'Italian Wine', 'Wine Travel', 'Italy'].map((tag) => (
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
              <Link to="/journal/barolo-king-italian-wines" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1696636533515-c9f7fda368f2" 
                      alt="Barolo wine region" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">Wine Education</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      Barolo: The King of Italian Wines
                    </h4>
                    <span className="mt-auto inline-flex items-center text-xs font-bold text-[#1a1f2e] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </Link>

              {/* Card 2 */}
              <Link to="/journal/best-time-visit-wine-regions-seasonal-guide" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1683548957866-69e6d9694c02" 
                      alt="Vineyard seasonal landscape" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">Travel Guide</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      The Best Time to Visit Wine Regions: A Seasonal Guide
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

export default TuscanyArticle;