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
exports.ErrorCondition = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var ErrorInstance_1 = require("../internal/exception/ErrorInstance");
/**
 * Error condition.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ErrorCondition = /** @class */ (function (_super) {
    __extends(ErrorCondition, _super);
    function ErrorCondition(val, category) {
        if (val === void 0) { val = 0; }
        if (category === void 0) { category = null; }
        return _super.call(this, val, category) || this;
    }
    return ErrorCondition;
}(ErrorInstance_1.ErrorInstance));
exports.ErrorCondition = ErrorCondition;
//# sourceMappingURL=ErrorCondition.js.map