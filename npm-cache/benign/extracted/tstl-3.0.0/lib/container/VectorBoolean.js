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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorBoolean = void 0;
var ArrayContainer_1 = require("../internal/container/linear/ArrayContainer");
var ArrayIterator_1 = require("../internal/iterator/ArrayIterator");
var ArrayReverseIterator_1 = require("../internal/iterator/ArrayReverseIterator");
var TreeMap_1 = require("./TreeMap");
var NativeArrayIterator_1 = require("../internal/iterator/disposable/NativeArrayIterator");
var Pair_1 = require("../utility/Pair");
var comparators_1 = require("../functional/comparators");
/**
 * Vector only for `boolean`.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var VectorBoolean = /** @class */ (function (_super) {
    __extends(VectorBoolean, _super);
    function VectorBoolean() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        if (args.length === 1 && args[0] instanceof VectorBoolean) {
            // COPY CONSTRUCTOR
            var obj = args[0];
            _this.data_ = new TreeMap_1.TreeMap(obj.data_.begin(), obj.data_.end());
            _this.size_ = obj.size_;
        }
        else if (args.length === 1 && args[0] instanceof Array) {
            // INITIALIZER
            _this.clear();
            _this.push.apply(_this, __spreadArray([], __read(args[0]), false));
        }
        else if (args.length === 2) {
            // ASSIGNER
            _this.assign(args[0], args[1]);
        } // DEFAULT CONSTRUCTOR
        else
            _this.clear();
        return _this;
    }
    VectorBoolean.prototype.assign = function (first, last) {
        this.clear();
        this.insert(this.end(), first, last);
    };
    /**
     * @inheritDoc
     */
    VectorBoolean.prototype.clear = function () {
        this.data_ = new TreeMap_1.TreeMap();
        this.size_ = 0;
    };
    /**
     * @inheritDoc
     */
    VectorBoolean.prototype.resize = function (n) {
        var expansion = n - this.size();
        if (expansion > 0)
            this.insert(this.end(), expansion, false);
        else if (expansion < 0)
            this.erase(this.end().advance(-expansion), this.end());
    };
    /**
     * Flip all values.
     */
    VectorBoolean.prototype.flip = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.data_), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                entry.second = !entry.second;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @inheritDoc
     */
    VectorBoolean.prototype.swap = function (obj) {
        var _a, _b;
        _a = __read([obj.data_, this.data_], 2), this.data_ = _a[0], obj.data_ = _a[1];
        _b = __read([obj.size_, this.size_], 2), this.size_ = _b[0], obj.size_ = _b[1];
    };
    /* =========================================================
        ACCESSORS
    ========================================================= */
    VectorBoolean.prototype.source = function () {
        return this;
    };
    /**
     * @inheritDoc
     */
    VectorBoolean.prototype.size = function () {
        return this.size_;
    };
    VectorBoolean.prototype._At = function (index) {
        // FIND THE NEAREST NODE OF LEFT
        var it = this._Find_node(index);
        return it.second; // RETURNS
    };
    VectorBoolean.prototype._Set = function (index, val) {
        val = !!val; // SIFT
        // FIND THE NEAREAST NODE OF LEFT
        var it = this._Find_node(index);
        if (it.second === val)
            return; // NO NEED TO CHANGE
        //----
        // CHANGE VALUE
        //----
        if (it.first === index) {
            // CHANGE VALUE DIRECTLY
            it.second = val;
        }
        else {
            // EMPLACE NEW NODE
            it = this.data_.emplace(index, val).first;
        }
        //----
        // POST-PROCESS
        //----
        // THE LAST ELEMENT, NO POST-PROCESS REQUIRED
        if (index === this.size() - 1)
            return;
        // LIST UP NEIGHBORS
        var prev = it.prev();
        var next = it.next();
        // ARRANGE LEFT SIDE
        if ((0, comparators_1.not_equal_to)(prev, this.data_.end()) && prev.second === it.second)
            this.data_.erase(it);
        // ARRANGE RIGHT SIDE
        if (next.equals(this.data_.end()) === true ||
            next.first !== index + 1 ||
            next.second !== val) {
            // 1) IT'S THE LAST NODE
            // 2) NEXT NODE DOES NOT POINT THE INDEX + 1 (NEAREST NEIGHBOR)
            // 3) NEXT NODE'S VALUE IS DIFFERENT WITH THE CHANGED VALUE
            //----
            // EMPLACE NEW NODE WITH OLD
            this.data_.emplace(index + 1, !val);
        }
        else {
            // NEXT NODE'S VALUE IS SAME WITH THE CHANGED VALUE
            //----
            // ERASE THE NEXT NODE
            this.data_.erase(next);
        }
    };
    /**
     * @inheritDoc
     */
    VectorBoolean.prototype.nth = function (index) {
        return new VectorBoolean.Iterator(this, index);
    };
    VectorBoolean.prototype._Find_node = function (index) {
        return this.data_.upper_bound(index).prev();
    };
    /* =========================================================
        ELEMENTS I/O
            - PUSH & POP
            - INSERT
            - ERASE
    ============================================================
        PUSH & POP
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    VectorBoolean.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        if (items.length === 0)
            return this.size();
        var first = new NativeArrayIterator_1.NativeArrayIterator(items, 0);
        var last = new NativeArrayIterator_1.NativeArrayIterator(items, items.length);
        this._Insert_by_range(this.end(), first, last);
        return this.size();
    };
    /**
     * @inheritDoc
     */
    VectorBoolean.prototype.push_back = function (val) {
        var it = this.data_.rbegin();
        var index = this.size_++;
        val = !!val; // SIFT
        // EMPLACE OR NOT
        if (this.data_.empty() || it.second !== val)
            this.data_.emplace(index, val);
    };
    VectorBoolean.prototype._Pop_back = function () {
        var it = this.data_.rbegin();
        var index = --this.size_;
        // ERASE OR NOT
        if (it.first === index)
            this.data_.erase(it.base());
    };
    /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
    VectorBoolean.prototype._Insert_by_repeating_val = function (pos, n, val) {
        // RESERVE ELEMENTS -> THE REPEATED COUNT AND VALUE
        var elements = [];
        elements.push(new Pair_1.Pair(n, val));
        // DO INSERT
        if (pos.equals(this.end()) === true)
            return this._Insert_to_end(elements);
        else
            return this._Insert_to_middle(pos, elements);
    };
    VectorBoolean.prototype._Insert_by_range = function (pos, first, last) {
        // RESERVE ELEMENTS -> REPEATED SIZE & VALUE
        var elements = [];
        for (var it = first; !it.equals(last); it = it.next()) {
            if (elements.length === 0 ||
                elements[elements.length - 1].second !== it.value)
                elements.push(new Pair_1.Pair(1, it.value));
            else
                ++elements[elements.length - 1].first;
        }
        if (pos.equals(this.end()) === true)
            return this._Insert_to_end(elements);
        else
            return this._Insert_to_middle(pos, elements);
    };
    VectorBoolean.prototype._Insert_to_middle = function (pos, elements) {
        var first = this._Find_node(pos.index());
        for (var it = first; !it.equals(this.data_.end()); it = it.next()) {
            // COMPUTE SIZE TO ENROLL
            var next = it.next();
            var sx = it.first < pos.index()
                ? pos.index() // POSITION TO INSERT
                : it.first; // CURRENT POINT
            var sy = next.equals(this.data_.end())
                ? this.size() // IT'S THE LAST ELEMENT
                : next.first; // TO NEXT ELEMENT
            // DO ENROLL
            var size = sy - sx;
            var value = !!it.second;
            elements.push(new Pair_1.Pair(size, value));
        }
        // ERASE BACK-SIDE ELEMENTS FOR THE POST-INSERTION
        this.size_ = pos.index();
        this.data_.erase(first.first === pos.index() ? first : first.next(), this.data_.end());
        // DO POST-INSERTION
        return this._Insert_to_end(elements);
    };
    VectorBoolean.prototype._Insert_to_end = function (elements) {
        var old_size = this.size();
        var last_value = this.data_.empty()
            ? null
            : this.data_.rbegin().second;
        for (var i = 0; i < elements.length; ++i) {
            var p = elements[i];
            // INDEXING
            var index = this.size();
            var value = !!p.second;
            this.size_ += p.first;
            // NEED NOT TO EMPLACE, JUST SKIP
            if (i === 0 && value === last_value)
                continue;
            // DO EMPLACE
            this.data_.emplace(index, value);
        }
        return this.begin().advance(old_size);
    };
    /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
    VectorBoolean.prototype._Erase_by_range = function (first, last) {
        var elements = [];
        if (last.equals(this.end()) === false) {
            var last_index = Math.min(this.size(), last.index());
            for (var it = this._Find_node(last_index); !it.equals(this.data_.end()); it = it.next()) {
                var next = it.next();
                var sx = Math.max(it.first, last_index);
                var sy = next.equals(this.data_.end())
                    ? this.size() // IT'S THE LAST ELEMENT
                    : next.first; // TO NEXT ELEMENT
                var size = sy - sx;
                var value = it.second;
                elements.push(new Pair_1.Pair(size, value));
            }
        }
        this.size_ = first.index();
        this.data_.erase(this.data_.lower_bound(this.size_), this.data_.end());
        return this._Insert_to_end(elements);
    };
    return VectorBoolean;
}(ArrayContainer_1.ArrayContainer));
exports.VectorBoolean = VectorBoolean;
/**
 *
 */
(function (VectorBoolean) {
    // BODY
    VectorBoolean.Iterator = ArrayIterator_1.ArrayIterator;
    VectorBoolean.ReverseIterator = ArrayReverseIterator_1.ArrayReverseIterator;
})(VectorBoolean || (exports.VectorBoolean = VectorBoolean = {}));
//# sourceMappingURL=VectorBoolean.js.map