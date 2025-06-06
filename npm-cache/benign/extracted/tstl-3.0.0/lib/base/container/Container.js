"use strict";
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
exports.Container = void 0;
var ForOfAdaptor_1 = require("../../internal/iterator/disposable/ForOfAdaptor");
/**
 * Basic container.
 *
 * @template T Stored elements' type
 * @template SourceT Derived type extending this {@link Container}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 * @template PElem Parent type of *T*, used for inserting elements through {@link assign} and {@link insert}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var Container = /** @class */ (function () {
    function Container() {
    }
    /**
     * @inheritDoc
     */
    Container.prototype.empty = function () {
        return this.size() === 0;
    };
    /**
     * @inheritDoc
     */
    Container.prototype.rbegin = function () {
        return this.end().reverse();
    };
    /**
     * @inheritDoc
     */
    Container.prototype.rend = function () {
        return this.begin().reverse();
    };
    /**
     * @inheritDoc
     */
    Container.prototype[Symbol.iterator] = function () {
        return new ForOfAdaptor_1.ForOfAdaptor(this.begin(), this.end());
    };
    /**
     * @inheritDoc
     */
    Container.prototype.toJSON = function () {
        var e_1, _a;
        var ret = [];
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var elem = _c.value;
                ret.push(elem);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return ret;
    };
    return Container;
}());
exports.Container = Container;
//# sourceMappingURL=Container.js.map