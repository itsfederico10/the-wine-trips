import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();
  const location = useLocation();
  
  // Partner Form State
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to section logic
  useEffect(() => {
    if (location.hash === '#partner-form') {
      const element = document.getElementById('partner-form');
      if (element) {
        // Small timeout to ensure DOM is ready and layout is settled
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const carouselImages = [{
    src: '/images/16926025ba2fb19aae7294d3f823e08d.webp',
    label: 'Château Lafite Rothschild team at prestigious Bordeaux wine estate',
    alt: 'Château Lafite Rothschild team at prestigious Bordeaux wine estate'
  }, {
    src: '/images/1c156dd8c0b1e50bdd5ef5ecdfc1e632.webp',
    label: 'Oak barrels in wine cellar at Château La Mission Haut-Brion Bordeaux',
    alt: 'Oak barrels in wine cellar at Château La Mission Haut-Brion Bordeaux'
  }, {
    src: '/images/707a534ce9f8c1d70d5274195c58ee36.webp',
    label: 'Vietti winery vineyard in Barolo Piedmont Italy wine region',
    alt: 'Vietti winery vineyard in Barolo Piedmont Italy wine region'
  }, {
    src: '/images/f3d94d36ee5e95b7df1c77bdc0f4b888.webp',
    label: 'Buenos Aires wine tasting with Piero Incisa Della Rocchetta',
    alt: 'Buenos Aires wine tasting with Piero Incisa Della Rocchetta'
  }, {
    src: '/images/300c630549f5d07f5c9680cc7933252f.webp',
    label: 'Tuscan vineyard sunset with cypress trees and rolling hills',
    alt: 'Tuscan vineyard sunset with cypress trees and rolling hills'
  }];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in both email and message fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('The waiting list')
        .insert([
          { 
            email: email,
            message: message,
            full_name: null,
            country_residence: null,
            experience_interest: null,
            instagram: null,
            source: 'partner'
          }
        ]);

      if (error) throw error;

      toast({
        title: "Message Sent",
        description: "We will be in touch shortly.",
      });

      setEmail('');
      setMessage('');

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please email us at info@thewinetrips.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us - The Wine Trips</title>
        <meta name="description" content="The story behind The Wine Trips - born from a passion for wine, travel, and authentic connections." />
        <link rel="canonical" href="https://thewinetrips.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thewinetrips.com/about" />
        <meta property="og:title" content="About Us - The Wine Trips" />
        <meta property="og:description" content="The story behind The Wine Trips - born from a passion for wine, travel, and authentic connections." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/about" />
        <meta property="twitter:title" content="About Us - The Wine Trips" />
        <meta property="twitter:description" content="The story behind The Wine Trips - born from a passion for wine, travel, and authentic connections." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            {/* Desktop Hero Image - Hidden on mobile */}
            <img 
              src="/images/f06d04c2a8d5d6a69378d7d33f086898.webp" 
              alt="Château team at exclusive wine estate in Bordeaux France" 
              className="hidden md:block w-full h-full object-cover" 
            />
            {/* Mobile Hero Image - Hidden on desktop */}
            <img 
              src="/images/85e3ea806cd248d538a9217e5a3a22a1.webp" 
              alt="Wine Trips team members in vineyard" 
              className="block md:hidden w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-tight italic mb-8">
              "A wine enthusiast who decided to share the journey"
            </h1>
            <div className="w-24 h-[1px] bg-[#c9a96e] mx-auto" />
          </motion.div>
        </section>

        {/* MY STORY SECTION */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left Column: Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col justify-center">
              <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-8 font-sans">
                My Story
              </span>
              <div className="space-y-6 text-gray-800 font-light leading-loose text-base md:text-lg font-sans text-justify">
                <p>
                  Like many of the best stories, this one began with a leap of faith. After building a career at Amazon, I found myself increasingly drawn not to the boardroom, but to the vineyard—to the stories bottled in glass, the history rooted in soil, and the people who dedicated their lives to the art of winemaking.
                </p>
                <p>I pursued my passion seriously by studying all there is about wine, but knowledge alone wasn't enough. I needed to experience it. I traveled to the world's most revered wine regions, knocking on cellar doors and breaking bread with winemakers. On the right, you can see an image of myself joking with Piero Incisa Della Rocchetta. Crazy right?</p>
                <p>
                  What I discovered was that true luxury in wine isn't just about the label; it's about access and connection. It's about sitting at the family table, tasting barrels that will never reach the market, and understanding the soul of a place. That is why I founded The Wine Trips—to open those same doors for you.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Carousel */}
            <div className="relative h-full min-h-[500px] md:min-h-0">
              <div className="relative w-full h-full overflow-hidden rounded-xl shadow-xl bg-gray-100 group">
                <AnimatePresence mode="wait">
                  <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0">
                    <img src={carouselImages[currentSlide].src} alt={carouselImages[currentSlide].alt} className="w-full h-full object-cover transition-transform duration-[4000ms] ease-linear scale-100 group-hover:scale-105" />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient for link visibility */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10 rounded-b-xl" />
                
                {/* Instagram Link */}
                <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                  <a href="https://instagram.com/its.federico" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white border-b border-white/50 pb-1 hover:text-[#c9a96e] hover:border-[#c9a96e] transition-colors duration-300 font-sans shadow-sm">
                    <Instagram className="w-4 h-4" />
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MANIFESTO SECTION */}
        <section className="py-24 bg-[#fafafa]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8 leading-relaxed italic">"The Wine Trips was created to serve a specific purpose: bring people closer to wine through enriching experiences while supporting wine producers."</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto font-sans">
                We are not a travel agency. We are curators of rare moments. Our journeys are crafted for those who seek to go beyond the tasting room and into the heart of the terroir.
              </p>
              <div className="w-16 h-[1px] bg-[#c9a96e] mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* OUR VALUES SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">What We Stand For</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-serif text-gray-900">Sustainability</h3>
                <p className="text-gray-600 font-light leading-relaxed font-sans text-justify">
                  Global wine consumption is changing. Markets are shifting, younger generations are drinking less, and both world's finest estates and small family producers are navigating an industry in transition. We believe wine tourism is the most meaningful responses to that challenge: bringing curious, engaged visitors directly to the origin, turning a bottle into a conversation, and a conversation into a lasting connection with a place.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-serif text-gray-900">Quality</h3>
                <p className="text-gray-600 font-light leading-relaxed font-sans text-justify">
                  The Wine Trips deliberately keep our groups small and our experiences deep. Not because wine is only for a select few — it isn't — but because genuine understanding of a place cannot be rushed or scaled. Demystifying that wine is only for those “who know about wine” is one our key principles, as it will directly bring together more people around wine. Quality over volume is our commitment both to our guests and to the producers who open their doors for us
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-serif text-gray-900">Respect</h3>
                <p className="text-gray-600 font-light leading-relaxed font-sans text-justify">
                  Every journey we design is also an act of advocacy for the regions, the producers, and the craft behind every bottle of wine. By doing what we do best, we are building bridges between the people who make wine and the people who love it; or are about to.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-serif text-gray-900">Partnership</h3>
                <p className="text-gray-600 font-light leading-relaxed font-sans text-justify">
                  If you are a producer who shares our vision, The Wine Trips would love to talk to you. Whether you are a boutique producer taking your first steps in wine tourism or an established estate looking for a quality-focused partner, what matters to us is a shared commitment to the experience
                </p>
              </motion.div>
            </div>
            
            {/* PARTNER FORM SECTION */}
            <motion.div 
              id="partner-form"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-24 pt-16 border-t border-gray-100 max-w-2xl mx-auto"
            >
              <div className="text-center mb-10">
                <span className="block text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">
                  Collaboration
                </span>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">Partner With Us</h2>
                <p className="text-gray-600 font-light text-sm">
                  Are you a winery or hospitality partner? We'd love to hear from you.
                </p>
              </div>

              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-sans">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-[#c9a96e] transition-colors text-gray-900 text-sm placeholder-gray-300 focus:outline-none font-sans" 
                    placeholder="partner@winery.com" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-sans">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                    rows="4"
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-[#c9a96e] transition-colors text-gray-900 text-sm placeholder-gray-300 focus:outline-none font-sans resize-none" 
                    placeholder="Tell us about your estate or proposal..." 
                    required
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#c9a96e] font-serif italic mb-6 text-sm">We will get back to you shortly</p>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-3 bg-[#1a1a1a] text-white rounded-none text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-white disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="text-[10px] text-gray-400 text-center mt-6 leading-tight font-light max-w-xs mx-auto">
                    I agree to receive email updates from TheWineTrips and consent to the processing of my personal data in accordance with the privacy policy.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;