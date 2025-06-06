"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc_laguerre = exports.laguerre = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var InvalidArgument_1 = require("../../exception/InvalidArgument");
/**
 * Laguerre polynomials.
 *
 * @reference https://en.wikipedia.org/wiki/Laguerre_polynomials
 */
function laguerre(n, x) {
    return assoc_laguerre(n, 0, x);
}
exports.laguerre = laguerre;
/**
 * Associated laguerre polynomials.
 *
 * @reference https://en.wikipedia.org/wiki/Laguerre_polynomials#Generalized_Laguerre_polynomials
 */
function assoc_laguerre(n, m, x) {
    // VALIDATE PARAMETERS
    if ((n = Math.floor(n)) < 0 || (m = Math.floor(m)) < 0)
        throw new InvalidArgument_1.InvalidArgument("Error on std.assoc_laguerre(): both n and m must be unsigned integer -> (n = ".concat(n, ", m = ").concat(m, ")."));
    // MEMORIZATION
    var solutions = [1, -x + m + 1];
    // COMPUTE RETURN VALUE
    return _Compute_assoc_laguerre(n, m, x, solutions);
}
exports.assoc_laguerre = assoc_laguerre;
function _Compute_assoc_laguerre(n, m, x, solutions) {
    if (solutions.length > n)
        return solutions[n];
    var ln_1 = _Compute_assoc_laguerre(n - 1, m, x, solutions);
    var ln_2 = _Compute_assoc_laguerre(n - 2, m, x, solutions);
    var ret = (2 * n - 1 + m - x) * ln_1 - (n + m - 1) * ln_2;
    ret = ret / n;
    solutions[n] = ret;
    return ret;
}
//# sourceMappingURL=laguerres.js.map