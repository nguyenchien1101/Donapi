"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.riemann_zeta = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var MathUtil_1 = require("../../internal/numeric/MathUtil");
var gamma_1 = require("./gamma");
/**
 * Riemann zeta function.
 *
 * @reference http://en.cppreference.com/w/cpp/numeric/special_math/riemann_zeta
 */
function riemann_zeta(arg) {
    if (arg < 0)
        return _Negative(arg);
    else if (arg === 0)
        return -0.5;
    else if (arg < 1)
        return _Fractional(arg);
    else if (arg === 1)
        return Infinity;
    else
        return _Positive(arg);
}
exports.riemann_zeta = riemann_zeta;
function _Negative(arg) {
    return (Math.pow(2, arg) *
        Math.pow(Math.PI, arg - 1) *
        Math.sin((Math.PI * arg) / 2) *
        (0, gamma_1.tgamma)(1 - arg) *
        riemann_zeta(1 - arg));
}
function _Fractional(arg) {
    var divider = 1 - Math.pow(2, 1 - arg);
    var sigma = MathUtil_1.MathUtil.sigma(function (n) {
        return Math.pow(-1, n - 1) * Math.pow(n, -arg);
    }, 1, INFINITY);
    return sigma / divider;
}
function _Positive(arg) {
    return MathUtil_1.MathUtil.sigma(function (n) {
        return Math.pow(n, -arg);
    }, 1, INFINITY);
}
var INFINITY = 100 * 1000;
//# sourceMappingURL=zeta.js.map