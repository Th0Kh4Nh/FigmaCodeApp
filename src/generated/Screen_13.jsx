import React from 'react';

export default function Screen_13({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="13" style={{"display":"flex","width":"430px","height":"932px","flexDirection":"column","justifyContent":"center","alignItems":"center","borderRadius":"40px","background":"#FFF","overflow":"hidden","position":"relative",}}><img src="https://api.builder.io/api/v1/image/assets/TEMP/14aeb2c1b5e342d75467e11194d27cc776ee3c2b?width=860" style={{"width":"430px","height":"932px","flexShrink":"0","borderRadius":"40px","overflow":"hidden","position":"absolute","left":"0px","top":"0px"}} alt="9.4.3 - B - Groceries/Add Expenses" data-layer="9.4.3 - B - Groceries/Add Expenses"  /></div>

    </div>
  );
}