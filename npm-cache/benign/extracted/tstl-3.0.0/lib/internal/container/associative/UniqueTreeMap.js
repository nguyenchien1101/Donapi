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
exports.UniqueTreeMap = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var UniqueMap_1 = require("../../../base/container/UniqueMap");
var ITreeContainer_1 = require("./ITreeContainer");
var Entry_1 = require("../../../utility/Entry");
var Pair_1 = require("../../../utility/Pair");
/**
 * Basic tree map blocking duplicated key.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link UniqueTreeMap}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var UniqueTreeMap = /** @class */ (function (_super) {
    __extends(UniqueTreeMap, _super);
    function UniqueTreeMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    UniqueTreeMap.prototype.find = function (key) {
        var it = this.lower_bound(key);
        if (!it.equals(this.end()) && this._Key_eq(key, it.first))
            return it;
        else
            return this.end();
    };
    /**
     * @inheritDoc
     */
    UniqueTreeMap.prototype.equal_range = function (key) {
        var it = this.lower_bound(key);
        return new Pair_1.Pair(it, !it.equals(this.end()) && this._Key_eq(key, it.first)
            ? it.next()
            : it);
    };
    /**
     * @inheritDoc
     */
    UniqueTreeMap.prototype.value_comp = function () {
        var _this = this;
        return function (x, y) { return _this.key_comp()(x.first, y.first); };
    };
    UniqueTreeMap.prototype._Key_eq = function (x, y) {
        return !this.key_comp()(x, y) && !this.key_comp()(y, x);
    };
    /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    UniqueTreeMap.prototype.emplace = function (key, val) {
        // FIND POSITION TO INSERT
        var it = this.lower_bound(key);
        if (!it.equals(this.end()) && this._Key_eq(it.first, key))
            return new Pair_1.Pair(it, false);
        // ITERATOR TO RETURN
        it = this.data_.insert(it, new Entry_1.Entry(key, val));
        this._Handle_insert(it, it.next());
        return new Pair_1.Pair(it, true);
    };
    /**
     * @inheritDoc
     */
    UniqueTreeMap.prototype.emplace_hint = function (hint, key, val) {
        var elem = new Entry_1.Entry(key, val);
        var validate = ITreeContainer_1.ITreeContainer.emplacable(this, hint, elem);
        if (validate) {
            var it = this.data_.insert(hint, elem);
            this._Handle_insert(it, it.next());
            return it;
        }
        else
            return this.emplace(key, val).first;
    };
    return UniqueTreeMap;
}(UniqueMap_1.UniqueMap));
exports.UniqueTreeMap = UniqueTreeMap;
//# sourceMappingURL=UniqueTreeMap.js.map