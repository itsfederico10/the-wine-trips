import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const JournalPage = () => {
  const { toast } = useToast();

  const handleReadMore = (e, article) => {
    // Check for existing articles by ID or Link pattern
    // IDs 1-9 are fully implemented
    const implementedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    if (implementedIds.includes(article.id)) {
      // Allow navigation
      return;
    }
    
    // Otherwise, show the coming soon toast
    e.preventDefault();
    toast({
      title: "Coming Soon",
      description: `The full article "${article.title}" will be available shortly.`,
    });
  };

  const articles = [
    {
      id: 1,
      title: "Bordeaux's Left Bank: A Masterclass in Terroir",
      excerpt: "Discover the legendary châteaux and distinctive wines that define Bordeaux's most prestigious region. Learn what makes Left Bank wines the gold standard for Cabernet Sauvignon globally.",
      image: "https://images.unsplash.com/photo-1657117735687-50cda95e80cc",
      alt: "Bordeaux vineyard landscape with historic château",
      date: "Oct 12, 2023",
      readTime: "9 min read",
      category: "Region Guide",
      link: "/journal/bordeaux-left-bank-masterclass-terroir"
    },
    {
      id: 2,
      title: "Barolo: The King of Italian Wines",
      excerpt: "Explore the misty hills of Piedmont and understand why Barolo commands respect among wine collectors worldwide. A deep dive into tradition, Nebbiolo, and excellence.",
      image: "https://images.unsplash.com/photo-1696636533515-c9f7fda368f2",
      alt: "Piedmont Barolo wine region with misty hills and vineyards",
      date: "Sep 28, 2023",
      readTime: "10 min read",
      category: "Wine Education",
      link: "/journal/barolo-king-italian-wines"
    },
    {
      id: 3,
      title: "Mendoza's Hidden Gems: Beyond the Malbec",
      excerpt: "While Malbec dominates, Mendoza produces exceptional Cabernet Sauvignon and Syrah. Discover the estates redefining Argentine wine excellence in the Uco Valley.",
      image: "https://images.unsplash.com/photo-1636318414118-0b8f285082fc",
      alt: "Mendoza Argentina vineyard landscape",
      date: "Nov 05, 2023",
      readTime: "9 min read",
      category: "Discovery",
      link: "/journal/mendoza-hidden-gems-beyond-malbec"
    },
    {
      id: 4,
      title: "Saint-Émilion: A UNESCO Village Built on Wine",
      excerpt: "Discover the medieval UNESCO village at the heart of Bordeaux's Right Bank. An expert guide to its limestone terroir, Merlot-dominant wines, and Grand Cru Classé estates.",
      image: "https://images.unsplash.com/photo-1702742911910-7fabd36366a7",
      alt: "Saint-Émilion medieval village architecture",
      date: "Dec 10, 2023",
      readTime: "10 min read",
      category: "Region Guide",
      link: "/journal/saint-emilion-unesco-village-wine-guide"
    },
    {
      id: 5,
      title: "Rioja vs Ribera del Duero: Spain's Greatest Red Wine Rivalry",
      excerpt: "Explore Spain's most celebrated wine regions. Discover the elegant, age-worthy Riojas and the bold, structured Riberas that define Spanish wine excellence.",
      image: "https://images.unsplash.com/photo-1603657289479-14ada3bb33a3",
      alt: "Spanish vineyard landscape in Rioja",
      date: "Jan 15, 2024",
      readTime: "10 min read",
      category: "Wine Education",
      link: "/journal/rioja-vs-ribera-del-duero-spanish-wine-rivalry"
    },
    {
      id: 6,
      title: "How to Visit Bordeaux Châteaux: The Insider Guide",
      excerpt: "Navigate Bordeaux's most prestigious estates with confidence. Learn how to secure appointments, what to expect in the barrel room, and tasting etiquette.",
      image: "https://images.unsplash.com/photo-1700593739220-a4ed2b998156",
      alt: "Bordeaux château architecture and barrel room",
      date: "Feb 05, 2024",
      readTime: "9 min read",
      category: "Travel Guide",
      link: "/journal/how-to-visit-bordeaux-chateaux-insider-guide"
    },
    {
      id: 7,
      title: "Tuscany Wine Regions: Chianti, Brunello & the Supertuscans",
      excerpt: "Tuscany is more than Chianti. Discover the austere elegance of Brunello di Montalcino, the structured power of Vino Nobile, and the emerging producers redefining Tuscan wine.",
      image: "https://images.unsplash.com/photo-1542217937-eb72f33e1d4e",
      alt: "Tuscan hillside vineyard landscape",
      date: "Mar 01, 2024",
      readTime: "11 min read",
      category: "Region Guide",
      link: "/journal/tuscany-wine-regions-chianti-brunello-supertuscans"
    },
    {
      id: 8,
      title: "The Best Time to Visit Wine Regions: A Seasonal Guide",
      excerpt: "Timing matters. Learn when to visit Bordeaux, Burgundy, Piedmont, and beyond for optimal weather, harvest atmosphere, and estate accessibility.",
      image: "https://images.unsplash.com/photo-1683548957866-69e6d9694c02",
      alt: "Vineyard seasonal landscape with autumn colors",
      date: "Mar 20, 2024",
      readTime: "8 min read",
      category: "Travel Guide",
      link: "/journal/best-time-visit-europe-wine-regions"
    },
    {
      id: 9,
      title: "Private vs. Group Wine Tours: Finding Your Perfect Journey",
      excerpt: "Should you travel solo, with a group, or with a specialist operator? Explore the advantages and trade-offs of each approach to choose the experience that matches your style.",
      image: "https://images.unsplash.com/photo-1698827016432-465cf8dd5dd8",
      alt: "Wine tour group tasting experience",
      date: "Apr 05, 2024",
      readTime: "8 min read",
      category: "Wine Education",
      link: "/journal/private-wine-tours-vs-group-tours"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wine Travel Journal | Expert Guides to Wine Regions | The Wine Trips</title>
        <meta name="description" content="Expert guides to the world's greatest wine regions. Local knowledge for discerning wine travellers exploring Bordeaux, Tuscany, Mendoza, and more." />
        <link rel="canonical" href="https://thewinetrips.com/journal" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thewinetrips.com/journal" />
        <meta property="og:title" content="Wine Travel Journal | Expert Guides to Wine Regions | The Wine Trips" />
        <meta property="og:description" content="Expert guides to the world's greatest wine regions. Local knowledge for discerning wine travellers exploring Bordeaux, Tuscany, Mendoza, and more." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/journal" />
        <meta property="twitter:title" content="Wine Travel Journal | Expert Guides to Wine Regions | The Wine Trips" />
        <meta property="twitter:description" content="Expert guides to the world's greatest wine regions. Local knowledge for discerning wine travellers exploring Bordeaux, Tuscany, Mendoza, and more." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "The Wine Trips Journal",
              "description": "Expert guides to the world's greatest wine regions.",
              "publisher": {
                "@type": "Organization",
                "name": "The Wine Trips"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/images/86aaa53d2b11e3925c08185f0a884df3.webp" 
              alt="Yellow and white winery building with vineyards and snow-capped mountains" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-6 font-sans drop-shadow-lg">
                The Journal
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
                Expert Guides to the World's<br />Greatest Wine Regions
              </h1>
              <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto font-sans drop-shadow-md">
                Local knowledge for the discerning wine traveller. Deep dives into terroir, history, and the people behind the labels.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Grid Section */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {articles.map((article, index) => (
                <Link
                  to={article.link}
                  key={article.id}
                  onClick={(e) => handleReadMore(e, article)}
                >
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex flex-col h-full bg-white rounded-sm cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[4/3] mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                      <img
                        src={article.image}
                        alt={article.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-gray-400 font-sans mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-serif text-gray-900 mb-3 leading-tight group-hover:text-[#c9a96e] transition-colors duration-300">
                        {article.title}
                      </h2>

                      <p className="text-gray-500 font-light text-sm leading-relaxed mb-6 line-clamp-3 font-sans flex-grow">
                        {article.excerpt}
                      </p>

                      <div className="pt-4 mt-auto border-t border-gray-100">
                        <span className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a96e] tracking-widest uppercase group-hover:translate-x-1 transition-transform duration-300">
                          Read More
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-gray-50 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Stay Informed</h2>
              <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto font-sans">
                Join our newsletter for the latest insights on wine travel, exclusive estate access, and vintage reports.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#c9a96e] text-gray-900 placeholder-gray-400 font-sans"
                />
                <button 
                  onClick={() => toast({ title: "Subscribed", description: "Thank you for subscribing to our journal." })}
                  className="px-8 py-3 bg-[#1a1a1a] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c9a96e] transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JournalPage;