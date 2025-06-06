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
exports.shuffle = exports.rotate_copy = exports.rotate = exports.shift_right = exports.shift_left = exports.reverse_copy = exports.reverse = exports.swap_ranges = exports.replace_copy_if = exports.replace_copy = exports.replace_if = exports.replace = exports.remove_copy_if = exports.remove_copy = exports.remove_if = exports.remove = exports.unique_copy = exports.unique = exports.is_unique = exports.generate_n = exports.generate = exports.transform = exports.fill_n = exports.fill = exports.copy_backward = exports.copy_if = exports.copy_n = exports.copy = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
var base = __importStar(require("../../algorithm/modifiers"));
var factory_1 = require("../../iterator/factory");
var comparators_1 = require("../../functional/comparators");
/* ---------------------------------------------------------
    FILL
--------------------------------------------------------- */
/**
 * Copy elements in range.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
function copy(range, output) {
    return base.copy((0, factory_1.begin)(range), (0, factory_1.end)(range), output);
}
exports.copy = copy;
/**
 * Copy *n* elements.
 *
 * @param range An iterable ranged container.
 * @param n Number of elements to copy.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
function copy_n(range, n, output) {
    return base.copy_n((0, factory_1.begin)(range), n, output);
}
exports.copy_n = copy_n;
/**
 * Copy specific elements by a condition.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 * @param pred A function predicates the specific condition.
 *
 * @return Output Iterator of the last position by advancing.
 */
function copy_if(range, output, pred) {
    return base.copy_if((0, factory_1.begin)(range), (0, factory_1.end)(range), output, pred);
}
exports.copy_if = copy_if;
/**
 * Copy elements reversely.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
function copy_backward(range, output) {
    return base.copy_backward((0, factory_1.begin)(range), (0, factory_1.end)(range), output);
}
exports.copy_backward = copy_backward;
/**
 * Fill range elements
 *
 * @param range An iterable ranged container.
 * @param val The value to fill.
 *
 * @return Output Iterator of the last position by advancing.
 */
function fill(range, value) {
    return base.fill((0, factory_1.begin)(range), (0, factory_1.end)(range), value);
}
exports.fill = fill;
/**
 * Fill *n* elements.
 *
 * @param range An iterable ranged container.
 * @param n Number of elements to fill.
 * @param val The value to fill.
 *
 * @return Output Iterator of the last position by advancing.
 */
function fill_n(range, n, value) {
    return base.fill_n((0, factory_1.begin)(range), n, value);
}
exports.fill_n = fill_n;
function transform(range1) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var fn = base.transform.bind(undefined, (0, factory_1.begin)(range1), (0, factory_1.end)(range1));
    if (args.length === 3)
        return fn.apply(void 0, __spreadArray([], __read(args), false));
    // args: #4
    else
        return fn((0, factory_1.end)(args[1]), args[2], args[3]);
}
exports.transform = transform;
/**
 * Generate range elements.
 *
 * @param range An iterable ranged container.
 * @param gen The generator function.
 */
function generate(range, gen) {
    return base.generate((0, factory_1.begin)(range), (0, factory_1.end)(range), gen);
}
exports.generate = generate;
/**
 * Generate *n* elements.
 *
 * @param range An iterable ranged container.
 * @param n Number of elements to generate.
 * @param gen The generator function.
 *
 * @return Forward Iterator to the last position by advancing.
 */
function generate_n(range, n, gen) {
    return base.generate_n((0, factory_1.begin)(range), n, gen);
}
exports.generate_n = generate_n;
/* ---------------------------------------------------------
    REMOVE
--------------------------------------------------------- */
/**
 * Test whether elements are unique in sorted range.
 *
 * @param range An iterable ranged container.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @returns Whether unique or not.
 */
function is_unique(range, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    return base.is_unique((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.is_unique = is_unique;
/**
 * Remove duplicated elements in sorted range.
 *
 * @param range An iterable ranged container.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Input iterator to the last element not removed.
 */
function unique(range, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    return base.unique((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.unique = unique;
/**
 * Copy elements in range without duplicates.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the last position.
 * @param pred A binary function predicates two arguments are equal. Default is {@link equal_to}.
 *
 * @return Output Iterator of the last position by advancing.
 */
function unique_copy(range, output, pred) {
    if (pred === void 0) { pred = comparators_1.equal_to; }
    return base.unique_copy((0, factory_1.begin)(range), (0, factory_1.end)(range), output, pred);
}
exports.unique_copy = unique_copy;
/**
 * Remove specific value in range.
 *
 * @param range An iterable ranged container.
 * @param val The specific value to remove.
 *
 * @return Iterator tho the last element not removed.
 */
function remove(range, val) {
    return base.remove((0, factory_1.begin)(range), (0, factory_1.end)(range), val);
}
exports.remove = remove;
/**
 * Remove elements in range by a condition.
 *
 * @param range An iterable ranged container.
 * @param pred An unary function predicates remove.
 *
 * @return Iterator tho the last element not removed.
 */
function remove_if(range, pred) {
    return base.remove_if((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.remove_if = remove_if;
/**
 * Copy range removing specific value.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the last position.
 * @param val The condition predicates remove.
 *
 * @return Output Iterator of the last position by advancing.
 */
function remove_copy(range, output, val) {
    return base.remove_copy((0, factory_1.begin)(range), (0, factory_1.end)(range), output, val);
}
exports.remove_copy = remove_copy;
/**
 * Copy range removing elements by a condition.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the last position.
 * @param pred An unary function predicates remove.
 *
 * @return Output Iterator of the last position by advancing.
 */
function remove_copy_if(range, output, pred) {
    return base.remove_copy_if((0, factory_1.begin)(range), (0, factory_1.end)(range), output, pred);
}
exports.remove_copy_if = remove_copy_if;
/* ---------------------------------------------------------
    REPLACE & SWAP
--------------------------------------------------------- */
/**
 * Replace specific value in range.
 *
 * @param range An iterable ranged container.
 * @param old_val Specific value to change
 * @param new_val Specific value to be changed.
 */
function replace(range, old_val, new_val) {
    return base.replace((0, factory_1.begin)(range), (0, factory_1.end)(range), old_val, new_val);
}
exports.replace = replace;
/**
 * Replace specific condition in range.
 *
 * @param range An iterable ranged container.
 * @param pred An unary function predicates the change.
 * @param new_val Specific value to be changed.
 */
function replace_if(range, pred, new_val) {
    return base.replace_if((0, factory_1.begin)(range), (0, factory_1.end)(range), pred, new_val);
}
exports.replace_if = replace_if;
/**
 * Copy range replacing specific value.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 * @param old_val Specific value to change
 * @param new_val Specific value to be changed.
 *
 * @return Output Iterator of the last position by advancing.
 */
function replace_copy(range, output, old_val, new_val) {
    return base.replace_copy((0, factory_1.begin)(range), (0, factory_1.end)(range), output, old_val, new_val);
}
exports.replace_copy = replace_copy;
/**
 * Copy range replacing specfic condition.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 * @param pred An unary function predicates the change.
 * @param new_val Specific value to be changed.
 *
 * @return Output Iterator of the last position by advancing.
 */
function replace_copy_if(range, output, pred, new_val) {
    return base.replace_copy_if((0, factory_1.begin)(range), (0, factory_1.end)(range), output, pred, new_val);
}
exports.replace_copy_if = replace_copy_if;
/**
 * Swap values of two ranges.
 *
 * @param range1 The 1st iterable ranged container.
 * @param range2 The 2nd iterable ranged container.
 *
 * @return Forward Iterator of the last position of the 2nd range by advancing.
 */
function swap_ranges(range1, range2) {
    return base.swap_ranges((0, factory_1.begin)(range1), (0, factory_1.end)(range1), (0, factory_1.begin)(range2));
}
exports.swap_ranges = swap_ranges;
/* ---------------------------------------------------------
    RE-ARRANGEMENT
--------------------------------------------------------- */
/**
 * Reverse elements in range.
 *
 * @param range An iterable ranged container.
 */
function reverse(range) {
    return base.reverse((0, factory_1.begin)(range), (0, factory_1.end)(range));
}
exports.reverse = reverse;
/**
 * Copy reversed elements in range.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 *
 * @return Output Iterator of the last position by advancing.
 */
function reverse_copy(range, output) {
    return base.reverse_copy((0, factory_1.begin)(range), (0, factory_1.end)(range), output);
}
exports.reverse_copy = reverse_copy;
function shift_left(range, n) {
    return base.shift_left((0, factory_1.begin)(range), (0, factory_1.end)(range), n);
}
exports.shift_left = shift_left;
function shift_right(range, n) {
    return base.shift_right((0, factory_1.begin)(range), (0, factory_1.end)(range), n);
}
exports.shift_right = shift_right;
/**
 * Rotate elements in range.
 *
 * @param range An iterable ranged container.
 * @param middle Input iteartor of the initial position of the right side.
 *
 * @return Input iterator of the final position in the left side; *middle*.
 */
function rotate(range, middle) {
    return base.rotate((0, factory_1.begin)(range), middle, (0, factory_1.end)(range));
}
exports.rotate = rotate;
/**
 * Copy rotated elements in range.
 *
 * @param range An iterable ranged container.
 * @param middle Input iteartor of the initial position of the right side.
 * @param output Output iterator of the last position.
 *
 * @return Output Iterator of the last position by advancing.
 */
function rotate_copy(range, middle, output) {
    return base.rotate_copy((0, factory_1.begin)(range), middle, (0, factory_1.end)(range), output);
}
exports.rotate_copy = rotate_copy;
/**
 * Shuffle elements in range.
 *
 * @param range An iterable ranged container.
 */
function shuffle(range) {
    return base.shuffle((0, factory_1.begin)(range), (0, factory_1.end)(range));
}
exports.shuffle = shuffle;
//# sourceMappingURL=modifiers.js.map