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
exports.MultiTreeMap = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var MultiMap_1 = require("../../../base/container/MultiMap");
var ITreeContainer_1 = require("./ITreeContainer");
var Entry_1 = require("../../../utility/Entry");
var Pair_1 = require("../../../utility/Pair");
/**
 * Basic tree map allowing duplicated keys.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link MultiTreeMap}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var MultiTreeMap = /** @class */ (function (_super) {
    __extends(MultiTreeMap, _super);
    function MultiTreeMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    MultiTreeMap.prototype.find = function (key) {
        var it = this.lower_bound(key);
        if (!it.equals(this.end()) && this._Key_eq(key, it.first))
            return it;
        else
            return this.end();
    };
    /**
     * @inheritDoc
     */
    MultiTreeMap.prototype.count = function (key) {
        var it = this.find(key);
        var ret = 0;
        for (; !it.equals(this.end()) && this._Key_eq(it.first, key); it = it.next())
            ++ret;
        return ret;
    };
    /**
     * @inheritDoc
     */
    MultiTreeMap.prototype.equal_range = function (key) {
        return new Pair_1.Pair(this.lower_bound(key), this.upper_bound(key));
    };
    /**
     * @inheritDoc
     */
    MultiTreeMap.prototype.value_comp = function () {
        var _this = this;
        return function (x, y) { return _this.key_comp()(x.first, y.first); };
    };
    MultiTreeMap.prototype._Key_eq = function (x, y) {
        return !this.key_comp()(x, y) && !this.key_comp()(y, x);
    };
    /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    MultiTreeMap.prototype.emplace = function (key, val) {
        // FIND POSITION TO INSERT
        var it = this.upper_bound(key);
        // ITERATOR TO RETURN
        it = this.data_.insert(it, new Entry_1.Entry(key, val));
        this._Handle_insert(it, it.next());
        return it;
    };
    /**
     * @inheritDoc
     */
    MultiTreeMap.prototype.emplace_hint = function (hint, key, val) {
        var elem = new Entry_1.Entry(key, val);
        var validate = ITreeContainer_1.ITreeContainer.emplacable(this, hint, elem);
        if (validate) {
            var it = this.data_.insert(hint, elem);
            this._Handle_insert(it, it.next());
            return it;
        }
        else
            return this.emplace(key, val);
    };
    MultiTreeMap.prototype._Insert_by_range = function (first, last) {
        for (var it = first; !it.equals(last); it = it.next())
            this.emplace(it.value.first, it.value.second);
    };
    return MultiTreeMap;
}(MultiMap_1.MultiMap));
exports.MultiTreeMap = MultiTreeMap;
//# sourceMappingURL=MultiTreeMap.js.map