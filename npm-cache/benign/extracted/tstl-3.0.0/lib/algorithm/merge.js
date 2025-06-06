"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set_symmetric_difference = exports.set_difference = exports.set_intersection = exports.set_union = exports.includes = exports.inplace_merge = exports.merge = void 0;
var comparators_1 = require("../functional/comparators");
var modifiers_1 = require("./modifiers");
var factory_1 = require("../iterator/factory");
var Vector_1 = require("../container/Vector");
/* =========================================================
    MERGE & SET OPERATIONS
        - MERGE
        - SET OPERATION
============================================================
    MERGE
--------------------------------------------------------- */
/**
 * Merge two sorted ranges.
 *
 * @param first1 Input iteartor of the first position of the 1st range.
 * @param last1 Input iterator of the last position of the 1st range.
 * @param first2 Input iterator of the first position of the 2nd range.
 * @param last2 Input iterator of the last position of the 2nd range.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function merge(first1, last1, first2, last2, output, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    while (true) {
        if (first1.equals(last1))
            return (0, modifiers_1.copy)(first2, last2, output);
        else if (first2.equals(last2))
            return (0, modifiers_1.copy)(first1, last1, output);
        if (comp(first1.value, first2.value)) {
            output.value = first1.value;
            first1 = first1.next();
        }
        else {
            output.value = first2.value;
            first2 = first2.next();
        }
        output = output.next();
    }
}
exports.merge = merge;
/**
 * Merge two sorted & consecutive ranges.
 *
 * @param first Bidirectional iterator of the first position.
 * @param middle Bidirectional iterator of the initial position of the 2nd range.
 * @param last Bidirectional iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function inplace_merge(first, middle, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var vector = new Vector_1.Vector();
    merge(first, middle, middle, last, (0, factory_1.back_inserter)(vector), comp);
    (0, modifiers_1.copy)(vector.begin(), vector.end(), first);
}
exports.inplace_merge = inplace_merge;
/* ---------------------------------------------------------
    SET OPERATIONS
--------------------------------------------------------- */
/**
 * Test whether two sorted ranges are in inclusion relationship.
 *
 * @param first1 Input iteartor of the first position of the 1st range.
 * @param last1 Input iterator of the last position of the 1st range.
 * @param first2 Input iterator of the first position of the 2nd range.
 * @param last2 Input iterator of the last position of the 2nd range.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether [first, last1) includes [first2, last2).
 */
function includes(first1, last1, first2, last2, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    while (!first2.equals(last2)) {
        if (first1.equals(last1) || comp(first2.value, first1.value))
            return false;
        else if (!comp(first1.value, first2.value))
            first2 = first2.next();
        first1 = first1.next();
    }
    return true;
}
exports.includes = includes;
/**
 * Combine two sorted ranges to union relationship.
 *
 * @param first1 Input iteartor of the first position of the 1st range.
 * @param last1 Input iterator of the last position of the 1st range.
 * @param first2 Input iterator of the first position of the 2nd range.
 * @param last2 Input iterator of the last position of the 2nd range.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function set_union(first1, last1, first2, last2, output, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    while (true) {
        if (first1.equals(last1))
            return (0, modifiers_1.copy)(first2, last2, output);
        else if (first2.equals(last2))
            return (0, modifiers_1.copy)(first1, last1, output);
        if (comp(first1.value, first2.value)) {
            output.value = first1.value;
            first1 = first1.next();
        }
        else if (comp(first2.value, first1.value)) {
            output.value = first2.value;
            first2 = first2.next();
        }
        else {
            // equals
            output.value = first1.value;
            first1 = first1.next();
            first2 = first2.next();
        }
        output = output.next();
    }
}
exports.set_union = set_union;
/**
 * Combine two sorted ranges to intersection relationship.
 *
 * @param first1 Input iteartor of the first position of the 1st range.
 * @param last1 Input iterator of the last position of the 1st range.
 * @param first2 Input iterator of the first position of the 2nd range.
 * @param last2 Input iterator of the last position of the 2nd range.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function set_intersection(first1, last1, first2, last2, output, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    while (!first1.equals(last1) && !first2.equals(last2))
        if (comp(first1.value, first2.value))
            first1 = first1.next();
        else if (comp(first2.value, first1.value))
            first2 = first2.next();
        else {
            output.value = first1.value;
            output = output.next();
            first1 = first1.next();
            first2 = first2.next();
        }
    return output;
}
exports.set_intersection = set_intersection;
/**
 * Combine two sorted ranges to difference relationship.
 *
 * @param first1 Input iteartor of the first position of the 1st range.
 * @param last1 Input iterator of the last position of the 1st range.
 * @param first2 Input iterator of the first position of the 2nd range.
 * @param last2 Input iterator of the last position of the 2nd range.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function set_difference(first1, last1, first2, last2, output, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    while (!first1.equals(last1) && !first2.equals(last2))
        if (comp(first1.value, first2.value)) {
            output.value = first1.value;
            output = output.next();
            first1 = first1.next();
        }
        else if (comp(first2.value, first1.value))
            first2 = first2.next();
        else {
            first1 = first1.next();
            first2 = first2.next();
        }
    return (0, modifiers_1.copy)(first1, last1, output);
}
exports.set_difference = set_difference;
/**
 * Combine two sorted ranges to symmetric difference relationship.
 *
 * @param first1 Input iteartor of the first position of the 1st range.
 * @param last1 Input iterator of the last position of the 1st range.
 * @param first2 Input iterator of the first position of the 2nd range.
 * @param last2 Input iterator of the last position of the 2nd range.
 * @param output Output iterator of the first position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function set_symmetric_difference(first1, last1, first2, last2, output, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    while (true) {
        if (first1.equals(last1))
            return (0, modifiers_1.copy)(first2, last2, output);
        else if (first2.equals(last2))
            return (0, modifiers_1.copy)(first1, last1, output);
        if (comp(first1.value, first2.value)) {
            output.value = first1.value;
            output = output.next();
            first1 = first1.next();
        }
        else if (comp(first2.value, first1.value)) {
            output.value = first2.value;
            output = output.next();
            first2 = first2.next();
        }
        else {
            // equals
            first1 = first1.next();
            first2 = first2.next();
        }
    }
}
exports.set_symmetric_difference = set_symmetric_difference;
//# sourceMappingURL=merge.js.map