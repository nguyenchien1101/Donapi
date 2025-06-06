"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hermite = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var InvalidArgument_1 = require("../../exception/InvalidArgument");
/**
 * Hermite polynomial
 *
 * @reference https://en.wikipedia.org/wiki/Hermite_polynomials
 */
function hermite(n, x) {
    // VALIDATE PARAMETER
    if ((n = Math.floor(n)) < 0)
        throw new InvalidArgument_1.InvalidArgument("Error on std.hermite(): n must be unsigned integer -> (n = ".concat(n, ")."));
    // MEMORIZATION
    var solutions = [1, 2 * x];
    // COMPUTE RETURN VALUE
    return _Hermite(n, x, solutions);
}
exports.hermite = hermite;
function _Hermite(n, x, solutions) {
    if (solutions.length > n)
        return solutions[n];
    var hn_1 = _Hermite(n - 1, x, solutions);
    var hn_2 = _Hermite(n - 2, x, solutions);
    var ret = x * hn_1 - (n - 1) * hn_2;
    ret *= 2;
    solutions[n] = ret;
    return ret;
}
//# sourceMappingURL=hermite.js.map