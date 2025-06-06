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
exports.ArrayContainer = void 0;
var Container_1 = require("../../../base/container/Container");
var ErrorGenerator_1 = require("../../exception/ErrorGenerator");
var RangeError_1 = require("../../../exception/RangeError");
var Repeater_1 = require("../../iterator/disposable/Repeater");
/**
 * Base array container.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ArrayContainer = /** @class */ (function (_super) {
    __extends(ArrayContainer, _super);
    function ArrayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* =========================================================
        ACCESSORS
            - ITERATORS
            - INDEXES
    ============================================================
        ITERATORS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ArrayContainer.prototype.begin = function () {
        return this.nth(0);
    };
    /**
     * @inheritDoc
     */
    ArrayContainer.prototype.end = function () {
        return this.nth(this.size());
    };
    /* ---------------------------------------------------------
        INDEXES
    --------------------------------------------------------- */
    /**
     * Get element at specific position.
     *
     * @param index Specific position.
     * @return The element at the *index*.
     */
    ArrayContainer.prototype.at = function (index) {
        return this._At(index);
    };
    /**
     * Change element at specific position.
     *
     * @param index Specific position.
     * @param val The new value to change.
     */
    ArrayContainer.prototype.set = function (index, val) {
        if (index < 0)
            throw ErrorGenerator_1.ErrorGenerator.negative_index(this.source(), "at", index);
        else if (index >= this.size())
            throw ErrorGenerator_1.ErrorGenerator.excessive_index(this.source(), "at", index, this.size());
        this._Set(index, val);
    };
    ArrayContainer.prototype.front = function (val) {
        if (arguments.length === 0)
            return this.at(0);
        else
            this.set(0, val);
    };
    ArrayContainer.prototype.back = function (val) {
        var index = this.size() - 1;
        if (arguments.length === 0)
            return this.at(index);
        else
            this.set(index, val);
    };
    ArrayContainer.prototype.insert = function (pos) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // VALIDATION
        if (pos._Get_array() !== this)
            throw ErrorGenerator_1.ErrorGenerator.not_my_iterator(this.source(), "insert");
        else if (pos.index() < 0)
            throw ErrorGenerator_1.ErrorGenerator.negative_iterator(this.source(), "insert", pos.index());
        else if (pos.index() > this.size())
            pos = this.end();
        // BRANCHES
        if (args.length === 1)
            return this._Insert_by_repeating_val(pos, 1, args[0]);
        else if (args.length === 2 && typeof args[0] === "number")
            return this._Insert_by_repeating_val(pos, args[0], args[1]);
        else
            return this._Insert_by_range(pos, args[0], args[1]);
    };
    ArrayContainer.prototype._Insert_by_repeating_val = function (position, n, val) {
        var first = new Repeater_1.Repeater(0, val);
        var last = new Repeater_1.Repeater(n);
        return this._Insert_by_range(position, first, last);
    };
    /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ArrayContainer.prototype.pop_back = function () {
        if (this.empty() === true)
            throw ErrorGenerator_1.ErrorGenerator.empty(this.source(), "pop_back");
        this._Pop_back();
    };
    ArrayContainer.prototype.erase = function (first, last) {
        if (last === void 0) { last = first.next(); }
        // VALIDATION
        if (first._Get_array() !== this || last._Get_array() !== this)
            throw ErrorGenerator_1.ErrorGenerator.not_my_iterator(this.source(), "erase");
        else if (first.index() < 0)
            throw ErrorGenerator_1.ErrorGenerator.negative_iterator(this.source(), "erase", first.index());
        else if (first.index() > last.index())
            throw new RangeError_1.RangeError("Error on ".concat(ErrorGenerator_1.ErrorGenerator.get_class_name(this.source()), ".erase(): first iterator has greater index than last -> (first = ").concat(first.index(), ", last = ").concat(last.index(), ")."));
        // ADJUSTMENT
        if (first.index() >= this.size())
            return this.end();
        // ERASE ELEMENTS
        return this._Erase_by_range(first, last);
    };
    return ArrayContainer;
}(Container_1.Container));
exports.ArrayContainer = ArrayContainer;
//# sourceMappingURL=ArrayContainer.js.map