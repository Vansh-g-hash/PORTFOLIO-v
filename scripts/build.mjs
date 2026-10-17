import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

execFileSync(process.execPath, ['scripts/check.mjs'], {
  stdio: 'inherit'
});

rmSync('public', { recursive: true, force: true });
mkdirSync('public', { recursive: true });

for (const file of ['index.html', 'app.js', 'data.js', 'styles.css']) {
  cpSync(file, `public/${file}`);
}

cpSync('assets', 'public/assets', { recursive: true });

console.log('✓ Vercel public folder generated');
