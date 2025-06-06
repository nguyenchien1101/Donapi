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
exports.ArrayIterator = void 0;
var ArrayIteratorBase_1 = require("./ArrayIteratorBase");
var ArrayReverseIterator_1 = require("./ArrayReverseIterator");
var ArrayIterator = /** @class */ (function (_super) {
    __extends(ArrayIterator, _super);
    function ArrayIterator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ArrayIterator.prototype.reverse = function () {
        return new ArrayReverseIterator_1.ArrayReverseIterator(this);
    };
    /**
     * @inheritDoc
     */
    ArrayIterator.prototype.source = function () {
        return this._Get_array();
    };
    return ArrayIterator;
}(ArrayIteratorBase_1.ArrayIteratorBase));
exports.ArrayIterator = ArrayIterator;
//# sourceMappingURL=ArrayIterator.js.map