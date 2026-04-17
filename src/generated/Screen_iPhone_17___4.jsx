import React from 'react';

export default function Screen_iPhone_17___4({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="iPhone 17 - 4" style={{"display":"flex","width":"402px","height":"874px","flexDirection":"column","justifyContent":"center","alignItems":"center","background":"#FFF","overflow":"hidden","position":"relative",}}><div data-layer="iPhone 17 - 4" style={{"width":"402px","height":"874px","flexShrink":"0","background":"#FFF","overflow":"hidden","position":"absolute","left":"0px","top":"0px"}}><svg id="66:418" style={{"position":"absolute","left":"163px","top":"753px"}} width="68" height="18" viewBox="0 0 68 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" r="9" fill="#D9D9D9"/>
<circle cx="34" cy="9" r="9" fill="#D9D9D9"/>
<circle cx="59" cy="9" r="9" fill="#314C1C"/>
</svg>
<div style={{"display":"inline-flex","padding":"5px 10px","justifyContent":"center","alignItems":"center","gap":"10px","borderRadius":"9px","background":"#314C1C","position":"absolute","left":"275px","top":"184px","width":"40px","height":"21px"}}><div data-layer="Start" style={{"color":"#FFF","textAlign":"center","fontFamily":"Akshar","fontSize":"10px","fontStyle":"normal","fontWeight":"400","lineHeight":"normal","position":"relative"}}><span style={{"fontFamily":"Akshar, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"400","fontSize":"10px","color":"rgba(255,255,255,1)"}}>Start</span></div></div><img data-layer="image 5" style={{"width":"267px","height":"249px","aspectRatio":"89/83","position":"absolute","left":"62px","top":"280px"}} src="https://api.builder.io/api/v1/image/assets/TEMP/61caa0cdc31ff5922b5639d02131397606e02c02?width=534" alt=""  /><div data-layer="Thấu hiểu ví tiền" style={{"width":"304px","height":"45px","color":"#000","fontFamily":"Inika","fontSize":"36px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"25px","top":"568px"}}><span style={{"fontFamily":"Inika, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"36px","color":"rgba(0,0,0,1)"}}>Thấu hiểu ví tiền</span></div><div data-layer="Xem báo cáo chi tiết theo tuần/tháng.Nhận diện các khoản chi chưa hợp lý" style={{"width":"334px","height":"45px","color":"rgba(147, 141, 141, 0.90)","fontFamily":"Inika","fontSize":"16px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"35px","top":"675px"}}><span style={{"fontFamily":"Inika, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"16px","color":"rgba(147,141,141,0.8999999761581421)"}}>Xem  báo cáo chi tiết  theo tuần/tháng.Nhận diện các khoản chi chưa hợp lý</span></div></div></div>

    </div>
  );
}