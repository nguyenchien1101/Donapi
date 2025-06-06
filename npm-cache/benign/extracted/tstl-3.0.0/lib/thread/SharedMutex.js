"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedMutex = void 0;
var SharedTimedMutex_1 = require("./SharedTimedMutex");
/**
 * Shared mutex.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var SharedMutex = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
    /**
     * Default Constructor.
     */
    function SharedMutex() {
        this.mutex_ = new SharedTimedMutex_1.SharedTimedMutex(this);
    }
    /* ---------------------------------------------------------
        WRITE LOCK
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    SharedMutex.prototype.lock = function () {
        return this.mutex_.lock();
    };
    /**
     * @inheritDoc
     */
    SharedMutex.prototype.try_lock = function () {
        return this.mutex_.try_lock();
    };
    /**
     * @inheritDoc
     */
    SharedMutex.prototype.unlock = function () {
        return this.mutex_.unlock();
    };
    /* ---------------------------------------------------------
        READ LOCK
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    SharedMutex.prototype.lock_shared = function () {
        return this.mutex_.lock_shared();
    };
    /**
     * @inheritDoc
     */
    SharedMutex.prototype.try_lock_shared = function () {
        return this.mutex_.try_lock_shared();
    };
    /**
     * @inheritDoc
     */
    SharedMutex.prototype.unlock_shared = function () {
        return this.mutex_.unlock_shared();
    };
    return SharedMutex;
}());
exports.SharedMutex = SharedMutex;
//# sourceMappingURL=SharedMutex.js.map