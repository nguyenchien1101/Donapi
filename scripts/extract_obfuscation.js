const fs = require('fs');
   const path = require('path');
   function extractObfuscation(packagePath) {
       try {
           const mergedPath = path.join(packagePath, 'merged.js');
           if (!fs.existsSync(mergedPath)) return;
           const code = fs.readFileSync(mergedPath, 'utf-8');
           const length = code.length;
           const nonAscii = (code.match(/[^\x00-\x7F]/g) || []).length;
           const entropy = Array.from(new Set(code)).reduce((sum, c) => sum - (code.split(c).length - 1) / length * Math.log2((code.split(c).length - 1) / length), 0);
           console.log(`${length},${nonAscii},${entropy},${path.basename(packagePath)},${packagePath.includes('malware') ? 1 : 0}`);
       } catch (e) {
           console.error(`Lỗi ở ${packagePath}: ${e}`);
       }
   }
   if (process.argv[2]) extractObfuscation(process.argv[2]);
