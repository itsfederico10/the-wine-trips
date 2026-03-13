import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import WaitingListModal from '@/components/WaitingListModal';

const BordeauxChateauVisitArticle = () => {
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
            <span className="uppercase tracking-widest text-xs font-bold">Back to Journal</span>
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
                Region Guide
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] text-white leading-tight font-light mb-6">
                How to Visit Bordeaux Châteaux:<br />The Insider Guide
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
              <span>February 5, 2024</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c9a96e]" />
              <span>9 min read</span>
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
              "Bordeaux is not Napa Valley. You cannot simply drive up to the gates of Château Margaux and expect a tasting. Here, access is a currency, and the protocol is as structured as the wines themselves."
            </p>

            <p className="mb-6">
              For the uninitiated, planning a trip to Bordeaux can be daunting. With over 6,000 châteaux, a complex geography of Left Bank versus Right Bank, and a culture that values privacy and tradition, it is easy to make rookie mistakes. But when navigated correctly, a visit to Bordeaux is the pinnacle of wine travel—a chance to walk through history and taste the benchmarks of the wine world.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">The Golden Rule: Appointment Only</h2>
            <p className="mb-6">
              The first rule of Bordeaux is <em>Rendez-Vous</em>. Unlike New World wine regions where cellar doors are open to walk-ins, nearly all top estates in Bordeaux require advance appointments.
            </p>
            <p className="mb-6">
              <strong>Why?</strong> Because these are working agricultural estates, often with small teams. The person pouring your wine might be the cellar master or the owner.
            </p>
            <p className="mb-6">
              <strong>How to Book:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#c9a96e]">
              <li><strong>Directly:</strong> Many estates now have websites with booking forms. Look for the "Visites" or "Oenotourisme" section.</li>
              <li><strong>Local Tourist Offices:</strong> The tourist offices in Pauillac, Saint-Émilion, and Bordeaux city are excellent resources and can book appointments for you.</li>
              <li><strong>Concierge Services:</strong> For the First Growths (Lafite, Latour, etc.), direct booking is often impossible. These visits are typically arranged through professional wine tour operators or negociants.</li>
            </ul>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">Geography Strategy: Left vs. Right</h2>
            <p className="mb-6">
              Bordeaux is massive. Driving from Saint-Estèphe (Left Bank) to Saint-Émilion (Right Bank) can take over an hour and a half. Do not attempt to do both in one day.
            </p>
            <p className="mb-6">
              <strong>The Left Bank (Médoc & Graves):</strong> This is the land of the grand châteaux. The estates are architectural marvels, large, and imposing. You are visiting institutions. Focus on the D2 "Route des Châteaux" and plan for 2-3 visits maximum per day.
            </p>
            <p className="mb-6">
              <strong>The Right Bank (Saint-Émilion & Pomerol):</strong> Here, the scale is smaller, more intimate. The "château" might be a modest farmhouse. The vibe is warmer, and you are more likely to meet the family.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">What to Expect During the Visit</h2>
            <p className="mb-6">
              A standard visit usually lasts 60–90 minutes and follows a classic structure:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mb-8 marker:text-[#c9a96e] marker:font-bold">
              <li><strong>The Vineyard:</strong> A look at the terroir, soil, and vines.</li>
              <li><strong>The Vat Room (Cuverie):</strong> Where fermentation takes place. You'll see stainless steel, concrete, or oak vats.</li>
              <li><strong>The Barrel Cellar (Chai):</strong> The highlight. Rows of oak barrels aging the wine. It is often cool, so bring a jacket.</li>
              <li><strong>The Tasting:</strong> Usually 1–3 wines. Often the "Grand Vin" (the top wine) and the "Second Vin."</li>
            </ol>

            <h3 className="text-xl font-['Cormorant_Garamond'] text-[#c9a96e] uppercase tracking-widest mt-8 mb-4">Etiquette & Tips</h3>
            <p className="mb-4">
              <strong>Dress Code:</strong> "Smart casual" is the standard. You don't need a suit, but avoid flip-flops and gym wear. You are entering a place of business and tradition.
            </p>
            <p className="mb-4">
              <strong>Spitting:</strong> If you are visiting multiple estates, spitting is not rude; it is expected. Professionals spit.
            </p>
            <p className="mb-4">
              <strong>Punctuality:</strong> Arrive exactly on time. If you are 15 minutes late, you may miss your slot entirely.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">When to Go</h2>
            <p className="mb-6">
              <strong>Avoid:</strong> "En Primeur" week (usually April) when the wine trade descends on the city and châteaux are closed to the public. Also, August is classic French holiday time; some estates may operate with skeleton crews.
            </p>
            <p className="mb-6">
              <strong>Best Time:</strong> May, June, September, and October. The weather is beautiful, and the vineyards are green (or turning gold in autumn). Harvest (September/October) is exciting but busy—book well in advance.
            </p>

            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mt-12 mb-6">The Insider Secret</h2>
            <p className="mb-6">
              Most tourists do the tour, taste, and leave. The true insider move is to book a <strong>lunch at the château</strong>. Several estates (like Château Troplong Mondot in Saint-Émilion or Château Haut-Bailly in Pessac-Léognan) have opened private tables or restaurants.
            </p>
            <p className="mb-8">
              Dining in the heart of the vines, pairing the estate's older vintages with local gastronomy, is an experience that transcends a simple tasting. It is the memory of a lifetime.
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
            
            <h3 className="text-3xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-4">Experience Bordeaux the Right Way</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Seven days across Left Bank, Right Bank, and Graves — with private château access, vertical tastings, and winemaker conversations arranged through our estate network. Limited to 4–8 guests.
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
            {['Bordeaux', 'Château Visits', 'Wine Tourism', 'Left Bank', 'Médoc', 'How To', 'Wine Travel', 'France'].map((tag) => (
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
              <Link to="/journal/saint-emilion-unesco-village-wine-guide" className="group bg-[#f9f7f4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                 <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1702742911910-7fabd36366a7" 
                      alt="Saint-Émilion medieval village" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] text-[#c9a96e] font-bold tracking-widest uppercase mb-3">Region Guide</span>
                    <h4 className="text-xl font-['Cormorant_Garamond'] text-[#1a1f2e] mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors">
                      Saint-Émilion: A UNESCO Village Built on Wine
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

export default BordeauxChateauVisitArticle;