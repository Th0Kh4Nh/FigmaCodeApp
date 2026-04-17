import React from 'react';

export default function Screen_iPhone_17___2({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="iPhone 17 - 2" style={{"width":"402px","height":"874px","background":"#FFF","overflow":"hidden","position":"relative",}}><svg id="66:391" style={{"position":"absolute","left":"132px","top":"749px"}} width="68" height="18" viewBox="0 0 68 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" r="9" fill="#314C1C"/>
<circle cx="34" cy="9" r="9" fill="#D9D9D9"/>
<circle cx="59" cy="9" r="9" fill="#D9D9D9"/>
</svg>
<div style={{"display":"inline-flex","padding":"5px 10px","justifyContent":"center","alignItems":"center","gap":"10px","borderRadius":"9px","background":"#314C1C","position":"absolute","left":"282px","top":"184px","width":"37px","height":"21px"}}><div data-layer="Skip" style={{"color":"#FFF","textAlign":"center","fontFamily":"Akshar","fontSize":"10px","fontStyle":"normal","fontWeight":"400","lineHeight":"normal","position":"relative"}}><span style={{"fontFamily":"Akshar, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"400","fontSize":"10px","color":"rgba(255,255,255,1)"}}>Skip</span></div></div><img data-layer="image 2" style={{"width":"280px","height":"292px","aspectRatio":"70/73","position":"absolute","left":"51px","top":"257px"}} src="https://api.builder.io/api/v1/image/assets/TEMP/d74bc1835770af4c1bb1d1590b78f74d25c8bcbe?width=560" alt=""  /><div data-layer="Ghi chép siêu tốc" style={{"width":"304px","height":"45px","color":"#000","fontFamily":"Inika","fontSize":"36px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"48px","top":"549px"}}><span style={{"fontFamily":"Inika, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"36px","color":"rgba(0,0,0,1)"}}>Ghi chép siêu tốc</span></div><div data-layer="Nhập giao dịch chỉ trong vài giây.Gắn thẻ phân loại để dễ dàng quản lý." style={{"width":"304px","height":"45px","color":"rgba(147, 141, 141, 0.90)","fontFamily":"Inika","fontSize":"16px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"62px","top":"674px"}}><span style={{"fontFamily":"Inika, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"16px","color":"rgba(147,141,141,0.8999999761581421)"}}>Nhập giao dịch chỉ trong vài giây.Gắn  thẻ phân loại  để dễ dàng quản lý.</span></div></div>

    </div>
  );
}