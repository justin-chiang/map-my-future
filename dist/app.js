document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".location");document.getElementsByClassName("map")[0].onload=function(e){let t=null,n={x:0,y:0};const o=e.target;let s,a,l,c,i,d=null;function r(e){const t=o.getScreenCTM();return{x:(e.clientX-t.e)/t.a,y:(e.clientY-t.f)/t.d}}function u(e){t=null}o.addEventListener("mousedown",(function(e){if(t=e.target.parentNode,t.classList.contains("undraggable"))return void(t=null);t.classList.contains("confined")&&(s=t.getBBox(),a=-100-s.x,c=2200-s.x-s.width,l=-30-s.y,i=1200-s.y-s.height);n=r(e);const u=t.transform.baseVal;if(0===u.length){const e=o.createSVGTransform();e.setTranslate(0,0),t.transform.baseVal.insertItemBefore(e,0)}d=u.getItem(0),n.x-=d.matrix.e,n.y-=d.matrix.f})),o.addEventListener("mousemove",(function(e){if(t){e.preventDefault();const o=r(e);let s=o.x-n.x,u=o.y-n.y;t.classList.contains("confined")&&(s<a?s=a:s>c&&(s=c),u<l?u=l:u>i&&(u=i)),d.setTranslate(s,u)}})),o.addEventListener("mouseup",u),o.addEventListener("mouseleave",u)};const t=new Audio("../assets/map-my-future-bgm.ogg");t.play(),t.loop=!0,e.forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-location");console.log(`${t} is selected.`)}))}));let n=!0,o=!1;const s=document.getElementById("music-button"),a=document.getElementById("info-button");s.addEventListener("click",(e=>{const o=document.querySelectorAll("img")[0];n?(o.src="../assets/audio_off.png",t.pause()):(o.src="../assets/audio_on.png",t.play()),n=!n})),a.addEventListener("click",(e=>{document.getElementById("info-popup").style.display=o?"none":"flex",o=!o}))}));