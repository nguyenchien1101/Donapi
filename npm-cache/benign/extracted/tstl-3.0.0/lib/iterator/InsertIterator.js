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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertIterator = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var InsertIteratorBase_1 = require("../internal/iterator/InsertIteratorBase");
var comparators_1 = require("../functional/comparators");
/**
 * Insert iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var InsertIterator = /** @class */ (function (_super) {
    __extends(InsertIterator, _super);
    /* ---------------------------------------------------------
        METHODS
    --------------------------------------------------------- */
    /**
     * Initializer Constructor.
     *
     * @param container Target container to insert.
     * @param it Iterator to the position to insert.
     */
    function InsertIterator(container, it) {
        var _this = _super.call(this) || this;
        _this.container_ = container;
        _this.it_ = it;
        return _this;
    }
    Object.defineProperty(InsertIterator.prototype, "value", {
        /**
         * @inheritDoc
         */
        set: function (val) {
            this.it_ = this.container_.insert(this.it_, val);
            this.it_ = this.it_.next();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    InsertIterator.prototype.equals = function (obj) {
        return (0, comparators_1.equal_to)(this.it_, obj.it_);
    };
    return InsertIterator;
}(InsertIteratorBase_1.InsertIteratorBase));
exports.InsertIterator = InsertIterator;
//# sourceMappingURL=InsertIterator.js.map