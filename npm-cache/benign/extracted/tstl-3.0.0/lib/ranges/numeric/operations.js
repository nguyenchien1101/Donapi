"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform_exclusive_scan = exports.transform_inclusive_scan = exports.exclusive_scan = exports.inclusive_scan = exports.partial_sum = exports.adjacent_difference = exports.inner_product = exports.accumulate = exports.iota = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
var base = __importStar(require("../../numeric/operations"));
var factory_1 = require("../../iterator/factory");
var operators_1 = require("../../numeric/operators");
/* ---------------------------------------------------------
    COMMON ALGORITHMS
--------------------------------------------------------- */
function iota(range, value) {
    return base.iota((0, factory_1.begin)(range), (0, factory_1.end)(range), value);
}
exports.iota = iota;
function accumulate(range, init, op) {
    if (op === void 0) { op = operators_1.plus; }
    return base.accumulate((0, factory_1.begin)(range), (0, factory_1.end)(range), init, op);
}
exports.accumulate = accumulate;
function inner_product(range1, range2, value, adder, multiplier) {
    if (adder === void 0) { adder = operators_1.plus; }
    if (multiplier === void 0) { multiplier = operators_1.multiplies; }
    return base.inner_product((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), value, adder, multiplier);
}
exports.inner_product = inner_product;
function adjacent_difference(range, output, subtracter) {
    if (subtracter === void 0) { subtracter = operators_1.minus; }
    return base.adjacent_difference((0, factory_1.begin)(range), (0, factory_1.end)(range), output, subtracter);
}
exports.adjacent_difference = adjacent_difference;
function partial_sum(range, output, adder) {
    if (adder === void 0) { adder = operators_1.plus; }
    return base.partial_sum((0, factory_1.begin)(range), (0, factory_1.end)(range), output, adder);
}
exports.partial_sum = partial_sum;
/* ---------------------------------------------------------
    PREFIX SUMS
--------------------------------------------------------- */
function inclusive_scan(range, output, adder, init) {
    if (adder === void 0) { adder = operators_1.plus; }
    return base.inclusive_scan((0, factory_1.begin)(range), (0, factory_1.end)(range), output, adder, init);
}
exports.inclusive_scan = inclusive_scan;
function exclusive_scan(range, output, init, adder) {
    if (adder === void 0) { adder = operators_1.plus; }
    return base.exclusive_scan((0, factory_1.begin)(range), (0, factory_1.end)(range), output, init, adder);
}
exports.exclusive_scan = exclusive_scan;
function transform_inclusive_scan(range, output, binary, unary, init) {
    return base.transform_inclusive_scan((0, factory_1.begin)(range), (0, factory_1.end)(range), output, binary, unary, init);
}
exports.transform_inclusive_scan = transform_inclusive_scan;
function transform_exclusive_scan(range, output, init, binary, unary) {
    return base.transform_exclusive_scan((0, factory_1.begin)(range), (0, factory_1.end)(range), output, init, binary, unary);
}
exports.transform_exclusive_scan = transform_exclusive_scan;
//# sourceMappingURL=operations.js.map