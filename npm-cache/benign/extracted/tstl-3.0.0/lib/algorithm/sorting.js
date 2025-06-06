"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_sorted_until = exports.is_sorted = exports.nth_element = exports.partial_sort_copy = exports.partial_sort = exports.stable_sort = exports.sort = void 0;
var Vector_1 = require("../container/Vector");
var comparators_1 = require("../functional/comparators");
var modifiers_1 = require("./modifiers");
var global_1 = require("../iterator/global");
/* =========================================================
    SORTINGS
        - SORT
        - INSPECTOR
        - BACKGROUND
============================================================
    SORT
--------------------------------------------------------- */
/**
 * Sort elements in range.
 *
 * @param first Random access iterator of the first position.
 * @param last Random access iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function sort(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var length = last.index() - first.index();
    if (length <= 0)
        return;
    var pivot_it = first.advance(Math.floor(length / 2));
    var pivot = pivot_it.value;
    if (pivot_it.index() !== first.index())
        (0, modifiers_1.iter_swap)(first, pivot_it);
    var i = 1;
    for (var j = 1; j < length; ++j) {
        var j_it = first.advance(j);
        if (comp(j_it.value, pivot)) {
            (0, modifiers_1.iter_swap)(j_it, first.advance(i));
            ++i;
        }
    }
    (0, modifiers_1.iter_swap)(first, first.advance(i - 1));
    sort(first, first.advance(i - 1), comp);
    sort(first.advance(i), last, comp);
}
exports.sort = sort;
/**
 * Sort elements in range stably.
 *
 * @param first Random access iterator of the first position.
 * @param last Random access iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function stable_sort(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var ramda = function (x, y) {
        return comp(x, y) && !comp(y, x);
    };
    sort(first, last, ramda);
}
exports.stable_sort = stable_sort;
/**
 * Sort elements in range partially.
 *
 * @param first Random access iterator of the first position.
 * @param middle Random access iterator of the middle position between [first, last). Elements only in [first, middle) are fully sorted.
 * @param last Random access iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function partial_sort(first, middle, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    for (var i = first; !i.equals(middle); i = i.next()) {
        var min = i;
        for (var j = i.next(); !j.equals(last); j = j.next())
            if (comp(j.value, min.value))
                min = j;
        if (!i.equals(min))
            (0, modifiers_1.iter_swap)(i, min);
    }
}
exports.partial_sort = partial_sort;
/**
 * Copy elements in range with partial sort.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output_first Output iterator of the first position.
 * @param output_last Output iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function partial_sort_copy(first, last, output_first, output_last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var input_size = (0, global_1.distance)(first, last);
    var result_size = (0, global_1.distance)(output_first, output_last);
    var vector = new Vector_1.Vector(first, last);
    sort(vector.begin(), vector.end(), comp);
    if (input_size > result_size)
        output_first = (0, modifiers_1.copy)(vector.begin(), vector.begin().advance(result_size), output_first);
    else
        output_first = (0, modifiers_1.copy)(vector.begin(), vector.end(), output_first);
    return output_first;
}
exports.partial_sort_copy = partial_sort_copy;
/**
 * Rearrange for the n'th element.
 *
 * @param first Random access iterator of the first position.
 * @param nth Random access iterator the n'th position.
 * @param last Random access iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function nth_element(first, nth, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var n = (0, global_1.distance)(first, nth);
    for (var i = first; !i.equals(last); i = i.next()) {
        var count = 0;
        for (var j = first; !j.equals(last); j = j.next())
            if (i.equals(j))
                continue;
            else if (comp(i.value, j.value) && ++count > n)
                break;
        if (count === n) {
            (0, modifiers_1.iter_swap)(nth, i);
            return;
        }
    }
}
exports.nth_element = nth_element;
/* ---------------------------------------------------------
    INSPECTOR
--------------------------------------------------------- */
/**
 * Test whether a range is sorted.
 *
 * @param first Input iterator of the first position.
 * @param last Input iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether sorted or not.
 */
function is_sorted(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return is_sorted_until(first, last, comp).equals(last);
}
exports.is_sorted = is_sorted;
/**
 * Find the first unsorted element in range.
 *
 * @param first Input iterator of the first position.
 * @param last Input iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element who violates the order.
 */
function is_sorted_until(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    if (first.equals(last))
        return last;
    for (var next = first.next(); !next.equals(last); next = next.next())
        if (comp(next.value, first.value))
            return next;
        else
            first = first.next();
    return last;
}
exports.is_sorted_until = is_sorted_until;
//# sourceMappingURL=sorting.js.map