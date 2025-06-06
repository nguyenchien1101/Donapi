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
exports.Queue = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var AdaptorContainer_1 = require("../internal/container/linear/AdaptorContainer");
var List_1 = require("./List");
/**
 * Queue; FIFO (First In First Out).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    function Queue(obj) {
        var _this = _super.call(this, new List_1.List()) || this;
        if (obj !== undefined)
            _this.source_.assign(obj.source_.begin(), obj.source_.end());
        return _this;
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * Get the first element.
     *
     * @return The first element.
     */
    Queue.prototype.front = function () {
        return this.source_.front();
    };
    /**
     * Get the last element.
     *
     * @return The last element.
     */
    Queue.prototype.back = function () {
        return this.source_.back();
    };
    /**
     * @inheritDoc
     */
    Queue.prototype.pop = function () {
        this.source_.pop_front();
    };
    return Queue;
}(AdaptorContainer_1.AdaptorContainer));
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map