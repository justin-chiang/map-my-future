const JSON_OUTCOMES_FIELD="option-result pair";class FortuneEngine{constructor(t){this.app_name=t,this.outcomes=null,this.initialized=!1,this.json_contents=null}async db_reader(t){await fetch(t).then(t=>t.json()).then(t=>{this.json_contents=t,this.outcomes=t[JSON_OUTCOMES_FIELD],this.initialized=!0}).catch(t=>console.error(t))}get_outcomes(){if(this.initialized)return this.outcomes;throw new Error("Not yet initialized - call the db_reader() method first.")}db_dump(){if(!this.initialized)throw new Error("Not yet initialized - call the db_reader() method first.");console.log(this.outcomes)}get_json_contents(){if(this.initialized)return this.json_contents;throw new Error("Not yet initialized - call the db_reader() method first.")}get_random_subset(t){if(!this.initialized)throw new Error("Not yet initialized - call the db_reader() method first.");var e=[...this.outcomes];for(let t=0;t<e.length;t++){var i=Math.floor(Math.random()*this.outcomes.length),o=e[t];e[t]=e[i],e[i]=o}return e.slice(0,t)}}export default FortuneEngine;
