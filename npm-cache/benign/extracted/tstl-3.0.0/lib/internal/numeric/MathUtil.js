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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtil = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var MathUtil;
(function (MathUtil) {
    function factorial(k) {
        if (FACTORIALS.length <= k)
            for (var i = FACTORIALS.length; i <= k; ++i)
                FACTORIALS.push(FACTORIALS[i - 1] * i);
        return FACTORIALS[k];
    }
    MathUtil.factorial = factorial;
    function integral(formula, first, last, segment_count) {
        var _a;
        if (segment_count === void 0) { segment_count = 100 * 1000; }
        if (first > last)
            _a = __read([last, first], 2), first = _a[0], last = _a[1];
        else if (first === last)
            return 0;
        var interval = (last - first) / segment_count;
        var ret = 0.0;
        for (; first < last; first += interval)
            ret += formula(first) * interval;
        return ret;
    }
    MathUtil.integral = integral;
    function sigma(formula, first, last) {
        var ret = 0.0;
        for (; first <= last; ++first)
            ret += formula(first);
        return ret;
    }
    MathUtil.sigma = sigma;
    var FACTORIALS = [1, 1];
})(MathUtil || (exports.MathUtil = MathUtil = {}));
//# sourceMappingURL=MathUtil.js.map