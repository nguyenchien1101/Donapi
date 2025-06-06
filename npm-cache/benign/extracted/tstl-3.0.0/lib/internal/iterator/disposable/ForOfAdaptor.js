"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForOfAdaptor = void 0;
/**
 * Adaptor for `for ... of` iteration.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ForOfAdaptor = /** @class */ (function () {
    /**
     * Initializer Constructor.
     *
     * @param first Input iteartor of the first position.
     * @param last Input iterator of the last position.
     */
    function ForOfAdaptor(first, last) {
        this.it_ = first;
        this.last_ = last;
    }
    /**
     * @inheritDoc
     */
    ForOfAdaptor.prototype.next = function () {
        if (this.it_.equals(this.last_))
            return {
                done: true,
                value: undefined,
            };
        else {
            var it = this.it_;
            this.it_ = this.it_.next();
            return {
                done: false,
                value: it.value,
            };
        }
    };
    /**
     * @inheritDoc
     */
    ForOfAdaptor.prototype[Symbol.iterator] = function () {
        return this;
    };
    return ForOfAdaptor;
}());
exports.ForOfAdaptor = ForOfAdaptor;
//# sourceMappingURL=ForOfAdaptor.js.map