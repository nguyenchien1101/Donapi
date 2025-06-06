"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count_if = exports.count = exports.mismatch = exports.search_n = exports.search = exports.adjacent_find = exports.find_first_of = exports.find_end = exports.find_if_not = exports.find_if = exports.find = exports.lexicographical_compare = exports.equal = exports.none_of = exports.any_of = exports.all_of = exports.for_each_n = exports.for_each = void 0;
var Pair_1 = require("../utility/Pair");
var comparators_1 = require("../functional/comparators");
var global_1 = require("../iterator/global");
/* =========================================================
    ITERATIONS (NON-MODIFYING SEQUENCE)
        - FOR_EACH
        - AGGREGATE CONDITIONS
        - FINDERS
        - COUNTERS
============================================================
    FOR_EACH
--------------------------------------------------------- */
/**
 * Apply a function to elements in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param fn The function to apply.
 *
 * @return The function *fn* itself.
 */
function for_each(first, last, fn) {
    for (var it = first; !it.equals(last); it = it.next())
        fn(it.value);
    return fn;
}
exports.for_each = for_each;
/**
 * Apply a function to elements in steps.
 *
 * @param first Input iteartor of the starting position.
 * @param n Steps to maximum advance.
 * @param fn The function to apply.
 *
 * @return Iterator advanced from *first* for *n* steps.
 */
function for_each_n(first, n, fn) {
    for (var i = 0; i < n; ++i) {
        fn(first.value);
        first = first.next();
    }
    return first;
}
exports.for_each_n = for_each_n;
/* ---------------------------------------------------------
    AGGREGATE CONDITIONS
--------------------------------------------------------- */
/**
 * Test whether all elements meet a specific condition.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred A function predicates the specific condition.
 *
 * @return Whether the *pred* returns always `true` for all elements.
 */
function all_of(first, last, pred) {
    for (var it = first; !it.equals(last); it = it.next())
        if (pred(it.value) === false)
            return false;
    return true;
}
exports.all_of = all_of;
/**
 * Test whether any element meets a specific condition.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred A function predicates the specific condition.
 *
 * @return Whether the *pred* returns at least a `true` for all elements.
 */
function any_of(first, last, pred) {
    for (var it = first; !it.equals(last); it = it.next())
        if (pred(it.value) === true)
            return true;
    return false;
}
exports.any_of = any_of;
/**
 * Test whether any element doesn't meet a specific condition.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred A function predicates the specific condition.
 *
 * @return Whether the *pred* doesn't return `true` for all elements.
 */
function none_of(first, last, pred) {
    return !any_of(first, last, pred);
}
exports.none_of = none_of;
function equal(first1, last1, first2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    while (!first1.equals(last1))
        if (!pred(first1.value, first2.value))
            return false;
        else {
            first1 = first1.next();
            first2 = first2.next();
        }
    return true;
}
exports.equal = equal;
/**
 * Compare lexicographically.
 *
 * @param first1 Input iteartor of the first position of the 1st range.
 * @param last1 Input iterator of the last position of the 1st range.
 * @param first2 Input iterator of the first position of the 2nd range.
 * @param last2 Input iterator of the last position of the 2nd range.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the 1st range precedes the 2nd.
 */
function lexicographical_compare(first1, last1, first2, last2, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    while (!first1.equals(last1))
        if (first2.equals(last2) || comp(first2.value, first1.value))
            return false;
        else if (comp(first1.value, first2.value))
            return true;
        else {
            first1 = first1.next();
            first2 = first2.next();
        }
    return !first2.equals(last2);
}
exports.lexicographical_compare = lexicographical_compare;
/* ---------------------------------------------------------
    FINDERS
--------------------------------------------------------- */
/**
 * Find a value in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param val The value to find.
 *
 * @return Iterator to the first element {@link equal to equal_to} the value.
 */
function find(first, last, val) {
    return find_if(first, last, function (elem) { return (0, comparators_1.equal_to)(elem, val); });
}
exports.find = find;
/**
 * Find a matched condition in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred A function predicates the specific condition.
 *
 * @return Iterator to the first element *pred* returns `true`.
 */
function find_if(first, last, pred) {
    for (var it = first; !it.equals(last); it = it.next())
        if (pred(it.value))
            return it;
    return last;
}
exports.find_if = find_if;
/**
 * Find a mismatched condition in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred A function predicates the specific condition.
 *
 * @return Iterator to the first element *pred* returns `false`.
 */
function find_if_not(first, last, pred) {
    return find_if(first, last, function (elem) { return !pred(elem); });
}
exports.find_if_not = find_if_not;
function find_end(first1, last1, first2, last2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    if (first2.equals(last2))
        return last1;
    var ret = last1;
    for (; !first1.equals(last1); first1 = first1.next()) {
        var it1 = first1;
        var it2 = first2;
        while (pred(it1.value, it2.value)) {
            it1 = it1.next();
            it2 = it2.next();
            if (it2.equals(last2)) {
                ret = first1;
                break;
            }
            else if (it1.equals(last1))
                return ret;
        }
    }
    return ret;
}
exports.find_end = find_end;
function find_first_of(first1, last1, first2, last2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    for (; !first1.equals(last1); first1 = first1.next())
        for (var it = first2; !it.equals(last2); it = it.next())
            if (pred(first1.value, it.value))
                return first1;
    return last1;
}
exports.find_first_of = find_first_of;
/**
 * Find the first adjacent element.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Iterator to the first element of adjacent find.
 */
function adjacent_find(first, last, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    if (!first.equals(last)) {
        var next = first.next();
        while (!next.equals(last)) {
            if (pred(first.value, next.value))
                return first;
            first = first.next();
            next = next.next();
        }
    }
    return last;
}
exports.adjacent_find = adjacent_find;
function search(first1, last1, first2, last2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    if (first2.equals(last2))
        return first1;
    for (; !first1.equals(last1); first1 = first1.next()) {
        var it1 = first1;
        var it2 = first2;
        while (pred(it1.value, it2.value)) {
            if (it2.equals(last2))
                return first1;
            else if (it1.equals(last1))
                return last1;
            it1 = it1.next();
            it2 = it2.next();
        }
    }
    return last1;
}
exports.search = search;
/**
 * Search specific and repeated elements.
 *
 * @param first Forward iteartor of the first position.
 * @param last Forward iterator of the last position.
 * @param count Count to be repeated.
 * @param val Value to search.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Iterator to the first element of the repetition.
 */
function search_n(first, last, count, val, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    var limit = (0, global_1.advance)(first, (0, global_1.distance)(first, last) - count);
    for (; !first.equals(limit); first = first.next()) {
        var it = first;
        var i = 0;
        while (pred(it.value, val)) {
            it = it.next();
            if (++i === count)
                return first;
        }
    }
    return last;
}
exports.search_n = search_n;
function mismatch(first1, last1, first2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    while (!first1.equals(last1) && pred(first1.value, first2.value)) {
        first1 = first1.next();
        first2 = first2.next();
    }
    return new Pair_1.Pair(first1, first2);
}
exports.mismatch = mismatch;
/* ---------------------------------------------------------
    COUNTERS
--------------------------------------------------------- */
/**
 * Count matched value in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param val The value to count.
 *
 * @return The matched count.
 */
function count(first, last, val) {
    return count_if(first, last, function (elem) { return (0, comparators_1.equal_to)(elem, val); });
}
exports.count = count;
/**
 * Count matched condition in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred A function predicates the specific condition.
 *
 * @return The matched count.
 */
function count_if(first, last, pred) {
    var ret = 0;
    for (var it = first; !it.equals(last); it = it.next())
        if (pred(it.value))
            ++ret;
    return ret;
}
exports.count_if = count_if;
//# sourceMappingURL=iterations.js.map