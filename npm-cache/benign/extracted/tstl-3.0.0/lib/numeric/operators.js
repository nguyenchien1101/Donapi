"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modules = exports.divides = exports.multiplies = exports.negate = exports.minus = exports.plus = void 0;
/* ---------------------------------------------------------
    PLUS
--------------------------------------------------------- */
function plus(x, y) {
    if (x.plus instanceof Function)
        return x.plus(y);
    else
        return x + y;
}
exports.plus = plus;
function minus(x, y) {
    if (x.minus instanceof Function)
        return x.minus(y);
    else
        return (x - y);
}
exports.minus = minus;
function negate(x) {
    if (x.negate instanceof Function)
        return x.negate();
    else
        return -x;
}
exports.negate = negate;
/* ---------------------------------------------------------
    MULTIPLY
--------------------------------------------------------- */
function multiplies(x, y) {
    if (x.multiplies instanceof Function)
        return x.multiplies(y);
    else
        return (x * y);
}
exports.multiplies = multiplies;
function divides(x, y) {
    if (x.divides instanceof Function)
        return x.divides(y);
    else
        return (x / y);
}
exports.divides = divides;
function modules(x, y) {
    if (x.modules instanceof Function)
        return x.modules(y);
    else
        return (x % y);
}
exports.modules = modules;
//# sourceMappingURL=operators.js.map