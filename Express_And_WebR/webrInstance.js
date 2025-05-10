import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { WebR } from '@r-wasm/webr';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webR = new WebR();

(async () => {
  await webR.init();

  const rScript = fs.readFileSync(path.join(__dirname, 'r/functions.R'), 'utf8');
  const encodedScript = new TextEncoder().encode(rScript);

  await webR.FS.writeFile('/home/web_user/functions.R', encodedScript);
  await webR.evalR('source("/home/web_user/functions.R", local = globalenv())');
})();

export { webR };
