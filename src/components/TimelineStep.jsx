import React from 'react';
import { motion } from 'framer-motion';

const TimelineStep = ({ step, index, isActive, onClick }) => {
  return (
    <motion.div
      layout
      onClick={() => onClick(index)}
      className={`relative pl-8 pb-12 border-l transition-colors duration-500 cursor-pointer group ${
        isActive ? 'border-gray-900' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div 
        className={`absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full transition-all duration-500 ${
          isActive ? 'bg-gray-900 scale-125' : 'bg-gray-300 group-hover:bg-gray-400'
        }`} 
      />
      
      <div className="relative -top-1.5">
        <div className="flex items-center gap-4 mb-3">
          <span className={`text-xs font-light tracking-widest uppercase transition-colors duration-500 ${
            isActive ? 'text-gray-900' : 'text-gray-400'
          }`}>
            Step 0{step.number}
          </span>
          <h3 className={`text-lg transition-colors duration-500 ${
            isActive ? 'font-normal text-gray-900' : 'font-light text-gray-400'
          }`}>
            {step.title}
          </h3>
        </div>
        
        <motion.div
          initial={false}
          animate={{ 
            height: isActive ? 'auto' : 0,
            opacity: isActive ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="text-sm font-light text-gray-600 leading-relaxed max-w-xl pt-2">
            {step.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineStep;