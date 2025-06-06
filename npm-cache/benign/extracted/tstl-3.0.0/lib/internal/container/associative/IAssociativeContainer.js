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
exports.IAssociativeContainer = void 0;
var IAssociativeContainer;
(function (IAssociativeContainer) {
    /**
     * @internal
     */
    function construct(source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var ramda;
        var tail;
        if (args.length >= 1 && args[0] instanceof Array) {
            // INITIALIZER LIST CONSTRUCTOR
            ramda = function () {
                var items = args[0];
                source.push.apply(source, __spreadArray([], __read(items), false));
            };
            tail = args.slice(1);
        }
        else if (args.length >= 2 &&
            args[0].next instanceof Function &&
            args[1].next instanceof Function) {
            // RANGE CONSTRUCTOR
            ramda = function () {
                var first = args[0];
                var last = args[1];
                source.assign(first, last);
            };
            tail = args.slice(2);
        }
        else {
            // DEFAULT CONSTRUCTOR
            ramda = null;
            tail = args;
        }
        return { ramda: ramda, tail: tail };
    }
    IAssociativeContainer.construct = construct;
})(IAssociativeContainer || (exports.IAssociativeContainer = IAssociativeContainer = {}));
//# sourceMappingURL=IAssociativeContainer.js.map