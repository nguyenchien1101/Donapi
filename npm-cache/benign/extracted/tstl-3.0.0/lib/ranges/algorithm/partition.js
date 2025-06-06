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
exports.partition_copy = exports.stable_partition = exports.partition = exports.partition_point = exports.is_partitioned = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
var base = __importStar(require("../../algorithm/partition"));
var factory_1 = require("../../iterator/factory");
/**
 * Test whether a range is partitioned.
 *
 * @param range An iterable ranged container.
 * @param pred An unary function predicates partition. Returns `true`, if an element belongs to the first section, otherwise `false` which means the element belongs to the second section.
 *
 * @return Whether the range is partition or not.
 */
function is_partitioned(range, pred) {
    return base.is_partitioned((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.is_partitioned = is_partitioned;
/**
 * Get partition point.
 *
 * @param range An iterable ranged container.
 * @param pred An unary function predicates partition. Returns `true`, if an element belongs to the first section, otherwise `false` which means the element belongs to the second section.
 *
 * @return Iterator to the first element of the second section.
 */
function partition_point(range, pred) {
    return base.partition_point((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.partition_point = partition_point;
/**
 * Partition a range into two sections.
 *
 * @param range An iterable ranged container.
 * @param pred An unary function predicates partition. Returns `true`, if an element belongs to the first section, otherwise `false` which means the element belongs to the second section.
 *
 * @return Iterator to the first element of the second section.
 */
function partition(range, pred) {
    return base.partition((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.partition = partition;
/**
 * Partition a range into two sections with stable ordering.
 *
 * @param range An iterable ranged container.
 * @param pred An unary function predicates partition. Returns `true`, if an element belongs to the first section, otherwise `false` which means the element belongs to the second section.
 *
 * @return Iterator to the first element of the second section.
 */
function stable_partition(range, pred) {
    return base.stable_partition((0, factory_1.begin)(range), (0, factory_1.end)(range), pred);
}
exports.stable_partition = stable_partition;
/**
 * Partition a range into two outputs.
 *
 * @param range An iterable ranged container.
 * @param output_true Output iterator to the first position for the first section.
 * @param output_false Output iterator to the first position for the second section.
 * @param pred An unary function predicates partition. Returns `true`, if an element belongs to the first section, otherwise `false` which means the element belongs to the second section.
 *
 * @return Iterator to the first element of the second section.
 */
function partition_copy(range, output_true, output_false, pred) {
    return base.partition_copy((0, factory_1.begin)(range), (0, factory_1.end)(range), output_true, output_false, pred);
}
exports.partition_copy = partition_copy;
//# sourceMappingURL=partition.js.map