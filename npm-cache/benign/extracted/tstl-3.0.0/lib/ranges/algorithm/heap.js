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
exports.sort_heap = exports.is_heap_until = exports.is_heap = exports.pop_heap = exports.push_heap = exports.make_heap = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
var base = __importStar(require("../../algorithm/heap"));
var factory_1 = require("../../iterator/factory");
var comparators_1 = require("../../functional/comparators");
/* ---------------------------------------------------------
    PUSH & POP
--------------------------------------------------------- */
/**
 * Make a heap.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function make_heap(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.make_heap((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.make_heap = make_heap;
/**
 * Push an element into heap.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function push_heap(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.push_heap((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.push_heap = push_heap;
/**
 * Pop an element from heap.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function pop_heap(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.pop_heap((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.pop_heap = pop_heap;
/* ---------------------------------------------------------
    SORT
--------------------------------------------------------- */
/**
 * Test whether a range is heap.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the range is heap.
 */
function is_heap(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.is_heap((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.is_heap = is_heap;
/**
 * Find the first element not in heap order.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element not in heap order.
 */
function is_heap_until(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.is_heap_until((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.is_heap_until = is_heap_until;
/**
 * Sort elements of a heap.
 *
 * @param range An iterable ranged container.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 */
function sort_heap(range, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.sort_heap((0, factory_1.begin)(range), (0, factory_1.end)(range), comp);
}
exports.sort_heap = sort_heap;
//# sourceMappingURL=heap.js.map