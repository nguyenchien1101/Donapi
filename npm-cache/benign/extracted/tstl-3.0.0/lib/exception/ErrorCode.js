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
exports.ErrorCode = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var ErrorInstance_1 = require("../internal/exception/ErrorInstance");
/**
 * Error code.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ErrorCode = /** @class */ (function (_super) {
    __extends(ErrorCode, _super);
    function ErrorCode(val, category) {
        if (val === void 0) { val = 0; }
        if (category === void 0) { category = null; }
        return _super.call(this, val, category) || this;
    }
    /**
     * Get default error condition.
     *
     * @return The default error condition object.
     */
    ErrorCode.prototype.default_error_condition = function () {
        return this.category_.default_error_condition(this.value_);
    };
    return ErrorCode;
}(ErrorInstance_1.ErrorInstance));
exports.ErrorCode = ErrorCode;
//# sourceMappingURL=ErrorCode.js.map