import React from 'react';
import { motion } from 'framer-motion';
import { Key, Map, Bell } from 'lucide-react';

const iconMap = {
  'exclusive-access': Key,
  'tailor-made': Map,
  'concierge': Bell
};

const FeatureCard = ({ feature, index }) => {
  const Icon = iconMap[feature.id];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.gradient} p-8 shadow-md hover:shadow-xl transition-all duration-500`}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 p-4 bg-white rounded-full shadow-sm">
          <Icon className="w-8 h-8 text-gray-900" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {feature.title}
        </h3>
        
        <p className="text-gray-700 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;