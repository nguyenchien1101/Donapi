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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barrier = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var ConditionVariable_1 = require("./ConditionVariable");
/**
 * Barrier for critical sections.
 *
 * The Barrier class blocks critical sections until the downward counter to be zero. Unlike the
 * {@link Latch} class whose downward counter is disposable, `Barrier` can re-use the downward
 * counter repeatedly, resetting counter to be initial value whenever reach to the zero.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var Barrier = /** @class */ (function () {
    /**
     * Initializer Constructor
     *
     * @param size Size of the downward counter.
     */
    function Barrier(size) {
        this.cv_ = new ConditionVariable_1.ConditionVariable();
        this.size_ = size;
        this.count_ = size;
    }
    /* ---------------------------------------------------------
        WAIT FUNCTIONS
    --------------------------------------------------------- */
    /**
     * Waits until the counter to be zero.
     *
     * Blocks the function calling until internal counter to be reached to the zero.
     */
    Barrier.prototype.wait = function () {
        return this.cv_.wait();
    };
    /**
     * Tries to wait until the counter to be zero in timeout.
     *
     * Attempts to block the function calling until internal counter to be reached to the zero
     * in timeout. If succeeded to waiting the counter to be reached to the zero, it returns
     * `true`. Otherwise, the {@link Barrier} fails to reach to the zero in the given time, the
     * function gives up the waiting and returns `false`.
     *
     * @param ms The maximum miliseconds for waiting.
     * @return Whether succeeded to waiting in the given time.
     */
    Barrier.prototype.wait_for = function (ms) {
        return this.cv_.wait_for(ms);
    };
    /**
     * Tries to wait until the counter to be zero in time expiration.
     *
     * Attempts to block the function calling until internal counter to be reached to the zero
     * in time expiration. If succeeded to waiting the counter to be reached to the zero, it
     * returns `true`. Otherwise, the {@link Barrier} fails to reach to the zero in the given
     * time, the function gives up the waiting and returns `false`.
     *
     * @param at The maximum time point to wait.
     * @return Whether succeeded to waiting in the given time.
     */
    Barrier.prototype.wait_until = function (at) {
        return this.cv_.wait_until(at);
    };
    /* ---------------------------------------------------------
        ARRIVAL FUNCTIONS
    --------------------------------------------------------- */
    /**
     * Derecements the counter.
     *
     * Decrements the counter by *n* without blocking.
     *
     * If the parametric value *n* is equal to or greater than internal counter, so that the
     * internal counter be equal to or less than zero, everyone who are {@link wait waiting} for
     * the {@link Latch} would continue their executions.
     *
     * @param n Value of the decrement. Default is 1.
     */
    Barrier.prototype.arrive = function () {
        return __awaiter(this, arguments, void 0, function (n) {
            var completed;
            if (n === void 0) { n = 1; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        completed = (this.count_ += n) <= this.size_;
                        if (completed === false)
                            return [2 /*return*/];
                        this.count_ %= this.size_;
                        return [4 /*yield*/, this.cv_.notify_all()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Decrements the counter and waits until the counter to be zero.
     *
     * Decrements the counter by one and blocks the section until internal counter to be zero.
     *
     * If the the remained counter be zero by this decrement, everyone who are
     * {@link wait waiting} for the {@link Barrier} would continue their executions including
     * this one.
     */
    Barrier.prototype.arrive_and_wait = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.arrive()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.wait()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Decrements the counter and initial size at the same time.
     *
     * Decrements not only internal counter, but also initialize size of the counter at the same
     * time. If the remained counter be zero by the decrement, everyone who are
     * {@link wait waiting} for the {@link Barrier} would continue their executions.
     */
    Barrier.prototype.arrive_and_drop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        --this.size_;
                        return [4 /*yield*/, this.arrive(0)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Barrier;
}());
exports.Barrier = Barrier;
//# sourceMappingURL=Barrier.js.map