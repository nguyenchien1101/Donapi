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
exports.next_permutation = exports.prev_permutation = exports.is_permutation = exports.minmax_element = exports.max_element = exports.min_element = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
var base = __importStar(require("../../algorithm/mathematics"));
var comparators_1 = require("../../functional/comparators");
var factory_1 = require("../../iterator/factory");
var global_1 = require("../../iterator/global");
/* ---------------------------------------------------------
    MIN & MAX
--------------------------------------------------------- */
/**
 * Get the minimum element in range.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the minimum element.
 */
function min_element(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.min_element((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.min_element = min_element;
/**
 * Get the maximum element in range.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the maximum element.
 */
function max_element(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.max_element((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.max_element = max_element;
/**
 * Get the minimum & maximum elements in range.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return A {@link Pair} of iterators to the minimum & maximum elements.
 */
function minmax_element(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.minmax_element((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.minmax_element = minmax_element;
/* ---------------------------------------------------------
    PERMUATATIONS
--------------------------------------------------------- */
/**
 * Test whether two ranges are in permutation relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Whether permutation or not.
 */
function is_permutation(range1, range2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    if ((0, global_1.size)(range1) !== (0, global_1.size)(range2))
        return false;
    else
        return base.is_permutation((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), pred);
}
exports.is_permutation = is_permutation;
/**
 * Transform to the previous permutation.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the transformation was meaningful.
 */
function prev_permutation(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.prev_permutation((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.prev_permutation = prev_permutation;
/**
 * Transform to the next permutation.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the transformation was meaningful.
 */
function next_permutation(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.next_permutation((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.next_permutation = next_permutation;
//# sourceMappingURL=mathematics.js.map