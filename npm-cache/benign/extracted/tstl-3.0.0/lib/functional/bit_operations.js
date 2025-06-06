"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bit_xor = exports.bit_or = exports.bit_and = exports.logical_not = exports.logical_or = exports.logical_and = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
function logical_and(x, y) {
    return !!x && !!y;
}
exports.logical_and = logical_and;
function logical_or(x, y) {
    return !!x || !!y;
}
exports.logical_or = logical_or;
function logical_not(x) {
    return !x;
}
exports.logical_not = logical_not;
function bit_and(x, y) {
    return x & y;
}
exports.bit_and = bit_and;
function bit_or(x, y) {
    return x | y;
}
exports.bit_or = bit_or;
function bit_xor(x, y) {
    return x ^ y;
}
exports.bit_xor = bit_xor;
//# sourceMappingURL=bit_operations.js.map