import React from 'react';

export default function Screen_18({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="18" style={{"display":"flex","width":"430px","height":"932px","flexDirection":"column","justifyContent":"center","alignItems":"center","borderRadius":"40px","background":"#FFF","overflow":"hidden","position":"relative",}}><img src="https://api.builder.io/api/v1/image/assets/TEMP/c8ba93492dcf19b966c62ec0baf4ade7209ff746?width=860" style={{"width":"430px","height":"932px","flexShrink":"0","borderRadius":"40px","overflow":"hidden","position":"absolute","left":"0px","top":"0px"}} alt="9.4.8 - C - Travel/Add Expenses" data-layer="9.4.8 - C - Travel/Add Expenses"  /></div>

    </div>
  );
}