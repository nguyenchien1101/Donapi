"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_node = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
/**
 * Test whether the code is running on NodeJS.
 *
 * @return Whether NodeJS or not.
 */
function is_node() {
    if (is_node_ === null)
        is_node_ = typeof global === "object" && is_node_process(global);
    return is_node_;
}
exports.is_node = is_node;
/**
 * @internal
 */
function is_node_process(m) {
    return m !== null &&
        typeof m.process === "object" &&
        m.process !== null &&
        typeof m.process.versions === "object" &&
        m.process.versions !== null &&
        typeof m.process.versions.node !== "undefined";
}
/**
 * @internal
 */
var is_node_ = null;
//# sourceMappingURL=node.js.map