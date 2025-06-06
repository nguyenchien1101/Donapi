"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort_heap = exports.is_heap_until = exports.is_heap = exports.pop_heap = exports.push_heap = exports.make_heap = void 0;
var comparators_1 = require("../functional/comparators");
var global_1 = require("../iterator/global");
/* =========================================================
    EA-STL (https://github.com/electronicarts/EASTL/blob/master/include/EASTL/heap.h)
        - PUSH & POP
        - SORT
        - INTERNAL
============================================================
    PUSH & POP
--------------------------------------------------------- */
/**
 * Make a heap.
 *
 * @param first Random access iteartor of the first position.
 * @param last Random access iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function make_heap(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var heapSize = (0, global_1.distance)(first, last);
    if (heapSize < 2)
        return;
    var parentPosition = ((heapSize - 2) >> 1) + 1;
    do {
        var temp = first.advance(--parentPosition).value;
        _Adjust_heap(first, parentPosition, heapSize, parentPosition, temp, comp);
    } while (parentPosition !== 0);
}
exports.make_heap = make_heap;
/**
 * Push an element into heap.
 *
 * @param first Random access iteartor of the first position.
 * @param last Random access iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function push_heap(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var temp = last.prev().value;
    _Promote_heap(first, 0, (0, global_1.distance)(first, last) - 1, temp, comp);
}
exports.push_heap = push_heap;
/**
 * Pop an element from heap.
 *
 * @param first Random access iteartor of the first position.
 * @param last Random access iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function pop_heap(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var bottom = last.prev();
    var temp = bottom.value;
    bottom.value = first.value;
    _Adjust_heap(first, 0, (0, global_1.distance)(first, last) - 1, 0, temp, comp);
}
exports.pop_heap = pop_heap;
/* ---------------------------------------------------------
    SORT
--------------------------------------------------------- */
/**
 * Test whether a range is heap.
 *
 * @param first Bi-directional iteartor of the first position.
 * @param last Bi-directional iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the range is heap.
 */
function is_heap(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var it = is_heap_until(first, last, comp);
    return it.equals(last);
}
exports.is_heap = is_heap;
/**
 * Find the first element not in heap order.
 *
 * @param first Bi-directional iteartor of the first position.
 * @param last Bi-directional iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element not in heap order.
 */
function is_heap_until(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    var counter = 0;
    for (var child = first.next(); _Comp_it(child, last.index()); child = child.next(), counter ^= 1) {
        if (comp(first.value, child.value))
            return child;
        first = (0, global_1.advance)(first, counter);
    }
    return last;
}
exports.is_heap_until = is_heap_until;
/**
 * Sort elements of a heap.
 *
 * @param first Random access iteartor of the first position.
 * @param last Random access iterator of the last position.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function sort_heap(first, last, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    for (; (0, global_1.distance)(first, last) > 1; last = last.prev())
        pop_heap(first, last, comp);
}
exports.sort_heap = sort_heap;
/* ---------------------------------------------------------
    INTERNAL
--------------------------------------------------------- */
function _Promote_heap(first, topPosition, position, value, comp) {
    for (var parentPosition = (position - 1) >> 1; position > topPosition &&
        comp(first.advance(parentPosition).value, value); parentPosition = (position - 1) >> 1) {
        first.advance(position).value = first.advance(parentPosition).value;
        position = parentPosition;
    }
    first.advance(position).value = value;
}
function _Adjust_heap(first, topPosition, heapSize, position, value, comp) {
    var childPosition = 2 * position + 2;
    for (; childPosition < heapSize; childPosition = 2 * childPosition + 2) {
        if (comp(first.advance(childPosition).value, first.advance(childPosition - 1).value))
            --childPosition;
        first.advance(position).value = first.advance(childPosition).value;
        position = childPosition;
    }
    if (childPosition === heapSize) {
        first.advance(position).value = first.advance(childPosition - 1).value;
        position = childPosition - 1;
    }
    _Promote_heap(first, topPosition, position, value, comp);
}
function _Comp_it(x, y) {
    if (x.base instanceof Function)
        return y < x;
    else
        return x < y;
}
//# sourceMappingURL=heap.js.map