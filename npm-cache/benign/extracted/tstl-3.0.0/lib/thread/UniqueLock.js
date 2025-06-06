"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueLock = void 0;
var SafeLock_1 = require("../internal/thread/SafeLock");
/**
 *
 */
var UniqueLock = /** @class */ (function () {
    function UniqueLock() {
    }
    return UniqueLock;
}());
exports.UniqueLock = UniqueLock;
/**
 * Mutex wrapper for the safe write lock.
 *
 * The module {@link UniqueLock} is a collection of general purpose functions wrapping mutex for
 * ensuring the safe lock. If you *lock* a mutex (with your business logic code) through any
 * function of the {@link UniqueLock} module, the mutex would be automatically *unlocked* after
 * your business, even if an error has been occured in your business.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
(function (UniqueLock) {
    /**
     * Write locks a mutex with your business logic code.
     *
     * Monopolies a mutex until be the *closure* has been completed. If there're someone who have
     * already {@link ILockable.lock monopolied} or {@link ISharedLockable.lock shared} the mutex,
     * the function call would be blocked until all of them return their acquisitions by calling
     * {@link ILockable.unlock} or {@link ISharedLockable.unlock_shared} methods.
     *
     * When succeeded to {@link ILockable.lock monopoly} the mutex, the {@link lock} function will
     * call the *closure*, a custom function definig your business. After the *closure* function
     * be returned, the {@link lock} function automatically {@link ILockable.unlock unlocks} the
     * mutex, even if the *closure* function throws any error.
     *
     * Therefore, when using this {@link lock} function, you don't need to consider about
     * {@link ILockable.unlock returning} the lock acquistion after your business. It would just
     * be done automatically.
     *
     * @param mutex Target mutex to write lock.
     * @param closure A function defining your business.
     *
     * @throw Exception would be thrown if the *closure* function throws any error.
     */
    function lock(mutex, closure) {
        return SafeLock_1.SafeLock.lock(function () { return mutex.lock(); }, function () { return mutex.unlock(); }, closure);
    }
    UniqueLock.lock = lock;
    /**
     * Tries to write lock a mutex with your business.
     *
     * Attempts to monopoly a mutex without blocking. If succeeded to monopoly the mutex
     * immediately, it returns `true` after calling the *closure*. Otherwise there's someone who
     * has already {@link ILockable.lock monopolied} or {@link ISharedLockable.lock shared} the
     * mutex, the function gives up the trial immediately and returns `false` directly without
     * calling the *closure*.
     *
     * When succeeded to {@link ILockable.lock monopoly} the mutex, the {@link try_lock} function
     * will call the *closure*, a custom function definig your business. After the *closure*
     * function be returned, the {@link try_lock} function automatically
     * {@link ILockable.unlock unlocks} the mutex, even if the *closure* function throws any
     * error.
     *
     * Therefore, when using this {@link try_lock} function, you don't need to consider about
     * {@link ILockable.unlock returning} the lock acquistion after your business. It would just
     * be done automatically.
     *
     * @param mutex Target mutex to try write lock.
     * @param closure A function defining your business.
     * @return Whether succeeded to monopoly the mutex or not.
     *
     * @throw Exception would be thrown if the *closure* function throws any error.
     */
    function try_lock(mutex, closure) {
        return SafeLock_1.SafeLock.try_lock(function () { return mutex.try_lock(); }, function () { return mutex.unlock(); }, closure);
    }
    UniqueLock.try_lock = try_lock;
    /**
     * Tries to write lock a mutex with your business until timeout.
     *
     * Attempts to monopoly a mutex until timeout. If succeeded to monopoly the mutex until the
     * timeout, it returns `true` after calling the *closure*. Otherwise failed to acquiring the
     * lock in the given time, the function gives up the trial and returns `false` without calling
     * the *closure*.
     *
     * Failed to acquiring the lock in the given time (returns `false`), it means that there's
     * someone who has already {@link ILockable.lock monopolied} or {@link ISharedLockable.lock}
     * the mutex and does not return it over the timeout.
     *
     * When succeeded to {@link ILockable.lock monopoly} the mutex, the {@link try_lock_for}
     * function will call the *closure*, a custom function definig your business. After the
     * *closure* function be returned, the {@link try_lock_for} function automatically
     * {@link ILockable.unlock unlocks} the mutex and returns `true`, even if the *closure*
     * function throws any error.
     *
     * Therefore, when using this {@link try_lock_for} function, you don't need to consider about
     * {@link ILockable.unlock returning} the lock acquistion after your business. It would just
     * be done automatically.
     *
     * @param mutex Target mutex to try write lock until timeout.
     * @param ms The maximum miliseconds for waiting.
     * @param closure A function defining your business.
     * @return Whether succeeded to monopoly the mutex or not.
     *
     * @throw Exception would be thrown if the *closure* function throws any error.
     */
    function try_lock_for(mutex, ms, closure) {
        return SafeLock_1.SafeLock.try_lock(function () { return mutex.try_lock_for(ms); }, function () { return mutex.unlock(); }, closure);
    }
    UniqueLock.try_lock_for = try_lock_for;
    /**
     * Tries to write lock a mutex with your business until time expiration.
     *
     * Attempts to monopoly a mutex until time expiration. If succeeded to monopoly the mutex
     * until the time expiration, it returns `true` after calling the *closure*. Otherwise failed
     * to acquiring the lock in the given time, the function gives up the trial and returns
     * `false` without calling the *closure*.
     *
     * Failed to acquiring the lock in the given time (returns `false`), it means that there's
     * someone who has already {@link ILockable.lock monopolied} or {@link ISharedLockable.lock}
     * the mutex and does not return it over the time expiration.
     *
     * When succeeded to {@link ILockable.lock monopoly} the mutex, the {@link try_lock_until}
     * function will call the *closure*, a custom function definig your business. After the
     * *closure* function be returned, the {@link try_lock_until} function automatically
     * {@link ILockable.unlock unlocks} the mutex and returns `true`, even if the *closure*
     * function throws any error.
     *
     * TTherefore, when using this {@link try_lock_until} function, you don't need to consider
     * about {@link ILockable.unlock returning} the lock acquistion after your business. It would
     * just be done automatically.
     *
     * @param mutex Target mutex to try write lock until time expiration.
     * @param at The maximum time point to wait.
     * @param closure A function defining your business.
     * @return Whether succeeded to monopoly the mutex or not.
     *
     * @throw Exception would be thrown if the *closure* function throws any error.
     */
    function try_lock_until(mutex, at, closure) {
        return SafeLock_1.SafeLock.try_lock(function () { return mutex.try_lock_until(at); }, function () { return mutex.unlock(); }, closure);
    }
    UniqueLock.try_lock_until = try_lock_until;
})(UniqueLock || (exports.UniqueLock = UniqueLock = {}));
//# sourceMappingURL=UniqueLock.js.map