const element_name="option-result pair";class FortuneEngine{constructor(e){this.app_name=e,this.outcomes=null}async db_reader(e){console.log(e),await fetch(`./src/mini-apps/${this.app_name}/${e}`).then((e=>e.json())).then((e=>{this.outcomes=e[element_name],this.db_dump()})).catch((e=>console.error(e)))}set_outcomes(e){this.outcomes=e}db_dump(){console.log(this.outcomes)}getRandomSubset(e){const t=[...this.outcomes];for(let e=0;e<t.length;e++){const n=Math.floor(Math.random()*this.outcomes.length),o=t[e];t[e]=t[n],t[n]=o}return t.slice(0,e)}}const array=[],app_name="cartomancy",db_name="cartomancy.json";for(let e=0;e<52;e++)array[e]=e+1;const engine=new FortuneEngine(app_name);engine.db_reader(db_name).then((e=>{for(let e=0;e<=8;e++)console.log(`${e}-permutation:`,engine.getRandomSubset(e))}));