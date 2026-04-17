import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

// All valid screens detected in the project
const allScreens = [
  "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png",
  "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png",
  "iPhone 17 - 1.png", "iPhone 17 - 2.png", "iPhone 17 - 3.png", "iPhone 17 - 4.png", "iPhone 17 - 5.png",
  "iPhone 17 - 6.png", "iPhone 17 - 7.png", "iPhone 17 - 8.png", "iPhone 17 - 9.png", "iPhone 17 - 10.png",
  "iPhone 17 - 15.png", "iPhone 17 - 16.png", "iPhone 17 - 17.png", "iPhone 17 - 20.png", "iPhone 17 - 21.png",
  "iPhone 17 - 22.png", "iPhone 17 - 23.png", "iPhone 17 - 26.png", "iPhone 17 - 32.png", "iPhone 17 - 35.png",
  "iPhone 17 - 38.png", "iPhone 17 - 44.png"
];

function ScreenViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // If id is a number, we can try to guess the file, but it's better to pass the index or exact name.
  // For simplicity, let's map id to the array index.
  const currentIndex = parseInt(id) || 0;
  
  // Bound check
  const safeIndex = Math.max(0, Math.min(currentIndex, allScreens.length - 1));
  const currentScreen = allScreens[safeIndex];

  const goNext = () => {
    if (safeIndex < allScreens.length - 1) navigate(`/screen/${safeIndex + 1}`);
  };

  const goPrev = () => {
    if (safeIndex > 0) navigate(`/screen/${safeIndex - 1}`);
  };

  return (
    <div className="screen-container" style={{ padding: 0, position: 'relative', backgroundColor: '#e5e5e5' }}>
      
      {/* Dynamic Image Renderer */}
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src={`/assets/${currentScreen}`} 
          alt={`Screen ${currentScreen}`} 
          style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'white', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }} 
        />
      </div>

      {/* Floating Navigation Controls to browse all 42 screens */}
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '12px 24px',
        borderRadius: '30px',
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        backdropFilter: 'blur(10px)',
        zIndex: 100
      }}>
        <button onClick={goPrev} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          <ChevronLeft size={24} />
        </button>
        
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          <Home size={20} />
        </button>

        <span style={{ color: 'white', fontSize: '14px', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
          {safeIndex + 1} / {allScreens.length}
        </span>

        <button onClick={goNext} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Title Badge */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#333',
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        {currentScreen}
      </div>
    </div>
  );
}

export default ScreenViewer;
