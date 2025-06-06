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
exports.List = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var ListContainer_1 = require("../internal/container/linear/ListContainer");
var ListIterator_1 = require("../internal/iterator/ListIterator");
var ReverseIterator_1 = require("../internal/iterator/ReverseIterator");
var comparators_1 = require("../functional/comparators");
/**
 * Doubly Linked List.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        //----
        // DEFAULT CONFIGURATIONS
        //----
        // INHERITS
        var _this = _super.call(this) || this;
        // DECLARE SOURCE POINTER
        _this.ptr_ = { value: _this };
        List.Iterator._Set_source_ptr(_this.end_, _this.ptr_);
        //----
        // BRANCHES
        //----
        if (args.length === 0) {
            // DEFAULT CONSTRUCTOR
        }
        else if (args.length === 1 && args[0] instanceof Array) {
            // INITIALIZER CONSTRUCTOR
            var array = args[0];
            _this.push.apply(_this, __spreadArray([], __read(array), false));
        }
        else if (args.length === 1 && args[0] instanceof List) {
            // COPY CONSTRUCTOR
            var container = args[0];
            _this.assign(container.begin(), container.end());
        }
        else if (args.length === 2) {
            // ASSIGN CONTRUCTOR
            _this.assign(args[0], args[1]);
        }
        return _this;
    }
    List.prototype._Create_iterator = function (prev, next, val) {
        return List.Iterator.create(this.ptr_, prev, next, val);
    };
    List.prototype.front = function (val) {
        if (arguments.length === 0)
            return this.begin_.value;
        else
            this.begin_.value = val;
    };
    List.prototype.back = function (val) {
        var it = this.end().prev();
        if (arguments.length === 0)
            return it.value;
        else
            it.value = val;
    };
    /* ===============================================================
        ALGORITHMS
            - UNIQUE & REMOVE(_IF)
            - MERGE & SPLICE
            - SORT & SWAP
    ==================================================================
        UNIQUE & REMOVE(_IF)
    --------------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    List.prototype.unique = function (binary_pred) {
        if (binary_pred === void 0) { binary_pred = comparators_1.equal_to; }
        var it = this.begin().next();
        while (!it.equals(this.end())) {
            if (binary_pred(it.value, it.prev().value) === true)
                it = this.erase(it);
            else
                it = it.next();
        }
    };
    /**
     * @inheritDoc
     */
    List.prototype.remove = function (val) {
        return this.remove_if(function (elem) { return (0, comparators_1.equal_to)(elem, val); });
    };
    /**
     * @inheritDoc
     */
    List.prototype.remove_if = function (pred) {
        var it = this.begin();
        while (!it.equals(this.end())) {
            if (pred(it.value) === true)
                it = this.erase(it);
            else
                it = it.next();
        }
    };
    /* ---------------------------------------------------------
        MERGE & SPLICE
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    List.prototype.merge = function (source, comp) {
        if (comp === void 0) { comp = comparators_1.less; }
        if (this === source)
            return;
        var it = this.begin();
        while (source.empty() === false) {
            var first = source.begin();
            while (!it.equals(this.end()) &&
                comp(it.value, first.value) === true)
                it = it.next();
            this.splice(it, source, first);
        }
    };
    List.prototype.splice = function (pos, obj, first, last) {
        if (first === undefined) {
            first = obj.begin();
            last = obj.end();
        }
        else if (last === undefined)
            last = first.next();
        this.insert(pos, first, last);
        obj.erase(first, last);
    };
    /* ---------------------------------------------------------
        SORT & SWAP
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    List.prototype.sort = function (comp) {
        if (comp === void 0) { comp = comparators_1.less; }
        this._Quick_sort(this.begin(), this.end().prev(), comp);
    };
    List.prototype._Quick_sort = function (first, last, comp) {
        if (!first.equals(last) &&
            !last.equals(this.end()) &&
            !first.equals(last.next())) {
            var temp = this._Quick_sort_partition(first, last, comp);
            this._Quick_sort(first, temp.prev(), comp);
            this._Quick_sort(temp.next(), last, comp);
        }
    };
    List.prototype._Quick_sort_partition = function (first, last, comp) {
        var _a, _b;
        var standard = last.value; // TO BE COMPARED
        var prev = first.prev(); // TO BE SMALLEST
        var it = first;
        for (; !it.equals(last); it = it.next())
            if (comp(it.value, standard)) {
                prev = prev.equals(this.end()) ? first : prev.next();
                _a = __read([it.value, prev.value], 2), prev.value = _a[0], it.value = _a[1];
            }
        prev = prev.equals(this.end()) ? first : prev.next();
        _b = __read([it.value, prev.value], 2), prev.value = _b[0], it.value = _b[1];
        return prev;
    };
    /**
     * @inheritDoc
     */
    List.prototype.reverse = function () {
        var begin = this.end_.prev();
        var prev_of_end = this.begin();
        for (var it = this.begin(); !it.equals(this.end());) {
            var prev = it.prev();
            var next = it.next();
            List.Iterator._Set_prev(it, next);
            List.Iterator._Set_next(it, prev);
            it = next;
        }
        // ADJUST THE BEGIN AND END
        this.begin_ = begin; // THE NEW BEGIN
        List.Iterator._Set_prev(this.end_, prev_of_end);
        List.Iterator._Set_next(this.end_, begin);
    };
    /**
     * @inheritDoc
     */
    List.prototype.swap = function (obj) {
        var _a, _b;
        // CHANGE CONTENTS
        _super.prototype.swap.call(this, obj);
        // CHANGE ITERATORS' SOURCES
        _a = __read([obj.ptr_, this.ptr_], 2), this.ptr_ = _a[0], obj.ptr_ = _a[1];
        _b = __read([obj.ptr_.value, this.ptr_.value], 2), this.ptr_.value = _b[0], obj.ptr_.value = _b[1];
    };
    return List;
}(ListContainer_1.ListContainer));
exports.List = List;
/**
 *
 */
(function (List) {
    /**
     * Iterator of {@link List}
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    var Iterator = /** @class */ (function (_super) {
        __extends(Iterator, _super);
        /* ---------------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------------- */
        function Iterator(sourcePtr, prev, next, value) {
            var _this = _super.call(this, prev, next, value) || this;
            _this.source_ptr_ = sourcePtr;
            return _this;
        }
        /**
         * @internal
         */
        Iterator.create = function (sourcePtr, prev, next, value) {
            return new Iterator(sourcePtr, prev, next, value);
        };
        /**
         * @inheritDoc
         */
        Iterator.prototype.reverse = function () {
            return new ReverseIterator(this);
        };
        /**
         * @internal
         */
        Iterator._Set_source_ptr = function (it, ptr) {
            it.source_ptr_ = ptr;
        };
        /* ---------------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------------- */
        /**
         * @inheritDoc
         */
        Iterator.prototype.source = function () {
            return this.source_ptr_.value;
        };
        Object.defineProperty(Iterator.prototype, "value", {
            /**
             * @inheritDoc
             */
            get: function () {
                this._Try_value();
                return this.value_;
            },
            /**
             * @inheritDoc
             */
            set: function (val) {
                this._Try_value();
                this.value_ = val;
            },
            enumerable: false,
            configurable: true
        });
        /* ---------------------------------------------------------------
            COMPARISON
        --------------------------------------------------------------- */
        Iterator.prototype.equals = function (obj) {
            return this === obj;
        };
        return Iterator;
    }(ListIterator_1.ListIterator));
    List.Iterator = Iterator;
    /**
     * Reverse iterator of {@link List}
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    var ReverseIterator = /** @class */ (function (_super) {
        __extends(ReverseIterator, _super);
        function ReverseIterator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /* ---------------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------------- */
        ReverseIterator.prototype._Create_neighbor = function (base) {
            return new ReverseIterator(base);
        };
        Object.defineProperty(ReverseIterator.prototype, "value", {
            /* ---------------------------------------------------------
                ACCESSORS
            --------------------------------------------------------- */
            /**
             * @inheritDoc
             */
            get: function () {
                return this.base_.value;
            },
            /**
             * @inheritDoc
             */
            set: function (val) {
                this.base_.value = val;
            },
            enumerable: false,
            configurable: true
        });
        return ReverseIterator;
    }(ReverseIterator_1.ReverseIterator));
    List.ReverseIterator = ReverseIterator;
})(List || (exports.List = List = {}));
//# sourceMappingURL=List.js.map