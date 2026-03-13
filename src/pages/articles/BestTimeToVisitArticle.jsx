import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import WaitingListModal from '@/components/WaitingListModal';

const BestTimeToVisitArticle = () => {
  const openWaitingList = () => {
    window.dispatchEvent(new Event('open-waitlist-modal'));
  };

  return (
    <>
      <Helmet>
        <title>The Best Time to Visit Europe's Wine Regions | The Wine Trips</title>
        <meta name="description" content="Discover the best times to visit Bordeaux, Tuscany, Piedmont, Ribiera del Duero, and other great European wine regions — by season, harvest, and what each time of year reveals that the others cannot." />
        <meta name="keywords" content="best time to visit bordeaux, when to visit tuscany, wine harvest europe, best season for wine travel, visiting wine regions europe, wine tourism seasons, europe wine trip planning" />
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
              src="https://images.unsplash.com/photo-1669667867723-1e5dd1e8fec5" 
              alt="European wine region seasonal landscape with autumn colors" 
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
                Wine Education
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] text-white leading-tight font-light mb-6">
                The Best Time to Visit<br />Europe's Wine Regions
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
              <span>March 20, 2024</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c9a96e]" />
              <span>8 min read</span>
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
              "Wine is an agricultural product, and the vineyard is a living calendar. To visit a wine region is to step into its specific rhythm—whether that is the frantic energy of harvest or the quiet dormancy of winter pruning."
            </p>

            <p className="mb-6">
              When clients come to us to plan a wine journey, their first question is usually "Where?" But the second, and perhaps more critical question, is "When?" A visit to Bordeaux in August is a fundamentally different experience than a visit in October. The vines look different, the winemakers are focused on different tasks, and the access to top estates changes dramatically.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">How to Think About Wine Region Seasons</h2>
            <p className="mb-6">
              Unlike city tourism, wine travel is dictated by the lifecycle of the vine. Broadly speaking, the year in the Northern Hemisphere (Europe) breaks down into four phases for the traveler:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#c9a96e]">
              <li><strong>The Green Season (May–July):</strong> The vines are growing vigorously, the canopy is lush green, and flowering sets the crop for the year. The weather is generally warm and stable.</li>
              <li><strong>The Harvest (September–October):</strong> The climax of the year. The grapes change color (veraison) and are picked. The energy is high, the smell of fermenting juice fills the air.</li>
              <li><strong>The Dormancy (November–March):</strong> The vines are bare, looking like sculptural wood against the soil. It is quiet, cold, and intimate.</li>
              <li><strong>The Awakening (April):</strong> Bud break occurs, marking the start of the new vintage. A risky time due to frost, but beautiful as life returns to the vineyard.</li>
            </ul>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Bordeaux: When to Visit and Why</h2>
            <p className="mb-6">
              Bordeaux is a maritime climate, meaning weather can be variable. The sweet spot is <strong>May, June, September, and October</strong>.
            </p>
            
            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Spring (May-June)</h3>
            <p className="mb-4">
              This is arguably the most beautiful time. The estates are manicured, the roses at the end of the rows are blooming, and the weather is pleasant without being scorching. Crucially, the "En Primeur" campaign (usually April) is over, so château owners have more time for visitors.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Autumn (September-October)</h3>
            <p className="mb-8">
              Harvest usually begins with Merlot on the Right Bank in mid-September and finishes with Cabernet on the Left Bank in early October. Visiting during harvest requires advanced planning (6+ months), as teams are busy. However, seeing the fruit come in is electric.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Tuscany: When to Visit and Why</h2>
            <p className="mb-6">
              Tuscany gets hotter than Bordeaux. <strong>Mid-May and late September</strong> are perfection.
            </p>
            
            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">The Golden Light of Autumn</h3>
            <p className="mb-4">
              October in Tuscany is famous for a reason. The Sangiovese harvest is underway, the light turns golden, and the heat breaks. It is also the start of olive harvest season, allowing you to taste <em>olio nuovo</em> (fresh oil) alongside your Chianti Classico.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Avoid July & August</h3>
            <p className="mb-8">
              Central Italy in August can see temperatures soar above 35°C (95°F). Many Italians flee the cities for the coast (Ferragosto holiday), leaving some restaurants and shops closed.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Piedmont: When to Visit and Why</h2>
            <p className="mb-6">
              Piedmont is unique because it has a second "harvest" that is just as famous as the grapes: <strong>White Truffles</strong>.
            </p>
            
            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">The Truffle Season (October-November)</h3>
            <p className="mb-4">
              If you love food, there is no better time to be in Europe than Piedmont in late October or November. The Nebbiolo harvest for Barolo often extends into late October. The famous Alba White Truffle Fair is in full swing. The fog (<em>nebbia</em>) rolls into the valleys, creating the mystic atmosphere that gives the Nebbiolo grape its name.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Ribiera del Duero: When to Visit and Why</h2>
            <p className="mb-6">
              Ribera del Duero sits on a high plateau in Spain. It has a continental climate of extremes: freezing winters and roasting summers.
            </p>
            
            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Shoulder Seasons are Mandatory</h3>
            <p className="mb-8">
              We strongly advise visiting in <strong>May/June or September/October</strong>. Summer highs frequently hit 40°C (104°F), making vineyard walks punishing. The harvest here is bustling and festive, producing some of Spain's most powerful red wines.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">The Season Nobody Talks About: Winter in Wine Country</h2>
            <p className="mb-6">
              Tourism boards rarely advertise <strong>January or February</strong>, but for the serious oenophile, it is a secret weapon. The vineyards are dormant and often bleak, yes. But the winemakers are in the cellar blending the previous vintage or pruning the vines.
            </p>
            <p className="mb-8">
              Because there are almost no tourists, you often get significantly more time with the principals of the estate. It is the best time for deep, technical tastings and long lunches by a fireplace. Just check ahead, as some hotels take a winter break.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Planning Around Harvest: The Most Common Question</h2>
            <p className="mb-6">
              "Should I go during harvest?" It depends on what you want.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#c9a96e]">
              <li><strong>Pros:</strong> The region is alive. You can taste grapes off the vine. The smell of fermentation is intoxicating. The weather is usually stable.</li>
              <li><strong>Cons:</strong> Winemakers are exhausted and busy. Some smaller estates close to visitors completely because they don't have the staff to manage tours while picking. Accommodation prices are at their peak.</li>
            </ul>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Our Recommendation: Avoid the Middle of Summer</h2>
            <p className="mb-6">
              If you can, avoid late July and August for serious wine travel in Southern Europe. The heat can make tasting heavy reds fatiguing, and the wines in the cellar are often "shut down" due to atmospheric pressure.
            </p>
            <p className="mb-8">
              The sweet spot remains the "Shoulder Season." You get the beauty of the region, the attention of the hosts, and comfortable weather that allows you to enjoy that glass of Cabernet or Sangiovese on a terrace, rather than seeking air conditioning.
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
            
            <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-4">Plan Your Wine Journey</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              We time our departures to align with the optimal seasons for each destination — harvest visits, spring flowering, truffle season in Piedmont. Every detail planned around when each region is at its best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/experiences"
                className="px-8 py-3 bg-[#1a1f2e] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c9a96e] transition-colors duration-300"
              >
                View Our Experiences
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
            {['Wine Travel Planning', 'Harvest Season', 'Bordeaux', 'Tuscany', 'Piedmont', 'Ribiera del Duero', 'Europe', 'When to Visit'].map((tag) => (
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
              <Link to="/journal/how-to-visit-bordeaux-chateaux-insider-guide" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1700593739220-a4ed2b998156" 
                      alt="Bordeaux chateau barrel room" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">Travel Guide</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      How to Visit Bordeaux Châteaux: The Insider Guide
                    </h4>
                    <span className="mt-auto inline-flex items-center text-xs font-bold text-[#1a1f2e] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </Link>

              {/* Card 2 */}
              <Link to="/journal/private-vs-group-wine-tours-finding-perfect-journey" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1698827016432-465cf8dd5dd8" 
                      alt="Private wine tasting group" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">Travel Guide</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      Private vs. Group Wine Tours: Finding Your Perfect Journey
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

export default BestTimeToVisitArticle;