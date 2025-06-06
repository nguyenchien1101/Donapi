"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_pair = exports.Pair = void 0;
var hash_1 = require("../functional/hash");
var comparators_1 = require("../functional/comparators");
/**
 * Pair of two elements.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var Pair = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    /**
     * Initializer Constructor.
     *
     * @param first The first element.
     * @param second The second element.
     */
    function Pair(first, second) {
        this.first = first;
        this.second = second;
    }
    /* ---------------------------------------------------------
        COMPARISON
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    Pair.prototype.equals = function (pair) {
        return ((0, comparators_1.equal_to)(this.first, pair.first) &&
            (0, comparators_1.equal_to)(this.second, pair.second));
    };
    /**
     * @inheritDoc
     */
    Pair.prototype.less = function (pair) {
        if ((0, comparators_1.equal_to)(this.first, pair.first) === false)
            return (0, comparators_1.less)(this.first, pair.first);
        else
            return (0, comparators_1.less)(this.second, pair.second);
    };
    /**
     * @inheritDoc
     */
    Pair.prototype.hashCode = function () {
        return (0, hash_1.hash)(this.first, this.second);
    };
    return Pair;
}());
exports.Pair = Pair;
/**
 * Create a {@link Pair}.
 *
 * @param first The 1st element.
 * @param second The 2nd element.
 *
 * @return A {@link Pair} object.
 */
function make_pair(first, second) {
    return new Pair(first, second);
}
exports.make_pair = make_pair;
//# sourceMappingURL=Pair.js.map