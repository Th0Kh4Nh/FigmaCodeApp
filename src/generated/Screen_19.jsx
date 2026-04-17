import React from 'react';

export default function Screen_19({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="19" style={{"display":"flex","width":"430px","height":"932px","flexDirection":"column","justifyContent":"center","alignItems":"center","borderRadius":"40px","background":"#FFF","overflow":"hidden","position":"relative",}}><div data-layer="7" style={{"display":"flex","width":"430px","height":"932px","flexDirection":"column","justifyContent":"center","alignItems":"center","flexShrink":"0","borderRadius":"40px","background":"#FFF","overflow":"hidden","position":"absolute","left":"0px","top":"0px"}}><img src="https://api.builder.io/api/v1/image/assets/TEMP/dbc70265a89f54968b7e796243c4233377ba333f?width=860" style={{"width":"430px","height":"932px","flexShrink":"0","borderRadius":"40px","overflow":"hidden","position":"absolute","left":"0px","top":"0px"}} alt="9.4.0 - A - Categories" data-layer="9.4.0 - A - Categories"  /></div></div>

    </div>
  );
}