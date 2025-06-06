"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentCustomFormats = void 0;
var quote_1 = __importDefault(require("quote"));
var utils_1 = require("./utils");
var ticks = (0, quote_1.default)({ quotes: '`' });
var escapedCode = function (s) { return ticks(s.replace(/\|/g, '`&#124;`')); };
var documentCustomFormats = function (formats) {
    var headers = [
        'name',
        'regular expression',
        'dynamic',
        'example',
        'default',
    ];
    var rows = Object.keys(formats).map(function (name) {
        var format = formats[name];
        var formatName = format.name;
        var r = format.detect.toString();
        var escaped = escapedCode(r);
        var dynamic = 'defaultValue' in format ? utils_1.checkMark : utils_1.emptyMark;
        var example = 'example' in format
            ? escapedCode(JSON.stringify(format.example))
            : utils_1.emptyMark;
        var defaultValue = 'defaultValue' in format
            ? ticks(JSON.stringify(format.defaultValue))
            : utils_1.emptyMark;
        return {
            name: formatName,
            'regular expression': escaped,
            dynamic: dynamic,
            default: defaultValue,
            example: example,
        };
    });
    var usedHeaders = (0, utils_1.findUsedColumns)(headers, rows);
    return [
        { h2: 'formats' },
        { p: 'Custom formats defined to better represent our data.' },
        {
            table: {
                headers: usedHeaders,
                rows: rows,
            },
        },
    ];
};
exports.documentCustomFormats = documentCustomFormats;
//# sourceMappingURL=doc-formats.js.map