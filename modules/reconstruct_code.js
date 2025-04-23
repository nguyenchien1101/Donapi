const fs = require('fs');
   const path = require('path');
   const os = require('os');

   function reconstructCode(packagePath) {
       try {
           // Mở rộng dấu ~ thành đường dẫn home
           const resolvedPath = packagePath.replace(/^~/, os.homedir());
           const packageJsonPath = path.join(resolvedPath, 'package.json');
           if (!fs.existsSync(packageJsonPath)) {
               throw new Error(`package.json not found in ${resolvedPath}`);
           }
           const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
           let mergedCode = '';
           let main = packageJson.main || 'index.js';

           // Nếu main là thư mục, thử tìm index.js trong thư mục đó
           const mainPath = path.join(resolvedPath, main);
           if (fs.existsSync(mainPath) && fs.lstatSync(mainPath).isDirectory()) {
               main = path.join(main, 'index.js');
           }

           // Kiểm tra và đọc file main
           if (fs.existsSync(path.join(resolvedPath, main))) {
               mergedCode += fs.readFileSync(path.join(resolvedPath, main), 'utf-8') + '\n';
           } else {
               console.warn(`Main file ${main} not found in ${resolvedPath}`);
           }

           // Ghi merged.js
           const outputPath = path.join(resolvedPath, 'merged.js');
           fs.writeFileSync(outputPath, mergedCode);
           return outputPath;
       } catch (e) {
           console.error(`Error in ${packagePath}: ${e}`);
           return null;
       }
   }

   module.exports = reconstructCode;
