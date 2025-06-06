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
exports.HashMultiMap = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var MultiMap_1 = require("../base/container/MultiMap");
var IHashContainer_1 = require("../internal/container/associative/IHashContainer");
var MapElementList_1 = require("../internal/container/associative/MapElementList");
var MapHashBuckets_1 = require("../internal/hash/MapHashBuckets");
var NativeArrayIterator_1 = require("../internal/iterator/disposable/NativeArrayIterator");
var Entry_1 = require("../utility/Entry");
/**
 * Multiple-key Map based on Hash buckets.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var HashMultiMap = /** @class */ (function (_super) {
    __extends(HashMultiMap, _super);
    function HashMultiMap() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this, function (thisArg) { return new MapElementList_1.MapElementList(thisArg); }) || this;
        IHashContainer_1.IHashContainer.construct.apply(IHashContainer_1.IHashContainer, __spreadArray([_this,
            HashMultiMap,
            function (hash, pred) {
                _this.buckets_ = new MapHashBuckets_1.MapHashBuckets(_this, hash, pred);
            }], __read(args), false));
        return _this;
    }
    /* ---------------------------------------------------------
        ASSIGN & CLEAR
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.clear = function () {
        this.buckets_.clear();
        _super.prototype.clear.call(this);
    };
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.swap = function (obj) {
        var _a, _b;
        // SWAP CONTENTS
        _a = __read([obj.data_, this.data_], 2), this.data_ = _a[0], obj.data_ = _a[1];
        MapElementList_1.MapElementList._Swap_associative(this.data_, obj.data_);
        // SWAP BUCKETS
        MapHashBuckets_1.MapHashBuckets._Swap_source(this.buckets_, obj.buckets_);
        _b = __read([obj.buckets_, this.buckets_], 2), this.buckets_ = _b[0], obj.buckets_ = _b[1];
    };
    /* =========================================================
        ACCESSORS
            - MEMBER
            - HASH
    ============================================================
        MEMBER
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.find = function (key) {
        return this.buckets_.find(key);
    };
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.count = function (key) {
        var e_1, _a;
        // FIND MATCHED BUCKET
        var index = this.bucket(key);
        var bucket = this.buckets_.at(index);
        // ITERATE THE BUCKET
        var cnt = 0;
        try {
            for (var bucket_1 = __values(bucket), bucket_1_1 = bucket_1.next(); !bucket_1_1.done; bucket_1_1 = bucket_1.next()) {
                var it = bucket_1_1.value;
                if (this.buckets_.key_eq()(it.first, key))
                    ++cnt;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (bucket_1_1 && !bucket_1_1.done && (_a = bucket_1.return)) _a.call(bucket_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return cnt;
    };
    HashMultiMap.prototype.begin = function (index) {
        if (index === void 0) { index = null; }
        if (index === null)
            return _super.prototype.begin.call(this);
        else
            return this.buckets_.at(index)[0];
    };
    HashMultiMap.prototype.end = function (index) {
        if (index === void 0) { index = null; }
        if (index === null)
            return _super.prototype.end.call(this);
        else {
            var bucket = this.buckets_.at(index);
            return bucket[bucket.length - 1].next();
        }
    };
    HashMultiMap.prototype.rbegin = function (index) {
        if (index === void 0) { index = null; }
        return this.end(index).reverse();
    };
    HashMultiMap.prototype.rend = function (index) {
        if (index === void 0) { index = null; }
        return this.begin(index).reverse();
    };
    /* ---------------------------------------------------------
        HASH
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.bucket_count = function () {
        return this.buckets_.length();
    };
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.bucket_size = function (index) {
        return this.buckets_.at(index).length;
    };
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.load_factor = function () {
        return this.buckets_.load_factor();
    };
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.hash_function = function () {
        return this.buckets_.hash_function();
    };
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.key_eq = function () {
        return this.buckets_.key_eq();
    };
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.bucket = function (key) {
        return this.hash_function()(key) % this.buckets_.length();
    };
    HashMultiMap.prototype.max_load_factor = function (z) {
        if (z === void 0) { z = null; }
        return this.buckets_.max_load_factor(z);
    };
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.reserve = function (n) {
        this.buckets_.reserve(n);
    };
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.rehash = function (n) {
        if (n <= this.bucket_count())
            return;
        this.buckets_.rehash(n);
    };
    HashMultiMap.prototype._Key_eq = function (x, y) {
        return this.key_eq()(x, y);
    };
    /* =========================================================
        ELEMENTS I/O
            - INSERT
            - POST-PROCESS
    ============================================================
        INSERT
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.emplace = function (key, val) {
        // INSERT
        var it = this.data_.insert(this.data_.end(), new Entry_1.Entry(key, val));
        this._Handle_insert(it, it.next()); // POST-PROCESS
        return it;
    };
    /**
     * @inheritDoc
     */
    HashMultiMap.prototype.emplace_hint = function (hint, key, val) {
        // INSERT
        var it = this.data_.insert(hint, new Entry_1.Entry(key, val));
        // POST-PROCESS
        this._Handle_insert(it, it.next());
        return it;
    };
    HashMultiMap.prototype._Insert_by_range = function (first, last) {
        //--------
        // INSERTIONS
        //--------
        // PRELIMINARIES
        var entries = [];
        for (var it = first; !it.equals(last); it = it.next())
            entries.push(new Entry_1.Entry(it.value.first, it.value.second));
        // INSERT ELEMENTS
        var my_first = this.data_.insert(this.data_.end(), new NativeArrayIterator_1.NativeArrayIterator(entries, 0), new NativeArrayIterator_1.NativeArrayIterator(entries, entries.length));
        //--------
        // HASHING INSERTED ITEMS
        //--------
        // IF NEEDED, HASH_BUCKET TO HAVE SUITABLE SIZE
        if (this.size() > this.buckets_.capacity())
            this.reserve(Math.max(this.size(), this.buckets_.capacity() * 2));
        // POST-PROCESS
        this._Handle_insert(my_first, this.end());
    };
    /* ---------------------------------------------------------
        POST-PROCESS
    --------------------------------------------------------- */
    HashMultiMap.prototype._Handle_insert = function (first, last) {
        for (; !first.equals(last); first = first.next())
            this.buckets_.insert(first);
    };
    HashMultiMap.prototype._Handle_erase = function (first, last) {
        for (; !first.equals(last); first = first.next())
            this.buckets_.erase(first);
    };
    return HashMultiMap;
}(MultiMap_1.MultiMap));
exports.HashMultiMap = HashMultiMap;
/**
 *
 */
(function (HashMultiMap) {
    // BODY
    HashMultiMap.Iterator = MapElementList_1.MapElementList.Iterator;
    HashMultiMap.ReverseIterator = MapElementList_1.MapElementList.ReverseIterator;
})(HashMultiMap || (exports.HashMultiMap = HashMultiMap = {}));
//# sourceMappingURL=HashMultiMap.js.map