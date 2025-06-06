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
exports.Deque = void 0;
var ArrayContainer_1 = require("../internal/container/linear/ArrayContainer");
var ArrayIterator_1 = require("../internal/iterator/ArrayIterator");
var ArrayReverseIterator_1 = require("../internal/iterator/ArrayReverseIterator");
var NativeArrayIterator_1 = require("../internal/iterator/disposable/NativeArrayIterator");
var Pair_1 = require("../utility/Pair");
var InvalidArgument_1 = require("../exception/InvalidArgument");
var global_1 = require("../iterator/global");
var ErrorGenerator_1 = require("../internal/exception/ErrorGenerator");
/**
 * Double ended queue.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var Deque = /** @class */ (function (_super) {
    __extends(Deque, _super);
    function Deque() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        // CONSTRUCTORS BRANCH
        if (args.length === 0) {
            _this.clear();
        }
        if (args.length === 1 && args[0] instanceof Array) {
            // INITIALIZER CONSTRUCTOR
            var array = args[0];
            var first = new NativeArrayIterator_1.NativeArrayIterator(array, 0);
            var last = new NativeArrayIterator_1.NativeArrayIterator(array, array.length);
            _this.assign(first, last);
        }
        else if (args.length === 1 && args[0] instanceof Deque) {
            // COPY CONSTRUCTOR
            var container = args[0];
            _this.assign(container.begin(), container.end());
        }
        else if (args.length === 2) {
            // ASSIGN CONSTRUCTOR
            _this.assign(args[0], args[1]);
        }
        return _this;
    }
    Deque.prototype.assign = function (first, second) {
        // CLEAR PREVIOUS CONTENTS
        this.clear();
        // INSERT ITEMS
        this.insert(this.end(), first, second);
    };
    /**
     * @inheritDoc
     */
    Deque.prototype.clear = function () {
        // CLEAR CONTENTS
        this.matrix_ = [[]];
        // RE-INDEX
        this.size_ = 0;
        this.capacity_ = Deque.MIN_CAPACITY;
    };
    /**
     * @inheritDoc
     */
    Deque.prototype.resize = function (n) {
        n = Deque._Emend(n, "resize");
        var expansion = n - this.size();
        if (expansion > 0)
            this.insert(this.end(), expansion, undefined);
        else if (expansion < 0)
            this.erase(this.end().advance(-expansion), this.end());
    };
    /**
     * Reserve {@link capacity} enable to store *n* elements.
     *
     * @param n The capacity to reserve.
     */
    Deque.prototype.reserve = function (n) {
        this._Reserve(Deque._Emend(n, "reserve"));
    };
    Deque.prototype._Reserve = function (n) {
        // NEW MEMBERS TO BE ASSSIGNED
        var matrix = [[]];
        var length = this._Compute_col_size(n);
        //--------
        // RE-FILL
        //--------
        for (var r = 0; r < this.matrix_.length; ++r) {
            var row = this.matrix_[r];
            for (var c = 0; c < row.length; ++c) {
                var new_row = matrix[matrix.length - 1];
                if (matrix.length < Deque.ROW_SIZE &&
                    new_row.length === length) {
                    new_row = [];
                    matrix.push(new_row);
                }
                new_row.push(row[c]);
            }
        }
        // ASSIGN MEMBERS
        this.matrix_ = matrix;
        this.capacity_ = n;
    };
    /**
     * Shrink {@link capacity} to actual {@link size}.
     */
    Deque.prototype.shrink_to_fit = function () {
        this._Reserve(this.size());
    };
    /**
     * @inheritDoc
     */
    Deque.prototype.swap = function (obj) {
        this._Swap(obj);
    };
    Deque.prototype._Swap = function (obj) {
        var _a, _b, _c;
        // SWAP CONTENTS
        _a = __read([obj.matrix_, this.matrix_], 2), this.matrix_ = _a[0], obj.matrix_ = _a[1];
        _b = __read([obj.size_, this.size_], 2), this.size_ = _b[0], obj.size_ = _b[1];
        _c = __read([obj.capacity_, this.capacity_], 2), this.capacity_ = _c[0], obj.capacity_ = _c[1];
    };
    Deque._Emend = function (n, method) {
        n = Math.floor(n);
        if (n <= 0)
            throw new InvalidArgument_1.InvalidArgument("Error on Deque.".concat(method, "(): n must be positive integer -> (n = ").concat(n, ")"));
        return n;
    };
    /* =========================================================
        ACCESSORS
            - BASIC ELEMENTS
            - INDEX ACCESSORS
    ============================================================
        BASIC ELEMENTS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    Deque.prototype.size = function () {
        return this.size_;
    };
    /**
     * The capacity to store elements.
     *
     * @return The capacity.
     */
    Deque.prototype.capacity = function () {
        return this.capacity_;
    };
    /**
     * @inheritDoc
     */
    Deque.prototype.nth = function (index) {
        return new Deque.Iterator(this, index);
    };
    /**
     * @inheritDoc
     */
    Deque.prototype[Symbol.iterator] = function () {
        return new Deque.ForOfAdaptor(this.matrix_);
    };
    Deque.prototype.source = function () {
        return this;
    };
    /* ---------------------------------------------------------
        INDEX ACCESSORS
    --------------------------------------------------------- */
    Deque.prototype._At = function (index) {
        var indexPair = this._Fetch_index(index);
        return this.matrix_[indexPair.first][indexPair.second];
    };
    Deque.prototype._Set = function (index, val) {
        var indexPair = this._Fetch_index(index);
        this.matrix_[indexPair.first][indexPair.second] = val;
    };
    Deque.prototype._Fetch_index = function (index) {
        // Fetch row and column's index.
        var row;
        for (row = 0; row < this.matrix_.length; row++) {
            var array = this.matrix_[row];
            if (index < array.length)
                break;
            index -= array.length;
        }
        if (row === this.matrix_.length)
            row--;
        return new Pair_1.Pair(row, index);
    };
    Deque.prototype._Compute_col_size = function (capacity) {
        if (capacity === void 0) { capacity = this.capacity_; }
        // Get column size; {@link capacity_ capacity} / {@link ROW_SIZE row}.
        return Math.floor(capacity / Deque.ROW_SIZE);
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
    Deque.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        if (items.length === 0)
            return this.size();
        // INSERT BY RANGE
        var first = new NativeArrayIterator_1.NativeArrayIterator(items, 0);
        var last = new NativeArrayIterator_1.NativeArrayIterator(items, items.length);
        this._Insert_by_range(this.end(), first, last);
        // RETURN SIZE
        return this.size();
    };
    /**
     * @inheritDoc
     */
    Deque.prototype.push_front = function (val) {
        // ADD CAPACITY & ROW
        this._Try_expand_capacity(this.size_ + 1);
        this._Try_add_row_at_front();
        // INSERT VALUE
        this.matrix_[0].unshift(val);
        ++this.size_;
    };
    /**
     * @inheritDoc
     */
    Deque.prototype.push_back = function (val) {
        // ADD CAPACITY & ROW
        this._Try_expand_capacity(this.size_ + 1);
        this._Try_add_row_at_back();
        // INSERT VALUE
        this.matrix_[this.matrix_.length - 1].push(val);
        ++this.size_;
    };
    /**
     * @inheritDoc
     */
    Deque.prototype.pop_front = function () {
        if (this.empty() === true)
            throw ErrorGenerator_1.ErrorGenerator.empty(this.constructor, "pop_front");
        // EREASE FIRST ELEMENT
        this.matrix_[0].shift();
        if (this.matrix_[0].length === 0 && this.matrix_.length > 1)
            this.matrix_.shift();
        // SHRINK SIZE
        this.size_--;
    };
    Deque.prototype._Pop_back = function () {
        // ERASE LAST ELEMENT
        var lastArray = this.matrix_[this.matrix_.length - 1];
        lastArray.pop();
        if (lastArray.length === 0 && this.matrix_.length > 1)
            this.matrix_.pop();
        // SHRINK SIZE
        this.size_--;
    };
    /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
    Deque.prototype._Insert_by_range = function (pos, first, last) {
        var size = this.size_ + (0, global_1.distance)(first, last);
        if (size === this.size_)
            // FIRST === LAST
            return pos;
        if (pos.equals(this.end()) === true) {
            // EXPAND CAPACITY IF REQUIRED
            this._Try_expand_capacity(size);
            // INSERT TO END
            this._Insert_to_end(first, last);
            // CHANGE POS TO RETURN
            pos = this.nth(this.size_);
        }
        else {
            // INSERT ITEMS IN THE MIDDLE
            if (size > this.capacity_) {
                // A TEMPORARY DEQUE
                var deque = new Deque();
                deque._Reserve(Math.max(size, Math.floor(this.capacity_ * Deque.MAGNIFIER)));
                // INSERT ITEM SEQUENTIALLY
                deque._Insert_to_end(this.begin(), pos);
                deque._Insert_to_end(first, last);
                deque._Insert_to_end(pos, this.end());
                // AND SWAP THIS WITH THE TEMP
                this._Swap(deque);
            }
            else
                this._Insert_to_middle(pos, first, last);
        }
        this.size_ = size;
        return pos;
    };
    Deque.prototype._Insert_to_middle = function (pos, first, last) {
        var _a, _b;
        var col_size = this._Compute_col_size();
        // POSITION OF MATRIX
        var indexes = this._Fetch_index(pos.index());
        var row = this.matrix_[indexes.first];
        var col = indexes.second;
        // MOVE BACK SIDE TO TEMPORARY ARRAY
        var back_items = row.splice(col);
        // INSERT ITEMS
        for (; !first.equals(last); first = first.next()) {
            if (row.length === col_size &&
                this.matrix_.length < Deque.ROW_SIZE) {
                row = new Array();
                var spliced_array = this.matrix_.splice(++indexes.first);
                this.matrix_.push(row);
                (_a = this.matrix_).push.apply(_a, __spreadArray([], __read(spliced_array), false));
            }
            row.push(first.value);
        }
        // INSERT ITEMS IN THE BACK SIDE
        for (var i = 0; i < back_items.length; ++i) {
            if (row.length === col_size &&
                this.matrix_.length < Deque.ROW_SIZE) {
                row = new Array();
                var spliced_array = this.matrix_.splice(++indexes.first);
                this.matrix_.push(row);
                (_b = this.matrix_).push.apply(_b, __spreadArray([], __read(spliced_array), false));
            }
            row.push(back_items[i]);
        }
    };
    Deque.prototype._Insert_to_end = function (first, last) {
        // INSERT ITEMS IN THE BACK
        for (; !first.equals(last); first = first.next()) {
            // ADD ROW IF REQUIRED
            this._Try_add_row_at_back();
            // INSERT VALUE
            this.matrix_[this.matrix_.length - 1].push(first.value);
        }
    };
    Deque.prototype._Try_expand_capacity = function (size) {
        if (size <= this.capacity_)
            return false;
        // MAX (CAPACITY * 1.5, TARGET SIZE)
        size = Math.max(size, Math.floor(this.capacity_ * Deque.MAGNIFIER));
        this._Reserve(size);
        return true;
    };
    Deque.prototype._Try_add_row_at_front = function () {
        var _a;
        var col_size = this._Compute_col_size();
        if (this.matrix_[0].length >= col_size &&
            this.matrix_.length < Deque.ROW_SIZE) {
            this.matrix_ = (_a = [[]]).concat.apply(_a, __spreadArray([], __read(this.matrix_), false));
            return true;
        }
        else
            return false;
    };
    Deque.prototype._Try_add_row_at_back = function () {
        var col_size = this._Compute_col_size();
        if (this.matrix_[this.matrix_.length - 1].length >= col_size &&
            this.matrix_.length < Deque.ROW_SIZE) {
            this.matrix_.push([]);
            return true;
        }
        else
            return false;
    };
    /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
    Deque.prototype._Erase_by_range = function (first, last) {
        if (first.index() >= this.size())
            return first;
        // INDEXING
        var size;
        if (last.index() >= this.size())
            // LAST IS END()
            size = this.size() - first.index();
        // LAST IS NOT END()
        else
            size = last.index() - first.index();
        this.size_ -= size;
        // ERASING
        var first_row = null;
        var second_row = null;
        var i = 0;
        while (size !== 0) {
            // FIND MATCHED ROW AND COLUMN
            var indexes = this._Fetch_index(first.index());
            var row = this.matrix_[indexes.first];
            var col = indexes.second;
            // EARSE FROM THE ROW
            var my_delete_size = Math.min(size, row.length - col);
            row.splice(col, my_delete_size);
            // TO MERGE
            if (row.length !== 0)
                if (i === 0)
                    first_row = row;
                else
                    second_row = row;
            // ERASE THE ENTIRE ROW IF REQUIRED
            if (row.length === 0 && this.matrix_.length > 1)
                this.matrix_.splice(indexes.first, 1);
            // TO THE NEXT STEP
            size -= my_delete_size;
            ++i;
        }
        // MERGE FIRST AND SECOND ROW
        if (first_row !== null &&
            second_row !== null &&
            first_row.length + second_row.length <= this._Compute_col_size()) {
            first_row.push.apply(first_row, __spreadArray([], __read(second_row), false));
            this.matrix_.splice(this.matrix_.indexOf(second_row), 1);
        }
        return first;
    };
    return Deque;
}(ArrayContainer_1.ArrayContainer));
exports.Deque = Deque;
/**
 *
 */
(function (Deque) {
    // BODY
    Deque.Iterator = ArrayIterator_1.ArrayIterator;
    Deque.ReverseIterator = ArrayReverseIterator_1.ArrayReverseIterator;
    //----
    // CONSTANTS
    //----
    /**
     * Row size of the {@link Deque.matrix_ matrix} which contains elements.
     *
     * Note that the {@link ROW_SIZE} affects on time complexity of accessing and inserting element.
     * Accessing element is {@link ROW_SIZE} times slower than ordinary {@link Vector} and inserting element
     * in middle position is {@link ROW_SIZE} times faster than ordinary {@link Vector}.
     *
     * When the {@link ROW_SIZE} returns 8, time complexity of accessing element is O(8) and inserting
     * element in middle position is O(N/8). ({@link Vector}'s time complexity of accessement is O(1)
     * and inserting element is O(N)).
     */
    Deque.ROW_SIZE = 8;
    /**
     * Minimum {@link Deque.capacity}.
     *
     * Although a {@link Deque} has few elements, even no element is belonged to, the {@link Deque}
     * keeps the minimum {@link Deque.capacity} at least.
     */
    Deque.MIN_CAPACITY = 36;
    /**
     * Expansion ratio.
     */
    Deque.MAGNIFIER = 1.5;
    /**
     * @internal
     */
    var ForOfAdaptor = /** @class */ (function () {
        function ForOfAdaptor(matrix) {
            this.matrix_ = matrix;
            this.row_ = 0;
            this.col_ = 0;
        }
        ForOfAdaptor.prototype.next = function () {
            if (this.row_ === this.matrix_.length)
                return {
                    done: true,
                    value: undefined,
                };
            else {
                var val = this.matrix_[this.row_][this.col_];
                if (++this.col_ === this.matrix_[this.row_].length) {
                    ++this.row_;
                    this.col_ = 0;
                }
                return {
                    done: false,
                    value: val,
                };
            }
        };
        ForOfAdaptor.prototype[Symbol.iterator] = function () {
            return this;
        };
        return ForOfAdaptor;
    }());
    Deque.ForOfAdaptor = ForOfAdaptor;
})(Deque || (exports.Deque = Deque = {}));
//# sourceMappingURL=Deque.js.map