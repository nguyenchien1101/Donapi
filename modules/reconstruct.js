// modules/reconstruct.js
const path = require('path');
const reconstruct = require('./reconstruct_code');

const packagePath = process.argv[2];
console.log("🛠 Running reconstruct_code on:", packagePath);
reconstruct(packagePath);
