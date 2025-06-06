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
exports.VariadicTimedSingleton = void 0;
var HashMap_1 = require("../container/HashMap");
var TimedSingleton_1 = require("./TimedSingleton");
var iterations_1 = require("../ranges/algorithm/iterations");
var hash_1 = require("../functional/hash");
/**
 * Variadic timed singleton generator.
 *
 * The `VariadicTimedSingleton` is a type of {@link VariadicSingleton} class who re-constructs
 * the singleton value repeatedly whenever specific time has been elapsed after the last lazy
 * construction.
 *
 * @template T Type of the value to be lazy-constructed
 * @template Args Type of parameters of the lazy constructor function
 * @author Jeongho Nam - https://github.com/samchon
 */
var VariadicTimedSingleton = /** @class */ (function () {
    /**
     * Initializer Constructor.
     *
     * @param interval Specific interval time, to determine whether re-generation of the singleton value is required or not, as milliseconds
     * @param closure Lazy constructor function returning the target value
     * @param hasher Hash function for the *lazy constructor* function arguments
     * @param pred Predicator function for the *lazy constructor* function arguments
     */
    function VariadicTimedSingleton(interval, closure, hasher, pred) {
        if (hasher === void 0) { hasher = function (args) { return hash_1.hash.apply(void 0, __spreadArray([], __read(args), false)); }; }
        if (pred === void 0) { pred = iterations_1.equal; }
        this.interval_ = interval;
        this.closure_ = closure;
        this.dict_ = new HashMap_1.HashMap(hasher, pred);
    }
    /**
     * Get value.
     *
     * @param args Parameters for the lazy constructor function
     * @returns The lazy constructed value
     */
    VariadicTimedSingleton.prototype.get = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var it = this.dict_.find(args);
        if (it.equals(this.dict_.end()) == true) {
            var singleton = new TimedSingleton_1.TimedSingleton(this.interval_, this.closure_);
            it = this.dict_.emplace(args, singleton).first;
        }
        return (_a = it.second).get.apply(_a, __spreadArray([], __read(args), false));
    };
    return VariadicTimedSingleton;
}());
exports.VariadicTimedSingleton = VariadicTimedSingleton;
//# sourceMappingURL=VariadicTimedSingleton.js.map