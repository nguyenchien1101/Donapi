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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetTree = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var XTree_1 = require("./XTree");
var Pair_1 = require("../../utility/Pair");
var SetTree = /** @class */ (function (_super) {
    __extends(SetTree, _super);
    /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
    function SetTree(set, comp, it_comp) {
        var _this = _super.call(this, it_comp) || this;
        _this.source_ = set;
        _this.key_comp_ = comp;
        _this.key_eq_ = function (x, y) { return !comp(x, y) && !comp(y, x); };
        return _this;
    }
    /**
     * @internal
     */
    SetTree._Swap_source = function (x, y) {
        var _a;
        _a = __read([y.source_, x.source_], 2), x.source_ = _a[0], y.source_ = _a[1];
    };
    /* ---------------------------------------------------------
        FINDERS
    --------------------------------------------------------- */
    SetTree.prototype.get_by_key = function (val) {
        var ret = this.nearest_by_key(val);
        if (ret === null || !this.key_eq_(val, ret.value.value))
            return null;
        else
            return ret;
    };
    SetTree.prototype.lower_bound = function (val) {
        var node = this.nearest_by_key(val);
        if (node === null)
            return this.source_.end();
        else if (this.key_comp_(node.value.value, val))
            // it < key
            return node.value.next();
        else
            return node.value;
    };
    SetTree.prototype.equal_range = function (val) {
        return new Pair_1.Pair(this.lower_bound(val), this.upper_bound(val));
    };
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    SetTree.prototype.source = function () {
        return this.source_;
    };
    SetTree.prototype.key_comp = function () {
        return this.key_comp_;
    };
    SetTree.prototype.key_eq = function () {
        return this.key_eq_;
    };
    SetTree.prototype.value_comp = function () {
        return this.key_comp_;
    };
    return SetTree;
}(XTree_1.XTree));
exports.SetTree = SetTree;
//# sourceMappingURL=SetTree.js.map