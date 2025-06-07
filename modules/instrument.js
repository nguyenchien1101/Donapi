const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const https = require('https');
const http = require('http');
const os = require('os');

// === Dynamic log file paths ===
const logPath = process.env.DYNAMIC_LOG_PATH || path.join(process.cwd(), 'dynamic_log.jsonl');
const txtLogPath = logPath.replace(/\.jsonl$/, '.txt');

// === Safe stringify ===
function safeStringify(obj) {
  try {
    return JSON.stringify(obj);
  } catch {
    return '"[Unserializable]"';
  }
}

// === Logging function ===
function log(api, args) {
  console.log('[HOOK] Called:', api);
  const entry = {
    timestamp: Date.now(),
    api: api,
    args: args.map(arg => typeof arg === 'string' ? arg : safeStringify(arg))
  };
  try {
    fs.appendFileSync(logPath, JSON.stringify(entry) + '\n');
    fs.appendFileSync(txtLogPath, `[${api}] ${safeStringify(args)}\n`);
  } catch (e) {
    console.error('[ERROR] Ghi dynamic_log.jsonl thất bại:', e.message);
  }
}

// === Hook Node.js core APIs ===
const originalWriteFileSync = fs.writeFileSync;
fs.writeFileSync = function (...args) {
  if (args[0] === logPath || args[0] === txtLogPath) {
    return originalWriteFileSync.apply(this, args);
  }
  log('fs.writeFileSync', args);
  return originalWriteFileSync.apply(this, args);
};

const originalExec = child_process.exec;
child_process.exec = function (...args) {
  log('child_process.exec', args);
  return originalExec.apply(this, args);
};

const originalHttpsRequest = https.request;
https.request = function (...args) {
  log('https.request', args);
  return originalHttpsRequest.apply(this, args);
};

const originalHttpRequest = http.request;
http.request = function (...args) {
  log('http.request', args);
  return originalHttpRequest.apply(this, args);
};

const originalHostname = os.hostname;
os.hostname = function (...args) {
  log('os.hostname', args);
  return originalHostname.apply(this, args);
};

// === Patch require() to mock missing modules ===
try {
  const Module = require('module');
  const originalRequire = Module.prototype.require;

  Module.prototype.require = function (name) {
    try {
      return originalRequire.apply(this, arguments);
    } catch (e) {
      console.warn('[WARN] Mocked missing module:', name);
      return new Proxy({}, {
        get: () => () => {
          console.log(`[Mock] called function from ${name}`);
          return {};
        }
      });
    }
  };
} catch (e) {
  console.error('[Dynamic] Failed to patch require():', e);
}

