import React from 'react';

export default function Screen_iPhone_17___5({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="iPhone 17 - 5" style={{"width":"402px","height":"874px","background":"#FFF","overflow":"hidden","position":"relative",}}><div style={{"display":"inline-flex","padding":"5px 10px","justifyContent":"center","alignItems":"center","gap":"10px","borderRadius":"9px","background":"#314C1C","position":"absolute","left":"339px","top":"179px","width":"40px","height":"21px"}}><div data-layer="Start" style={{"color":"#FFF","textAlign":"center","fontFamily":"Akshar","fontSize":"10px","fontStyle":"normal","fontWeight":"400","lineHeight":"normal","position":"relative"}}><span style={{"fontFamily":"Akshar, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"400","fontSize":"10px","color":"rgba(255,255,255,1)"}}>Start</span></div></div><div data-layer="WELCOME BACK" style={{"width":"347px","height":"137px","color":"#000","fontFamily":"Inika","fontSize":"36px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"52px","top":"557px"}}><span style={{"fontFamily":"Inika, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"36px","color":"rgba(0,0,0,1)"}}>WELCOME BACK</span></div><img data-layer="image 5" style={{"width":"391px","height":"220px","aspectRatio":"391/220","position":"absolute","left":"-12px","top":"289px"}} src="https://api.builder.io/api/v1/image/assets/TEMP/041690d2c6dd55ae21ff09bf509c8b93e5206a31?width=782" alt=""  /><div style={{"width":"132px","height":"53px","background":"#3EA383","position":"absolute","left":"33px","top":"728px"}}></div><div style={{"width":"132px","height":"53px","background":"#00D09E","position":"absolute","left":"237px","top":"728px"}}></div><div data-layer="Đăng nhập" style={{"color":"#000","fontFamily":"Inika","fontSize":"20px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"47px","top":"742px","width":"103px","height":"26px"}}><span style={{"fontFamily":"Inika, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"20px","color":"rgba(0,0,0,1)"}}>Đăng nhập</span></div><div data-layer="Đăng ký" style={{"color":"#000","fontFamily":"Inika","fontSize":"20px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"264px","top":"742px","width":"79px","height":"26px"}}><span style={{"fontFamily":"Inika, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"20px","color":"rgba(0,0,0,1)"}}>Đăng ký</span></div></div>

    </div>
  );
}