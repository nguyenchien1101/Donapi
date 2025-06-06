"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueMapTree = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var MapTree_1 = require("./MapTree");
var UniqueMapTree = /** @class */ (function (_super) {
    __extends(UniqueMapTree, _super);
    /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
    function UniqueMapTree(source, comp) {
        return _super.call(this, source, comp, function (x, y) { return comp(x.first, y.first); }) || this;
    }
    /* ---------------------------------------------------------
        FINDERS
    --------------------------------------------------------- */
    UniqueMapTree.prototype.nearest_by_key = function (key) {
        // NEED NOT TO ITERATE
        if (this.root_ === null)
            return null;
        //----
        // ITERATE
        //----
        var ret = this.root_;
        while (true) {
            // UNTIL MEET THE MATCHED VALUE OR FINAL BRANCH
            var it = ret.value;
            var my_node = null;
            // COMPARE
            if (this.key_comp()(key, it.first))
                my_node = ret.left;
            else if (this.key_comp()(it.first, key))
                my_node = ret.right;
            else
                return ret; // MATCHED VALUE
            // FINAL BRANCH? OR KEEP GOING
            if (my_node === null)
                break;
            else
                ret = my_node;
        }
        return ret; // DIFFERENT NODE
    };
    UniqueMapTree.prototype.upper_bound = function (key) {
        // FIND MATCHED NODE
        var node = this.nearest_by_key(key);
        if (node === null)
            return this.source().end();
        // MUST BE it.first > key
        var it = node.value;
        if (this.key_comp()(key, it.first))
            return it;
        else
            return it.next();
    };
    return UniqueMapTree;
}(MapTree_1.MapTree));
exports.UniqueMapTree = UniqueMapTree;
//# sourceMappingURL=UniqueMapTree.js.map