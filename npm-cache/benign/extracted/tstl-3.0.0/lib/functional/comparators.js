"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greater_equal = exports.greater = exports.less_equal = exports.less = exports.not_equal_to = exports.equal_to = void 0;
var uid_1 = require("./uid");
/**
 * Test whether two arguments are equal.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether two arguments are equal or not.
 */
function equal_to(x, y) {
    // CONVERT TO PRIMITIVE TYPE
    x = x ? x.valueOf() : x;
    y = y ? y.valueOf() : y;
    // DO COMPARE
    if (x instanceof Object &&
        x.equals instanceof Function)
        return x.equals(y);
    else
        return x === y;
}
exports.equal_to = equal_to;
/**
 * Test whether two arguments are not equal.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Returns `true`, if two arguments are not equal, otherwise `false`.
 */
function not_equal_to(x, y) {
    return !equal_to(x, y);
}
exports.not_equal_to = not_equal_to;
/**
 * Test whether *x* is less than *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is less than *y*.
 */
function less(x, y) {
    // CONVERT TO PRIMITIVE TYPE
    x = x.valueOf();
    y = y.valueOf();
    // DO COMPARE
    if (x instanceof Object)
        if (x.less instanceof Function)
            // has less()
            return x.less(y);
        else
            return (0, uid_1.get_uid)(x) < (0, uid_1.get_uid)(y);
    else
        return x < y;
}
exports.less = less;
/**
 * Test whether *x* is less than or equal to *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is less than or equal to *y*.
 */
function less_equal(x, y) {
    return less(x, y) || equal_to(x, y);
}
exports.less_equal = less_equal;
/**
 * Test whether *x* is greater than *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is greater than *y*.
 */
function greater(x, y) {
    return !less_equal(x, y);
}
exports.greater = greater;
/**
 * Test whether *x* is greater than or equal to *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is greater than or equal to *y*.
 */
function greater_equal(x, y) {
    return !less(x, y);
}
exports.greater_equal = greater_equal;
//# sourceMappingURL=comparators.js.map