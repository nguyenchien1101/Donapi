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
exports.ITreeContainer = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var IAssociativeContainer_1 = require("./IAssociativeContainer");
var comparators_1 = require("../../../functional/comparators");
var ITreeContainer;
(function (ITreeContainer) {
    /**
     * @internal
     */
    function construct(source, Source, treeFactory) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        // DECLARE MEMBERS
        var post_process = null;
        var comp = comparators_1.less;
        //----
        // INITIALIZE MEMBERS AND POST-PROCESS
        //----
        // BRANCH - METHOD OVERLOADINGS
        if (args.length === 1 && args[0] instanceof Source) {
            // PARAMETERS
            var container_1 = args[0];
            comp = container_1.key_comp();
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
                comp = tuple.tail[0];
        }
        //----
        // DO PROCESS
        //----
        // CONSTRUCT TREE
        treeFactory(comp);
        // ACT POST-PROCESS
        if (post_process !== null)
            post_process();
    }
    ITreeContainer.construct = construct;
    /**
     * @internal
     */
    function emplacable(source, hint, elem) {
        var prev = hint.prev();
        var meet = prev.equals(source.end()) || source.value_comp()(prev.value, elem);
        meet =
            meet &&
                (hint.equals(source.end()) ||
                    source.value_comp()(elem, hint.value));
        return meet;
    }
    ITreeContainer.emplacable = emplacable;
})(ITreeContainer || (exports.ITreeContainer = ITreeContainer = {}));
//# sourceMappingURL=ITreeContainer.js.map