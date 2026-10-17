import { readFile, access } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import vm from 'node:vm';
import { join } from 'node:path';
const root=process.cwd();
const fail=(message)=>{console.error('FAIL:',message);process.exitCode=1;};
const code=await readFile(join(root,'data.js'),'utf8');
const ctx={window:{}};vm.runInNewContext(code,ctx,{filename:'data.js'});
const data=ctx.window.PORTFOLIO;
if(!data || !data.name || !data.profiles || !data.projects) fail('Portfolio data incomplete');
for (const project of data.projects) {
  if (!project.name || !project.description || !project.stack?.length) fail(`Project incomplete: ${project.id}`);
  if(project.live && !project.live.startsWith('https://')) fail(`Invalid demo link: ${project.id}`);
  try{await access(join(root,'assets/posters',project.image));}catch{fail(`Missing poster: ${project.image}`);}
}
for (const cert of data.certifications) if(cert.image) {
  try{await access(join(root,'assets/certificates',cert.image));}catch{fail(`Missing certificate: ${cert.image}`);}
}
for(const file of ['index.html','styles.css','app.js','assets/Vansh_Gupta_Resume.pdf','vercel.json']){
  try{await access(join(root,file));}catch{fail(`Missing ${file}`);}
}
const result=spawnSync(process.execPath,['--check','app.js'],{cwd:root,encoding:'utf8'});
if(result.status!==0) fail(result.stderr || 'app.js syntax error');
if(!process.exitCode) console.log(`✓ Source validated: ${data.projects.length} projects, ${data.experience.length} experience entries, ${data.skills.length} skill groups, ${data.certifications.length} certifications.`);
