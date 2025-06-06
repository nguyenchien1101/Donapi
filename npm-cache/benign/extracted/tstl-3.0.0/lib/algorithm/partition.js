"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partition_copy = exports.stable_partition = exports.partition = exports.partition_point = exports.is_partitioned = void 0;
var Pair_1 = require("../utility/Pair");
var modifiers_1 = require("./modifiers");
var global_1 = require("../iterator/global");
/* =========================================================
    PARTITION
========================================================= */
/**
 * Test whether a range is partitioned.
 *
 * @param first Forward iterator of the first position.
 * @param last Forward iterator of the last position.
 * @param pred An unary function predicates partition. Returns `true`, if an element belongs to the first section, otherwise `false` which means the element belongs to the second section.
 *
 * @return Whether the range is partition or not.
 */
function is_partitioned(first, last, pred) {
    while (!first.equals(last) && pred(first.value))
        first = first.next();
    for (; !first.equals(last); first = first.next())
        if (pred(first.value))
            return false;
    return true;
}
exports.is_partitioned = is_partitioned;
/**
 * Get partition point.
 *
 * @param first Forward iterator of the first position.
 * @param last Forward iterator of the last position.
 * @param pred An unary function predicates partition. Returns `true`, if an element belongs to the first section, otherwise `false` which means the element belongs to the second section.
 *
 * @return Iterator to the first element of the second section.
 */
function partition_point(first, last, pred) {
    var n = (0, global_1.distance)(first, last);
    while (n > 0) {
        var step = Math.floor(n / 2);
        var it = (0, global_1.advance)(first, step);
        if (pred(it.value)) {
            first = it.next();
            n -= step + 1;
        }
        else
            n = step;
    }
    return first;
}
exports.partition_point = partition_point;
/**
 * Partition a range into two sections.
 *
 * @param first Bidirectional iterator of the first position.
 * @param last Bidirectional iterator of the last position.
 * @param pred An unary function predicates partition. Returns `true`, if an element belongs to the first section, otherwise `false` which means the element belongs to the second section.
 *
 * @return Iterator to the first element of the second section.
 */
function partition(first, last, pred) {
    return stable_partition(first, last, pred);
}
exports.partition = partition;
/**
 * Partition a range into two sections with stable ordering.
 *
 * @param first Bidirectional iterator of the first position.
 * @param last Bidirectional iterator of the last position.
 * @param pred An unary function predicates partition. Returns `true`, if an element belongs to the first section, otherwise `false` which means the element belongs to the second section.
 *
 * @return Iterator to the first element of the second section.
 */
function stable_partition(first, last, pred) {
    while (!first.equals(last) && pred(first.value)) {
        while (pred(first.value)) {
            first = first.next();
            if (first.equals(last))
                return first;
        }
        do {
            last = last.prev();
            if (first.equals(last))
                return first;
        } while (!pred(last.value));
        (0, modifiers_1.iter_swap)(first, last);
        first = first.next();
    }
    return last;
}
exports.stable_partition = stable_partition;
/**
 * Partition a range into two outputs.
 *
 * @param first Bidirectional iterator of the first position.
 * @param last Bidirectional iterator of the last position.
 * @param output_true Output iterator to the first position for the first section.
 * @param output_false Output iterator to the first position for the second section.
 * @param pred An unary function predicates partition. Returns `true`, if an element belongs to the first section, otherwise `false` which means the element belongs to the second section.
 *
 * @return Iterator to the first element of the second section.
 */
function partition_copy(first, last, output_true, output_false, pred) {
    for (; !first.equals(last); first = first.next())
        if (pred(first.value)) {
            output_true.value = first.value;
            output_true = output_true.next();
        }
        else {
            output_false.value = first.value;
            output_false = output_false.next();
        }
    return new Pair_1.Pair(output_true, output_false);
}
exports.partition_copy = partition_copy;
//# sourceMappingURL=partition.js.map