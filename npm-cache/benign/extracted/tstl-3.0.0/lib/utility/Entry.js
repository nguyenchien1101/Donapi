"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
var hash_1 = require("../functional/hash");
var comparators_1 = require("../functional/comparators");
/**
 * Entry for mapping.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var Entry = /** @class */ (function () {
    /**
     * Intializer Constructor.
     *
     * @param first The first, key element.
     * @param second The second, mapped element.
     */
    function Entry(first, second) {
        this.first = first;
        this.second = second;
    }
    /**
     * @inheritDoc
     */
    Entry.prototype.equals = function (obj) {
        return (0, comparators_1.equal_to)(this.first, obj.first);
    };
    /**
     * @inheritDoc
     */
    Entry.prototype.less = function (obj) {
        return (0, comparators_1.less)(this.first, obj.first);
    };
    /**
     * @inheritDoc
     */
    Entry.prototype.hashCode = function () {
        return (0, hash_1.hash)(this.first);
    };
    return Entry;
}());
exports.Entry = Entry;
//# sourceMappingURL=Entry.js.map