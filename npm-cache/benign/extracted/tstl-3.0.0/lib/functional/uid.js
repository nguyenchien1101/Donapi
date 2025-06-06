"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_uid = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var Global_1 = require("../internal/Global");
/**
 * Get unique identifier.
 *
 * @param obj Target object.
 * @return The identifier number.
 */
function get_uid(obj) {
    // NO UID EXISTS, THEN ISSUE ONE.
    if (obj instanceof Object) {
        if (obj.hasOwnProperty("__get_m_iUID") === false) {
            var uid_1 = ++(0, Global_1._Get_root)().__s_iUID;
            Object.defineProperty(obj, "__get_m_iUID", {
                value: function () {
                    return uid_1;
                },
            });
        }
        // RETURNS
        return obj.__get_m_iUID();
    }
    else if (obj === undefined)
        return -1;
    // is null
    else
        return 0;
}
exports.get_uid = get_uid;
//# sourceMappingURL=uid.js.map