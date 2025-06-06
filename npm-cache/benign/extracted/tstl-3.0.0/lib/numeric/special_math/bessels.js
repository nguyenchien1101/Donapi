"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cyl_bessel_k = exports.cyl_bessel_i = exports.sph_neumann = exports.sph_bessel = exports.cyl_neumann = exports.cyl_bessel_j = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var MathUtil_1 = require("../../internal/numeric/MathUtil");
var InvalidArgument_1 = require("../../exception/InvalidArgument");
var gamma_1 = require("./gamma");
var INFINITY = 100; // (1 / 30!) is nearby 0.
/*================================================================
    ORIGINAL FUNCTIONS
        - CYLINDRICAL
        - SPHERICAL
==================================================================
    FIRST KIND
--------------------------------------------------------------- */
/**
 * Bessel function of the 1st kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Bessel_functions_of_the_first_kind:_J.CE.B1
 */
function cyl_bessel_j(n, x) {
    // VALIDATION
    if (x < 0 && Math.floor(n) !== n)
        throw new InvalidArgument_1.InvalidArgument("Error on std.cyl_bessel_j(): n must be integer when x is negative -> (n = ".concat(n, ", x = ").concat(x, ")."));
    else if (x === 0 && n !== 0)
        throw new InvalidArgument_1.InvalidArgument("Error on std.cyl_bessel_j(): n must be zero when x is zero -> (n = ".concat(n, ", x = ").concat(x, ")."));
    // COMPUTATION
    if (n === Math.floor(n))
        return _J_int(n, x);
    else
        return _J_positive(n, x);
}
exports.cyl_bessel_j = cyl_bessel_j;
/**
 * Bessel function of the 2nd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Bessel_functions_of_the_second_kind:_Y.CE.B1
 */
function cyl_neumann(v, x) {
    if (x <= 0)
        throw new InvalidArgument_1.InvalidArgument("Error on std.cyl_neumann(): x must be greater than zero -> (x = ".concat(x, ")."));
    var numerator = cyl_bessel_j(v, x) * Math.cos(v * Math.PI) - cyl_bessel_j(-v, x);
    var denominator = Math.sin(v * Math.PI);
    return numerator / denominator;
}
exports.cyl_neumann = cyl_neumann;
function _J_int(n, x) {
    if (n < 0)
        return Math.pow(-1, n) * _J_positive(-n, x);
    else
        return _J_positive(n, x);
}
function _J_positive(v, x) {
    var sigma = MathUtil_1.MathUtil.sigma(function (k) {
        var ret = Math.pow(-1, k) * Math.pow(x / 2, v + 2 * k);
        ret /= MathUtil_1.MathUtil.factorial(k) * (0, gamma_1.tgamma)(v + k + 1);
        return ret;
    }, 0, INFINITY);
    return sigma;
}
/* ---------------------------------------------------------------
    SPHERICAL
--------------------------------------------------------------- */
/**
 * Spherical Bessel function of the 1st kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Spherical_Bessel_functions:_jn.2C_yn
 */
function sph_bessel(n, x) {
    return Math.sqrt(Math.PI / (2 * x)) * cyl_bessel_j(n + 0.5, x);
}
exports.sph_bessel = sph_bessel;
/**
 * Spherical Bessel function of the 2nd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Spherical_Bessel_functions:_jn.2C_yn
 */
function sph_neumann(n, x) {
    var ret = Math.sqrt(Math.PI / (2 * x));
    ret *= cyl_neumann(n + 0.5, x);
    return ret;
}
exports.sph_neumann = sph_neumann;
/*================================================================
    REQGULAR MODIFIED
        - FIRST KIND
        - SECOND KIND
==================================================================
    FIRST KIND
--------------------------------------------------------------- */
/**
 * Modified cylindrical Bessel function of the 1st kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Modified_Bessel_functions:_I.CE.B1_.2C_K.CE.B1
 */
function cyl_bessel_i(n, x) {
    // VALIDATION
    if (x < 0 && Math.floor(n) !== n)
        throw new InvalidArgument_1.InvalidArgument("Error on std.cyl_bessel_i(): n must be integer when x is negative -> (n = ".concat(n, ", x = ").concat(x, ")."));
    else if (x === 0 && n !== 0)
        throw new InvalidArgument_1.InvalidArgument("Error on std.cyl_bessel_i(): n must be zero when x is zero -> (n = ".concat(n, ", x = ").concat(x, ")."));
    // COMPUTATION
    if (n === 0.5)
        return Math.sqrt(2.0 / (Math.PI * x)) * Math.sinh(x);
    else
        return _Bessel_i(n, x);
}
exports.cyl_bessel_i = cyl_bessel_i;
function _Bessel_i(v, x) {
    return MathUtil_1.MathUtil.sigma(function (k) {
        var numerator = Math.pow(x / 2, v + 2 * k);
        var denominator = MathUtil_1.MathUtil.factorial(k) * (0, gamma_1.tgamma)(v + k + 1);
        return numerator / denominator;
    }, 0, INFINITY);
}
/* ---------------------------------------------------------------
    SECOND KIND
--------------------------------------------------------------- */
/**
 * Modified cylindrical Bessel function of the 2nd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Modified_Bessel_functions:_I.CE.B1_.2C_K.CE.B1
 */
function cyl_bessel_k(n, x) {
    if (x <= 0)
        throw new InvalidArgument_1.InvalidArgument("Error on std.cyl_bessel_k(): requires x > 0 -> (x = ".concat(x, ")."));
    return _Bessel_k(n, x);
}
exports.cyl_bessel_k = cyl_bessel_k;
function _Bessel_k(v, z) {
    var ret = Math.PI / 2;
    ret *= cyl_bessel_i(-v, z) - cyl_bessel_i(v, z);
    ret /= Math.sin(v * Math.PI);
    return ret;
}
//# sourceMappingURL=bessels.js.map