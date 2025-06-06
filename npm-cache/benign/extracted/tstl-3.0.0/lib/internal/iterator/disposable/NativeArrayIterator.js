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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeArrayIterator = void 0;
var NativeArrayIterator = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    function NativeArrayIterator(data, index) {
        this.data_ = data;
        this.index_ = index;
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    NativeArrayIterator.prototype.index = function () {
        return this.index_;
    };
    Object.defineProperty(NativeArrayIterator.prototype, "value", {
        get: function () {
            return this.data_[this.index_];
        },
        enumerable: false,
        configurable: true
    });
    /* ---------------------------------------------------------
        MOVERS
    --------------------------------------------------------- */
    NativeArrayIterator.prototype.prev = function () {
        --this.index_;
        return this;
    };
    NativeArrayIterator.prototype.next = function () {
        ++this.index_;
        return this;
    };
    NativeArrayIterator.prototype.advance = function (n) {
        this.index_ += n;
        return this;
    };
    /* ---------------------------------------------------------
        COMPARES
    --------------------------------------------------------- */
    NativeArrayIterator.prototype.equals = function (obj) {
        return this.data_ === obj.data_ && this.index_ === obj.index_;
    };
    NativeArrayIterator.prototype.swap = function (obj) {
        var _a, _b;
        _a = __read([obj.data_, this.data_], 2), this.data_ = _a[0], obj.data_ = _a[1];
        _b = __read([obj.index_, this.index_], 2), this.index_ = _b[0], obj.index_ = _b[1];
    };
    return NativeArrayIterator;
}());
exports.NativeArrayIterator = NativeArrayIterator;
//# sourceMappingURL=NativeArrayIterator.js.map