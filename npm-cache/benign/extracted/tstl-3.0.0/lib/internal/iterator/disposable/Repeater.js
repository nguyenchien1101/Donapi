"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repeater = void 0;
var Repeater = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    function Repeater(index, value) {
        this.index_ = index;
        this.value_ = value;
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    Repeater.prototype.index = function () {
        return this.index_;
    };
    Object.defineProperty(Repeater.prototype, "value", {
        get: function () {
            return this.value_;
        },
        enumerable: false,
        configurable: true
    });
    /* ---------------------------------------------------------
        MOVERS & COMPARE
    --------------------------------------------------------- */
    Repeater.prototype.next = function () {
        ++this.index_;
        return this;
    };
    Repeater.prototype.equals = function (obj) {
        return this.index_ === obj.index_;
    };
    return Repeater;
}());
exports.Repeater = Repeater;
//# sourceMappingURL=Repeater.js.map