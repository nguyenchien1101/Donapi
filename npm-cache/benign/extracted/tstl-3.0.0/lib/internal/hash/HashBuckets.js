"use strict";
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
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
exports.HashBuckets = void 0;
/**
 * Hash buckets
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var HashBuckets = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    function HashBuckets(fetcher, hasher) {
        this.fetcher_ = fetcher;
        this.hasher_ = hasher;
        this.max_load_factor_ = DEFAULT_MAX_FACTOR;
        this.data_ = [];
        this.size_ = 0;
        this.initialize();
    }
    HashBuckets.prototype.clear = function () {
        this.data_ = [];
        this.size_ = 0;
        this.initialize();
    };
    HashBuckets.prototype.rehash = function (length) {
        var e_1, _a, e_2, _b;
        length = Math.max(length, MIN_BUCKET_COUNT);
        var data = [];
        for (var i = 0; i < length; ++i)
            data.push([]);
        try {
            for (var _c = __values(this.data_), _d = _c.next(); !_d.done; _d = _c.next()) {
                var row = _d.value;
                try {
                    for (var row_1 = (e_2 = void 0, __values(row)), row_1_1 = row_1.next(); !row_1_1.done; row_1_1 = row_1.next()) {
                        var elem = row_1_1.value;
                        var index = this.hasher_(this.fetcher_(elem)) % data.length;
                        data[index].push(elem);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (row_1_1 && !row_1_1.done && (_b = row_1.return)) _b.call(row_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.data_ = data;
    };
    HashBuckets.prototype.reserve = function (length) {
        if (length > this.capacity()) {
            length = Math.floor(length / this.max_load_factor_);
            this.rehash(length);
        }
    };
    HashBuckets.prototype.initialize = function () {
        for (var i = 0; i < MIN_BUCKET_COUNT; ++i)
            this.data_.push([]);
    };
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    HashBuckets.prototype.length = function () {
        return this.data_.length;
    };
    HashBuckets.prototype.capacity = function () {
        return this.data_.length * this.max_load_factor_;
    };
    HashBuckets.prototype.at = function (index) {
        return this.data_[index];
    };
    HashBuckets.prototype.load_factor = function () {
        return this.size_ / this.length();
    };
    HashBuckets.prototype.max_load_factor = function (z) {
        if (z === void 0) { z = null; }
        if (z === null)
            return this.max_load_factor_;
        else
            this.max_load_factor_ = z;
    };
    HashBuckets.prototype.hash_function = function () {
        return this.hasher_;
    };
    /* ---------------------------------------------------------
        ELEMENTS I/O
    --------------------------------------------------------- */
    HashBuckets.prototype.index = function (elem) {
        return this.hasher_(this.fetcher_(elem)) % this.length();
    };
    HashBuckets.prototype.insert = function (val) {
        var capacity = this.capacity();
        if (++this.size_ > capacity)
            this.reserve(capacity * 2);
        var index = this.index(val);
        this.data_[index].push(val);
    };
    HashBuckets.prototype.erase = function (val) {
        var index = this.index(val);
        var bucket = this.data_[index];
        for (var i = 0; i < bucket.length; ++i)
            if (bucket[i] === val) {
                bucket.splice(i, 1);
                --this.size_;
                break;
            }
    };
    return HashBuckets;
}());
exports.HashBuckets = HashBuckets;
var MIN_BUCKET_COUNT = 10;
var DEFAULT_MAX_FACTOR = 1.0;
//# sourceMappingURL=HashBuckets.js.map