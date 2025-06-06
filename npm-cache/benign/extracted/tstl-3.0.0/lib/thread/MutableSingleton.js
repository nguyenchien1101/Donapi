"use strict";
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutableSingleton = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var SharedMutex_1 = require("./SharedMutex");
var SharedLock_1 = require("./SharedLock");
var UniqueLock_1 = require("./UniqueLock");
/**
 * Mutable singleton generator.
 *
 * The `MutableSingleton` is an asynchronous singleton generator class who guarantees the *lazy
 * constructor* to be called *"only one at time"*. The *"only one at time"* would always be
 * kepted, even in the race condition.
 *
 * Create a `MutableSingleton` instance with your custom *lazy constructor* and get the promised
 * value through the {@link MutableSingleton.get}() method. The {@link MutableSingleton.get}()
 * method would construct the return value following below logics:
 *
 *   - At the first time: calls the *lazy constructor* and returns the value.
 *   - After the *lazy construction*: returns the pre-constructed value.
 *   - Race condition:
 *     - simultaneously call happens during the *lazy construction*.
 *     - guarantees the *"only one at time"* through a *mutex*.
 *
 * If you want to reload the promised value, regardless of whether the *lazy construction* has
 * been completed or not, call the {@link MutableSingleton.reload}() method. It would call the
 * *lazy constructor* forcibly, even if the *lany construction* has been completed in sometime.
 *
 * @template T Type of the promised value to be lazy-constructed.
 * @author Jeongho Nam - https://github.com/samchon
 */
var MutableSingleton = /** @class */ (function () {
    /* ---------------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------------- */
    /**
     * Initializer Constructor.
     *
     * Create a new `Singleton` instance with the *lazy consturctor*.
     *
     * @param closure Lazy constructor function returning the promised value.
     */
    function MutableSingleton(closure) {
        this.closure_ = closure;
        this.mutex_ = new SharedMutex_1.SharedMutex();
        this.value_ = NOT_MOUNTED_YET;
    }
    /**
     * Reload value.
     *
     * The `MutableSingleton.reload()` method enforces to call the *lazy constructor*, regardless
     * of whether the *lazy construction* has been completed or not. Therefore, even if the *lazy
     * construction* has been completed in sometime, the `MutableSingleton.reload()` will call
     * the *lazy constructor* again.
     *
     * @return Re-constructed value.
     */
    MutableSingleton.prototype.reload = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var output;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UniqueLock_1.UniqueLock.lock(this.mutex_, function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.closure_.apply(this, __spreadArray([], __read(args), false))];
                                    case 1:
                                        output = _a.sent();
                                        this.value_ = output;
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, output];
                }
            });
        });
    };
    /**
     * Configure value.
     *
     * The `MutableSingleton.set()` method enforces the singleton to have a specific value.
     *
     * @param value The value to configure
     */
    MutableSingleton.prototype.set = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UniqueLock_1.UniqueLock.lock(this.mutex_, function () {
                            _this.value_ = value;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Clear value.
     *
     * The `MutableSingleton.clear()` is a method clearing cached value.
     *
     * Therefore, when {@link get} being called, closure of constructor would be reused.
     */
    MutableSingleton.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UniqueLock_1.UniqueLock.lock(this.mutex_, function () {
                            _this.value_ = NOT_MOUNTED_YET;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* ---------------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------------- */
    /**
     * Get promised value.
     *
     * `MutableSingleton.get()` method returns the *lazy constructed value*. It guarantees the
     * *lazy constructor* to be called *"only one at time"*. It ensures the *"only one at time"*,
     * even in the race condition.
     *
     * If the promised value is not constructed yet (call this method at the first time), the
     * *lazy constructor* would be called and returns the promised value. Otherwise, the promised
     * value has been already constructed by the *lazy constructor* (this method already had been
     * called), returns the pre-generated value.
     *
     * Also, you don't need to worry anything about the race condition, who may be occured by
     * calling the `MutableSingleton.get()` method simultaneously during the *lazy construction*
     * is on going. The `MutableSingleton` guarantees the *lazy constructor* to be called
     * only one at time by using the {@link UniqueLock.lock} on a {@link Mutex}.
     *
     * @return The *lazy constructed* value.
     */
    MutableSingleton.prototype.get = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var output;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        output = NOT_MOUNTED_YET;
                        return [4 /*yield*/, SharedLock_1.SharedLock.lock(this.mutex_, function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    output = this.value_;
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        if (!(output === NOT_MOUNTED_YET)) return [3 /*break*/, 3];
                        return [4 /*yield*/, UniqueLock_1.UniqueLock.lock(this.mutex_, function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            // COULD BE COMPLETED DURING WAITING
                                            if (this.value_ !== NOT_MOUNTED_YET) {
                                                output = this.value_;
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, this.closure_.apply(this, __spreadArray([], __read(args), false))];
                                        case 1:
                                            // CALL THE LAZY-CONSTRUCTOR
                                            output = _a.sent();
                                            this.value_ = output;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, output];
                }
            });
        });
    };
    /**
     * Test whether the value has been loaded.
     *
     * The `MutableSingleton.is_loaded()` method tests whether the singleton has coompleted to
     * constructing its value or not. If the singleton value is on the construction by the
     * {@link MutableSingleton.get} or {@link MutableSingleton.reload} method, the
     * `MutableSingleton.is_loaded()` would wait returning value until the construction has been
     * completed.
     *
     * @returns Whether loaded or not
     */
    MutableSingleton.prototype.is_loaded = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loaded;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loaded = false;
                        return [4 /*yield*/, SharedLock_1.SharedLock.lock(this.mutex_, function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    loaded = this.value_ !== NOT_MOUNTED_YET;
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, loaded];
                }
            });
        });
    };
    return MutableSingleton;
}());
exports.MutableSingleton = MutableSingleton;
/**
 * @hidden
 */
var NOT_MOUNTED_YET = {};
//# sourceMappingURL=MutableSingleton.js.map