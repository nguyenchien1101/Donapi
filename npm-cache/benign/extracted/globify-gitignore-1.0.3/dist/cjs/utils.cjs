"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueSortGlobs = exports.uniqueGlobs = exports.uniqueMatcher = exports.globSorter = exports.getGlob = void 0;
const sort_es_1 = require("sort-es");
const make_unique_1 = __importDefault(require("make-unique"));
function getGlob(g) {
    return g.glob;
}
exports.getGlob = getGlob;
exports.globSorter = (0, sort_es_1.byValue)(getGlob, (0, sort_es_1.byString)());
function uniqueMatcher(a, b) {
    return a.glob === b.glob;
}
exports.uniqueMatcher = uniqueMatcher;
function uniqueGlobs(globs) {
    return (0, make_unique_1.default)(globs, uniqueMatcher);
}
exports.uniqueGlobs = uniqueGlobs;
function uniqueSortGlobs(globs) {
    return uniqueGlobs(globs).sort(exports.globSorter);
}
exports.uniqueSortGlobs = uniqueSortGlobs;
//# sourceMappingURL=utils.cjs.map