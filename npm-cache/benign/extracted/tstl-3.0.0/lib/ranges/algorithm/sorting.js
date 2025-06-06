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
exports.is_sorted_until = exports.is_sorted = exports.nth_element = exports.partial_sort_copy = exports.partial_sort = exports.stable_sort = exports.sort = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
var base = __importStar(require("../../algorithm/sorting"));
var factory_1 = require("../../iterator/factory");
var comparators_1 = require("../../functional/comparators");
/* ---------------------------------------------------------
    SORT
--------------------------------------------------------- */
/**
 * Sort elements in range.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function sort(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.sort((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.sort = sort;
/**
 * Sort elements in range stably.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function stable_sort(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.stable_sort((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.stable_sort = stable_sort;
/**
 * Sort elements in range partially.
 *
 * @param range An iterable ranged container.
 * @param middle Random access iterator of the middle position between [first, last). Elements only in [first, middle) are fully sorted.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function partial_sort(range, middle, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.partial_sort((0, factory_1.begin)(range), middle, (0, factory_1.end)(range), comp);
}
exports.partial_sort = partial_sort;
/**
 * Copy elements in range with partial sort.
 *
 * @param range An iterable ranged container of input.
 * @param output An iterable ranged container of output.
 *
 * @return Output Iterator of the last position by advancing.
 */
function partial_sort_copy(range, output, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.partial_sort_copy((0, factory_1.begin)(range), (0, factory_1.end)(range), (0, factory_1.begin)(output), (0, factory_1.end)(output), comp);
}
exports.partial_sort_copy = partial_sort_copy;
/**
 * Rearrange for the n'th element.
 *
 * @param range An iterable ranged container.
 * @param nth Random access iterator the n'th position.
 * @param last Random access iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function nth_element(range, nth, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.nth_element((0, factory_1.begin)(range), nth, (0, factory_1.end)(range), comp);
}
exports.nth_element = nth_element;
/* ---------------------------------------------------------
    INSPECTOR
--------------------------------------------------------- */
/**
 * Test whether a range is sorted.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether sorted or not.
 */
function is_sorted(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.is_sorted((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.is_sorted = is_sorted;
/**
 * Find the first unsorted element in range.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element who violates the order.
 */
function is_sorted_until(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.is_sorted_until((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.is_sorted_until = is_sorted_until;
//# sourceMappingURL=sorting.js.map