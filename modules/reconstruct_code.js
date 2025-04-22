const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generate = require('@babel/generator').default;

function extractEntryFiles(packageJson) {
    const entryFiles = [];
    if (packageJson.main) entryFiles.push(packageJson.main);
    if (packageJson.exports) {
        Object.values(packageJson.exports).forEach(exp => {
            if (typeof exp === 'string') entryFiles.push(exp);
        });
    }
    if (packageJson.bin) {
        Object.values(packageJson.bin).forEach(bin => entryFiles.push(bin));
    }
    if (packageJson.scripts) {
        Object.values(packageJson.scripts).forEach(script => {
            if (script.includes('node ')) {
                const file = script.split('node ')[1].split(' ')[0];
                entryFiles.push(file);
            }
        });
    }
    return [...new Set(entryFiles)];
}

function resolveDynamicImports(code, packagePath) {
    const ast = parser.parse(code, { sourceType: 'module' });
    const imports = [];
    traverse(ast, {
        CallExpression({ node }) {
            if (t.isIdentifier(node.callee, { name: 'require' })) {
                const arg = node.arguments[0];
                if (t.isStringLiteral(arg)) {
                    imports.push(arg.value);
                }
            }
        },
        ImportDeclaration({ node }) {
            imports.push(node.source.value);
        }
    });
    return imports.map(imp => {
        if (imp.startsWith('./') || imp.startsWith('../')) {
            return path.resolve(packagePath, imp);
        }
        return imp;
    });
}

function renameIdentifiers(code) {
    const ast = parser.parse(code, { sourceType: 'module' });
    let counter = 0;
    traverse(ast, {
        Identifier(path) {
            if (path.parent.type !== 'MemberExpression' && path.parent.type !== 'Property') {
                path.node.name = `var_${counter++}`;
            }
        }
    });
    return generate(ast).code;
}

function reconstructCode(packagePath) {
    try {
        const packageJsonPath = path.join(packagePath, 'package.json');
        if (!fs.existsSync(packageJsonPath)) {
            throw new Error('package.json not found');
        }
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
        const entryFiles = extractEntryFiles(packageJson);
        let mergedCode = '';
        const processedFiles = new Set();

        for (const file of entryFiles) {
            const filePath = path.join(packagePath, file);
            if (fs.existsSync(filePath) && !processedFiles.has(filePath)) {
                const code = fs.readFileSync(filePath, 'utf-8');
                const renamedCode = renameIdentifiers(code);
                mergedCode += `// File: ${file}\n${renamedCode}\n`;
                processedFiles.add(filePath);

                const imports = resolveDynamicImports(code, packagePath);
                for (const imp of imports) {
                    if (fs.existsSync(imp) && !processedFiles.has(imp)) {
                        const impCode = fs.readFileSync(imp, 'utf-8');
                        const impRenamed = renameIdentifiers(impCode);
                        mergedCode += `// Imported: ${imp}\n${impRenamed}\n`;
                        processedFiles.add(imp);
                    }
                }
            }
        }

        const outputPath = path.join(packagePath, 'merged.js');
        fs.writeFileSync(outputPath, mergedCode);
        return outputPath;
    } catch (error) {
        console.error(`Error reconstructing code for ${packagePath}: ${error}`);
        return null;
    }
}

module.exports = reconstructCode;
