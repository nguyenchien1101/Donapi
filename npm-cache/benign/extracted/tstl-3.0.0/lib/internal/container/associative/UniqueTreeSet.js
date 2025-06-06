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
exports.UniqueTreeSet = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var UniqueSet_1 = require("../../../base/container/UniqueSet");
var ITreeContainer_1 = require("./ITreeContainer");
var Pair_1 = require("../../../utility/Pair");
/**
 * Basic tree set blocking duplicated key.
 *
 * @template Key Key type
 * @template Source Derived type extending this {@link UniqueTreeSet}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var UniqueTreeSet = /** @class */ (function (_super) {
    __extends(UniqueTreeSet, _super);
    function UniqueTreeSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    UniqueTreeSet.prototype.find = function (key) {
        var it = this.lower_bound(key);
        if (!it.equals(this.end()) && this._Key_eq(key, it.value))
            return it;
        else
            return this.end();
    };
    /**
     * @inheritDoc
     */
    UniqueTreeSet.prototype.equal_range = function (key) {
        var it = this.lower_bound(key);
        return new Pair_1.Pair(it, !it.equals(this.end()) && this._Key_eq(key, it.value)
            ? it.next()
            : it);
    };
    /**
     * @inheritDoc
     */
    UniqueTreeSet.prototype.value_comp = function () {
        return this.key_comp();
    };
    UniqueTreeSet.prototype._Key_eq = function (x, y) {
        return !this.key_comp()(x, y) && !this.key_comp()(y, x);
    };
    /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
    UniqueTreeSet.prototype._Insert_by_key = function (key) {
        // FIND POSITION TO INSERT
        var it = this.lower_bound(key);
        if (!it.equals(this.end()) && this._Key_eq(it.value, key))
            return new Pair_1.Pair(it, false);
        // ITERATOR TO RETURN
        it = this.data_.insert(it, key);
        this._Handle_insert(it, it.next());
        return new Pair_1.Pair(it, true);
    };
    UniqueTreeSet.prototype._Insert_by_hint = function (hint, key) {
        var validate = ITreeContainer_1.ITreeContainer.emplacable(this, hint, key);
        if (validate) {
            var it = this.data_.insert(hint, key);
            this._Handle_insert(it, it.next());
            return it;
        }
        else
            return this._Insert_by_key(key).first;
    };
    return UniqueTreeSet;
}(UniqueSet_1.UniqueSet));
exports.UniqueTreeSet = UniqueTreeSet;
//# sourceMappingURL=UniqueTreeSet.js.map