const fs = require("fs");
const path = require("path");
const { WebR } = require("@r-wasm/webr");

const webR = new WebR();

(async () => {
  await webR.init();
  const rScript = fs.readFileSync(path.join(__dirname, "r/functions.R"), "utf8");
  const encodedScript = new TextEncoder().encode(rScript);
  await webR.FS.writeFile("/home/web_user/functions.R", encodedScript);
  await webR.evalR('source("/home/web_user/functions.R", local = globalenv())');
})();

module.exports = { webR };
