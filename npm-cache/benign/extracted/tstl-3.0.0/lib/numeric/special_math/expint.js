"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expint = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var MathUtil_1 = require("../../internal/numeric/MathUtil");
/**
 * Exponential integral.
 */
function expint(x) {
    if (x === 0)
        return -Infinity;
    else if (x < 0)
        return -_E1_G(-x);
    else
        return _EI_Factorial(x);
}
exports.expint = expint;
function _EI_Factorial(x) {
    return (EULER +
        Math.log(Math.abs(x)) / Math.log(Math.E) +
        MathUtil_1.MathUtil.sigma(function (k) {
            return Math.pow(x, k) / (k * MathUtil_1.MathUtil.factorial(k));
        }, 1, MAX_K));
}
/* ---------------------------------------------------------------
    SWAMEE AND OHIJA APPROXIMATION
--------------------------------------------------------------- */
// function _E1_AB(x: number): number
// {
//     const A: number = _Compute_A(x);
//     const B: number = _Compute_B(x);
//     const ret: number = Math.pow(A, -7.7) + B;
//     return Math.pow(ret, -0.13);
// }
// function _Compute_A(x: number): number
// {
//     const ret: number = 0.56146 / x + 0.65;
//     ret *= 1 + x;
//     ret = Math.log(ret) / Math.log(Math.E);
//     return ret;
// }
// function _Compute_B(x: number): number
// {
//     const ret: number = Math.pow(x, 4);
//     ret *= Math.pow(Math.E, 7.7*x);
//     ret *= Math.pow(2 + x, 3.7);
//     return ret;
// }
/* ---------------------------------------------------------------
    BARRY APPROXIMATION
--------------------------------------------------------------- */
function _E1_G(x) {
    var h = _Compute_h(x);
    var ret = G + (1 - G) * Math.pow(Math.E, -x / (1 - G));
    ret = Math.pow(Math.E, -x) / ret;
    var ln = 1 + G / x - (1 - G) / Math.pow(h + B * x, 2);
    ln = Math.log(ln) / Math.log(Math.E);
    return ret * ln;
}
function _Compute_h(x) {
    var q = _Compute_q(x);
    var left = 1 / (1 + Math.pow(x, 1.5));
    var right = (H_INF * q) / (1 + q);
    return left + right;
}
function _Compute_q(x) {
    return (20 / 47) * Math.pow(x, Math.sqrt(31 / 26));
}
var EULER = 0.5772156649015328606;
var MAX_K = 150;
var G = Math.pow(Math.E, -EULER);
var B = Math.sqrt((2 * (1 - G)) / (G * (2 - G)));
var H_INF = ((1 - G) * (G * G - 6 * G + 12)) / (3 * G * Math.pow(2 - G, 2) * B);
//# sourceMappingURL=expint.js.map