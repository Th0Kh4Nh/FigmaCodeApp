import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="screen-container" style={{ padding: '0', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
      
      {/* Top Header */}
      <div style={{ padding: '40px 24px 20px', display: 'flex', justifyContent: 'flex-end' }}>
        {/* Placeholder for top bar if needed */}
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 24px', justifyContent: 'center' }}>
        
        {/* Illustration */}
        <div style={{ width: '100%', height: '300px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <div 
            style={{ 
              width: '100%', 
              height: '100%', 
              backgroundImage: `url('/assets/iPhone 17 - 5.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
              backgroundRepeat: 'no-repeat'
            }} 
          />
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '36px', marginBottom: '60px', textAlign: 'center', letterSpacing: '1px' }}>
          WELCOME BACK
        </h1>

        {/* Buttons */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          <button 
            onClick={() => navigate('/screen/25')}
            className="btn"
            style={{ 
              flex: 1, 
              backgroundColor: '#44a085', 
              color: 'black',
              padding: '16px 0',
              fontSize: '18px',
              fontFamily: 'var(--font-serif)',
              fontWeight: '700'
            }}>
            Đăng nhập
          </button>
          
          <button 
            onClick={() => navigate('/screen/26')}
            className="btn"
            style={{ 
              flex: 1, 
              backgroundColor: '#00e5aa', // Brighter green for signup
              color: 'black',
              padding: '16px 0',
              fontSize: '18px',
              fontFamily: 'var(--font-serif)',
              fontWeight: '700'
            }}>
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
