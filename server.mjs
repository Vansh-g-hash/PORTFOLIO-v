/* Dependency-free local development server with SPA route fallback. */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = process.cwd();
const port = Number(process.env.PORT) || 5173;
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.pdf':'application/pdf', '.ico':'image/x-icon', '.json':'application/json' };
createServer(async (req,res)=>{
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    const requestPath = decodeURIComponent(url.pathname);
    const requested = resolve(root, '.' + requestPath);
    if (requested !== root && !requested.startsWith(root+sep)) {res.writeHead(403).end();return;}
    let file = requested;
    const fileInfo = await stat(file).catch(()=>null);
    if (!fileInfo?.isFile()) {
      if (extname(requestPath)) {res.writeHead(404).end('Not found');return;}
      file = resolve(root,'index.html');
    }
    res.setHeader('Content-Type', mime[extname(file)] || 'application/octet-stream');
    res.setHeader('Cache-Control','no-cache');
    res.end(await readFile(file));
  } catch (error) { res.writeHead(500).end('Server error'); console.error(error); }
}).listen(port,()=>console.log(`Vanshflix running at http://localhost:${port}`));
