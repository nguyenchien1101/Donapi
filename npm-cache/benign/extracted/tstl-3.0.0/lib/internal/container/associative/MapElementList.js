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
exports.MapElementList = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var ListContainer_1 = require("../linear/ListContainer");
var ListIterator_1 = require("../../iterator/ListIterator");
var ReverseIterator_1 = require("../../iterator/ReverseIterator");
/**
 * Doubly Linked List storing map elements.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Source type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var MapElementList = /** @class */ (function (_super) {
    __extends(MapElementList, _super);
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    function MapElementList(associative) {
        var _this = _super.call(this) || this;
        _this.associative_ = associative;
        return _this;
    }
    MapElementList.prototype._Create_iterator = function (prev, next, val) {
        return MapElementList.Iterator.create(this, prev, next, val);
    };
    /**
     * @internal
     */
    MapElementList._Swap_associative = function (x, y) {
        var _a;
        _a = __read([y.associative_, x.associative_], 2), x.associative_ = _a[0], y.associative_ = _a[1];
    };
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    MapElementList.prototype.associative = function () {
        return this.associative_;
    };
    return MapElementList;
}(ListContainer_1.ListContainer));
exports.MapElementList = MapElementList;
/**
 *
 */
(function (MapElementList) {
    /**
     * Iterator of map container storing elements in a list.
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
        /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
        function Iterator(list, prev, next, val) {
            var _this = _super.call(this, prev, next, val) || this;
            _this.list_ = list;
            return _this;
        }
        /**
         * @internal
         */
        Iterator.create = function (list, prev, next, val) {
            return new Iterator(list, prev, next, val);
        };
        /**
         * @inheritDoc
         */
        Iterator.prototype.reverse = function () {
            return new ReverseIterator(this);
        };
        /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
        /**
         * @inheritDoc
         */
        Iterator.prototype.source = function () {
            return this.list_.associative();
        };
        Object.defineProperty(Iterator.prototype, "first", {
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
    }(ListIterator_1.ListIterator));
    MapElementList.Iterator = Iterator;
    /**
     * Reverse iterator of map container storing elements a list.
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
             * Get the first, key element.
             *
             * @return The first element.
             */
            get: function () {
                return this.base_.first;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReverseIterator.prototype, "second", {
            /**
             * Get the second, stored element.
             *
             * @return The second element.
             */
            get: function () {
                return this.base_.second;
            },
            /**
             * Set the second, stored element.
             *
             * @param val The value to set.
             */
            set: function (val) {
                this.base_.second = val;
            },
            enumerable: false,
            configurable: true
        });
        return ReverseIterator;
    }(ReverseIterator_1.ReverseIterator));
    MapElementList.ReverseIterator = ReverseIterator;
})(MapElementList || (exports.MapElementList = MapElementList = {}));
//# sourceMappingURL=MapElementList.js.map