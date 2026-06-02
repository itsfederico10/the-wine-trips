import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 'bordeaux',
    title: 'Where Legends Are Bottled',
    subtitle: 'Bordeaux, France',
    image: '/images/6e7ac65143eb04d13fa541251cefc917.webp',
    to: '/experiences/bordeaux'
  },
  {
    id: 'toscana',
    title: 'Between Cypress Trees & Ancient Cellars',
    subtitle: 'Toscana, Italy',
    image: '/images/7b385dec483db559f6ede32c163e47e7.webp',
    to: '/experiences/toscana'
  },
  {
    id: 'mendoza',
    title: 'Malbec at the Foot of the Andes',
    subtitle: 'Mendoza, Argentina',
    image: '/images/7dbbafdc335bd67dfbd883f761481c69.webp',
    to: '/experiences/mendoza'
  },
  {
    id: 'ribera',
    title: 'The Hidden Soul of Spanish Wine',
    subtitle: 'Ribera del Duero, Spain',
    image: '/images/53490d75f77d93ebfd62b50cb3e9ea40.webp',
    to: '/experiences/ribera-del-duero'
  },
  {
    id: 'piemonte',
    title: 'The Burgundy of Italy',
    subtitle: 'Piemonte, Italy',
    image: '/images/707a534ce9f8c1d70d5274195c58ee36.webp',
    to: '/experiences/piedmont'
  }
];

const DestinationSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-white/90 text-xl md:text-2xl font-light italic mb-4 font-sans tracking-wide"
              >
                {slides[current].subtitle}
              </motion.p>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white text-4xl md:text-6xl lg:text-7xl font-serif mb-12 leading-tight"
              >
                {slides[current].title}
              </motion.h2>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link
                  to={slides[current].to}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-4 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              idx === current ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Arrow Controls */}
      <div className="absolute inset-0 pointer-events-none flex justify-between items-center px-4 md:px-8">
         <button 
           onClick={prevSlide}
           className="pointer-events-auto p-2 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white transition-all duration-300"
         >
           <ChevronLeft className="w-6 h-6" />
         </button>
         <button 
           onClick={nextSlide}
           className="pointer-events-auto p-2 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white transition-all duration-300"
         >
           <ChevronRight className="w-6 h-6" />
         </button>
      </div>
    </div>
  );
};

export default DestinationSlider;