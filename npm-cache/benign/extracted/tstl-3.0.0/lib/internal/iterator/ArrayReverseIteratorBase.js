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
exports.ArrayReverseIteratorBase = void 0;
var ReverseIterator_1 = require("./ReverseIterator");
/**
 * Reverse iterator of Array Containers.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ArrayReverseIteratorBase = /** @class */ (function (_super) {
    __extends(ArrayReverseIteratorBase, _super);
    function ArrayReverseIteratorBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ArrayReverseIteratorBase.prototype.advance = function (n) {
        return this._Create_neighbor(this.base().advance(-n));
    };
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ArrayReverseIteratorBase.prototype.index = function () {
        return this.base_.index();
    };
    Object.defineProperty(ArrayReverseIteratorBase.prototype, "value", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this.base_.value;
        },
        /**
         * @inheritDoc
         */
        set: function (val) {
            this.base_.value = val;
        },
        enumerable: false,
        configurable: true
    });
    return ArrayReverseIteratorBase;
}(ReverseIterator_1.ReverseIterator));
exports.ArrayReverseIteratorBase = ArrayReverseIteratorBase;
//# sourceMappingURL=ArrayReverseIteratorBase.js.map