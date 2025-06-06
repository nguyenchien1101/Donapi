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
exports.try_lock = exports.lock = exports.sleep_until = exports.sleep_for = void 0;
/**
 * Sleep for time span.
 *
 * @param ms The milliseconds to sleep.
 */
function sleep_for(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
exports.sleep_for = sleep_for;
/**
 * Sleep until time expiration.
 *
 * @param at The time point to wake up.
 */
function sleep_until(at) {
    var now = new Date();
    var ms = at.getTime() - now.getTime(); // MILLISECONDS TO WAIT
    return sleep_for(ms); // CONVERT TO THE SLEEP_FOR
}
exports.sleep_until = sleep_until;
/**
 * Lock multiple mutexes.
 *
 * @param items Items to lock.
 */
function lock() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var promises, items_1, items_1_1, mtx;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    promises = [];
                    try {
                        for (items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                            mtx = items_1_1.value;
                            promises.push(mtx.lock());
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.lock = lock;
/**
 * Try lock mutexes.
 *
 * @param items Items to try lock.
 * @return Index of mutex who failed to lock. None of them're failed, then returns `-1`.
 */
function try_lock() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < items.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, items[i].try_lock()];
                case 2:
                    if ((_a.sent()) === false)
                        return [2 /*return*/, i];
                    _a.label = 3;
                case 3:
                    ++i;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, -1];
            }
        });
    });
}
exports.try_lock = try_lock;
//# sourceMappingURL=global.js.map