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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemError = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var RuntimeError_1 = require("./RuntimeError");
var ErrorCode_1 = require("./ErrorCode");
/**
 * System Error.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var SystemError = /** @class */ (function (_super) {
    __extends(SystemError, _super);
    function SystemError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this, "") || this;
        if (args.length >= 2 && typeof args[0].valueOf() === "number") {
            var val = args[0];
            var category = args[1];
            _this.code_ = new ErrorCode_1.ErrorCode(val, category);
            _this.message = args[2];
        }
        else {
            _this.code_ = args[0];
            _this.message = args[1];
        }
        return _this;
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * Get error code.
     *
     * @return The error code.
     */
    SystemError.prototype.code = function () {
        return this.code_;
    };
    /**
     * @inheritDoc
     */
    SystemError.prototype.toJSON = function () {
        return __assign(__assign({}, _super.prototype.toJSON.call(this)), { code: this.code_.toJSON() });
    };
    return SystemError;
}(RuntimeError_1.RuntimeError));
exports.SystemError = SystemError;
//# sourceMappingURL=SystemError.js.map