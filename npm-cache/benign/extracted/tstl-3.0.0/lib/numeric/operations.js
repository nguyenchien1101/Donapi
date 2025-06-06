"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform_exclusive_scan = exports.transform_inclusive_scan = exports.exclusive_scan = exports.inclusive_scan = exports.partial_sum = exports.adjacent_difference = exports.inner_product = exports.accumulate = exports.iota = exports.lcm = exports.gcd = void 0;
var operators_1 = require("./operators");
/**
 * Greatest Common Divider.
 */
function gcd(x, y) {
    var _a;
    y = y.valueOf(); // `Number` to `number`
    while (y !== 0)
        _a = __read([y, x % y], 2), x = _a[0], y = _a[1];
    return x;
}
exports.gcd = gcd;
/**
 * Least Common Multiple.
 */
function lcm(x, y) {
    return (x * y) / gcd(x, y);
}
exports.lcm = lcm;
/* ---------------------------------------------------------
    COMMON ALGORITHMS
--------------------------------------------------------- */
function iota(first, last, value) {
    for (; !first.equals(last); first = first.next())
        first.value = value++;
}
exports.iota = iota;
function accumulate(first, last, init, op) {
    if (op === void 0) { op = operators_1.plus; }
    for (; !first.equals(last); first = first.next())
        init = op(init, first.value);
    return init;
}
exports.accumulate = accumulate;
function inner_product(first1, last1, first2, value, adder, multiplier) {
    if (adder === void 0) { adder = operators_1.plus; }
    if (multiplier === void 0) { multiplier = operators_1.multiplies; }
    for (; !first1.equals(last1); first1 = first1.next()) {
        value = adder(value, multiplier(first1.value, first2.value));
        first2 = first2.next();
    }
    return value;
}
exports.inner_product = inner_product;
function adjacent_difference(first, last, output, subtracter) {
    var _a;
    if (subtracter === void 0) { subtracter = operators_1.minus; }
    if (first.equals(last))
        return output;
    // INITIALIZE
    var before;
    _a = __read(_Initialize(first, output), 3), first = _a[0], output = _a[1], before = _a[2];
    // COMPUTE OPERATIONS
    for (; !first.equals(last); first = first.next()) {
        output.value = subtracter(first.value, before);
        before = first.value;
        output = output.next();
    }
    return output;
}
exports.adjacent_difference = adjacent_difference;
function partial_sum(first, last, output, adder) {
    var _a;
    if (adder === void 0) { adder = operators_1.plus; }
    if (first.equals(last))
        return output;
    // INITIALIZE
    var sum;
    _a = __read(_Initialize(first, output), 3), first = _a[0], output = _a[1], sum = _a[2];
    // COMPUTE OPERATIONS
    for (; !first.equals(last); first = first.next()) {
        sum = adder(sum, first.value);
        output.value = sum;
        output = output.next();
    }
    return output;
}
exports.partial_sum = partial_sum;
/* ---------------------------------------------------------
    PREFIX SUMS
--------------------------------------------------------- */
function inclusive_scan(first, last, output, adder, init) {
    if (adder === void 0) { adder = operators_1.plus; }
    return transform_inclusive_scan(first, last, output, adder, function (val) { return val; }, init);
}
exports.inclusive_scan = inclusive_scan;
function exclusive_scan(first, last, output, init, op) {
    if (op === void 0) { op = operators_1.plus; }
    return transform_exclusive_scan(first, last, output, init, op, function (val) { return val; });
}
exports.exclusive_scan = exclusive_scan;
function transform_inclusive_scan(first, last, output, binary, unary, init) {
    var _a;
    if (first.equals(last))
        return output;
    // INITIALIZE
    var before;
    _a = __read(_Transform_initialize(first, output, unary, init), 3), first = _a[0], output = _a[1], before = _a[2];
    // COMPUTE OPERATIONS
    for (; !first.equals(last); first = first.next()) {
        before = binary(before, unary(first.value));
        output.value = before;
        output = output.next();
    }
    return output;
}
exports.transform_inclusive_scan = transform_inclusive_scan;
function transform_exclusive_scan(first, last, output, init, binary, unary) {
    var _a;
    if (first.equals(last))
        return output;
    // INITIALIZE
    var x = unary(first.value);
    var y;
    _a = __read(_Transform_initialize(first, output, unary, init), 3), first = _a[0], output = _a[1], y = _a[2];
    // COMPUTE OPERATIONS
    for (; !first.equals(last); first = first.next()) {
        y = binary(x, y);
        x = unary(first.value);
        output.value = y;
        output = output.next();
    }
    return output;
}
exports.transform_exclusive_scan = transform_exclusive_scan;
function _Initialize(first, output, init) {
    return _Transform_initialize(first, output, function (val) { return val; }, init);
}
function _Transform_initialize(first, output, unary, init) {
    // WRITE THE FIRST OR INITIAL VALUE
    var ret = unary(init === undefined ? first.value : init);
    output.value = ret;
    // RETURNS WITH ADVANCES
    return [first.next(), output.next(), ret];
}
//# sourceMappingURL=operations.js.map