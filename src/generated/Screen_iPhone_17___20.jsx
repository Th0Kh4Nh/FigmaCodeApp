import React from 'react';

export default function Screen_iPhone_17___20({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      

<style dangerouslySetInnerHTML={{__html: `:root{--NICE-WHITE:#FEFEFE;}`}} />
<div data-layer="iPhone 17 - 20" style={{"display":"flex","width":"402px","height":"874px","flexDirection":"column","justifyContent":"center","alignItems":"center","background":"#FFF","overflow":"hidden","position":"relative",}}><img src="https://api.builder.io/api/v1/image/assets/TEMP/ea5584c397c8a53023cbdb617710b54c91c1e402?width=804" style={{"width":"402px","height":"874px","flexShrink":"0","overflow":"hidden","position":"absolute","left":"0px","top":"0px"}} alt="Account Created Screen" data-layer="Account Created Screen"  /></div>

    </div>
  );
}