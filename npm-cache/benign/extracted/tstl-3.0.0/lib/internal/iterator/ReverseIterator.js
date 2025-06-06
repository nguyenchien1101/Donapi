"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseIterator = void 0;
/**
 * Basic reverse iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ReverseIterator = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    /**
     * Initializer Constructor.
     *
     * @param base The base iterator.
     */
    function ReverseIterator(base) {
        this.base_ = base.prev();
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * Get source container.
     *
     * @return The source container.
     */
    ReverseIterator.prototype.source = function () {
        return this.base_.source();
    };
    /**
     * @inheritDoc
     */
    ReverseIterator.prototype.base = function () {
        return this.base_.next();
    };
    Object.defineProperty(ReverseIterator.prototype, "value", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this.base_.value;
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
    ReverseIterator.prototype.prev = function () {
        // this.base().next()
        return this._Create_neighbor(this.base().next());
    };
    /**
     * @inheritDoc
     */
    ReverseIterator.prototype.next = function () {
        // this.base().prev()
        return this._Create_neighbor(this.base_);
    };
    /* ---------------------------------------------------------
        COMPARES
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ReverseIterator.prototype.equals = function (obj) {
        return this.base_.equals(obj.base_);
    };
    return ReverseIterator;
}());
exports.ReverseIterator = ReverseIterator;
//# sourceMappingURL=ReverseIterator.js.map