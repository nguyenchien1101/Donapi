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
exports.hash = void 0;
var uid_1 = require("./uid");
/**
 * Hash function.
 *
 * @param itemList The items to be hashed.
 * @return The hash code.
 */
function hash() {
    var e_1, _a;
    var itemList = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itemList[_i] = arguments[_i];
    }
    var ret = INIT_VALUE;
    try {
        for (var itemList_1 = __values(itemList), itemList_1_1 = itemList_1.next(); !itemList_1_1.done; itemList_1_1 = itemList_1.next()) {
            var item = itemList_1_1.value;
            item = item ? item.valueOf() : item;
            var type = typeof item;
            if (type === "boolean")
                // BOOLEAN -> 1 BYTE
                ret = _Hash_boolean(item, ret);
            else if (type === "number" || type === "bigint")
                // NUMBER -> 8 BYTES
                ret = _Hash_number(item, ret);
            else if (type === "string")
                // STRING -> {LENGTH} BYTES
                ret = _Hash_string(item, ret);
            else if (item instanceof Object &&
                item.hashCode instanceof Function) {
                var hashed = item.hashCode();
                if (itemList.length === 1)
                    return hashed;
                else {
                    ret = ret ^ hashed;
                    ret *= MULTIPLIER;
                }
            } // object | null | undefined
            else
                ret = _Hash_number((0, uid_1.get_uid)(item), ret);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (itemList_1_1 && !itemList_1_1.done && (_a = itemList_1.return)) _a.call(itemList_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return Math.abs(ret);
}
exports.hash = hash;
function _Hash_boolean(val, ret) {
    ret ^= val ? 1 : 0;
    ret *= MULTIPLIER;
    return ret;
}
function _Hash_number(val, ret) {
    return _Hash_string(val.toString(), ret);
    // // ------------------------------------------
    // //    IN C++
    // //        CONSIDER A NUMBER AS A STRING
    // //        HASH<STRING>((CHAR*)&VAL, 8)
    // // ------------------------------------------
    // // CONSTRUCT BUFFER AND BYTE_ARRAY
    // const buffer: ArrayBuffer = new ArrayBuffer(8);
    // const byteArray: Int8Array = new Int8Array(buffer);
    // const valueArray: Float64Array = new Float64Array(buffer);
    // valueArray[0] = val;
    // for (let i: number = 0; i < byteArray.length; ++i)
    // {
    //     const byte = (byteArray[i] < 0) ? byteArray[i] + 256 : byteArray[i];
    //     ret ^= byte;
    //     ret *= _HASH_MULTIPLIER;
    // }
    // return Math.abs(ret);
}
function _Hash_string(str, ret) {
    for (var i = 0; i < str.length; ++i) {
        ret ^= str.charCodeAt(i);
        ret *= MULTIPLIER;
    }
    return Math.abs(ret);
}
/* ---------------------------------------------------------
    RESERVED ITEMS
--------------------------------------------------------- */
var INIT_VALUE = 2166136261;
var MULTIPLIER = 16777619;
//# sourceMappingURL=hash.js.map