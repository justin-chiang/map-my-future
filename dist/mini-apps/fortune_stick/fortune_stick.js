import FortuneEngine from"../../engine.js";import setMusicState from"../../autoplay.js";const APP_NAME="fortune_stick",TYPING_SPEED=35,engine=new FortuneEngine,bgm=new Audio("../../assets/stick/bgm-background.mp3"),categories=["career","wealth","health","relationship"];let selectedCategory="";function selectCategory(e){if(!categories.includes(e))return console.error("invalid category"),!1;chooseCardAnimation(e),selectedCategory=e;var t=document.querySelectorAll(`.card:not(#${e})`);const n=document.getElementsByClassName("categories")[0];for(let e=0;e<t.length;e++)t[e].classList.toggle("hide"),t[e].style.opacity="0";return setTimeout(()=>{n.style.display="none",displayFortune()},1e3),!0}function chooseCardAnimation(e){return categories.includes(e)?((e=document.getElementById(""+e)).style.pointerEvents="none",e.classList.toggle("choose-card"),!0):(console.error("invalid category"),!1)}function displayFortune(){var e=document.getElementsByClassName("display-fortune")[0];const t=document.getElementsByClassName("reset-button-container")[0];var n=document.getElementById("fortune-message");const s=document.getElementById("fortune-received"),o=engine.get_random_subset(1)[0][selectedCategory];console.log(o),s.innerHTML="",n.textContent=`Your fortune for ${selectedCategory} is:`,e.style.display="flex",e.classList.add("show");n=new Audio("../../assets/stick/bgm-reveal.ogg");n.currentTime=0,n.play(),s.textContent="";let l=0;const a=setInterval(()=>{s.textContent+=o[l],++l>=o.length&&clearInterval(a)},TYPING_SPEED);return setTimeout(()=>{t.classList.add("show")},TYPING_SPEED*o.length),!0}document.addEventListener("DOMContentLoaded",async()=>{await engine.db_reader(`./${APP_NAME}.json`);const t=document.getElementById("music"),n=new Audio("../../assets/stick/bgm-background.mp3");n.loop=!0,n.play().then(()=>{}).catch(()=>{s=!1,setMusicState(n,t,s)});let s=!0,o=!1;var e=document.getElementById("music-button"),l=document.getElementById("info-button"),a=document.getElementById("reset-button");e.addEventListener("click",e=>{s=setMusicState(n,t,!s)}),l.addEventListener("click",e=>{document.getElementById("info-popup").style.display=o?"none":"flex",o=!o}),a.addEventListener("click",e=>{const n=document.getElementsByClassName("display-fortune")[0];var t=document.getElementsByClassName("reset-button-container")[0];n.classList.remove("show"),t.classList.remove("show"),setTimeout(()=>{var t=document.querySelectorAll(`.card:not(#${selectedCategory})`),e=document.getElementsByClassName("categories")[0];for(let e=0;e<t.length;e++)t[e].classList.toggle("hide"),t[e].style.opacity="1";e.style.display="flex";e=document.getElementById(""+selectedCategory);e.style.pointerEvents="auto",e.classList.toggle("choose-card"),selectedCategory="",n.style.display="none"},1e3)}),document.querySelectorAll(".card").forEach(t=>{t.addEventListener("click",e=>{selectCategory(t.id)})})});
