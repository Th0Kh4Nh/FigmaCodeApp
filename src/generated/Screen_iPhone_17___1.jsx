import React from 'react';

export default function Screen_iPhone_17___1({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="iPhone 17 - 1" style={{"width":"402px","height":"874px","background":"#FFF","overflow":"hidden","position":"relative",}}><div data-layer="Chi tiêu cá nhân" style={{"width":"304px","height":"45px","color":"#000","fontFamily":"Inika","fontSize":"36px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"53px","top":"551px"}}><span style={{"fontFamily":"Inika, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"36px","color":"rgba(0,0,0,1)"}}>Chi tiêu cá nhân</span></div><img data-layer="image 8" style={{"width":"361px","height":"197px","aspectRatio":"361/197","position":"absolute","left":"20px","top":"326px"}} src="https://api.builder.io/api/v1/image/assets/TEMP/b4f04699264d4098b2fbf5e239d66d7dfe5987f2?width=722" alt=""  /></div>

    </div>
  );
}