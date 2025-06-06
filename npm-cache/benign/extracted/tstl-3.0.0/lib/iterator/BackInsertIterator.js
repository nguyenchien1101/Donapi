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
exports.BackInsertIterator = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var InsertIteratorBase_1 = require("../internal/iterator/InsertIteratorBase");
var comparators_1 = require("../functional/comparators");
/**
 * Back insert iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var BackInsertIterator = /** @class */ (function (_super) {
    __extends(BackInsertIterator, _super);
    /* ---------------------------------------------------------
        METHODS
    --------------------------------------------------------- */
    /**
     * Initializer Constructor.
     *
     * @param source The source container.
     */
    function BackInsertIterator(source) {
        var _this = _super.call(this) || this;
        _this.source_ = source;
        return _this;
    }
    Object.defineProperty(BackInsertIterator.prototype, "value", {
        /**
         * @inheritDoc
         */
        set: function (val) {
            this.source_.push_back(val);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    BackInsertIterator.prototype.equals = function (obj) {
        return (0, comparators_1.equal_to)(this.source_, obj.source_);
    };
    return BackInsertIterator;
}(InsertIteratorBase_1.InsertIteratorBase));
exports.BackInsertIterator = BackInsertIterator;
//# sourceMappingURL=BackInsertIterator.js.map