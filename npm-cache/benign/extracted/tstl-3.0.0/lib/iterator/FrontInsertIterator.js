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
exports.FrontInsertIterator = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var InsertIteratorBase_1 = require("../internal/iterator/InsertIteratorBase");
var comparators_1 = require("../functional/comparators");
/**
 * Front insert iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var FrontInsertIterator = /** @class */ (function (_super) {
    __extends(FrontInsertIterator, _super);
    /* ---------------------------------------------------------
        METHODS
    --------------------------------------------------------- */
    /**
     * Initializer Constructor.
     *
     * @param source The source container.
     */
    function FrontInsertIterator(source) {
        var _this = _super.call(this) || this;
        _this.source_ = source;
        return _this;
    }
    Object.defineProperty(FrontInsertIterator.prototype, "value", {
        /**
         * @inheritDoc
         */
        set: function (val) {
            this.source_.push_front(val);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    FrontInsertIterator.prototype.equals = function (obj) {
        return (0, comparators_1.equal_to)(this.source_, obj.source_);
    };
    return FrontInsertIterator;
}(InsertIteratorBase_1.InsertIteratorBase));
exports.FrontInsertIterator = FrontInsertIterator;
//# sourceMappingURL=FrontInsertIterator.js.map