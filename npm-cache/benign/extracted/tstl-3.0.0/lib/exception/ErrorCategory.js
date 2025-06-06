"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCategory = void 0;
var ErrorCondition_1 = require("./ErrorCondition");
var comparators_1 = require("../functional/comparators");
/**
 * Error category.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ErrorCategory = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    /**
     * Default Constructor.
     */
    function ErrorCategory() {
    }
    /* ---------------------------------------------------------
        OPERATORS
    --------------------------------------------------------- */
    /**
     * Get default error condition.
     *
     * @param val Identifier of an error condition.
     * @return The error condition.
     */
    ErrorCategory.prototype.default_error_condition = function (val) {
        return new ErrorCondition_1.ErrorCondition(val, this);
    };
    ErrorCategory.prototype.equivalent = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args[1] instanceof ErrorCondition_1.ErrorCondition) {
            var val_code = args[0];
            var cond = args[1];
            return (0, comparators_1.equal_to)(this.default_error_condition(val_code), cond);
        }
        else {
            var code = args[0];
            var valcond = args[1];
            return (0, comparators_1.equal_to)(this, code.category()) && code.value() === valcond;
        }
    };
    return ErrorCategory;
}());
exports.ErrorCategory = ErrorCategory;
//# sourceMappingURL=ErrorCategory.js.map