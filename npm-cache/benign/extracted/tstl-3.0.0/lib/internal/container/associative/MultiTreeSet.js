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
exports.MultiTreeSet = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var MultiSet_1 = require("../../../base/container/MultiSet");
var ITreeContainer_1 = require("./ITreeContainer");
var Pair_1 = require("../../../utility/Pair");
/**
 * Basic tree set allowing duplicated keys.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link MultiTreeSet}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var MultiTreeSet = /** @class */ (function (_super) {
    __extends(MultiTreeSet, _super);
    function MultiTreeSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    MultiTreeSet.prototype.find = function (key) {
        var it = this.lower_bound(key);
        if (!it.equals(this.end()) && this._Key_eq(key, it.value))
            return it;
        else
            return this.end();
    };
    /**
     * @inheritDoc
     */
    MultiTreeSet.prototype.count = function (key) {
        var it = this.find(key);
        var ret = 0;
        for (; !it.equals(this.end()) && this._Key_eq(it.value, key); it = it.next())
            ++ret;
        return ret;
    };
    /**
     * @inheritDoc
     */
    MultiTreeSet.prototype.equal_range = function (key) {
        return new Pair_1.Pair(this.lower_bound(key), this.upper_bound(key));
    };
    /**
     * @inheritDoc
     */
    MultiTreeSet.prototype.value_comp = function () {
        return this.key_comp();
    };
    MultiTreeSet.prototype._Key_eq = function (x, y) {
        return !this.key_comp()(x, y) && !this.key_comp()(y, x);
    };
    /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
    MultiTreeSet.prototype._Insert_by_key = function (key) {
        // FIND POSITION TO INSERT
        var it = this.upper_bound(key);
        // ITERATOR TO RETURN
        it = this.data_.insert(it, key);
        this._Handle_insert(it, it.next());
        return it;
    };
    MultiTreeSet.prototype._Insert_by_hint = function (hint, key) {
        var validate = ITreeContainer_1.ITreeContainer.emplacable(this, hint, key);
        if (validate) {
            var it = this.data_.insert(hint, key);
            this._Handle_insert(it, it.next());
            return it;
        }
        else
            return this._Insert_by_key(key);
    };
    MultiTreeSet.prototype._Insert_by_range = function (first, last) {
        for (var it = first; !it.equals(last); it = it.next())
            this._Insert_by_key(it.value);
    };
    return MultiTreeSet;
}(MultiSet_1.MultiSet));
exports.MultiTreeSet = MultiTreeSet;
//# sourceMappingURL=MultiTreeSet.js.map