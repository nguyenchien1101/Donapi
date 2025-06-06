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
exports.Stack = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var AdaptorContainer_1 = require("../internal/container/linear/AdaptorContainer");
var Vector_1 = require("./Vector");
/**
 * Stack; LIFO (Last In First Out).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var Stack = /** @class */ (function (_super) {
    __extends(Stack, _super);
    function Stack(obj) {
        var _this = _super.call(this, new Vector_1.Vector()) || this;
        if (obj !== undefined)
            _this.source_.assign(obj.source_.begin(), obj.source_.end());
        return _this;
    }
    /* ---------------------------------------------------------
        ACCESSOR
    --------------------------------------------------------- */
    /**
     * Get the last element.
     *
     * @return The last element.
     */
    Stack.prototype.top = function () {
        return this.source_.back();
    };
    /**
     * @inheritDoc
     */
    Stack.prototype.pop = function () {
        this.source_.pop_back();
    };
    return Stack;
}(AdaptorContainer_1.AdaptorContainer));
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map