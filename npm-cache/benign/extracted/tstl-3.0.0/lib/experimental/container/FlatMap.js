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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatMap = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.experimental
 */
//================================================================
var UniqueTreeMap_1 = require("../../internal/container/associative/UniqueTreeMap");
var ITreeContainer_1 = require("../../internal/container/associative/ITreeContainer");
var MapElementVector_1 = require("../../internal/container/associative/MapElementVector");
var binary_search_1 = require("../../algorithm/binary_search");
/**
 * Unique-key Map based on sorted array.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var FlatMap = /** @class */ (function (_super) {
    __extends(FlatMap, _super);
    function FlatMap() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // INITIALIZATION
        var _this = _super.call(this, function (thisArg) { return new MapElementVector_1.MapElementVector(thisArg); }) || this;
        // OVERLOADINGS
        ITreeContainer_1.ITreeContainer.construct.apply(ITreeContainer_1.ITreeContainer, __spreadArray([_this,
            FlatMap,
            function (comp) {
                _this.key_comp_ = comp;
            }], __read(args), false));
        return _this;
    }
    /**
     * @inheritDoc
     */
    FlatMap.prototype.swap = function (obj) {
        var _a, _b;
        // SWAP CONTENTS
        _a = __read([obj.data_, this.data_], 2), this.data_ = _a[0], obj.data_ = _a[1];
        MapElementVector_1.MapElementVector._Swap_associative(this.data_, obj.data_);
        // SWAP COMPARATORS
        _b = __read([obj.key_comp_, this.key_comp_], 2), this.key_comp_ = _b[0], obj.key_comp_ = _b[1];
    };
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    FlatMap.prototype.nth = function (index) {
        return this.data_.nth(index);
    };
    /**
     * @inheritDoc
     */
    FlatMap.prototype.key_comp = function () {
        return this.key_comp_;
    };
    /**
     * @inheritDoc
     */
    FlatMap.prototype.lower_bound = function (key) {
        return (0, binary_search_1.lower_bound)(this.begin(), this.end(), this._Capsule_key(key), this.value_comp());
    };
    /**
     * @inheritDoc
     */
    FlatMap.prototype.upper_bound = function (key) {
        return (0, binary_search_1.upper_bound)(this.begin(), this.end(), this._Capsule_key(key), this.value_comp());
    };
    FlatMap.prototype._Capsule_key = function (key) {
        return { first: key };
    };
    /* ---------------------------------------------------------
        POST-PROCESS
    --------------------------------------------------------- */
    FlatMap.prototype._Handle_insert = function (_a, _b) { };
    FlatMap.prototype._Handle_erase = function (_a, _b) { };
    return FlatMap;
}(UniqueTreeMap_1.UniqueTreeMap));
exports.FlatMap = FlatMap;
/**
 *
 */
(function (FlatMap) {
    // BODY
    FlatMap.Iterator = MapElementVector_1.MapElementVector.Iterator;
    FlatMap.ReverseIterator = MapElementVector_1.MapElementVector.ReverseIterator;
    FlatMap.__MODULE = "experimental";
})(FlatMap || (exports.FlatMap = FlatMap = {}));
//# sourceMappingURL=FlatMap.js.map