"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beta = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var gamma_1 = require("./gamma");
/**
 * Beta function.
 *
 * @reference https://en.wikipedia.org/wiki/Beta_function
 */
function beta(x, y) {
    return ((0, gamma_1.tgamma)(x) * (0, gamma_1.tgamma)(y)) / (0, gamma_1.tgamma)(x + y);
}
exports.beta = beta;
//# sourceMappingURL=beta.js.map