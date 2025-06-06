"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimedMutex = void 0;
var SharedTimedMutex_1 = require("./SharedTimedMutex");
/**
 * Timed mutex.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var TimedMutex = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
    /**
     * Default Constructor.
     */
    function TimedMutex() {
        this.mutex_ = new SharedTimedMutex_1.SharedTimedMutex(this);
    }
    /* ---------------------------------------------------------
        LOCK & UNLOCK
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    TimedMutex.prototype.lock = function () {
        return this.mutex_.lock();
    };
    /**
     * @inheritDoc
     */
    TimedMutex.prototype.try_lock = function () {
        return this.mutex_.try_lock();
    };
    /**
     * @inheritDoc
     */
    TimedMutex.prototype.unlock = function () {
        return this.mutex_.unlock();
    };
    /* ---------------------------------------------------------
        TIMED LOCK
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    TimedMutex.prototype.try_lock_for = function (ms) {
        return this.mutex_.try_lock_for(ms);
    };
    /**
     * @inheritDoc
     */
    TimedMutex.prototype.try_lock_until = function (at) {
        return this.mutex_.try_lock_until(at);
    };
    return TimedMutex;
}());
exports.TimedMutex = TimedMutex;
//# sourceMappingURL=TimedMutex.js.map