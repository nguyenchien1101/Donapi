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
exports.set_symmetric_difference = exports.set_difference = exports.set_intersection = exports.set_union = exports.includes = exports.inplace_merge = exports.merge = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
var base = __importStar(require("../../algorithm/merge"));
var factory_1 = require("../../iterator/factory");
var global_1 = require("../../iterator/global");
var comparators_1 = require("../../functional/comparators");
/* ---------------------------------------------------------
    MERGE
--------------------------------------------------------- */
/**
 * Merge two sorted ranges.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function merge(range1, range2, output, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.merge((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), (0, factory_1.end)(range2), output, comp);
}
exports.merge = merge;
/**
 * Merge two sorted & consecutive ranges.
 *
 * @param range An iterable ranged container.
 * @param middle Bidirectional iterator of the initial position of the 2nd range.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function inplace_merge(range, middle, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.inplace_merge((0, factory_1.begin)(range), middle, (0, factory_1.end)(range), comp);
}
exports.inplace_merge = inplace_merge;
/* ---------------------------------------------------------
    SET OPERATIONS
--------------------------------------------------------- */
/**
 * Test whether two sorted ranges are in inclusion relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether [first, last1) includes [first2, last2).
 */
function includes(range1, range2, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    if ((0, global_1.size)(range1) < (0, global_1.size)(range2))
        return false;
    else
        return base.includes((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), (0, factory_1.end)(range2), comp);
}
exports.includes = includes;
/**
 * Combine two sorted ranges to union relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function set_union(range1, range2, output, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.set_union((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), (0, factory_1.end)(range2), output, comp);
}
exports.set_union = set_union;
/**
 * Combine two sorted ranges to intersection relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function set_intersection(range1, range2, output, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.set_intersection((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), (0, factory_1.end)(range2), output, comp);
}
exports.set_intersection = set_intersection;
/**
 * Combine two sorted ranges to difference relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function set_difference(range1, range2, output, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.set_difference((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), (0, factory_1.end)(range2), output, comp);
}
exports.set_difference = set_difference;
/**
 * Combine two sorted ranges to symmetric difference relationship.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function set_symmetric_difference(range1, range2, output, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.set_symmetric_difference((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), (0, factory_1.end)(range2), output, comp);
}
exports.set_symmetric_difference = set_symmetric_difference;
//# sourceMappingURL=merge.js.map