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
exports.VariadicSingleton = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var Singleton_1 = require("./Singleton");
var HashMap_1 = require("../container/HashMap");
var hash_1 = require("../functional/hash");
var iterations_1 = require("../ranges/algorithm/iterations");
/**
 * Variadic singleton generator.
 *
 * @author Jeongho Nam - https://github.comm/samchon
 */
var VariadicSingleton = /** @class */ (function () {
    function VariadicSingleton(closure, hashFunc, pred) {
        if (hashFunc === void 0) { hashFunc = function (args) { return hash_1.hash.apply(void 0, __spreadArray([], __read(args), false)); }; }
        if (pred === void 0) { pred = iterations_1.equal; }
        this.closure_ = closure;
        this.dict_ = new HashMap_1.HashMap(hashFunc, pred);
    }
    VariadicSingleton.prototype.get = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var it = this.dict_.find(args);
        if (it.equals(this.dict_.end()) == true)
            it = this.dict_.emplace(args, new Singleton_1.Singleton(this.closure_)).first;
        return (_a = it.second).get.apply(_a, __spreadArray([], __read(args), false));
    };
    return VariadicSingleton;
}());
exports.VariadicSingleton = VariadicSingleton;
//# sourceMappingURL=VariadicSingleton.js.map