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
exports.UniqueSetTree = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var SetTree_1 = require("./SetTree");
var UniqueSetTree = /** @class */ (function (_super) {
    __extends(UniqueSetTree, _super);
    /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
    function UniqueSetTree(source, comp) {
        return _super.call(this, source, comp, function (x, y) { return comp(x.value, y.value); }) || this;
    }
    /* ---------------------------------------------------------
        FINDERS
    --------------------------------------------------------- */
    UniqueSetTree.prototype.nearest_by_key = function (val) {
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
            if (this.key_comp()(val, it.value))
                my_node = ret.left;
            else if (this.key_comp()(it.value, val))
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
    UniqueSetTree.prototype.upper_bound = function (val) {
        //--------
        // FIND MATCHED NODE
        //--------
        var node = this.nearest_by_key(val);
        if (node === null)
            return this.source().end();
        //--------
        // RETURN BRANCH
        //--------
        var it = node.value;
        // MUST BE it.value > key
        if (this.key_comp()(val, it.value))
            return it;
        else
            return it.next();
    };
    return UniqueSetTree;
}(SetTree_1.SetTree));
exports.UniqueSetTree = UniqueSetTree;
//# sourceMappingURL=UniqueSetTree.js.map