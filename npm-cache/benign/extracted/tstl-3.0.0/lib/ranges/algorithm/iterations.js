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
exports.count_if = exports.count = exports.mismatch = exports.search_n = exports.search = exports.adjacent_find = exports.find_first_of = exports.find_end = exports.find_if_not = exports.find_if = exports.find = exports.lexicographical_compare = exports.equal = exports.none_of = exports.any_of = exports.all_of = exports.for_each_n = exports.for_each = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
var base = __importStar(require("../../algorithm/iterations"));
var Pair_1 = require("../../utility/Pair");
var factory_1 = require("../../iterator/factory");
var global_1 = require("../../iterator/global");
var comparators_1 = require("../../functional/comparators");
/* ---------------------------------------------------------
    FOR_EACH
--------------------------------------------------------- */
/**
 * Apply a function to elements in range.
 *
 * @param range An iterable ranged container.
 * @param fn The function to apply.
 *
 * @return The function *fn* itself.
 */
function for_each(range, fn) {
    return base.for_each((0, factory_1.begin)(range), (0, factory_1.end)(range), fn);
}
exports.for_each = for_each;
/**
 * Apply a function to elements in steps.
 *
 * @param range An iterable ranged container.
 * @param n Steps to maximum advance.
 * @param fn The function to apply.
 *
 * @return Iterator advanced from *first* for *n* steps.
 */
function for_each_n(range, n, fn) {
    return base.for_each_n((0, factory_1.begin)(range), n, fn);
}
exports.for_each_n = for_each_n;
/* ---------------------------------------------------------
    AGGREGATE CONDITIONS
--------------------------------------------------------- */
/**
 * Test whether all elements meet a specific condition.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return Whether the *pred* returns always `true` for all elements.
 */
function all_of(range, pred) {
    return base.all_of((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.all_of = all_of;
/**
 * Test whether any element meets a specific condition.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return Whether the *pred* returns at least a `true` for all elements.
 */
function any_of(range, pred) {
    return base.any_of((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.any_of = any_of;
/**
 * Test whether any element doesn't meet a specific condition.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return Whether the *pred* doesn't return `true` for all elements.
 */
function none_of(range, pred) {
    return base.none_of((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.none_of = none_of;
function equal(range1, range2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    if ((0, global_1.size)(range1) !== (0, global_1.size)(range2))
        return false;
    else
        return base.equal((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), pred);
}
exports.equal = equal;
/**
 * Compare lexicographically.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the 1st range precedes the 2nd.
 */
function lexicographical_compare(range1, range2, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.lexicographical_compare((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), (0, factory_1.end)(range2), comp);
}
exports.lexicographical_compare = lexicographical_compare;
/* ---------------------------------------------------------
    FINDERS
--------------------------------------------------------- */
/**
 * Find a value in range.
 *
 * @param range An iterable ranged container.
 * @param val The value to find.
 *
 * @return Iterator to the first element {@link equal to equal_to} the value.
 */
function find(range, val) {
    return base.find((0, factory_1.begin)(range), (0, factory_1.end)(range), val);
}
exports.find = find;
/**
 * Find a matched condition in range.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return Iterator to the first element *pred* returns `true`.
 */
function find_if(range, pred) {
    return base.find_if((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.find_if = find_if;
/**
 * Find a mismatched condition in range.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return Iterator to the first element *pred* returns `false`.
 */
function find_if_not(range, pred) {
    return base.find_if_not((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.find_if_not = find_if_not;
function find_end(range1, range2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    return base.find_end((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), (0, factory_1.end)(range2), pred);
}
exports.find_end = find_end;
function find_first_of(range1, range2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    return base.find_first_of((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), (0, factory_1.end)(range2), pred);
}
exports.find_first_of = find_first_of;
/**
 * Find the first adjacent element.
 *
 * @param range An iterable ranged container.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Iterator to the first element of adjacent find.
 */
function adjacent_find(range, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    return base.adjacent_find((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.adjacent_find = adjacent_find;
function search(range1, range2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    return base.search((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), (0, factory_1.end)(range2), pred);
}
exports.search = search;
/**
 * Search specific and repeated elements.
 *
 * @param range An iterable ranged container.
 * @param count Count to be repeated.
 * @param val Value to search.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Iterator to the first element of the repetition.
 */
function search_n(range, count, val, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    return base.search_n((0, factory_1.begin)(range), (0, factory_1.end)(range), count, val, pred);
}
exports.search_n = search_n;
function mismatch(range1, range2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    if ((0, global_1.size)(range1) === (0, global_1.size)(range2))
        return base.mismatch((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2), pred);
    var limit = Math.min((0, global_1.size)(range1), (0, global_1.size)(range2));
    var x = (0, factory_1.begin)(range1);
    var y = (0, factory_1.begin)(range2);
    for (var i = 0; i < limit; ++i) {
        if (pred(x.value, y.value) === false)
            break;
        x = x.next();
        y = y.next();
    }
    return new Pair_1.Pair(x, y);
}
exports.mismatch = mismatch;
/* ---------------------------------------------------------
    COUNTERS
--------------------------------------------------------- */
/**
 * Count matched value in range.
 *
 * @param range An iterable ranged container.
 * @param val The value to count.
 *
 * @return The matched count.
 */
function count(range, val) {
    return base.count((0, factory_1.begin)(range), (0, factory_1.end)(range), val);
}
exports.count = count;
/**
 * Count matched condition in range.
 *
 * @param range An iterable ranged container.
 * @param pred A function predicates the specific condition.
 *
 * @return The matched count.
 */
function count_if(range, pred) {
    return base.count_if((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.count_if = count_if;
//# sourceMappingURL=iterations.js.map