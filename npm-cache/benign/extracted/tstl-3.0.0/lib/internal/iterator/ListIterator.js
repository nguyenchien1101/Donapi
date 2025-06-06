"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListIterator = void 0;
var ErrorGenerator_1 = require("../exception/ErrorGenerator");
/**
 * Basic List Iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ListIterator = /** @class */ (function () {
    /* ---------------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------------- */
    function ListIterator(prev, next, value) {
        this.prev_ = prev;
        this.next_ = next;
        this.value_ = value;
    }
    /**
     * @internal
     */
    ListIterator._Set_prev = function (it, prev) {
        it.prev_ = prev;
    };
    /**
     * @internal
     */
    ListIterator._Set_next = function (it, next) {
        it.next_ = next;
    };
    /**
     * @inheritDoc
     */
    ListIterator.prototype.prev = function () {
        return this.prev_;
    };
    /**
     * @inheritDoc
     */
    ListIterator.prototype.next = function () {
        return this.next_;
    };
    Object.defineProperty(ListIterator.prototype, "value", {
        /**
         * @inheritDoc
         */
        get: function () {
            this._Try_value();
            return this.value_;
        },
        enumerable: false,
        configurable: true
    });
    ListIterator.prototype._Try_value = function () {
        if (this.value_ === undefined &&
            this.equals(this.source().end()) === true)
            throw ErrorGenerator_1.ErrorGenerator.iterator_end_value(this.source());
    };
    /* ---------------------------------------------------------------
        COMPARISON
    --------------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ListIterator.prototype.equals = function (obj) {
        return this === obj;
    };
    return ListIterator;
}());
exports.ListIterator = ListIterator;
//# sourceMappingURL=ListIterator.js.map