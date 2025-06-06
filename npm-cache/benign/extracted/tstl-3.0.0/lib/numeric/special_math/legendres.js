"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc_legendre = exports.legendre = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var InvalidArgument_1 = require("../../exception/InvalidArgument");
/**
 * Legendre polynomials.
 *
 * @reference http://en.cppreference.com/w/cpp/numeric/special_math/legendre
 */
function legendre(n, x) {
    return assoc_legendre(n, 0, x);
}
exports.legendre = legendre;
/**
 * Associated Legendre polynomials.
 *
 * @reference https://en.wikipedia.org/wiki/Associated_Legendre_polynomials
 */
function assoc_legendre(n, m, x) {
    // VALIDATE PARAMETERS
    if ((n = Math.floor(n)) < 0 || (m = Math.floor(m)) < 0)
        throw new InvalidArgument_1.InvalidArgument("Error on std.assoc_legendre(): both n and m must be unsigned integer -> (n = ".concat(n, ", m = ").concat(m, ")."));
    else if (Math.abs(x) > 1)
        throw new InvalidArgument_1.InvalidArgument("Error on std.assoc_legendre(): must be |x| <= 1 -> (x = ".concat(x, ")."));
    // MEMORIZATION
    var matrix = [[1, x]];
    matrix.length = m + 1;
    for (var i = 1; i < matrix.length; ++i)
        matrix[i] = [];
    // COMPUTE RETURN VALUE
    return _Compute_assoc_legendre(n, m, x, matrix);
}
exports.assoc_legendre = assoc_legendre;
function _Compute_legendre(n, x, memory) {
    if (memory.length > n)
        return memory[n];
    var pn_1 = _Compute_legendre(n - 1, x, memory);
    var pn_2 = _Compute_legendre(n - 2, x, memory);
    var ret = (2 * n - 1) * x * pn_1 - (n - 1) * pn_2;
    ret /= n;
    memory[n] = ret;
    return ret;
}
function _Compute_assoc_legendre(n, m, x, matrix) {
    if (n < 0)
        n = -n - 1;
    if (m === 0)
        return _Compute_legendre(n, x, matrix[0]);
    else if (matrix[m].length > n && matrix[m][n] !== undefined)
        return matrix[m][n];
    var left = (n - m + 1) *
        (n - m + 2) *
        _Compute_assoc_legendre(n + 1, m - 1, x, matrix);
    var right = (n + m - 1) *
        (n + m) *
        _Compute_assoc_legendre(n - 1, m - 1, x, matrix);
    var ret = (left - right) / (2 * n + 1);
    ret /= Math.sqrt(1 - x * x);
    matrix[m][n] = ret;
    return ret;
}
//# sourceMappingURL=legendres.js.map