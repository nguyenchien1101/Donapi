"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comp_ellint_3 = exports.ellint_3 = exports.comp_ellint_2 = exports.ellint_2 = exports.comp_ellint_1 = exports.ellint_1 = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var MathUtil_1 = require("../../internal/numeric/MathUtil");
var InvalidArgument_1 = require("../../exception/InvalidArgument");
/* ---------------------------------------------------------------
    FIRST
--------------------------------------------------------------- */
/**
 * Incomplete elliptic integral of the 1st kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_first_kind
 */
function ellint_1(k, phi) {
    // FORMULA OF INTEGRAL
    var formula = function (x) {
        return 1.0 / _Common_formula(k, x);
    };
    return _Post_process("ellint_1", k, phi, formula);
}
exports.ellint_1 = ellint_1;
/**
 * Complete elliptic integral of the 1st kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Elliptic_integral_of_the_first_kind
 */
function comp_ellint_1(k) {
    return ellint_1(k, Math.PI / 2);
}
exports.comp_ellint_1 = comp_ellint_1;
/* ---------------------------------------------------------------
    SECOND
--------------------------------------------------------------- */
/**
 * Incomplete elliptic integral of the 2nd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Incomplete_elliptic_integral_of_the_second_kind
 */
function ellint_2(k, phi) {
    var formula = function (x) {
        return _Common_formula(k, x);
    };
    return _Post_process("ellint_2", k, phi, formula);
}
exports.ellint_2 = ellint_2;
/**
 * Complete elliptic integral of the 2nd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_second_kind
 */
function comp_ellint_2(k) {
    return ellint_2(k, Math.PI / 2);
}
exports.comp_ellint_2 = comp_ellint_2;
/* ---------------------------------------------------------------
    THIRD
--------------------------------------------------------------- */
/**
 * Incomplete elliptic integral of the 3rd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_third_kind
 */
function ellint_3(k, v, phi) {
    // SPECIAL VALIDATIONS ONLY FOR SERIES-3
    var predicator = 1 / Math.pow(Math.sin(phi), 2);
    if (v > predicator)
        throw new InvalidArgument_1.InvalidArgument("Error on std.ellint_3(): must be v < (1 / sin^2(phi)) -> (v = ".concat(v, ", 1 / sin^2(phi) = ").concat(predicator, ")."));
    return _Ellint_3(k, v, phi);
}
exports.ellint_3 = ellint_3;
/**
 * Complete elliptic integral of the 3rd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Incomplete_elliptic_integral_of_the_third_kind
 */
function comp_ellint_3(k, n) {
    return ellint_3(k, n, Math.PI / 2);
}
exports.comp_ellint_3 = comp_ellint_3;
function _Ellint_3(k, v, phi) {
    var formula = function (x) {
        var denominator = 1 - v * Math.pow(Math.sin(x), 2);
        denominator *= _Common_formula(k, x);
        return 1.0 / denominator;
    };
    return _Post_process("ellint_3", k, phi, formula);
}
/* ---------------------------------------------------------------
    BACKGROUNDS
--------------------------------------------------------------- */
function _Common_formula(k, x) {
    return Math.sqrt(1 - Math.pow(k * Math.sin(x), 2));
}
function _Post_process(func, k, phi, formula) {
    if (Math.abs(k) > 1)
        throw new InvalidArgument_1.InvalidArgument("Error on std.".concat(func, "(): must be |k| <= 1 -> (k = ").concat(k, ")."));
    var area = MathUtil_1.MathUtil.integral(formula, 0, phi);
    return phi < 0 ? -area : area;
}
//# sourceMappingURL=ellints.js.map