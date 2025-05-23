const fs = require('fs'); 
// Correctly import the function using destructuring
const { detectObfuscation } = require('obfuscation-detector'); 

const filePath = '/home/anhanh/Donapi/npm-cache/test/all-paths-1.0.2/src/obfusecate-index.js'; 

try {
    if (fs.existsSync(filePath)) { 
        const code = fs.readFileSync(filePath, 'utf-8');
        
        // Now 'detectObfuscation' should correctly refer to the function
        const most_likely_obfuscation_type = detectObfuscation(code);
        if (most_likely_obfuscation_type && most_likely_obfuscation_type.length) {
            console.log(`Obfuscation type is probably ${most_likely_obfuscation_type}`);
        } else {
            console.log("No obfuscation detected or type couldn't be determined.");
        }

    } else {
        console.error(`Error: File not found at path: ${filePath}`);
    }
} catch (error) {
    console.error(`An error occurred: ${error.message}`);
    console.error(error.stack); // Keep stack trace for debugging other potential errors
}
