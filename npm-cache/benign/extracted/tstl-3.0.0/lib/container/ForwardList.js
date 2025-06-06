"use strict";
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
exports.ForwardList = void 0;
var Repeater_1 = require("../internal/iterator/disposable/Repeater");
var ForOfAdaptor_1 = require("../internal/iterator/disposable/ForOfAdaptor");
var Vector_1 = require("./Vector");
var ErrorGenerator_1 = require("../internal/exception/ErrorGenerator");
var global_1 = require("../iterator/global");
var comparators_1 = require("../functional/comparators");
var sorting_1 = require("../algorithm/sorting");
/**
 * Singly Linked List.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ForwardList = /** @class */ (function () {
    function ForwardList() {
        var e_1, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.ptr_ = { value: this };
        this.end_ = ForwardList.Iterator.create(this.ptr_, null);
        this.before_begin_ = ForwardList.Iterator.create(this.ptr_, this.end_);
        this.size_ = 0;
        if (args.length === 1 && args[0] instanceof Array) {
            var array = args[0];
            var it = this.before_begin();
            try {
                for (var array_1 = __values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                    var val = array_1_1.value;
                    it = this.insert_after(it, val);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (args.length === 1 && args[0] instanceof ForwardList) {
            this.assign(args[0].begin(), args[0].end());
        }
        else if (args.length === 2)
            this.assign(args[0], args[1]);
    }
    ForwardList.prototype.assign = function (first, last) {
        this.clear();
        this.insert_after(this.before_begin_, first, last);
    };
    /**
     * @inheritDoc
     */
    ForwardList.prototype.clear = function () {
        ForwardList.Iterator._Set_next(this.before_begin_, this.end_);
        this.size_ = 0;
    };
    /* ===============================================================
        ACCESSORS
    =============================================================== */
    /**
     * @inheritDoc
     */
    ForwardList.prototype.size = function () {
        return this.size_;
    };
    /**
     * @inheritDoc
     */
    ForwardList.prototype.empty = function () {
        return this.size_ === 0;
    };
    ForwardList.prototype.front = function (val) {
        var it = this.begin();
        if (arguments.length === 0)
            return it.value;
        else
            it.value = val;
    };
    /**
     * Iterator to before beginning.
     *
     * @return Iterator to the before beginning.
     */
    ForwardList.prototype.before_begin = function () {
        return this.before_begin_;
    };
    /**
     * @inheritDoc
     */
    ForwardList.prototype.begin = function () {
        return this.before_begin_.next();
    };
    /**
     * @inheritDoc
     */
    ForwardList.prototype.end = function () {
        return this.end_;
    };
    /**
     * @inheritDoc
     */
    ForwardList.prototype[Symbol.iterator] = function () {
        return new ForOfAdaptor_1.ForOfAdaptor(this.begin(), this.end());
    };
    /* ===============================================================
        ELEMENTS I/O
            - INSERT
            - ERASE
    ==================================================================
        INSERT
    --------------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ForwardList.prototype.push_front = function (val) {
        this.insert_after(this.before_begin_, val);
    };
    ForwardList.prototype.insert_after = function (pos) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var ret;
        // BRANCHES
        if (args.length === 1)
            ret = this._Insert_by_repeating_val(pos, 1, args[0]);
        else if (typeof args[0] === "number")
            ret = this._Insert_by_repeating_val(pos, args[0], args[1]);
        else
            ret = this._Insert_by_range(pos, args[0], args[1]);
        // RETURNS
        return ret;
    };
    ForwardList.prototype._Insert_by_repeating_val = function (pos, n, val) {
        var first = new Repeater_1.Repeater(0, val);
        var last = new Repeater_1.Repeater(n);
        return this._Insert_by_range(pos, first, last);
    };
    ForwardList.prototype._Insert_by_range = function (pos, first, last) {
        var nodes = [];
        var count = 0;
        for (; !first.equals(last); first = first.next()) {
            var node = ForwardList.Iterator.create(this.ptr_, null, first.value);
            nodes.push(node);
            ++count;
        }
        if (count === 0)
            return pos;
        for (var i = 0; i < count - 1; ++i)
            ForwardList.Iterator._Set_next(nodes[i], nodes[i + 1]);
        ForwardList.Iterator._Set_next(nodes[nodes.length - 1], pos.next());
        ForwardList.Iterator._Set_next(pos, nodes[0]);
        this.size_ += count;
        return nodes[nodes.length - 1];
    };
    /* ---------------------------------------------------------------
        ERASE
    --------------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ForwardList.prototype.pop_front = function () {
        this.erase_after(this.before_begin());
    };
    ForwardList.prototype.erase_after = function (first, last) {
        if (last === void 0) { last = (0, global_1.advance)(first, 2); }
        // SHRINK SIZE
        this.size_ -= Math.max(0, (0, global_1.distance)(first, last) - 1);
        // RE-CONNECT
        ForwardList.Iterator._Set_next(first, last);
        return last;
    };
    /* ===============================================================
        ALGORITHMS
            - UNIQUE & REMOVE(_IF)
            - MERGE & SPLICE
            - SORT
    ==================================================================
        UNIQUE & REMOVE(_IF)
    --------------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ForwardList.prototype.unique = function (binary_pred) {
        if (binary_pred === void 0) { binary_pred = comparators_1.equal_to; }
        for (var it = this.begin().next(); !it.equals(this.end()); it = it.next()) {
            var next_it = it.next();
            if (next_it.equals(this.end()))
                break;
            if (binary_pred(it.value, next_it.value))
                this.erase_after(it);
        }
    };
    /**
     * @inheritDoc
     */
    ForwardList.prototype.remove = function (val) {
        return this.remove_if(function (elem) { return (0, comparators_1.equal_to)(elem, val); });
    };
    /**
     * @inheritDoc
     */
    ForwardList.prototype.remove_if = function (pred) {
        var count = 0;
        for (var it = this.before_begin(); !it.next().equals(this.end()); it = it.next())
            if (pred(it.next().value) === true) {
                ForwardList.Iterator._Set_next(it, it.next().next());
                ++count;
            }
        this.size_ -= count;
    };
    /* ---------------------------------------------------------------
        MERGE & SPLICE
    --------------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ForwardList.prototype.merge = function (from, comp) {
        if (comp === void 0) { comp = comparators_1.less; }
        if (this === from)
            return;
        var it = this.before_begin();
        while (from.empty() === false) {
            var value = from.begin().value;
            while (!it.next().equals(this.end()) &&
                comp(it.next().value, value))
                it = it.next();
            this.splice_after(it, from, from.before_begin());
        }
    };
    ForwardList.prototype.splice_after = function (pos, from, first_before, last) {
        if (first_before === void 0) { first_before = from.before_begin(); }
        if (last === void 0) { last = first_before.next().next(); }
        // DEFAULT PARAMETERS
        if (last === null)
            last = from.end();
        // INSERT & ERASE
        this.insert_after(pos, first_before.next(), last);
        from.erase_after(first_before, last);
    };
    /* ---------------------------------------------------------------
        SORT
    --------------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ForwardList.prototype.sort = function (comp) {
        if (comp === void 0) { comp = comparators_1.less; }
        var vec = new Vector_1.Vector(this.begin(), this.end());
        (0, sorting_1.sort)(vec.begin(), vec.end(), comp);
        this.assign(vec.begin(), vec.end());
    };
    /**
     * @inheritDoc
     */
    ForwardList.prototype.reverse = function () {
        var vec = new Vector_1.Vector(this.begin(), this.end());
        this.assign(vec.rbegin(), vec.rend());
    };
    /* ---------------------------------------------------------------
        UTILITIES
    --------------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    ForwardList.prototype.swap = function (obj) {
        var _a, _b, _c, _d, _e;
        // SIZE AND NODES
        _a = __read([obj.size_, this.size_], 2), this.size_ = _a[0], obj.size_ = _a[1];
        _b = __read([
            obj.before_begin_,
            this.before_begin_,
        ], 2), this.before_begin_ = _b[0], obj.before_begin_ = _b[1];
        _c = __read([obj.end_, this.end_], 2), this.end_ = _c[0], obj.end_ = _c[1];
        // POINTER OF THE SOURCE
        _d = __read([obj.ptr_, this.ptr_], 2), this.ptr_ = _d[0], obj.ptr_ = _d[1];
        _e = __read([obj.ptr_.value, this.ptr_.value], 2), this.ptr_.value = _e[0], obj.ptr_.value = _e[1];
    };
    /**
     * Native function for `JSON.stringify()`.
     *
     * @return An array containing children elements.
     */
    ForwardList.prototype.toJSON = function () {
        var e_2, _a;
        var ret = [];
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var elem = _c.value;
                ret.push(elem);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return ret;
    };
    return ForwardList;
}());
exports.ForwardList = ForwardList;
/**
 *
 */
(function (ForwardList) {
    /**
     * Iterator of {@link ForwardList}
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    var Iterator = /** @class */ (function () {
        /* ---------------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------------- */
        function Iterator(source, next, value) {
            this.source_ptr_ = source;
            this.next_ = next;
            this.value_ = value;
        }
        /**
         * @internal
         */
        Iterator.create = function (source, next, value) {
            return new Iterator(source, next, value);
        };
        /* ---------------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------------- */
        /**
         * Get source container.
         *
         * @return The source container.
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
        Iterator.prototype._Try_value = function () {
            if (this.value_ === undefined) {
                var source = this.source();
                if (this.equals(source.end()) === true)
                    throw ErrorGenerator_1.ErrorGenerator.iterator_end_value(source);
                else if (this.equals(source.before_begin()) === true)
                    throw ErrorGenerator_1.ErrorGenerator.iterator_end_value(source, "before_begin");
            }
        };
        /* ---------------------------------------------------------
            MOVERS
        --------------------------------------------------------- */
        /**
         * @inheritDoc
         */
        Iterator.prototype.next = function () {
            return this.next_;
        };
        /**
         * @inheritDoc
         */
        Iterator.prototype.equals = function (obj) {
            return this === obj;
        };
        /**
         * @internal
         */
        Iterator._Set_next = function (it, next) {
            it.next_ = next;
        };
        return Iterator;
    }());
    ForwardList.Iterator = Iterator;
})(ForwardList || (exports.ForwardList = ForwardList = {}));
//# sourceMappingURL=ForwardList.js.map