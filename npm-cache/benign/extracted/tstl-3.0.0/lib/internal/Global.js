"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._Get_root = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var node_1 = require("../utility/node");
/**
 * @internal
 */
function _Get_root() {
    if (__s_pRoot === null) {
        __s_pRoot = ((0, node_1.is_node)() ? global : self);
        if (__s_pRoot.__s_iUID === undefined)
            __s_pRoot.__s_iUID = 0;
    }
    return __s_pRoot;
}
exports._Get_root = _Get_root;
/**
 * @internal
 */
var __s_pRoot = null;
//# sourceMappingURL=Global.js.map