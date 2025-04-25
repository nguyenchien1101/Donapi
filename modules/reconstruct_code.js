const fs = require('fs');
const path = require('path');

function reconstruct_code(package_path) {
    const possible_main_files = ['app.js', 'index.js', 'main.js'];
    let main_content = '';

    // Try to find the main file
    for (const main_file of possible_main_files) {
        const file_path = path.join(package_path, main_file);
        if (fs.existsSync(file_path)) {
            main_content = fs.readFileSync(file_path, 'utf-8');
            break;
        }
    }

    if (!main_content) {
        console.log(`No main file (app.js, index.js, main.js) found in ${package_path}`);
        // Create an empty merged.js to avoid errors
        fs.writeFileSync(path.join(package_path, 'merged.js'), '');
        return;
    }

    // Collect all .js files
    const js_files = fs.readdirSync(package_path)
        .filter(file => file.endsWith('.js') && file !== 'merged.js');
    let merged_content = main_content + '\n';

    // Append content of other .js files
    for (const js_file of js_files) {
        if (!possible_main_files.includes(js_file)) {
            const file_path = path.join(package_path, js_file);
            merged_content += `\n// Content of ${js_file}\n`;
            merged_content += fs.readFileSync(file_path, 'utf-8') + '\n';
        }
    }

    // Write to merged.js
    const merged_file = path.join(package_path, 'merged.js');
    fs.writeFileSync(merged_file, merged_content);
    console.log(`Merged ${js_files.length} files into ${merged_file}`);
}

module.exports = reconstruct_code;
