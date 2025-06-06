"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimedSingleton = void 0;
/**
 * Timed singleton generator.
 *
 * The `TimedSingleton` is a type of {@link Singleton} class who re-constructs the singleton
 * value repeatedly whenever specific time has been elapsed after the last lazy construction.
 *
 * @template T Type of the value to be lazy-constructed
 * @author Jeongho Nam - https://github.com/samchon
 */
var TimedSingleton = /** @class */ (function () {
    /**
     * Initializer Constructor.
     *
     * @param interval Specific interval time, to determine whether re-generation of the singleton value is required or not, as milliseconds
     * @param closure Lazy constructor function returning the target value
     */
    function TimedSingleton(interval, closure) {
        this.interval_ = interval;
        this.closure_ = closure;
        this.value_ = null;
        this.expired_at_ = 0;
    }
    /**
     * Get value.
     *
     * @returns The lazy constructed value
     */
    TimedSingleton.prototype.get = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (Date.now() >= this.expired_at_) {
            this.expired_at_ = Date.now() + this.interval_;
            this.value_ = this.closure_.apply(this, __spreadArray([], __read(args), false));
        }
        return this.value_;
    };
    return TimedSingleton;
}());
exports.TimedSingleton = TimedSingleton;
//# sourceMappingURL=TimedSingleton.js.map