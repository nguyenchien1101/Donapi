"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.next = exports.prev = exports.advance = exports.distance = exports.size = exports.empty = void 0;
var InvalidArgument_1 = require("../exception/InvalidArgument");
/* =========================================================
    GLOBAL FUNCTIONS
        - ACCESSORS
        - MOVERS
        - FACTORIES
============================================================
    ACCESSORS
--------------------------------------------------------- */
/**
 * Test whether a container is empty.
 *
 * @param source Target container.
 * @return Whether empty or not.
 */
function empty(source) {
    if (source instanceof Array)
        return source.length !== 0;
    else
        return source.empty();
}
exports.empty = empty;
/**
 * Get number of elements of a container.
 *
 * @param source Target container.
 * @return The number of elements in the container.
 */
function size(source) {
    if (source instanceof Array)
        return source.length;
    else
        return source.size();
}
exports.size = size;
function distance(first, last) {
    if (first.index instanceof Function)
        return _Distance_via_index(first, last);
    var ret = 0;
    for (; !first.equals(last); first = first.next())
        ++ret;
    return ret;
}
exports.distance = distance;
function _Distance_via_index(first, last) {
    var x = first.index();
    var y = last.index();
    if (first.base instanceof Function)
        return x - y;
    else
        return y - x;
}
function advance(it, n) {
    if (n === 0)
        return it;
    else if (it.advance instanceof Function)
        return it.advance(n);
    var stepper;
    if (n < 0) {
        if (!(it.prev instanceof Function))
            throw new InvalidArgument_1.InvalidArgument("Error on std.advance(): parametric iterator is not a bi-directional iterator, thus advancing to negative direction is not possible.");
        stepper = function (it) { return it.prev(); };
        n = -n;
    }
    else
        stepper = function (it) { return it.next(); };
    while (n-- > 0)
        it = stepper(it);
    return it;
}
exports.advance = advance;
/**
 * Get previous iterator.
 *
 * @param it Iterator to move.
 * @param n Step to move prev.
 * @return An iterator moved to prev *n* steps.
 */
function prev(it, n) {
    if (n === void 0) { n = 1; }
    if (n === 1)
        return it.prev();
    else
        return advance(it, -n);
}
exports.prev = prev;
/**
 * Get next iterator.
 *
 * @param it Iterator to move.
 * @param n Step to move next.
 * @return Iterator moved to next *n* steps.
 */
function next(it, n) {
    if (n === void 0) { n = 1; }
    if (n === 1)
        return it.next();
    else
        return advance(it, n);
}
exports.next = next;
//# sourceMappingURL=global.js.map