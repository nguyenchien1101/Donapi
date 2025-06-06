"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.rotate_copy = exports.rotate = exports.shift_right = exports.shift_left = exports.reverse_copy = exports.reverse = exports.swap_ranges = exports.iter_swap = exports.replace_copy_if = exports.replace_copy = exports.replace_if = exports.replace = exports.remove_copy_if = exports.remove_copy = exports.remove_if = exports.remove = exports.unique_copy = exports.unique = exports.is_unique = exports.generate_n = exports.generate = exports.transform = exports.fill_n = exports.fill = exports.copy_backward = exports.copy_if = exports.copy_n = exports.copy = void 0;
var comparators_1 = require("../functional/comparators");
var random_1 = require("./random");
var global_1 = require("../iterator/global");
/* =========================================================
    MODIFIERS (MODIFYING SEQUENCE)
        - FILL
        - REMOVE
        - REPLACE & SWAP
        - RE-ARRANGEMENT
============================================================
    FILL
--------------------------------------------------------- */
/**
 * Copy elements in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
function copy(first, last, output) {
    for (; !first.equals(last); first = first.next()) {
        output.value = first.value;
        output = output.next();
    }
    return output;
}
exports.copy = copy;
/**
 * Copy *n* elements.
 *
 * @param first Input iteartor of the first position.
 * @param n Number of elements to copy.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
function copy_n(first, n, output) {
    for (var i = 0; i < n; ++i) {
        output.value = first.value;
        first = first.next();
        output = output.next();
    }
    return output;
}
exports.copy_n = copy_n;
/**
 * Copy specific elements by a condition.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 * @param pred A function predicates the specific condition.
 *
 * @return Output Iterator of the last position by advancing.
 */
function copy_if(first, last, output, pred) {
    for (; !first.equals(last); first = first.next()) {
        if (!pred(first.value))
            continue;
        output.value = first.value;
        output = output.next();
    }
    return output;
}
exports.copy_if = copy_if;
/**
 * Copy elements reversely.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
function copy_backward(first, last, output) {
    last = last.prev();
    while (!last.equals(first)) {
        last = last.prev();
        output = output.prev();
        output.value = last.value;
    }
    return output;
}
exports.copy_backward = copy_backward;
/**
 * Fill range elements
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param val The value to fill.
 *
 * @return Output Iterator of the last position by advancing.
 */
function fill(first, last, val) {
    for (; !first.equals(last); first = first.next())
        first.value = val;
}
exports.fill = fill;
/**
 * Fill *n* elements.
 *
 * @param first Input iteartor of the first position.
 * @param n Number of elements to fill.
 * @param val The value to fill.
 *
 * @return Output Iterator of the last position by advancing.
 */
function fill_n(first, n, val) {
    for (var i = 0; i < n; ++i) {
        first.value = val;
        first = first.next();
    }
    return first;
}
exports.fill_n = fill_n;
function transform() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 4)
        return _Unary_transform.apply(void 0, __spreadArray([], __read(args), false));
    // args: #5
    else
        return _Binary_transform.apply(void 0, __spreadArray([], __read(args), false));
}
exports.transform = transform;
function _Unary_transform(first, last, result, op) {
    for (; !first.equals(last); first = first.next()) {
        result.value = op(first.value);
        result = result.next();
    }
    return result;
}
function _Binary_transform(first1, last1, first2, result, binary_op) {
    while (!first1.equals(last1)) {
        result.value = binary_op(first1.value, first2.value);
        first1 = first1.next();
        first2 = first2.next();
        result = result.next();
    }
    return result;
}
/**
 * Generate range elements.
 *
 * @param first Forward iteartor of the first position.
 * @param last Forward iterator of the last position.
 * @param gen The generator function.
 */
function generate(first, last, gen) {
    for (; !first.equals(last); first = first.next())
        first.value = gen();
}
exports.generate = generate;
/**
 * Generate *n* elements.
 *
 * @param first Forward iteartor of the first position.
 * @param n Number of elements to generate.
 * @param gen The generator function.
 *
 * @return Forward Iterator to the last position by advancing.
 */
function generate_n(first, n, gen) {
    while (n-- > 0) {
        first.value = gen();
        first = first.next();
    }
    return first;
}
exports.generate_n = generate_n;
/* ---------------------------------------------------------
    REMOVE
--------------------------------------------------------- */
/**
 * Test whether elements are unique in sorted range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @returns Whether unique or not.
 */
function is_unique(first, last, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    if (first.equals(last))
        return true;
    var next = first.next();
    for (; !next.equals(last); next = next.next()) {
        if (pred(first.value, next.value) === true)
            return false;
        first = first.next();
    }
    return true;
}
exports.is_unique = is_unique;
/**
 * Remove duplicated elements in sorted range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Input iterator to the last element not removed.
 */
function unique(first, last, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    if (first.equals(last))
        return last;
    var ret = first;
    for (first = first.next(); !first.equals(last); first = first.next())
        if (!pred(ret.value, first.value)) {
            ret = ret.next();
            ret.value = first.value;
        }
    return ret.next();
}
exports.unique = unique;
/**
 * Copy elements in range without duplicates.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the last position.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function unique_copy(first, last, output, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    if (first.equals(last))
        return output;
    output.value = first.value;
    first = first.next();
    for (; !first.equals(last); first = first.next())
        if (!pred(first.value, output.value)) {
            output = output.next();
            output.value = first.value;
        }
    return output.next();
}
exports.unique_copy = unique_copy;
/**
 * Remove specific value in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param val The specific value to remove.
 *
 * @return Iterator tho the last element not removed.
 */
function remove(first, last, val) {
    return remove_if(first, last, function (elem) { return (0, comparators_1.equal_to)(elem, val); });
}
exports.remove = remove;
/**
 * Remove elements in range by a condition.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred An unary function predicates remove.
 *
 * @return Iterator tho the last element not removed.
 */
function remove_if(first, last, pred) {
    var ret = first;
    while (!first.equals(last)) {
        if (!pred(first.value)) {
            ret.value = first.value;
            ret = ret.next();
        }
        first = first.next();
    }
    return ret;
}
exports.remove_if = remove_if;
/**
 * Copy range removing specific value.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the last position.
 * @param val The condition predicates remove.
 *
 * @return Output Iterator of the last position by advancing.
 */
function remove_copy(first, last, output, val) {
    return remove_copy_if(first, last, output, function (elem) { return (0, comparators_1.equal_to)(elem, val); });
}
exports.remove_copy = remove_copy;
/**
 * Copy range removing elements by a condition.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the last position.
 * @param pred An unary function predicates remove.
 *
 * @return Output Iterator of the last position by advancing.
 */
function remove_copy_if(first, last, output, pred) {
    for (; !first.equals(last); first = first.next()) {
        if (pred(first.value))
            continue;
        output.value = first.value;
        output = output.next();
    }
    return output;
}
exports.remove_copy_if = remove_copy_if;
/* ---------------------------------------------------------
    REPLACE & SWAP
--------------------------------------------------------- */
/**
 * Replace specific value in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param old_val Specific value to change
 * @param new_val Specific value to be changed.
 */
function replace(first, last, old_val, new_val) {
    return replace_if(first, last, function (elem) { return (0, comparators_1.equal_to)(elem, old_val); }, new_val);
}
exports.replace = replace;
/**
 * Replace specific condition in range.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param pred An unary function predicates the change.
 * @param new_val Specific value to be changed.
 */
function replace_if(first, last, pred, new_val) {
    for (var it = first; !it.equals(last); it = it.next())
        if (pred(it.value) === true)
            it.value = new_val;
}
exports.replace_if = replace_if;
/**
 * Copy range replacing specific value.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 * @param old_val Specific value to change
 * @param new_val Specific value to be changed.
 *
 * @return Output Iterator of the last position by advancing.
 */
function replace_copy(first, last, output, old_val, new_val) {
    return replace_copy_if(first, last, output, function (elem) { return (0, comparators_1.equal_to)(elem, old_val); }, new_val);
}
exports.replace_copy = replace_copy;
/**
 * Copy range replacing specfic condition.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 * @param pred An unary function predicates the change.
 * @param new_val Specific value to be changed.
 *
 * @return Output Iterator of the last position by advancing.
 */
function replace_copy_if(first, last, result, pred, new_val) {
    for (; !first.equals(last); first = first.next()) {
        if (pred(first.value))
            result.value = new_val;
        else
            result.value = first.value;
        result = result.next();
    }
    return result;
}
exports.replace_copy_if = replace_copy_if;
/**
 * Swap values of two iterators.
 *
 * @param x Forward iterator to swap its value.
 * @param y Forward iterator to swap its value.
 */
function iter_swap(x, y) {
    var _a;
    _a = __read([y.value, x.value], 2), x.value = _a[0], y.value = _a[1];
}
exports.iter_swap = iter_swap;
/**
 * Swap values of two ranges.
 *
 * @param first1 Forward iteartor of the first position of the 1st range.
 * @param last1 Forward iterator of the last position of the 1st range.
 * @param first2 Forward iterator of the first position of the 2nd range.
 *
 * @return Forward Iterator of the last position of the 2nd range by advancing.
 */
function swap_ranges(first1, last1, first2) {
    for (; !first1.equals(last1); first1 = first1.next()) {
        iter_swap(first1, first2);
        first2 = first2.next();
    }
    return first2;
}
exports.swap_ranges = swap_ranges;
/* ---------------------------------------------------------
    RE-ARRANGEMENT
--------------------------------------------------------- */
/**
 * Reverse elements in range.
 *
 * @param first Bidirectional iterator of the first position.
 * @param last Bidirectional iterator of the last position.
 */
function reverse(first, last) {
    // first !== last && first !== --last
    while (first.equals(last) === false &&
        first.equals((last = last.prev())) === false) {
        iter_swap(first, last);
        first = first.next();
    }
}
exports.reverse = reverse;
/**
 * Copy reversed elements in range.
 *
 * @param first Bidirectional iterator of the first position.
 * @param last Bidirectional iterator of the last position.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
function reverse_copy(first, last, output) {
    while (!last.equals(first)) {
        last = last.prev();
        output.value = last.value;
        output = output.next();
    }
    return output;
}
exports.reverse_copy = reverse_copy;
function shift_left(first, last, n) {
    var mid = (0, global_1.advance)(first, n);
    return copy(mid, last, first);
}
exports.shift_left = shift_left;
function shift_right(first, last, n) {
    var mid = (0, global_1.advance)(last, -n);
    return copy_backward(first, mid, last);
}
exports.shift_right = shift_right;
/**
 * Rotate elements in range.
 *
 * @param first Input iteartor of the first position.
 * @param middle Input iteartor of the initial position of the right side.
 * @param last Input iteartor of the last position.
 *
 * @return Input iterator of the final position in the left side; *middle*.
 */
function rotate(first, middle, last) {
    while (!first.equals(middle) && !middle.equals(last)) {
        iter_swap(first, middle);
        first = first.next();
        middle = middle.next();
    }
    return first;
}
exports.rotate = rotate;
/**
 * Copy rotated elements in range.
 *
 * @param first Input iteartor of the first position.
 * @param middle Input iteartor of the initial position of the right side.
 * @param last Input iteartor of the last position.
 * @param output Output iterator of the last position.
 *
 * @return Output Iterator of the last position by advancing.
 */
function rotate_copy(first, middle, last, output) {
    output = copy(middle, last, output);
    return copy(first, middle, output);
}
exports.rotate_copy = rotate_copy;
/**
 * Shuffle elements in range.
 *
 * @param first Random access iteartor of the first position.
 * @param last Random access iteartor of the last position.
 */
function shuffle(first, last) {
    for (var it = first; !it.equals(last); it = it.next()) {
        var rand_index = (0, random_1.randint)(first.index(), last.index() - 1);
        if (it.index() !== rand_index)
            iter_swap(it, first.advance(rand_index));
    }
}
exports.shuffle = shuffle;
//# sourceMappingURL=modifiers.js.map