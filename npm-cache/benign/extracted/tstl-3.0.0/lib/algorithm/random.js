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
exports.sample = exports.randint = void 0;
var Vector_1 = require("../container/Vector");
var global_1 = require("../iterator/global");
var sorting_1 = require("./sorting");
/**
 * Generate random integer.
 *
 * @param x Minimum value.
 * @param y Maximum value.
 *
 * @return A random integer between [x, y].
 */
function randint(x, y) {
    var rand = Math.random() * (y - x + 1);
    return Math.floor(rand) + x;
}
exports.randint = randint;
/**
 * Pick sample elements up.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 * @param n Number of elements to pick up.
 *
 * @return Output Iterator of the last position by advancing.
 */
function sample(first, last, output, n) {
    var e_1, _a;
    // GENERATE REMAINDERS
    var step = (0, global_1.distance)(first, last);
    var remainders = [];
    for (var i = 0; i < step; ++i)
        remainders.push(i);
    //----
    // CONSTRUCT INDEXES
    //----
    var advances = new Vector_1.Vector();
    n = Math.min(n, step);
    // PICK SAMPLE INDEXES
    for (var i = 0; i < n; ++i) {
        var idx = randint(0, remainders.length - 1);
        advances.push(remainders.splice(idx, 1)[0]);
    }
    (0, sorting_1.sort)(advances.begin(), advances.end());
    // CHANGE INDEXES TO ADVANCES
    for (var i = n - 1; i >= 1; --i)
        advances.set(i, advances.at(i) - advances.at(i - 1));
    try {
        //----
        // FILL SAMPLES
        //----
        for (var advances_1 = __values(advances), advances_1_1 = advances_1.next(); !advances_1_1.done; advances_1_1 = advances_1.next()) {
            var adv = advances_1_1.value;
            first = (0, global_1.advance)(first, adv);
            output.value = first.value;
            output = output.next();
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (advances_1_1 && !advances_1_1.done && (_a = advances_1.return)) _a.call(advances_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return output;
}
exports.sample = sample;
//# sourceMappingURL=random.js.map