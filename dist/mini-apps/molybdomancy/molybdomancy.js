import FortuneEngine from"../../engine.js";import setMusicState from"../../autoplay.js";let elts={};const texts=["Solid Tin"],morphTime=10,cooldownTime=.25;let textIndex=-1,time,morph=0,cooldown=cooldownTime;function doMorph(){morph-=cooldown,cooldown=0;let t=morph/morphTime;1<t&&(cooldown=cooldownTime,t=1),setMorph(t)}function setMorph(t){elts.text2.style.filter=`blur(${Math.min(8/t-8,100)}px)`,elts.text2.style.opacity=100*Math.pow(t,.4)+"%",t=1-t,elts.text1.style.filter=`blur(${Math.min(8/t-8,100)}px)`,elts.text1.style.opacity=100*Math.pow(t,.4)+"%",elts.text1.textContent=texts[textIndex%texts.length],elts.text2.textContent=texts[(textIndex+1)%texts.length]}function doCooldown(){morph=0,elts.text2.style.filter="",elts.text2.style.opacity="100%",elts.text1.style.filter="",elts.text1.style.opacity="0%"}function animate(){var t,e,n;textIndex!==texts.length-1&&(requestAnimationFrame(animate),t=new Date,e=0<cooldown,n=(t-time)/1e3,time=t,((cooldown-=n)<=0?(e&&(textIndex++,console.log(textIndex)),doMorph):doCooldown)())}document.addEventListener("DOMContentLoaded",async()=>{const e=new FortuneEngine("molybdomancy");await e.db_reader("./molybdomancy.json"),(elts={text1:document.getElementById("text1"),text2:document.getElementById("text2")}).text1.textContent=texts[0],elts.text2.textContent=texts[0];var t=document.getElementById("info-button"),n=document.getElementById("music-button");const o=document.getElementById("music"),s=document.querySelector("#melt-button"),l=document.querySelector(".interpretation1"),i=document.querySelector(".interpretation2");let m="melt",r=!0,a=!1;const d=new Audio("../../assets/moly/action-button-press1.wav"),c=new Audio("../../assets/moly/action-button-hover2.mp3"),x=new Audio("../../assets/moly/bgm-melting.mp3"),u=(x.volume=.7,s.addEventListener("mouseover",()=>{console.log("hover"),c.play()}),s.addEventListener("click",()=>{switch(d.play(),m){case"melt":m="result",x.play();const t=e.get_random_subset(1)[0];setTimeout(()=>{l.innerHTML=`Shape: ${t.name}</br>`,l.classList.remove("interpretation1"),l.offsetWidth,l.classList.add("interpretation1"),i.innerHTML=""+t.longMeaning,i.classList.remove("interpretation2"),i.offsetWidth,i.classList.add("interpretation2")},1e3*morphTime),texts[1]=t.emoji,time=new Date,s.style.pointerEvents="none",s.innerText="Melting tin...",animate(),setTimeout(()=>{s.style.pointerEvents="all",s.innerText="Try Again?"},1e3*morphTime+1250);break;case"result":s.innerText="Melt the Tin!",m="melt",textIndex=-1,elts.text1.textContent=texts[0],elts.text2.textContent=texts[0],cooldown=cooldownTime,l.innerHTML="",i.innerHTML=""}}),new Audio("../../assets/moly/bgm-background.mp3"));u.loop=!0,u.volume=.4,u.play().then(()=>{}).catch(()=>{r=!1,setMusicState(u,o,r)}),n.addEventListener("click",t=>{r=setMusicState(u,o,!r)}),t.addEventListener("click",t=>{document.getElementById("info-popup").style.display=a?"none":"flex",a=!a})});