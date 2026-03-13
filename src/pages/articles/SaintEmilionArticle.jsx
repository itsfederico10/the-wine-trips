import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import WaitingListModal from '@/components/WaitingListModal';

const SaintEmilionArticle = () => {
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
            <span className="uppercase tracking-widest text-xs font-bold">Back to Journal</span>
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
                Region Guide
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] text-white leading-tight font-light mb-6">
                Saint-Émilion: A UNESCO Village<br />Built on Wine
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
              <span>December 10, 2023</span>
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
              "It is a village carved from the very stone that nourishes its vines. In Saint-Émilion, history isn't just in the books; it's in the limestone caves, the monolithic church, and every glass of Merlot."
            </p>

            <p className="mb-6">
              Crossing the bridge from the Left Bank to the Right Bank of Bordeaux is like stepping into a different country. The grand, sweeping estates of the Médoc give way to smaller, intimate plots. The gravel soils disappear, replaced by cool clay and the region's secret weapon: limestone. And at the heart of it all lies Saint-Émilion.
            </p>

            <p className="mb-6">
              Recognized as a UNESCO World Heritage site since 1999, Saint-Émilion is visually stunning—an amphitheater of vines surrounding a medieval limestone village. But for the oenophile, its beauty lies underground, where miles of tunnels store millions of bottles of some of the world's most hedonistic wines.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">The Trinity of Terroir</h2>
            <p className="mb-6">
              Saint-Émilion is complex, but its geology can be broadly simplified into three distinct zones, each producing a different style of wine:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#c9a96e]">
              <li><strong>The Limestone Plateau:</strong> The highest point of the appellation. The vines here struggle to dig roots through the rock (calcaire à astéries). This produces wines of immense tension, minerality, and longevity. (Think Château Ausone, Château Canon).</li>
              <li><strong>The Slopes (Côtes):</strong> Surrounding the plateau, these steep hillsides mix limestone with clay. The wines here are powerful and rich, often with a "solar" character from the sun exposure. (Think Château Pavie).</li>
              <li><strong>The Gravel/Sand Plain:</strong> Stretching towards Pomerol, this area has gravel soils similar to the Left Bank. It produces wines of elegance and perfume, often with a higher percentage of Cabernet Franc. (Think Château Cheval Blanc, Château Figeac).</li>
            </ul>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Merlot and The Prince</h2>
            <p className="mb-6">
              If Cabernet Sauvignon is King of the Left Bank, <strong>Merlot</strong> is the undisputed Monarch of the Right. In the cool clay and limestone soils, Merlot ripens to perfection, offering lush texture, plum fruit, and a velvet mouthfeel that makes these wines approachable even in their youth.
            </p>
            <p className="mb-6">
              However, the secret ingredient in the greatest Saint-Émilion wines is <strong>Cabernet Franc</strong>. Often called "The Prince," it adds spice, floral aromatics (violets), and structure to the blend, preventing the Merlot from becoming too heavy or jammy.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">The Great Estates</h2>
            <p className="mb-6">
              Unlike the 1855 Classification of the Médoc which is set in stone, the Classification of Saint-Émilion is revised approximately every 10 years, creating a dynamic (and often controversial) hierarchy.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Château Ausone</h3>
            <p className="mb-4">
              Perched on the edge of the limestone cliff, named after the Roman poet Ausonius. With a tiny production and vines that seem to grow directly out of the rock, Ausone is perhaps the most mineral and intellectual wine of the appellation.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Château Cheval Blanc</h3>
            <p className="mb-4">
              Sitting on the border with Pomerol, Cheval Blanc is unique for its high percentage of Cabernet Franc (often over 50%). It is famed for its exotic aromatics—cashmere, mint, and spice—and its incredible silkiness.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Château Figeac</h3>
            <p className="mb-4">
              Often called the "most Médoc of Saint-Émilion estates" because of its gravel soils and high proportion of Cabernet Sauvignon. It produces structured, elegant wines that age for decades.
            </p>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Château Canon & Bélair-Monange</h3>
            <p className="mb-8">
              These estates represent the resurgence of the limestone plateau. Under the ownership of Chanel (Canon) and the Moueix family (Bélair-Monange), they have been producing wines of breathtaking purity and precision in recent vintages.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Visiting the Village</h2>
            <p className="mb-6">
              A visit to Saint-Émilion is as much about architecture as it is about wine. The town itself is a monument. Do not miss the <strong>Monolithic Church</strong>, carved entirely out of a single limestone cliff in the 12th century—the largest of its kind in Europe.
            </p>
            <p className="mb-8">
              Wander the steep, cobbled streets (tertres), stop for the local almond macaroons (a tradition since 1620), and enjoy a sunset glass of Grand Cru Classé overlooking the Dordogne valley. It is a place where the sacred and the profane—church and wine—have lived in harmony for a thousand years.
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
            
            <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-4">Explore our Bordeaux Experience</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Seven days across the Left Bank, Right Bank, and Graves. Private château access, Michelin-starred dining, and rare vintage tastings. Limited to 4–8 guests.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/experiences"
                className="px-8 py-3 bg-[#1a1f2e] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c9a96e] transition-colors duration-300"
              >
                View the Bordeaux Itinerary
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
            {['Saint-Émilion', 'Bordeaux Right Bank', 'Pomerol', 'Merlot', 'UNESCO Wine Village', 'France', 'Wine Travel', 'Grand Cru Classé'].map((tag) => (
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
              <Link to="/journal/how-to-visit-bordeaux-chateaux-insider-guide" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1700593739220-a4ed2b998156" 
                      alt="Bordeaux chateau architecture" 
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
            </div>
          </div>
        </section>

        <WaitingListModal />
      </div>
    </>
  );
};

export default SaintEmilionArticle;