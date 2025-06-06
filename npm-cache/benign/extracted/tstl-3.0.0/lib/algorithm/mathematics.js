"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.next_permutation = exports.prev_permutation = exports.is_permutation = exports.clamp = exports.minmax_element = exports.max_element = exports.min_element = exports.minmax = exports.max = exports.min = void 0;
var Pair_1 = require("../utility/Pair");
var comparators_1 = require("../functional/comparators");
var global_1 = require("../iterator/global");
var iterations_1 = require("./iterations");
var modifiers_1 = require("./modifiers");
/* =========================================================
    MATHMATICS
        - MIN & MAX
        - PERMUTATION
============================================================
    MIN & MAX
--------------------------------------------------------- */
/**
 * Get the minium value.
 *
 * @param items Items to search through.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return The minimum value.
 */
function min(items, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var minimum = items[0];
    for (var i = 1; i < items.length; ++i)
        if (comp(items[i], minimum))
            minimum = items[i];
    return minimum;
}
exports.min = min;
/**
 * Get the maximum value.
 *
 * @param items Items to search through.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return The maximum value.
 */
function max(items, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var maximum = items[0];
    for (var i = 1; i < items.length; ++i)
        if (comp(maximum, items[i]))
            maximum = items[i];
    return maximum;
}
exports.max = max;
/**
 * Get the minimum & maximum values.
 *
 * @param items Items to search through.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return A {@link Pair} of minimum & maximum values.
 */
function minmax(items, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var minimum = items[0];
    var maximum = items[0];
    for (var i = 1; i < items.length; ++i) {
        if (comp(items[i], minimum))
            minimum = items[i];
        if (comp(maximum, items[i]))
            maximum = items[i];
    }
    return new Pair_1.Pair(minimum, maximum);
}
exports.minmax = minmax;
/**
 * Get the minimum element in range.
 *
 * @param first Forward iterator of the first position.
 * @param last Forward iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the minimum element.
 */
function min_element(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var smallest = first;
    first = first.next();
    for (; !first.equals(last); first = first.next())
        if (comp(first.value, smallest.value))
            smallest = first;
    return smallest;
}
exports.min_element = min_element;
/**
 * Get the maximum element in range.
 *
 * @param first Forward iterator of the first position.
 * @param last Forward iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the maximum element.
 */
function max_element(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var largest = first;
    first = first.next();
    for (; !first.equals(last); first = first.next())
        if (comp(largest.value, first.value))
            largest = first;
    return largest;
}
exports.max_element = max_element;
/**
 * Get the minimum & maximum elements in range.
 *
 * @param first Forward iterator of the first position.
 * @param last Forward iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return A {@link Pair} of iterators to the minimum & maximum elements.
 */
function minmax_element(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var smallest = first;
    var largest = first;
    first = first.next();
    for (; !first.equals(last); first = first.next()) {
        if (comp(first.value, smallest.value))
            // first is less than the smallest.
            smallest = first;
        if (comp(largest.value, first.value))
            // first is not less than the largest.
            largest = first;
    }
    return new Pair_1.Pair(smallest, largest);
}
exports.minmax_element = minmax_element;
/**
 * Get the clamp value.
 *
 * @param v The value to clamp.
 * @param lo Lower value than *hi*.
 * @param hi Higher value than *lo*.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return The clamp value.
 */
function clamp(v, lo, hi, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return comp(v, lo) ? lo : comp(hi, v) ? hi : v;
}
exports.clamp = clamp;
/* ---------------------------------------------------------
    PERMUATATIONS
--------------------------------------------------------- */
/**
 * Test whether two ranges are in permutation relationship.
 *
 * @param first1 Forward iteartor of the first position of the 1st range.
 * @param last1 Forward iterator of the last position of the 1st range.
 * @param first2 Forward iterator of the first position of the 2nd range.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Whether permutation or not.
 */
function is_permutation(first1, last1, first2, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    // find the mismatched
    var pair = ((0, iterations_1.mismatch)(first1, last1, first2, pred));
    first1 = pair.first;
    first2 = pair.second;
    if (first1.equals(last1))
        return true;
    var last2 = (0, global_1.advance)(first2, (0, global_1.distance)(first1, last1));
    var _loop_1 = function (it) {
        var lambda = function (val) {
            return pred(val, it.value);
        };
        if ((0, iterations_1.find_if)(first1, it, lambda).equals(it)) {
            var n = (0, iterations_1.count_if)(first2, last2, lambda);
            if (n === 0 || (0, iterations_1.count_if)(it, last1, lambda) !== n)
                return { value: false };
        }
    };
    for (var it = first1; !it.equals(last1); it = it.next()) {
        var state_1 = _loop_1(it);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return true;
}
exports.is_permutation = is_permutation;
/**
 * Transform to the previous permutation.
 *
 * @param first Bidirectional iterator of the first position.
 * @param last Bidirectional iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the transformation was meaningful.
 */
function prev_permutation(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    if (first.equals(last) === true)
        return false;
    var previous = last.prev();
    if (first.equals(previous) === true)
        return false;
    while (true) {
        var x = previous;
        previous = previous.prev();
        if (comp(x.value, previous.value) === true) {
            var y = last.prev();
            while (comp(y.value, previous.value) === false)
                y = y.prev();
            (0, modifiers_1.iter_swap)(previous, y);
            (0, modifiers_1.reverse)(x, last);
            return true;
        }
        if (previous.equals(first) === true) {
            (0, modifiers_1.reverse)(first, last);
            return false;
        }
    }
}
exports.prev_permutation = prev_permutation;
/**
 * Transform to the next permutation.
 *
 * @param first Bidirectional iterator of the first position.
 * @param last Bidirectional iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the transformation was meaningful.
 */
function next_permutation(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    if (first.equals(last) === true)
        return false;
    var previous = last.prev();
    if (first.equals(previous) === true)
        return false;
    while (true) {
        var x = previous;
        previous = previous.prev();
        if (comp(previous.value, x.value) === true) {
            var y = last.prev();
            while (comp(previous.value, y.value) === false)
                y = y.prev();
            (0, modifiers_1.iter_swap)(previous, y);
            (0, modifiers_1.reverse)(x, last);
            return true;
        }
        if (previous.equals(first) === true) {
            (0, modifiers_1.reverse)(first, last);
            return false;
        }
    }
}
exports.next_permutation = next_permutation;
//# sourceMappingURL=mathematics.js.map