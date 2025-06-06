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
exports.IHashContainer = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var IAssociativeContainer_1 = require("./IAssociativeContainer");
var hash_1 = require("../../../functional/hash");
var comparators_1 = require("../../../functional/comparators");
var IHashContainer;
(function (IHashContainer) {
    /**
     * @internal
     */
    function construct(source, Source, bucketFactory) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        // DECLARE MEMBERS
        var post_process = null;
        var hash_function = hash_1.hash;
        var key_eq = comparators_1.equal_to;
        //----
        // INITIALIZE MEMBERS AND POST-PROCESS
        //----
        // BRANCH - METHOD OVERLOADINGS
        if (args.length === 1 && args[0] instanceof Source) {
            // PARAMETERS
            var container_1 = args[0];
            hash_function = container_1.hash_function();
            key_eq = container_1.key_eq();
            // COPY CONSTRUCTOR
            post_process = function () {
                var first = container_1.begin();
                var last = container_1.end();
                source.assign(first, last);
            };
        }
        else {
            var tuple = IAssociativeContainer_1.IAssociativeContainer.construct.apply(IAssociativeContainer_1.IAssociativeContainer, __spreadArray([source], __read(args), false));
            post_process = tuple.ramda;
            if (tuple.tail.length >= 1)
                hash_function = tuple.tail[0];
            if (tuple.tail.length >= 2)
                key_eq = tuple.tail[1];
        }
        //----
        // DO PROCESS
        //----
        // CONSTRUCT BUCKET
        bucketFactory(hash_function, key_eq);
        // ACT POST-PROCESS
        if (post_process !== null)
            post_process();
    }
    IHashContainer.construct = construct;
})(IHashContainer || (exports.IHashContainer = IHashContainer = {}));
//# sourceMappingURL=IHashContainer.js.map