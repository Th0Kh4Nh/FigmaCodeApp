import React from 'react';

export default function Screen_iPhone_17___16({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<div data-layer="iPhone 17 - 16" style={{"width":"402px","height":"874px","background":"#FFF","overflow":"hidden","position":"relative",}}><div data-layer="Quên mật khẩu" style={{"width":"273px","height":"30px","color":"#000","fontFamily":"Inter","fontSize":"32px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"64px","top":"377px"}}><span style={{"fontFamily":"Inter, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"32px","color":"rgba(0,0,0,1)"}}>Quên mật khẩu</span></div><svg id="78:1080" style={{"fill":"#FFF","opacity":"0.3","position":"absolute","left":"68px","top":"505px"}} width="254" height="55" viewBox="0 0 254 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M0 27.5C0 12.3122 12.3122 0 27.5 0H226.5C241.688 0 254 12.3122 254 27.5C254 42.6878 241.688 55 226.5 55H27.5C12.3122 55 0 42.6878 0 27.5Z" fill="white"/>
</svg>
<div data-layer="Email" style={{"width":"52px","height":"15px","color":"#000","fontFamily":"Inter","fontSize":"13px","fontStyle":"normal","fontWeight":"500","lineHeight":"normal","position":"absolute","left":"114px","top":"525px"}}><span style={{"fontFamily":"Inter, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"500","fontSize":"13px","color":"rgba(0,0,0,1)"}}>Email</span></div><svg id="78:1082" data-layer="ic:baseline-email" style={{"aspectRatio":"1/1","overflow":"hidden","position":"absolute","left":"80px","top":"521px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="black"/>
</svg>
<div data-layer="Vui lòng điền email?" style={{"width":"209px","height":"23px","color":"#000","fontFamily":"Inter","fontSize":"13px","fontStyle":"normal","fontWeight":"500","lineHeight":"normal","position":"absolute","left":"68px","top":"445px"}}><span style={{"fontFamily":"Inter, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"500","fontSize":"13px","color":"rgba(0,0,0,1)"}}>Vui lòng điền email?</span></div><svg id="78:1085" style={{"fill":"#FFF","opacity":"0.3","position":"absolute","left":"64px","top":"582px"}} width="262" height="49" viewBox="0 0 262 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M0 0H262V49H0V0Z" fill="white"/>
</svg>
<div data-layer="Gửi" style={{"width":"134px","height":"32px","color":"#000","fontFamily":"Inter","fontSize":"20px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"173px","top":"599px"}}><span style={{"fontFamily":"Inter, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"20px","color":"rgba(0,0,0,1)"}}>Gửi</span></div><div data-layer="Back to Login" style={{"width":"149px","height":"23px","color":"#000","fontFamily":"Inter","fontSize":"20px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal","position":"absolute","left":"128px","top":"688px"}}><span style={{"fontFamily":"Inter, -apple-system, Roboto, Helvetica, sans-serif","fontWeight":"700","fontSize":"20px","color":"rgba(0,0,0,1)"}}>Back to Login </span></div><svg id="78:1088" style={{"strokeWidth":"2px","stroke":"#666","position":"absolute","left":"116px","top":"691px"}} width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 16L0 8L3 0" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<img data-layer="image 3" style={{"width":"172px","height":"172px","aspectRatio":"1/1","position":"absolute","left":"109px","top":"163px"}} src="https://api.builder.io/api/v1/image/assets/TEMP/33d0eefe27fecbb4948b6788e5afc8efc92aa2d8?width=344" alt=""  /></div>

    </div>
  );
}