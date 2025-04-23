const fs = require('fs');
   const path = require('path');
   function extractApi(packagePath) {
       try {
           const mergedPath = path.join(packagePath, 'merged.js');
           if (!fs.existsSync(mergedPath)) return;
           const code = fs.readFileSync(mergedPath, 'utf-8');
           const apis = ['http.request', 'fs.writeFile', 'child_process.exec'];
           apis.forEach(api => {
               const count = (code.match(new RegExp(api, 'g')) || []).length;
               console.log(`${api},${count},${path.basename(packagePath)},${packagePath.includes('malware') ? 1 : 0}`);
           });
       } catch (e) {
           console.error(`Lỗi ở ${packagePath}: ${e}`);
       }
   }
   if (process.argv[2]) extractApi(process.argv[2]);
