import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to onboarding after 2.5 seconds
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="screen-container full-center" style={{ backgroundColor: '#ffffff' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeIn 1s ease-in' }}>
        <img 
          src="/assets/iPhone 17 - 1.png" 
          alt="Splash Screen Art" 
          style={{ width: '100%', objectFit: 'contain', marginBottom: '20px' }} 
        />
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Splash;
