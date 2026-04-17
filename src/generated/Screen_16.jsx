import React from 'react';

export default function Screen_16({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="16" style={{"display":"flex","width":"430px","height":"932px","flexDirection":"column","justifyContent":"center","alignItems":"center","borderRadius":"40px","background":"#FFF","overflow":"hidden","position":"relative",}}><img src="https://api.builder.io/api/v1/image/assets/TEMP/83f6996794a113e8358a6808860946023af09f72?width=860" style={{"width":"430px","height":"932px","flexShrink":"0","borderRadius":"40px","overflow":"hidden","position":"absolute","left":"0px","top":"0px"}} alt="9.4.8 - A - Savings" data-layer="9.4.8 - A - Savings"  /></div>

    </div>
  );
}