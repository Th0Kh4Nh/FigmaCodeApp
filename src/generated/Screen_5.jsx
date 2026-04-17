import React from 'react';

export default function Screen_5({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="5" style={{"display":"flex","width":"430px","height":"932px","flexDirection":"column","justifyContent":"center","alignItems":"center","borderRadius":"40px","background":"#FFF","overflow":"hidden","position":"relative",}}><img src="https://api.builder.io/api/v1/image/assets/TEMP/3793c7b36e24c6e6552d9f4252e35359ee2e5999?width=860" style={{"width":"430px","height":"932px","flexShrink":"0","borderRadius":"40px","overflow":"hidden","position":"absolute","left":"0px","top":"0px"}} alt="9.2.6 - A - Calender" data-layer="9.2.6 - A - Calender"  /></div>

    </div>
  );
}