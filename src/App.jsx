import React from 'react';
import InteractivePrototype from './screens/InteractivePrototype';

function App() {
  return (
    <div className="phone-wrapper">
      <div className="phone-screen">
        <div className="dynamic-island">
          <div className="camera-lens"></div>
        </div>
        <InteractivePrototype />
      </div>
    </div>
  );
}

export default App;
