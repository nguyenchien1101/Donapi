"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binary_search = exports.equal_range = exports.upper_bound = exports.lower_bound = void 0;
var Pair_1 = require("../utility/Pair");
var global_1 = require("../iterator/global");
var comparators_1 = require("../functional/comparators");
/* =========================================================
    BINARY SEARCH
========================================================= */
/**
 * Get iterator to lower bound.
 *
 * @param first Input iterator of the first position.
 * @param last Input iterator of the last position.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element equal or after the val.
 */
function lower_bound(first, last, val, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var count = (0, global_1.distance)(first, last);
    while (count > 0) {
        var step = Math.floor(count / 2);
        var it = (0, global_1.advance)(first, step);
        if (comp(it.value, val)) {
            first = it.next();
            count -= step + 1;
        }
        else
            count = step;
    }
    return first;
}
exports.lower_bound = lower_bound;
/**
 * Get iterator to upper bound.
 *
 * @param first Input iterator of the first position.
 * @param last Input iterator of the last position.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element after the key.
 */
function upper_bound(first, last, val, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var count = (0, global_1.distance)(first, last);
    while (count > 0) {
        var step = Math.floor(count / 2);
        var it = (0, global_1.advance)(first, step);
        if (!comp(val, it.value)) {
            first = it.next();
            count -= step + 1;
        }
        else
            count = step;
    }
    return first;
}
exports.upper_bound = upper_bound;
/**
 * Get range of equal elements.
 *
 * @param first Input iterator of the first position.
 * @param last Input iterator of the last position.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Pair of {@link lower_bound} and {@link upper_bound}.
 */
function equal_range(first, last, val, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    first = lower_bound(first, last, val, comp);
    var second = upper_bound(first, last, val, comp);
    return new Pair_1.Pair(first, second);
}
exports.equal_range = equal_range;
/**
 * Test whether a value exists in sorted range.
 *
 * @param first Input iterator of the first position.
 * @param last Input iterator of the last position.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the value exists or not.
 */
function binary_search(first, last, val, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    first = lower_bound(first, last, val, comp);
    return !first.equals(last) && !comp(val, first.value);
}
exports.binary_search = binary_search;
//# sourceMappingURL=binary_search.js.map