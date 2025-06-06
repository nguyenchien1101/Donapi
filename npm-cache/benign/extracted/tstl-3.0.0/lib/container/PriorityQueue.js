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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
exports.PriorityQueue = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var AdaptorContainer_1 = require("../internal/container/linear/AdaptorContainer");
var Vector_1 = require("./Vector");
var heap_1 = require("../algorithm/heap");
var comparators_1 = require("../functional/comparators");
/**
 * Priority Queue; Greater Out First.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var PriorityQueue = /** @class */ (function (_super) {
    __extends(PriorityQueue, _super);
    function PriorityQueue() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this, new Vector_1.Vector()) || this;
        // DECLARE MEMBERS
        var comp = comparators_1.less;
        var post_process = null;
        //----
        // INITIALIZE MEMBERS AND POST-PROCESS
        //----
        // BRANCH - METHOD OVERLOADINGS
        if (args.length === 1 && args[0] instanceof PriorityQueue) {
            var obj_1 = args[0];
            comp = obj_1.comp_;
            post_process = function () {
                var first = obj_1.source_.begin();
                var last = obj_1.source_.end();
                _this.source_.assign(first, last);
            };
        }
        else if (args.length >= 2 &&
            args[0].next instanceof Function &&
            args[1].next instanceof Function) {
            // FUNCTION TEMPLATE
            if (args.length === 3)
                comp = args[2];
            post_process = function () {
                // RANGE CONSTRUCTOR
                var first = args[0]; // PARAMETER 1
                var last = args[1]; // PARAMETER 2
                _this.source_.assign(first, last);
            };
        }
        else if (args.length === 1)
            comp = args[0];
        //----
        // DO PROCESS
        //----
        _this.comp_ = comp;
        if (post_process !== null)
            post_process();
        return _this;
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * Get value comparison function.
     */
    PriorityQueue.prototype.value_comp = function () {
        return this.comp_;
    };
    /**
     * Get top element.
     */
    PriorityQueue.prototype.top = function () {
        return this.source_.front();
    };
    /* ---------------------------------------------------------
        ELEMENTS I/O
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    PriorityQueue.prototype.push = function () {
        var e_1, _a;
        var elems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elems[_i] = arguments[_i];
        }
        try {
            for (var elems_1 = __values(elems), elems_1_1 = elems_1.next(); !elems_1_1.done; elems_1_1 = elems_1.next()) {
                var elem = elems_1_1.value;
                this.source_.push_back(elem);
                (0, heap_1.push_heap)(this.source_.begin(), this.source_.end(), this.comp_);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (elems_1_1 && !elems_1_1.done && (_a = elems_1.return)) _a.call(elems_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.size();
    };
    /**
     * @inheritDoc
     */
    PriorityQueue.prototype.pop = function () {
        (0, heap_1.pop_heap)(this.source_.begin(), this.source_.end(), this.comp_);
        this.source_.pop_back();
    };
    /**
     * @inheritDoc
     */
    PriorityQueue.prototype.swap = function (obj) {
        var _a;
        _super.prototype.swap.call(this, obj);
        _a = __read([obj.comp_, this.comp_], 2), this.comp_ = _a[0], obj.comp_ = _a[1];
    };
    return PriorityQueue;
}(AdaptorContainer_1.AdaptorContainer));
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=PriorityQueue.js.map