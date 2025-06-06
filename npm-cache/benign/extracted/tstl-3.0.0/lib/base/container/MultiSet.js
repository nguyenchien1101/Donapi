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
exports.MultiSet = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
var SetContainer_1 = require("./SetContainer");
/**
 * Basic set container allowing multiple keys.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link MultiSet}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var MultiSet = /** @class */ (function (_super) {
    __extends(MultiSet, _super);
    function MultiSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiSet.prototype.insert = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.prototype.insert.apply(this, __spreadArray([], __read(args), false));
    };
    MultiSet.prototype._Erase_by_val = function (key) {
        var first = this.find(key);
        if (first.equals(this.end()) === true)
            return 0;
        var last = first.next();
        var ret = 1;
        while (!last.equals(this.end()) && this._Key_eq(key, last.value)) {
            last = last.next();
            ++ret;
        }
        this._Erase_by_range(first, last);
        return ret;
    };
    /* ---------------------------------------------------------
        UTILITY
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    MultiSet.prototype.merge = function (source) {
        this.insert(source.begin(), source.end());
        source.clear();
    };
    return MultiSet;
}(SetContainer_1.SetContainer));
exports.MultiSet = MultiSet;
//# sourceMappingURL=MultiSet.js.map