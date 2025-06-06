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
exports.AdaptorContainer = void 0;
/**
 * Base class for Adaptor Containers.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var AdaptorContainer = /** @class */ (function () {
    function AdaptorContainer(source) {
        this.source_ = source;
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    AdaptorContainer.prototype.size = function () {
        return this.source_.size();
    };
    /**
     * @inheritDoc
     */
    AdaptorContainer.prototype.empty = function () {
        return this.source_.empty();
    };
    /* ---------------------------------------------------------
        ELEMENTS I/O
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    AdaptorContainer.prototype.push = function () {
        var _a;
        var elems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elems[_i] = arguments[_i];
        }
        return (_a = this.source_).push.apply(_a, __spreadArray([], __read(elems), false));
    };
    /**
     * Swap elements.
     *
     * @param obj Target container to swap.
     */
    AdaptorContainer.prototype.swap = function (obj) {
        var _a;
        _a = __read([obj.source_, this.source_], 2), this.source_ = _a[0], obj.source_ = _a[1];
    };
    return AdaptorContainer;
}());
exports.AdaptorContainer = AdaptorContainer;
//# sourceMappingURL=AdaptorContainer.js.map