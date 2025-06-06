"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carlson = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var MathUtil_1 = require("./MathUtil");
var Carlson;
(function (Carlson) {
    var INFINITY = 100 * 1000;
    var SECTION = INFINITY;
    function rf(x, y, z) {
        return (MathUtil_1.MathUtil.integral(function (t) {
            var ret = t + x;
            ret *= t + y;
            ret *= t + z;
            return 1 / Math.sqrt(ret);
        }, 0, INFINITY, SECTION) / 2);
    }
    Carlson.rf = rf;
    function rj(x, y, z, p) {
        return (MathUtil_1.MathUtil.integral(function (t) {
            var ret = t + x;
            ret *= t + y;
            ret *= t + z;
            ret = (t + p) * Math.sqrt(ret);
            return 1 / ret;
        }, 0, INFINITY, SECTION) * 1.5);
    }
    Carlson.rj = rj;
    function rc(x, y) {
        return rf(x, y, y);
    }
    Carlson.rc = rc;
    function rd(x, y, z) {
        return rj(x, y, z, z);
    }
    Carlson.rd = rd;
})(Carlson || (exports.Carlson = Carlson = {}));
//# sourceMappingURL=Carlson.js.map