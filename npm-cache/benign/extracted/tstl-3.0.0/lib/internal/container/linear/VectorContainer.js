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
exports.VectorContainer = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var ArrayContainer_1 = require("./ArrayContainer");
var VectorContainer = /** @class */ (function (_super) {
    __extends(VectorContainer, _super);
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    /**
     * Default Constructor.
     */
    function VectorContainer() {
        return _super.call(this) || this;
    }
    VectorContainer.prototype.assign = function (first, second) {
        this.clear();
        this.insert(this.end(), first, second);
    };
    /**
     * @inheritDoc
     */
    VectorContainer.prototype.clear = function () {
        this.data_.splice(0, this.data_.length);
    };
    /**
     * @inheritDoc
     */
    VectorContainer.prototype.resize = function (n) {
        this.data_.length = n;
    };
    /* =========================================================
        ACCESSORS
    ========================================================= */
    /**
     * @inheritDoc
     */
    VectorContainer.prototype.size = function () {
        return this.data_.length;
    };
    VectorContainer.prototype._At = function (index) {
        return this.data_[index];
    };
    VectorContainer.prototype._Set = function (index, val) {
        this.data_[index] = val;
    };
    /**
     * Access data.
     *
     * @return An array capsuled by this {@link Vector}.
     */
    VectorContainer.prototype.data = function () {
        return this.data_;
    };
    /**
     * @inheritDoc
     */
    VectorContainer.prototype[Symbol.iterator] = function () {
        return this.data_[Symbol.iterator]();
    };
    /* =========================================================
        ELEMENTS I/O
            - INSERT
            - ERASE
    ============================================================
        INSERT
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    VectorContainer.prototype.push = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return (_a = this.data_).push.apply(_a, __spreadArray([], __read(items), false));
    };
    /**
     * @inheritDoc
     */
    VectorContainer.prototype.push_back = function (val) {
        this.data_.push(val);
    };
    VectorContainer.prototype._Insert_by_range = function (position, first, last) {
        var _a;
        if (position.index() >= this.size()) {
            // WHEN INSERT TO THE LAST
            var prev_size = this.size();
            for (; !first.equals(last); first = first.next())
                this.data_.push(first.value);
            return this.nth(prev_size);
        }
        else {
            //----
            // INSERT TO THE MIDDLE POSITION
            //----
            // CUT RIGHT SIDE
            var spliced_array = this.data_.splice(position.index());
            // INSERT ELEMENTS
            for (; !first.equals(last); first = first.next())
                this.data_.push(first.value);
            (_a = this.data_).push.apply(_a, __spreadArray([], __read(spliced_array), false)); // CONCAT THE SPLICEDS
            return position;
        }
    };
    /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
    VectorContainer.prototype._Pop_back = function () {
        this.data_.pop();
    };
    VectorContainer.prototype._Erase_by_range = function (first, last) {
        if (first.index() >= this.size())
            return first;
        // ERASE ELEMENTS
        if (last.index() >= this.size()) {
            this.data_.splice(first.index());
            return this.end();
        }
        else
            this.data_.splice(first.index(), last.index() - first.index());
        return first;
    };
    /* ---------------------------------------------------------------
        UTILITIES
    --------------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    VectorContainer.prototype.equals = function (obj) {
        return this.data_ === obj.data_;
    };
    /**
     * @inheritDoc
     */
    VectorContainer.prototype.swap = function (obj) {
        var _a;
        _a = __read([
            obj.data_,
            this.data_,
        ], 2), this.data_ = _a[0], obj.data_ = _a[1];
    };
    /**
     * @inheritDoc
     */
    VectorContainer.prototype.toJSON = function () {
        return this.data_;
    };
    return VectorContainer;
}(ArrayContainer_1.ArrayContainer));
exports.VectorContainer = VectorContainer;
//# sourceMappingURL=VectorContainer.js.map