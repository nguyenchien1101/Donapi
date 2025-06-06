"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayIteratorBase = void 0;
var comparators_1 = require("../../functional/comparators");
/**
 * Iterator of Array Containers.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ArrayIteratorBase = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    /**
     * Initializer Constructor.
     *
     * @param source Source container.
     * @param index Index number.
     */
    function ArrayIteratorBase(array, index) {
        this.array_ = array;
        this.index_ = index;
    }
    /**
     * @internal
     */
    ArrayIteratorBase.prototype._Get_array = function () {
        return this.array_;
    };
    /**
     * @inheritDoc
     */
    ArrayIteratorBase.prototype.index = function () {
        return this.index_;
    };
    Object.defineProperty(ArrayIteratorBase.prototype, "value", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this.array_.at(this.index_);
        },
        /**
         * @inheritDoc
         */
        set: function (val) {
            this.array_.set(this.index_, val);
        },
        enumerable: false,
        configurable: true
    });
    /* ---------------------------------------------------------
        MOVERS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ArrayIteratorBase.prototype.prev = function () {
        return this.advance(-1);
    };
    /**
     * @inheritDoc
     */
    ArrayIteratorBase.prototype.next = function () {
        return this.advance(1);
    };
    /**
     * @inheritDoc
     */
    ArrayIteratorBase.prototype.advance = function (n) {
        return this.array_.nth(this.index_ + n);
    };
    /* ---------------------------------------------------------
        COMPARES
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ArrayIteratorBase.prototype.equals = function (obj) {
        return (0, comparators_1.equal_to)(this.array_, obj.array_) && this.index_ === obj.index_;
    };
    return ArrayIteratorBase;
}());
exports.ArrayIteratorBase = ArrayIteratorBase;
//# sourceMappingURL=ArrayIteratorBase.js.map