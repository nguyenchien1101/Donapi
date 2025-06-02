const fs = require('fs');

const filePath = '/home/still/Donapi/npm-cache/test/all-paths-1.0.2/src/obfusecate-index.js';

async function run() {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`Error: File not found at path: ${filePath}`);
      process.exit(1);
    }

    const code = fs.readFileSync(filePath, 'utf-8');

    // Dùng dynamic import() để load ESM module
    const { detectObfuscation } = await import('obfuscation-detector');

    const isObfuscated = detectObfuscation(code);
    console.log(Boolean(isObfuscated));
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    process.exit(1);
  }
}

run();

