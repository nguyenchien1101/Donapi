
// === Begin package.json ===
const packageJSON = {
  "name": "testpkg",
  "main": "index.js"
};
// === End package.json ===

// === Begin lib/helper.js ===
const export_helper = {
    hello: () => console.log("Hi from helper!")
};

// === End lib/helper.js ===

// === Begin index.js ===
const helper = export_helper;
const pkg = require('./package.json');
helper.hello();S

// === End index.js ===
