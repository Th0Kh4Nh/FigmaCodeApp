import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as GeneratedScreens from '../generated';
import { routeMap } from '../generated/routeMap';
import { RefreshCcw } from 'lucide-react';

// Combined sequence for a unified, continuous app experience
const unifiedSequence = [
  // 1. Splash & Auth
  "iPhone 17 - 1", "iPhone 17 - 2", "iPhone 17 - 3", "iPhone 17 - 4", 
  "iPhone 17 - 5", "iPhone 17 - 6", "iPhone 17 - 7", "iPhone 17 - 8", 
  "iPhone 17 - 9", "iPhone 17 - 10", "iPhone 17 - 15", "iPhone 17 - 16",
  
  // 2. Main Dashboard
  "iPhone 17 - 20", "iPhone 17 - 23", "iPhone 17 - 26", "iPhone 17 - 32", 
  "iPhone 17 - 35", "iPhone 17 - 38", "iPhone 17 - 44",

  // 3. Categories & Details
  "19", "20", "1", "3", "4", "5", "6", "7", "8", "9", "10", 
  "11", "12", "13", "14", "15", "16", "17", "18"
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 402 : -402,
    opacity: 0,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  }),
  center: {
    x: 0,
    opacity: 1,
    boxShadow: "-10px 0px 20px rgba(0,0,0,0.1)",
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 402 : -402,
    opacity: 0,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

export default function InteractivePrototype() {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentScreenKey = unifiedSequence[page] || unifiedSequence[0];
  const compName = routeMap[currentScreenKey];
  const ComponentToRender = GeneratedScreens[compName];

  const paginate = (newDirection) => {
    let newPage = page + newDirection;
    if (newPage >= unifiedSequence.length) newPage = 0; // loop back to start of flow
    if (newPage < 0) newPage = unifiedSequence.length - 1;
    setPage([newPage, newDirection]);
  };

  const handleGlobalClick = (e) => {
    // Basic navigation logic
    const layer = e.target.closest('[data-layer]');
    if (layer) {
      const name = layer.getAttribute('data-layer').trim();
      
      // Basic smart routing heuristic based on layer names
      if (name.includes('Back') || name.includes('Trở lại') || name.includes('Arrow')) {
        paginate(-1);
        return;
      }
      if (name === 'Home' || name.includes('Trang chủ')) {
        // Jump to Main Dashboard (iPhone 17 - 23)
        const targetIndex = unifiedSequence.indexOf('iPhone 17 - 23');
        if (targetIndex !== -1) {
           setPage([targetIndex, targetIndex > page ? 1 : -1]);
           return;
        }
      }
    }
    // Default: Advance to the next screen in the unified flow
    paginate(1);
  };

  return (
    <div 
      onClick={handleGlobalClick} 
      style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', cursor: 'pointer', backgroundColor: '#fff' }}
    >
      <AnimatePresence initial={false} custom={direction}>
        {ComponentToRender ? (
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="motion-wrapper"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              overflowY: 'auto', 
              overflowX: 'hidden'
            }}
          >
            <ComponentToRender />
          </motion.div>
        ) : (
          <div style={{ padding: 40, textAlign: 'center' }}>Loading Screen {currentScreenKey}...</div>
        )}
      </AnimatePresence>

      {/* Floating Restart App Button */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setPage([0, -1]); // Restart from beginning
        }}
        style={{
          position: 'absolute',
          top: 40,
          left: 20,
          width: 44,
          height: 44,
          borderRadius: 22,
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 9999,
          backdropFilter: 'blur(5px)'
        }}
        title="Restart Prototype"
      >
        <RefreshCcw size={20} />
      </button>
    </div>
  );
}
