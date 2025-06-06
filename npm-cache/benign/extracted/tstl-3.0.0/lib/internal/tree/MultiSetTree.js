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
exports.MultiSetTree = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var SetTree_1 = require("./SetTree");
var uid_1 = require("../../functional/uid");
var MultiSetTree = /** @class */ (function (_super) {
    __extends(MultiSetTree, _super);
    /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
    function MultiSetTree(source, comp) {
        return _super.call(this, source, comp, function (x, y) {
            var ret = comp(x.value, y.value);
            if (!ret && !comp(y.value, x.value))
                return (0, uid_1.get_uid)(x) < (0, uid_1.get_uid)(y);
            else
                return ret;
        }) || this;
    }
    MultiSetTree.prototype.insert = function (val) {
        // ISSUE UID BEFORE INSERTION
        (0, uid_1.get_uid)(val);
        _super.prototype.insert.call(this, val);
    };
    /* ---------------------------------------------------------
        FINDERS
    --------------------------------------------------------- */
    MultiSetTree.prototype._Nearest_by_key = function (key, equal_mover) {
        // NEED NOT TO ITERATE
        if (this.root_ === null)
            return null;
        //----
        // ITERATE
        //----
        var ret = this.root_;
        var matched = null;
        while (true) {
            var candidate = ret.value;
            var node = null;
            // COMPARE
            if (this.key_comp()(key, candidate.value))
                node = ret.left;
            else if (this.key_comp()(candidate.value, key))
                node = ret.right;
            else {
                // EQUAL, RESERVE THAT POINT
                matched = ret;
                node = equal_mover(ret);
            }
            // ULTIL CHILD NODE EXISTS
            if (node === null)
                break;
            else
                ret = node;
        }
        // RETURNS -> MATCHED OR NOT
        return matched !== null ? matched : ret;
    };
    MultiSetTree.prototype.nearest_by_key = function (val) {
        return this._Nearest_by_key(val, function (node) {
            return node.left;
        });
    };
    MultiSetTree.prototype.upper_bound = function (val) {
        // FIND MATCHED NODE
        var node = this._Nearest_by_key(val, function (node) {
            return node.right;
        });
        if (node === null)
            // NOTHING
            return this.source().end();
        // MUST BE it.first > key
        var it = node.value;
        if (this.key_comp()(val, it.value))
            return it;
        else
            return it.next();
    };
    return MultiSetTree;
}(SetTree_1.SetTree));
exports.MultiSetTree = MultiSetTree;
//# sourceMappingURL=MultiSetTree.js.map