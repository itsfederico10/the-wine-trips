import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperienceCard = ({ experience, index }) => {
  // Descriptive SEO alt text mapping based on experience title or ID
  const getAltText = (exp) => {
    if (exp.title.includes('Bordeaux')) return "Private wine tasting in exclusive Bordeaux château cellar with oak barrels";
    if (exp.title.includes('Toscana')) return "Curated vineyard tour through Tuscany wine region with winemaker";
    if (exp.title.includes('Mendoza')) return "Exclusive wine cellar experience at Mendoza bodega in Argentina";
    if (exp.title.includes('Ribera')) return "Private dining with wine pairing at historic Spanish wine estate";
    return exp.title;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col h-full bg-white rounded-sm overflow-hidden"
    >
      <div className="aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={experience.image}
          alt={getAltText(experience)}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="py-8 pr-8">
        <h3 className="text-xl font-normal text-gray-900 mb-2 tracking-tight">
          {experience.title}
        </h3>
        <p className="text-xs font-light text-gray-500 uppercase tracking-widest mb-4">
          {experience.subtitle}
        </p>
        <p className="text-sm font-light text-gray-600 leading-relaxed mb-8 line-clamp-3">
          {experience.description}
        </p>
        
        <Link
          to={`/experiences/${experience.id}`}
          className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-gray-900 hover:opacity-60 transition-all duration-300"
        >
          <span>View the trip</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;