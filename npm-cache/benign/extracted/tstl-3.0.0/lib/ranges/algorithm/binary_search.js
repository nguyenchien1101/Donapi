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
exports.binary_search = exports.equal_range = exports.upper_bound = exports.lower_bound = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
var base = __importStar(require("../../algorithm/binary_search"));
var factory_1 = require("../../iterator/factory");
var comparators_1 = require("../../functional/comparators");
/* =========================================================
    BINARY SEARCH
========================================================= */
/**
 * Get iterator to lower bound.
 *
 * @param range An iterable ranged container.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element equal or after the val.
 */
function lower_bound(range, val, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.lower_bound((0, factory_1.begin)(range), (0, factory_1.end)(range), val, comp);
}
exports.lower_bound = lower_bound;
/**
 * Get iterator to upper bound.
 *
 * @param range An iterable ranged container.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element after the key.
 */
function upper_bound(range, val, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.upper_bound((0, factory_1.begin)(range), (0, factory_1.end)(range), val, comp);
}
exports.upper_bound = upper_bound;
/**
 * Get range of equal elements.
 *
 * @param range An iterable ranged container.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Pair of {@link lower_bound} and {@link upper_bound}.
 */
function equal_range(range, val, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.equal_range((0, factory_1.begin)(range), (0, factory_1.end)(range), val, comp);
}
exports.equal_range = equal_range;
/**
 * Test whether a value exists in sorted range.
 *
 * @param range An iterable ranged container.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the value exists or not.
 */
function binary_search(range, val, comp) {
    if (comp === void 0) { comp = comparators_1.less; }
    return base.binary_search((0, factory_1.begin)(range), (0, factory_1.end)(range), val, comp);
}
exports.binary_search = binary_search;
//# sourceMappingURL=binary_search.js.map