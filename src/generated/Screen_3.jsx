import React from 'react';

export default function Screen_3({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="3" style={{"display":"flex","width":"430px","height":"932px","flexDirection":"column","justifyContent":"center","alignItems":"center","borderRadius":"40px","background":"#FFF","overflow":"hidden","position":"relative",}}><img src="https://api.builder.io/api/v1/image/assets/TEMP/0aca2be68cd3fc0a879f6efc9b8089bd41e62cf2?width=860" style={{"width":"430px","height":"932px","flexShrink":"0","borderRadius":"40px","overflow":"hidden","position":"absolute","left":"0px","top":"0px"}} alt="9 - A - Home - Bottom Navigation" data-layer="9 - A - Home - Bottom Navigation"  /></div>

    </div>
  );
}