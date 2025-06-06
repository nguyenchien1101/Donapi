"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInstance = void 0;
/**
 * Base class for error instances.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ErrorInstance = /** @class */ (function () {
    function ErrorInstance(val, category) {
        if (val === void 0) { val = 0; }
        if (category === void 0) { category = null; }
        this.assign(val, category);
    }
    /**
     * Assign content.
     *
     * @param val Identifier of an error condition.
     * @param category An error category instance.
     */
    ErrorInstance.prototype.assign = function (val, category) {
        this.category_ = category;
        this.value_ = val;
    };
    /**
     * Clear content.
     */
    ErrorInstance.prototype.clear = function () {
        this.value_ = 0;
    };
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * Get category.
     *
     * @return The category object.
     */
    ErrorInstance.prototype.category = function () {
        return this.category_;
    };
    /**
     * Get value, the identifier.
     *
     * @return The value, identifier of this object.
     */
    ErrorInstance.prototype.value = function () {
        return this.value_;
    };
    /**
     * Get message.
     *
     * @return The message.
     */
    ErrorInstance.prototype.message = function () {
        return this.category_.message(this.value_);
    };
    /* ---------------------------------------------------------
        OPERATORS
    --------------------------------------------------------- */
    /**
     * Covert bo bool.
     *
     * @return Whether the {@link value} is not zero.
     */
    ErrorInstance.prototype.to_bool = function () {
        return this.value_ !== 0;
    };
    ErrorInstance.prototype.toJSON = function () {
        if (this.category_ === null)
            return {};
        else
            return {
                cateogory: this.category_.name(),
                value: this.value(),
                message: this.message(),
            };
    };
    return ErrorInstance;
}());
exports.ErrorInstance = ErrorInstance;
//# sourceMappingURL=ErrorInstance.js.map