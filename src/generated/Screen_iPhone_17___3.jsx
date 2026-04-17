import React from 'react';

export default function Screen_iPhone_17___3({ onClickLayer }) {
  return (
    <div onClick={(e) => { 
       const layer = e.target.closest('[data-layer]'); 
       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); 
    }}>
      


<svg id="2:18" data-layer="iPhone 17 - 3" style={{"background":"#FFF","overflow":"hidden","position":"absolute","left":"1241px","top":"103px"}} width="402" height="874" viewBox="0 0 402 874" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="402" height="874" fill="white"/>
<circle cx="153" cy="760" r="9" fill="#D9D9D9"/>
<circle cx="178" cy="760" r="9" fill="#314C1C"/>
<circle cx="203" cy="760" r="9" fill="#D9D9D9"/>
<circle cx="153" cy="760" r="9" fill="#D9D9D9"/>
<circle cx="203" cy="760" r="9" fill="#314C1C"/>
<circle cx="203" cy="760" r="9" fill="#D9D9D9"/>
<rect x="266" y="175" width="37" height="21" rx="9" fill="#314C1C"/>
<text fill="white" style={{"whiteSpace":"pre"}} xml:space="preserve" font-family="Akshar" font-size="10" letter-spacing="0em"><tspan x="276.448" y="189">Skip</tspan></text>
<text fill="black" style={{"whiteSpace":"pre"}} xml:space="preserve" font-family="Inika" font-size="36" font-weight="bold" letter-spacing="0em"><tspan x="61" y="585.262">L&#x1ead;p ng&#xe2;n s&#xe1;ch </tspan><tspan x="61" y="632.262">th&#xf4;ng minh</tspan></text>
<text fill="#938D8D" fill-opacity="0.9" style={{"whiteSpace":"pre"}} xml:space="preserve" font-family="Inika" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="49" y="691.172">T&#x1ea1;o c&#xe1;c &#x2018;h&#x169;&#x201d;ng&#x1eab;n s&#xe2;ch cho &#x103;n u&#x1ed1;ng ,mua </tspan><tspan x="49" y="712.172">s&#x1eaf;m.Nh&#x1ead;n c&#x1ea3;nh b&#xe1;o khi s&#x1eaf;p v&#x1b0;&#x1ee3;t m&#x1ee9;c.</tspan></text>
<rect x="61" y="262" width="262" height="262" fill="url(#pattern0_2_18)"/>
<defs>
<pattern id="pattern0_2_18" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2_18" transform="scale(0.00444444)"/>
</pattern>

</defs>
</svg>


    </div>
  );
}