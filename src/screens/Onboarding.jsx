import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Ghi chép siêu tốc",
      description: "Nhập giao dịch chỉ trong vài giây. Gắn thẻ phân loại để dễ dàng quản lý.",
      image: "iPhone 17 - 2.png",
    },
    {
      title: "Lập ngân sách thông minh",
      description: "Tạo các “hũ” ngân sách cho ăn uống, mua sắm. Nhận cảnh báo khi sắp vượt mức.",
      image: "iPhone 17 - 3.png",
    },
    {
      title: "Thấu hiểu ví tiền",
      description: "Xem báo cáo chi tiết theo tuần/tháng. Nhận diện các khoản chi chưa hợp lý.",
      image: "iPhone 17 - 4.png",
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/welcome');
    }
  };

  const handleSkip = () => {
    navigate('/welcome');
  };

  return (
    <div className="screen-container" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header with Skip Button */}
      <div style={{ padding: '40px 24px 20px', display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={handleSkip}
          style={{ 
            backgroundColor: '#2b5329', 
            color: 'white', 
            border: 'none', 
            borderRadius: '20px', 
            padding: '8px 16px',
            fontSize: '14px',
            cursor: 'pointer'
          }}>
          Skip
        </button>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 24px' }}>
        
        {/* Illustration Container - Using background position to extract only the artwork from the full screen PNG */}
        <div style={{ flex: 1, width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div 
            style={{ 
              width: '100%', 
              height: '350px', 
              backgroundImage: `url('/assets/${steps[currentStep].image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%', // focus on the upper/middle where the illustration is
              backgroundRepeat: 'no-repeat'
            }} 
          />
        </div>

        {/* Text Content */}
        <div style={{ textAlign: 'center', marginBottom: '40px', zIndex: 2 }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px', color: '#000' }}>
            {steps[currentStep].title}
          </h2>
          <p style={{ fontSize: '16px', color: '#888', lineHeight: '1.5' }}>
            {steps[currentStep].description}
          </p>
        </div>

        {/* Dots & Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '60px', zIndex: 2 }}>
          <div style={{ display: 'flex', gap: '8px', flex: 1, justifyContent: 'center' }}>
            {steps.map((_, index) => (
              <div 
                key={index}
                onClick={() => setCurrentStep(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentStep === index ? '#2b5329' : '#e0e0e0',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Start Button (only on last step) */}
        {currentStep === steps.length - 1 && (
          <div style={{ position: 'absolute', bottom: '40px', right: '40px', zIndex: 3 }}>
             {/* Note: In the design the Start button is at the top right, replacing Skip. 
                 Let's fix that by moving it to the top. */}
          </div>
        )}
      </div>

      {/* Floating Start/Next invisible layer to progress */}
      <div 
        onClick={handleNext}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '150px', zIndex: 0, cursor: 'pointer' }}
      />
    </div>
  );
}

export default Onboarding;
