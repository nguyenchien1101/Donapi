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
exports.ConditionVariable = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var List_1 = require("../container/List");
var global_1 = require("./global");
/**
 * Condition variable.
 *
 * The `ConditionVariable` class blocks critical sections until be notified.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ConditionVariable = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    /**
     * Default Constructor.
     */
    function ConditionVariable() {
        this.resolvers_ = new List_1.List();
    }
    ConditionVariable.prototype.wait = function (predicator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!predicator) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._Wait()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, predicator()];
                    case 3:
                        if (!!(_a.sent())) return [3 /*break*/, 5];
                        return [4 /*yield*/, this._Wait()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ConditionVariable.prototype.wait_for = function (ms, predicator) {
        var at = new Date(Date.now() + ms);
        return this.wait_until(at, predicator);
    };
    ConditionVariable.prototype.wait_until = function (at, predicator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!predicator) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._Wait_until(at)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, predicator()];
                    case 3:
                        if (!!(_a.sent())) return [3 /*break*/, 7];
                        return [4 /*yield*/, this._Wait_until(at)];
                    case 4:
                        if (!!(_a.sent())) return [3 /*break*/, 6];
                        return [4 /*yield*/, predicator()];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [3 /*break*/, 2];
                    case 7: return [2 /*return*/, true];
                }
            });
        });
    };
    ConditionVariable.prototype._Wait = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.resolvers_.push_back({
                handler: resolve,
                lockType: 0 /* LockType.HOLD */,
            });
        });
    };
    ConditionVariable.prototype._Wait_until = function (at) {
        var _this = this;
        return new Promise(function (resolve) {
            var it = _this.resolvers_.insert(_this.resolvers_.end(), {
                handler: resolve,
                lockType: 1 /* LockType.KNOCK */,
            });
            // AUTOMATIC UNLOCK
            (0, global_1.sleep_until)(at).then(function () {
                if (it.erased_ === true)
                    return;
                // DO UNLOCK
                _this.resolvers_.erase(it); // POP THE LISTENER
                resolve(false); // RETURN FAILURE
            });
        });
    };
    /* ---------------------------------------------------------
        NOTIFIERS
    --------------------------------------------------------- */
    /**
     * Notify, wake only one up.
     */
    ConditionVariable.prototype.notify_one = function () {
        return __awaiter(this, void 0, void 0, function () {
            var it;
            return __generator(this, function (_a) {
                // NOTHING TO NOTIFY
                if (this.resolvers_.empty())
                    return [2 /*return*/];
                it = this.resolvers_.begin();
                this.resolvers_.erase(it);
                // CALL ITS HANDLER
                if (it.value.lockType === 0 /* LockType.HOLD */)
                    it.value.handler();
                else
                    it.value.handler(true);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Notify, wake all up.
     */
    ConditionVariable.prototype.notify_all = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resolverList, resolverList_1, resolverList_1_1, resolver;
            var e_1, _a;
            return __generator(this, function (_b) {
                // NOTHING TO NOTIFY
                if (this.resolvers_.empty())
                    return [2 /*return*/];
                resolverList = this.resolvers_.toJSON();
                this.resolvers_.clear();
                try {
                    // ITERATE RESOLVERS
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
    return ConditionVariable;
}());
exports.ConditionVariable = ConditionVariable;
//# sourceMappingURL=ConditionVariable.js.map