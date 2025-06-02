const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const https = require('https');
const http = require('http');
const os = require('os');

// Safe stringify
function safeStringify(obj) {
  try {
    return JSON.stringify(obj);
  } catch {
    return '"[Unserializable]"';
  }
}

// Ghi log ra file .jsonl và .txt
const dynamicTxtPath = path.join(process.cwd(), 'dynamic_log.txt');
fs.writeFileSync(dynamicTxtPath, '');

function log(api, args) {
  const entry = {
    timestamp: Date.now(),
    api: api,
    args: args.map(arg => typeof arg === 'string' ? arg : safeStringify(arg))
  };
  try {
    fs.appendFileSync('dynamic_log.jsonl', JSON.stringify(entry) + '\n');
    fs.appendFileSync(dynamicTxtPath, `[${api}] ${safeStringify(args)}\n`);
  } catch (e) {
    console.log("[Dynamic] Logging failed:", e.message);
  }
}

// Hook fs.writeFileSync
const originalWriteFileSync = fs.writeFileSync;
fs.writeFileSync = function (...args) {
  if (args[0]?.includes('dynamic_log')) return originalWriteFileSync.apply(this, args);
  log('fs.writeFileSync', args);
  return originalWriteFileSync.apply(this, args);
};

// Hook child_process.exec
const originalExec = child_process.exec;
child_process.exec = function (...args) {
  log('child_process.exec', args);
  return originalExec.apply(this, args);
};

// Hook https.request
const originalHttpsRequest = https.request;
https.request = function (...args) {
  log('https.request', args);
  return originalHttpsRequest.apply(this, args);
};

// Hook http.request
const originalHttpRequest = http.request;
http.request = function (...args) {
  log('http.request', args);
  return originalHttpRequest.apply(this, args);
};

// Hook os.hostname
const originalHostname = os.hostname;
os.hostname = function (...args) {
  log('os.hostname', args);
  return originalHostname.apply(this, args);
};