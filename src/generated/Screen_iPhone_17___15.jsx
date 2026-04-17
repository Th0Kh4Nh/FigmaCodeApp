import React from 'react';

export default function Screen_iPhone_17___15({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="iPhone 17 - 15" style={{"width":"402px","height":"874px","background":"#FFF","overflow":"hidden","position":"relative",}}><div data-layer="Mật khẩu đã thay đổi" style={{"width":"345px","height":"31px","color":"#000","fontFamily":"Inter","fontSize":"32px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"29px","top":"454px"}}><span style={{"fontFamily":"Inter, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"32px","color":"rgba(0,0,0,1)"}}>Mật khẩu đã thay đổi</span></div><div data-layer="Bạn đã đặt mật khẩu thành công" style={{"width":"209px","height":"23px","color":"#000","fontFamily":"Inter","fontSize":"13px","fontStyle":"normal","fontWeight":"500","lineHeight":"normal","position":"absolute","left":"97px","top":"509px"}}><span style={{"fontFamily":"Inter, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"500","fontSize":"13px","color":"rgba(0,0,0,1)"}}>Bạn đã  đặt mật khẩu thành công</span></div><svg id="68:564" style={{"fill":"#00D09E","opacity":"0.3","position":"absolute","left":"69px","top":"631px"}} width="254" height="58" viewBox="0 0 254 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M0 0H254V58H0V0Z" fill="#00D09E"/>
</svg>
<div data-layer="Đăng nhập ngay" style={{"width":"169px","height":"32px","color":"#000","fontFamily":"Inter","fontSize":"20px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"117px","top":"644px"}}><span style={{"fontFamily":"Inter, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"20px","color":"rgba(0,0,0,1)"}}>Đăng nhập ngay </span></div><img data-layer="image 2" style={{"width":"225px","height":"225px","aspectRatio":"1/1","position":"absolute","left":"83px","top":"185px"}} src="https://api.builder.io/api/v1/image/assets/TEMP/c1e646ff69ad4560ef532854f8d8c6281bb70817?width=450" alt=""  /></div>

    </div>
  );
}