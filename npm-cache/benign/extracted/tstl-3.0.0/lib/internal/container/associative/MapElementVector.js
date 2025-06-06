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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapElementVector = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var VectorContainer_1 = require("../linear/VectorContainer");
var ArrayIteratorBase_1 = require("../../iterator/ArrayIteratorBase");
var ArrayReverseIteratorBase_1 = require("../../iterator/ArrayReverseIteratorBase");
/**
 * Vector storing map elements.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Source type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var MapElementVector = /** @class */ (function (_super) {
    __extends(MapElementVector, _super);
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    function MapElementVector(associative) {
        var _this = _super.call(this) || this;
        _this.data_ = [];
        _this.associative_ = associative;
        return _this;
    }
    MapElementVector.prototype.nth = function (index) {
        return new MapElementVector.Iterator(this, index);
    };
    /**
     * @internal
     */
    MapElementVector._Swap_associative = function (x, y) {
        var _a;
        _a = __read([y.associative_, x.associative_], 2), x.associative_ = _a[0], y.associative_ = _a[1];
    };
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    MapElementVector.prototype.source = function () {
        return this.associative_;
    };
    return MapElementVector;
}(VectorContainer_1.VectorContainer));
exports.MapElementVector = MapElementVector;
/**
 *
 */
(function (MapElementVector) {
    /**
     * Iterator of map container storing elements in a vector.
     *
     * @template Key Key type
     * @template T Mapped type
     * @template Unique Whether duplicated key is blocked or not
     * @template Source Source container type
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    var Iterator = /** @class */ (function (_super) {
        __extends(Iterator, _super);
        function Iterator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        /**
         * @inheritDoc
         */
        Iterator.prototype.source = function () {
            return this._Get_array().source();
        };
        /**
         * @inheritDoc
         */
        Iterator.prototype.reverse = function () {
            return new ReverseIterator(this);
        };
        Object.defineProperty(Iterator.prototype, "first", {
            /* ---------------------------------------------------------
                ACCESSORS
            --------------------------------------------------------- */
            /**
             * @inheritDoc
             */
            get: function () {
                return this.value.first;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Iterator.prototype, "second", {
            /**
             * @inheritDoc
             */
            get: function () {
                return this.value.second;
            },
            /**
             * @inheritDoc
             */
            set: function (val) {
                this.value.second = val;
            },
            enumerable: false,
            configurable: true
        });
        return Iterator;
    }(ArrayIteratorBase_1.ArrayIteratorBase));
    MapElementVector.Iterator = Iterator;
    /**
     * Reverse iterator of map container storing elements in a vector.
     *
     * @template Key Key type
     * @template T Mapped type
     * @template Unique Whether duplicated key is blocked or not
     * @template Source Source container type
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    var ReverseIterator = /** @class */ (function (_super) {
        __extends(ReverseIterator, _super);
        function ReverseIterator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        ReverseIterator.prototype._Create_neighbor = function (base) {
            return new ReverseIterator(base);
        };
        Object.defineProperty(ReverseIterator.prototype, "first", {
            /* ---------------------------------------------------------
                ACCESSORS
            --------------------------------------------------------- */
            /**
             * @inheritDoc
             */
            get: function () {
                return this.value.first;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReverseIterator.prototype, "second", {
            /**
             * @inheritDoc
             */
            get: function () {
                return this.value.second;
            },
            /**
             * @inheritDoc
             */
            set: function (val) {
                this.value.second = val;
            },
            enumerable: false,
            configurable: true
        });
        return ReverseIterator;
    }(ArrayReverseIteratorBase_1.ArrayReverseIteratorBase));
    MapElementVector.ReverseIterator = ReverseIterator;
})(MapElementVector || (exports.MapElementVector = MapElementVector = {}));
//# sourceMappingURL=MapElementVector.js.map