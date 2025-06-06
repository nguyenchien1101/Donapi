"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutex = void 0;
var SharedTimedMutex_1 = require("./SharedTimedMutex");
/**
 * Mutex.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var Mutex = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
    /**
     * Default Constructor.
     */
    function Mutex() {
        this.mutex_ = new SharedTimedMutex_1.SharedTimedMutex(this);
    }
    /* ---------------------------------------------------------
        LOCK & UNLOCK
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    Mutex.prototype.lock = function () {
        return this.mutex_.lock();
    };
    /**
     * @inheritDoc
     */
    Mutex.prototype.try_lock = function () {
        return this.mutex_.try_lock();
    };
    /**
     * @inheritDoc
     */
    Mutex.prototype.unlock = function () {
        return this.mutex_.unlock();
    };
    return Mutex;
}());
exports.Mutex = Mutex;
//# sourceMappingURL=Mutex.js.map