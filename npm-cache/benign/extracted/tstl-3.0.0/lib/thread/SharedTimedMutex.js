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
exports.SharedTimedMutex = void 0;
var List_1 = require("../container/List");
var InvalidArgument_1 = require("../exception/InvalidArgument");
var global_1 = require("./global");
/**
 * Shared timed mutex.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var SharedTimedMutex = /** @class */ (function () {
    function SharedTimedMutex(source) {
        if (source === void 0) { source = null; }
        this.source_ = source !== null ? source : this;
        this.queue_ = new List_1.List();
        this.writing_ = 0;
        this.reading_ = 0;
    }
    SharedTimedMutex.prototype._Current_access_type = function () {
        return this.queue_.empty() ? null : this.queue_.front().accessType;
    };
    /* ---------------------------------------------------------
        WRITE LOCK
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    SharedTimedMutex.prototype.lock = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // CONSTRUCT RESOLVER
            var resolver = {
                handler: _this.writing_++ === 0 && _this.reading_ === 0
                    ? null
                    : resolve,
                accessType: 0 /* AccessType.WRITE */,
                lockType: 0 /* LockType.HOLD */,
            };
            _this.queue_.push_back(resolver);
            // LOCK OR WAIT
            if (resolver.handler === null)
                resolve();
        });
    };
    /**
     * @inheritDoc
     */
    SharedTimedMutex.prototype.try_lock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // LOCKABLE ?
                if (this.writing_ !== 0 || this.reading_ !== 0)
                    return [2 /*return*/, false];
                // CONSTRUCT RESOLVER
                this.queue_.push_back({
                    handler: null,
                    accessType: 0 /* AccessType.WRITE */,
                    lockType: 1 /* LockType.KNOCK */,
                });
                // RETURNS
                ++this.writing_;
                return [2 /*return*/, true];
            });
        });
    };
    /**
     * @inheritDoc
     */
    SharedTimedMutex.prototype.try_lock_for = function (ms) {
        var _this = this;
        return new Promise(function (resolve) {
            // CONSTRUCT RESOLVER
            var it = _this.queue_.insert(_this.queue_.end(), {
                handler: _this.writing_++ === 0 && _this.reading_ === 0
                    ? null
                    : resolve,
                accessType: 0 /* AccessType.WRITE */,
                lockType: 1 /* LockType.KNOCK */,
            });
            if (it.value.handler === null)
                resolve(true); // SUCCESS
            else {
                // AUTOMATIC UNLOCK AFTER TIMEOUT
                (0, global_1.sleep_for)(ms).then(function () {
                    // NOT YET, THEN DO UNLOCK
                    if (it.value.handler !== null) {
                        --_this.writing_;
                        _this._Cancel(it);
                    }
                });
            }
        });
    };
    /**
     * @inheritDoc
     */
    SharedTimedMutex.prototype.try_lock_until = function (at) {
        return __awaiter(this, void 0, void 0, function () {
            var now, ms;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        now = new Date();
                        ms = at.getTime() - now.getTime();
                        return [4 /*yield*/, this.try_lock_for(ms)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @inheritDoc
     */
    SharedTimedMutex.prototype.unlock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._Current_access_type() !== 0 /* AccessType.WRITE */)
                    throw new InvalidArgument_1.InvalidArgument("Error on std.".concat(this.source_.constructor.name, ".unlock(): this mutex is free on the unique lock."));
                --this.writing_;
                this.queue_.pop_front();
                this._Release();
                return [2 /*return*/];
            });
        });
    };
    /* ---------------------------------------------------------
        READ LOCK
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    SharedTimedMutex.prototype.lock_shared = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var resolver = {
                handler: _this.writing_ === 0 ? null : resolve,
                accessType: 1 /* AccessType.READ */,
                lockType: 0 /* LockType.HOLD */,
            };
            _this.queue_.push_back(resolver);
            ++_this.reading_;
            if (resolver.handler === null)
                resolve();
        });
    };
    /**
     * @inheritDoc
     */
    SharedTimedMutex.prototype.try_lock_shared = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.writing_ !== 0)
                    return [2 /*return*/, false];
                ++this.reading_;
                this.queue_.push_back({
                    handler: null,
                    accessType: 1 /* AccessType.READ */,
                    lockType: 1 /* LockType.KNOCK */,
                });
                return [2 /*return*/, true];
            });
        });
    };
    /**
     * @inheritDoc
     */
    SharedTimedMutex.prototype.try_lock_shared_for = function (ms) {
        var _this = this;
        return new Promise(function (resolve) {
            // CONSTRUCT RESOLVER
            var it = _this.queue_.insert(_this.queue_.end(), {
                handler: _this.writing_ === 0 ? null : resolve,
                accessType: 1 /* AccessType.READ */,
                lockType: 1 /* LockType.KNOCK */,
            });
            ++_this.reading_;
            if (it.value.handler === null)
                resolve(true);
            else {
                // AUTOMATIC UNLOCK AFTER TIMEOUT
                (0, global_1.sleep_for)(ms).then(function () {
                    // NOT YET, THEN DO UNLOCK
                    if (it.value.handler !== null) {
                        --_this.reading_;
                        _this._Cancel(it);
                    }
                });
            }
        });
    };
    /**
     * @inheritDoc
     */
    SharedTimedMutex.prototype.try_lock_shared_until = function (at) {
        return __awaiter(this, void 0, void 0, function () {
            var now, ms;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        now = new Date();
                        ms = at.getTime() - now.getTime();
                        return [4 /*yield*/, this.try_lock_shared_for(ms)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @inheritDoc
     */
    SharedTimedMutex.prototype.unlock_shared = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._Current_access_type() !== 1 /* AccessType.READ */)
                    throw new InvalidArgument_1.InvalidArgument("Error on std.".concat(this.source_.constructor.name, ".unlock_shared(): this mutex is free on the shared lock."));
                --this.reading_;
                this.queue_.pop_front();
                this._Release();
                return [2 /*return*/];
            });
        });
    };
    /* ---------------------------------------------------------
        RELEASE
    --------------------------------------------------------- */
    SharedTimedMutex.prototype._Release = function () {
        var e_1, _a, e_2, _b;
        // STEP TO THE NEXT LOCKS
        var current = this._Current_access_type();
        var resolverList = [];
        try {
            for (var _c = __values(this.queue_), _d = _c.next(); !_d.done; _d = _c.next()) {
                var resolver = _d.value;
                // DIFFERENT ACCESS TYPE COMES?
                if (resolver.accessType !== current)
                    break;
                // COPY AND CLEAR
                else if (resolver.handler !== null) {
                    resolverList.push(__assign({}, resolver));
                    resolver.handler = null;
                }
                // STOP AFTER WRITE LOCK
                if (resolver.accessType === 0 /* AccessType.WRITE */)
                    break;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            // CALL THE HANDLERS
            for (var resolverList_1 = __values(resolverList), resolverList_1_1 = resolverList_1.next(); !resolverList_1_1.done; resolverList_1_1 = resolverList_1.next()) {
                var resolver = resolverList_1_1.value;
                if (resolver.lockType === 0 /* LockType.HOLD */)
                    resolver.handler();
                else
                    resolver.handler(true);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (resolverList_1_1 && !resolverList_1_1.done && (_b = resolverList_1.return)) _b.call(resolverList_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    SharedTimedMutex.prototype._Cancel = function (it) {
        //----
        // POP THE RELEASE
        //----
        // DO RASE
        this.queue_.erase(it);
        // EXTRACT HANDLER TO AVOID THE `this._Release()`
        var handler = it.value.handler;
        it.value.handler = null;
        //----
        // POST-PROCESS
        //----
        // CHECK THE PREVIOUS RESOLVER
        var prev = it.prev();
        // RELEASE IF IT IS THE LASTEST RESOLVER
        if (prev.equals(this.queue_.end()) === false &&
            prev.value.handler === null)
            this._Release();
        // (LAZY) RETURNS FAILURE
        handler(false);
    };
    return SharedTimedMutex;
}());
exports.SharedTimedMutex = SharedTimedMutex;
//# sourceMappingURL=SharedTimedMutex.js.map