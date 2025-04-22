const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function extractAPICalls(code) {
    const ast = parser.parse(code, { sourceType: 'module' });
    const apiCalls = [];
    const sensitiveAPIs = [
        'child_process.exec', 'child_process.spawn',
        'fs.writeFile', 'fs.readFile',
        'http.request', 'https.request',
        'eval', 'Function'
    ];

    traverse(ast, {
        CallExpression({ node }) {
            const callee = node.callee;
            if (callee.type === 'MemberExpression') {
                const fullName = `${callee.object.name}.${callee.property.name}`;
                if (sensitiveAPIs.includes(fullName)) {
                    apiCalls.push(fullName);
                }
            } else if (callee.name && sensitiveAPIs.includes(callee.name)) {
                apiCalls.push(callee.name);
            }
        }
    });
    return apiCalls;
}

function staticIdentify(codePath) {
    try {
        const code = fs.readFileSync(codePath, 'utf-8');
        const apiCalls = extractAPICalls(code);
        const features = {
            network_requests: apiCalls.filter(call => call.includes('http') || call.includes('https')).length,
            file_operations: apiCalls.filter(call => call.includes('fs')).length,
            process_operations: apiCalls.filter(call => call.includes('child_process')).length,
            eval_usage: apiCalls.filter(call => call === 'eval' || call === 'Function').length
        };

        // Gọi Python để chạy Random Forest
        const { spawnSync } = require('child_process');
        const result = spawnSync('python3', ['modules/static_classifier.py', JSON.stringify(features)]);
        const isSuspicious = JSON.parse(result.stdout).suspicious;

        return {
            api_calls: apiCalls,
            features: features,
            suspicious: isSuspicious
        };
    } catch (error) {
        console.error(`Error in static identification: ${error}`);
        return { suspicious: False, api_calls: [], features: {} };
    }
}

module.exports = staticIdentify;
