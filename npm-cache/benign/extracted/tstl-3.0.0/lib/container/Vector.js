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
exports.Vector = void 0;
var VectorContainer_1 = require("../internal/container/linear/VectorContainer");
var ArrayIterator_1 = require("../internal/iterator/ArrayIterator");
var ArrayReverseIterator_1 = require("../internal/iterator/ArrayReverseIterator");
/**
 * Vector, an array with variable capacity.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var Vector = /** @class */ (function (_super) {
    __extends(Vector, _super);
    function Vector() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        // CONSTRUCTORS BRANCH
        if (args.length === 0) {
            // DEFAULT CONSTRUCTOR
            _this.data_ = [];
        }
        else if (args[0] instanceof Array) {
            // INITIALIZER CONSTRUCTOR
            var array = args[0];
            _this.data_ = args[1] === true ? array : array.slice();
        }
        else if (args.length === 1 && args[0] instanceof Vector) {
            // COPY CONSTRUCTOR
            var v = args[0];
            _this.data_ = v.data_.slice();
        }
        else if (args.length === 2) {
            // ASSIGN CONSTRUCTOR
            _this.data_ = [];
            _this.assign(args[0], args[1]);
        }
        return _this;
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * Wrap an array into a vector.
     *
     * @param data Target array to be wrapped
     * @return A vector wrapping the parametric array.
     */
    Vector.wrap = function (data) {
        return new Vector(data, true);
    };
    /**
     * @inheritDoc
     */
    Vector.prototype.nth = function (index) {
        return new Vector.Iterator(this, index);
    };
    Vector.prototype.source = function () {
        return this;
    };
    return Vector;
}(VectorContainer_1.VectorContainer));
exports.Vector = Vector;
/**
 *
 */
(function (Vector) {
    // BODY
    Vector.Iterator = ArrayIterator_1.ArrayIterator;
    Vector.ReverseIterator = ArrayReverseIterator_1.ArrayReverseIterator;
})(Vector || (exports.Vector = Vector = {}));
//# sourceMappingURL=Vector.js.map