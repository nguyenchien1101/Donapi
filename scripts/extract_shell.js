const fs = require('fs');
   const path = require('path');
   function extractShell(packagePath) {
       try {
           const packageJson = JSON.parse(fs.readFileSync(path.join(packagePath, 'package.json')));
           const scripts = packageJson.scripts || {};
           const commands = Object.values(scripts);
           for (const file of fs.readdirSync(packagePath)) {
               if (file.endsWith('.sh')) {
                   commands.push(fs.readFileSync(path.join(packagePath, file), 'utf-8'));
               }
           }
           commands.forEach(cmd => console.log(`${cmd.replace(/,/g, ';')},${path.basename(packagePath)},${packagePath.includes('malware') ? 1 : 0}`));
       } catch (e) {
           console.error(`Lỗi ở ${packagePath}: ${e}`);
       }
   }
   if (process.argv[2]) extractShell(process.argv[2]);
