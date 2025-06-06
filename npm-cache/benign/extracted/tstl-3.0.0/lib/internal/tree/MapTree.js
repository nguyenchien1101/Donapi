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
exports.MapTree = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var XTree_1 = require("./XTree");
var Pair_1 = require("../../utility/Pair");
var MapTree = /** @class */ (function (_super) {
    __extends(MapTree, _super);
    /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
    function MapTree(source, comp, it_comp) {
        var _this = _super.call(this, it_comp) || this;
        _this.source_ = source;
        _this.key_compare_ = comp;
        _this.key_eq_ = function (x, y) {
            return !comp(x, y) && !comp(y, x);
        };
        _this.value_compare_ = function (x, y) {
            return comp(x.first, y.first);
        };
        return _this;
    }
    /**
     * @internal
     */
    MapTree._Swap_source = function (x, y) {
        var _a;
        _a = __read([y.source_, x.source_], 2), x.source_ = _a[0], y.source_ = _a[1];
    };
    /* ---------------------------------------------------------
        FINDERS
    --------------------------------------------------------- */
    MapTree.prototype.get_by_key = function (key) {
        var ret = this.nearest_by_key(key);
        if (ret === null || !this.key_eq_(key, ret.value.first))
            return null;
        else
            return ret;
    };
    MapTree.prototype.lower_bound = function (key) {
        var node = this.nearest_by_key(key);
        if (node === null)
            return this.source().end();
        else if (this.key_comp()(node.value.first, key))
            // it < key
            return node.value.next();
        else
            return node.value;
    };
    MapTree.prototype.equal_range = function (key) {
        return new Pair_1.Pair(this.lower_bound(key), this.upper_bound(key));
    };
    /* ---------------------------------------------------------
        ACCECSSORS
    --------------------------------------------------------- */
    MapTree.prototype.source = function () {
        return this.source_;
    };
    MapTree.prototype.key_comp = function () {
        return this.key_compare_;
    };
    MapTree.prototype.key_eq = function () {
        return this.key_eq_;
    };
    MapTree.prototype.value_comp = function () {
        return this.value_compare_;
    };
    return MapTree;
}(XTree_1.XTree));
exports.MapTree = MapTree;
//# sourceMappingURL=MapTree.js.map