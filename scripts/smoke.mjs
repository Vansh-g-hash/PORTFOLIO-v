import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const context={
 window:{addEventListener(){}},
 location:{pathname:'/browse',search:''},
 document:{
   getElementById(id){return id==='app'?app:dialog},
   addEventListener(){},
   body:{classList:{add(){},remove(){}}}
 },
 history:{pushState(_s,_t,u){context.location.pathname=u},replaceState(_s,_t,u){context.location.pathname=u}},
 sessionStorage:{getItem(k){return store[k]||null},setItem(k,v){store[k]=v}},
 setTimeout(){return 1}, clearTimeout(){},
 Date, URL, console
};
const app={innerHTML:''},dialog={innerHTML:''};const store={};
context.window.PORTFOLIO=null;
vm.runInNewContext(readFileSync('data.js','utf8'),context);
vm.runInNewContext(readFileSync('app.js','utf8'),context);
function test(name,matcher){ if(!matcher.test(app.innerHTML))throw Error(`${name} failed`);console.log('✓',name); }
test('Browse with four role profiles',/Who's watching[\s\S]*Recruiter[\s\S]*Developer[\s\S]*Stalker[\s\S]*Adventurer/);
for(const [route, label] of [['/profile/developer','FurniVision'],['/profile/stalker','terminal-section'],['/projects','All Episodes'],['/skills','Tools of the Trade'],['/experience','OfficeBanao'],['/certifications','Oracle'],['/contact','guptavansh28@gmail.com']]) {
  context.location.pathname=route;
  vm.runInNewContext(readFileSync('app.js','utf8'),context);
  test(route,new RegExp(label));
}
