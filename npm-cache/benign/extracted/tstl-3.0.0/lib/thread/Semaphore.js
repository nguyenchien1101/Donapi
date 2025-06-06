"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Semaphore = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var List_1 = require("../container/List");
var InvalidArgument_1 = require("../exception/InvalidArgument");
var OutOfRange_1 = require("../exception/OutOfRange");
var global_1 = require("./global");
/**
 * Counting semaphore.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var Semaphore = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    /**
     * Initializer Constructor.
     *
     * @param max Number of maximum sections acquirable.
     */
    function Semaphore(max) {
        this.queue_ = new List_1.List();
        this.acquiring_ = 0;
        this.max_ = max;
    }
    /**
     * Get number of maximum sections lockable.
     *
     * @return Number of maximum sections lockable.
     */
    Semaphore.prototype.max = function () {
        return this.max_;
    };
    /* ---------------------------------------------------------
        ACQUIRANCES
    --------------------------------------------------------- */
    /**
     * Acquires a section.
     *
     * Acquires a section until be {@link release released}. If all of the sections in the
     * semaphore already have been acquired by others, the function call would be blocked until
     * one of them returns its acquisition by calling the {@link release} method.
     *
     * In same reason, if you don't call the {@link release} function after you business, the
     * others who want to {@link acquire} a section from the semaphore would be fall into the
     * forever sleep. Therefore, never forget to calling the {@link release} function or utilize
     * the {@link UniqueLock.lock} function instead with {@link Semaphore.get_lockable} to ensure
     * the safety.
     */
    Semaphore.prototype.acquire = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.acquiring_ < _this.max_) {
                ++_this.acquiring_;
                resolve();
            }
            else {
                _this.queue_.push_back({
                    handler: resolve,
                    lockType: 0 /* LockType.HOLD */,
                });
            }
        });
    };
    /**
     * Tries to acquire a section.
     *
     * Attempts to acquire a section without blocking. If succeeded to acquire a section from the
     * semaphore immediately, it returns `true` directly. Otherwise all of the sections in the
     * semaphore are full, the function gives up the trial immediately and returns `false`
     * directly.
     *
     * Note that, if you succeeded to acquire a section from the semaphore (returns `true) but do
     * not call the {@link release} function after your business, the others who want to
     * {@link acquire} a section from the semaphore would be fall into the forever sleep.
     * Therefore, never forget to calling the {@link release} function or utilize the
     * {@link UniqueLock.try_lock} function instead with {@link Semaphore.get_lockable} to ensure
     * the safety.
     *
     * @return Whether succeeded to acquire or not.
     */
    Semaphore.prototype.try_acquire = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // ALL OR NOTHING
                if (this.acquiring_ < this.max_) {
                    ++this.acquiring_;
                    return [2 /*return*/, true];
                }
                else
                    return [2 /*return*/, false];
                return [2 /*return*/];
            });
        });
    };
    /**
     * Tries to acquire a section until timeout.
     *
     * Attempts to acquire a section from the semaphore until timeout. If succeeded to acquire a
     * section until the timeout, it returns `true`. Otherwise failed to acquiring a section in
     * given the time, the function gives up the trial and returns `false`.
     *
     * Failed to acquiring a section in the given time (returns `false`), it means that there're
     * someone who have already {@link acquire acquired} sections and do not return them over the
     * time expiration.
     *
     * Note that, if you succeeded to acquire a section from the semaphore (returns `true) but do
     * not call the {@link release} function after your business, the others who want to
     * {@link acquire} a section from the semaphore would be fall into the forever sleep.
     * Therefore, never forget to calling the {@link release} function or utilize the
     * {@link UniqueLock.try_acquire_for} function instead with {@link Semaphore.get_lockable} to
     * ensure the safety.
     *
     * @param ms The maximum miliseconds for waiting.
     * @return Whether succeded to acquire or not.
     */
    Semaphore.prototype.try_acquire_for = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        if (_this.acquiring_ < _this.max_) {
                            ++_this.acquiring_;
                            resolve(true);
                        }
                        else {
                            // RESERVE ACQUIRE
                            var it_1 = _this.queue_.insert(_this.queue_.end(), {
                                handler: resolve,
                                lockType: 1 /* LockType.KNOCK */,
                            });
                            // AUTOMATIC RELEASE AFTER TIMEOUT
                            (0, global_1.sleep_for)(ms).then(function () {
                                // NOT YET, THEN DO RELEASE
                                if (it_1.value.handler !== null)
                                    _this._Cancel(it_1);
                            });
                        }
                    })];
            });
        });
    };
    /**
     * Tries to acquire a section until timeout.
     *
     * Attempts to acquire a section from the semaphore until time expiration. If succeeded to
     * acquire a section until the time expiration, it returns `true`. Otherwise failed to
     * acquiring a section in the given time, the function gives up the trial and returns `false`.
     *
     * Failed to acquiring a section in the given time (returns `false`), it means that there're
     * someone who have already {@link acquire acquired} sections and do not return them over the
     * time expiration.
     *
     * Note that, if you succeeded to acquire a section from the semaphore (returns `true) but do
     * not call the {@link release} function after your business, the others who want to
     * {@link acquire} a section from the semaphore would be fall into the forever sleep.
     * Therefore, never forget to calling the {@link release} function or utilize the
     * {@link UniqueLock.try_acquire_until} function instead with {@link Semaphore.get_lockable}
     * to ensure the safety.
     *
     * @param at The maximum time point to wait.
     * @return Whether succeded to acquire or not.
     */
    Semaphore.prototype.try_acquire_until = function (at) {
        // COMPUTE MILLISECONDS TO WAIT
        var now = new Date();
        var ms = at.getTime() - now.getTime();
        return this.try_acquire_for(ms);
    };
    /* ---------------------------------------------------------
        RELEASES
    --------------------------------------------------------- */
    /**
     * Release sections.
     *
     * When you call this {@link release} method and there're someone who are currently blocked
     * by attemping to {@link acquire} a section from this semaphore, *n* of them
     * (FIFO; first-in-first-out) would {@link acquire} those {@link release released} sections
     * and continue their executions.
     *
     * Otherwise, there's not anyone who is {@link acquire acquiring} the section or number of
     * the blocked are less than *n*, the {@link OutOfRange} error would be thrown.
     *
     * > As you know, when you succeeded to {@link acquire} a section, you don't have to forget
     * > to calling this {@link release} method after your business. If you forget it, it would
     * > be a terrible situation for the others who're attempting to {@link acquire} a section
     * > from this semaphore.
     * >
     * > However, if you utilize the {@link UniqueLock} with {@link Semaphore.get_lockable}, you
     * > don't need to consider about this {@link release} method. Just define your business into
     * > a callback function as a parameter of methods of the {@link UniqueLock}, then this
     * > {@link release} method would be automatically called by the {@link UniqueLock} after the
     * > business.
     *
     * @param n Number of sections to be released. Default is 1.
     * @throw {@link OutOfRange} when *n* is greater than currently {@link acquire acquired} sections.
     */
    Semaphore.prototype.release = function () {
        return __awaiter(this, arguments, void 0, function (n) {
            var resolverList, resolver, resolverList_1, resolverList_1_1, resolver;
            var e_1, _a;
            if (n === void 0) { n = 1; }
            return __generator(this, function (_b) {
                //----
                // VALIDATION
                //----
                if (n < 1)
                    throw new InvalidArgument_1.InvalidArgument("Error on std.Semaphore.release(): parametric n is less than 1 -> (n = ".concat(n, ")."));
                else if (n > this.max_)
                    throw new OutOfRange_1.OutOfRange("Error on std.Semaphore.release(): parametric n is greater than max -> (n = ".concat(n, ", max = ").concat(this.max_, ")."));
                else if (n > this.acquiring_)
                    throw new OutOfRange_1.OutOfRange("Error on std.Semaphore.release(): parametric n is greater than acquiring -> (n = ".concat(n, ", acquiring = ").concat(this.acquiring_, ")."));
                resolverList = [];
                while (this.queue_.empty() === false && resolverList.length < n) {
                    resolver = this.queue_.front();
                    if (resolver.handler !== null)
                        resolverList.push(__assign({}, resolver));
                    // DESTRUCT
                    this.queue_.pop_front();
                    resolver.handler = null;
                }
                // COMPUTE REMAINED ACQUIRANCES
                this.acquiring_ -= n - resolverList.length;
                try {
                    // CALL HANDLERS
                    for (resolverList_1 = __values(resolverList), resolverList_1_1 = resolverList_1.next(); !resolverList_1_1.done; resolverList_1_1 = resolverList_1.next()) {
                        resolver = resolverList_1_1.value;
                        if (resolver.lockType === 0 /* LockType.HOLD */)
                            resolver.handler();
                        else
                            resolver.handler(true);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (resolverList_1_1 && !resolverList_1_1.done && (_a = resolverList_1.return)) _a.call(resolverList_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    Semaphore.prototype._Cancel = function (it) {
        // POP THE LISTENER
        var handler = it.value.handler;
        // DESTRUCTION
        it.value.handler = null;
        this.queue_.erase(it);
        // RETURNS FAILURE
        handler(false);
    };
    return Semaphore;
}());
exports.Semaphore = Semaphore;
/**
 *
 */
(function (Semaphore) {
    /**
     * Capsules a {@link Semaphore} to be suitable for the {@link UniqueLock}.
     *
     * @param semaphore Target semaphore to capsule.
     * @return Lockable instance suitable for the {@link UniqueLock}
     */
    function get_lockable(semaphore) {
        return new Lockable(semaphore);
    }
    Semaphore.get_lockable = get_lockable;
    /**
     * @internal
     */
    var Lockable = /** @class */ (function () {
        function Lockable(semaphore) {
            this.semahpore_ = semaphore;
        }
        Lockable.prototype.lock = function () {
            return this.semahpore_.acquire();
        };
        Lockable.prototype.unlock = function () {
            return this.semahpore_.release();
        };
        Lockable.prototype.try_lock = function () {
            return this.semahpore_.try_acquire();
        };
        Lockable.prototype.try_lock_for = function (ms) {
            return this.semahpore_.try_acquire_for(ms);
        };
        Lockable.prototype.try_lock_until = function (at) {
            return this.semahpore_.try_acquire_until(at);
        };
        return Lockable;
    }());
    Semaphore.Lockable = Lockable;
})(Semaphore || (exports.Semaphore = Semaphore = {}));
//# sourceMappingURL=Semaphore.js.map