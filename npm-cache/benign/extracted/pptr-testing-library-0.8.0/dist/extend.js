"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
// tslint:disable-next-line
let Page, ElementHandle;
function requireOrUndefined(path) {
    try {
        return require(path);
    }
    catch (err) { }
}
const PREFIXES = [
    'puppeteer-core/lib/cjs/puppeteer/api',
    'puppeteer/lib/cjs/puppeteer/common',
    'puppeteer/lib', // puppeteer <v5
];
try {
    const apiPrefix = PREFIXES.find(dir => requireOrUndefined(`${dir}/Page.js`));
    if (!apiPrefix) {
        const fs = require('fs');
        const resolvedPath = require.resolve('puppeteer').replace(/node_modules\/puppeteer.*/, 'node_modules');
        const paths = PREFIXES.map(prefix => resolvedPath + '/' + prefix);
        const files = paths.flatMap(dir => fs.existsSync(dir) ? fs.readdirSync(dir) : []);
        const debugData = `Available Files:\n  - ${files.join('\n  - ')}`;
        throw new Error(`Could not find Page class\n${debugData}`);
    }
    Page = requireOrUndefined(`${apiPrefix}/Page.js`); // tslint:disable-line
    if (Page && Page.Page)
        Page = Page.Page;
    ElementHandle = requireOrUndefined(`${apiPrefix}/ElementHandle.js`); // tslint:disable-line variable-name
    if (ElementHandle && ElementHandle.ElementHandle)
        ElementHandle = ElementHandle.ElementHandle;
    if (!ElementHandle) {
        const ExecutionContext = requireOrUndefined(`${apiPrefix}/ExecutionContext.js`); // tslint:disable-line variable-name
        if (ExecutionContext && ExecutionContext.ElementHandle) {
            ElementHandle = ExecutionContext.ElementHandle;
        }
    }
    if (ElementHandle && ElementHandle.ElementHandle)
        ElementHandle = ElementHandle.ElementHandle;
    if (!ElementHandle) {
        const JSHandle = require(`${apiPrefix}/JSHandle.js`); // tslint:disable-line
        if (JSHandle && JSHandle.ElementHandle) {
            ElementHandle = JSHandle.ElementHandle;
        }
    }
    if (ElementHandle && ElementHandle.ElementHandle)
        ElementHandle = ElementHandle.ElementHandle;
    Page.prototype.getDocument = _1.getDocument;
    (0, _1.getQueriesForElement)(ElementHandle.prototype, function () {
        return this;
    });
    ElementHandle.prototype.getQueriesForElement = function () {
        return (0, _1.getQueriesForElement)(this);
    };
}
catch (err) {
    console.error('Could not augment puppeteer functions, do you have a conflicting version?');
    console.error(err.stack);
    throw err;
}
//# sourceMappingURL=extend.js.map