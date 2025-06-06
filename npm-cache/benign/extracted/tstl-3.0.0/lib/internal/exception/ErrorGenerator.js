"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorGenerator = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var InvalidArgument_1 = require("../../exception/InvalidArgument");
var OutOfRange_1 = require("../../exception/OutOfRange");
var ErrorGenerator;
(function (ErrorGenerator) {
    /* ---------------------------------------------------------
        COMMON
    --------------------------------------------------------- */
    function get_class_name(instance) {
        if (typeof instance === "string")
            return instance;
        var ret = instance.constructor.name;
        if (instance.constructor.__MODULE)
            ret = "".concat(instance.constructor.__MODULE, ".").concat(ret);
        return "std.".concat(ret);
    }
    ErrorGenerator.get_class_name = get_class_name;
    /* ---------------------------------------------------------
        CONTAINERS
    --------------------------------------------------------- */
    function empty(instance, method) {
        return new OutOfRange_1.OutOfRange("Error on ".concat(get_class_name(instance), ".").concat(method, "(): it's empty container."));
    }
    ErrorGenerator.empty = empty;
    function negative_index(instance, method, index) {
        return new OutOfRange_1.OutOfRange("Error on ".concat(get_class_name(instance), ".").concat(method, "(): parametric index is negative -> (index = ").concat(index, ")."));
    }
    ErrorGenerator.negative_index = negative_index;
    function excessive_index(instance, method, index, size) {
        return new OutOfRange_1.OutOfRange("Error on ".concat(get_class_name(instance), ".").concat(method, "(): parametric index is equal or greater than size -> (index = ").concat(index, ", size: ").concat(size, ")."));
    }
    ErrorGenerator.excessive_index = excessive_index;
    function not_my_iterator(instance, method) {
        return new InvalidArgument_1.InvalidArgument("Error on ".concat(get_class_name(instance), ".").concat(method, "(): parametric iterator is not this container's own."));
    }
    ErrorGenerator.not_my_iterator = not_my_iterator;
    function erased_iterator(instance, method) {
        return new InvalidArgument_1.InvalidArgument("Error on ".concat(get_class_name(instance), ".").concat(method, "(): parametric iterator, it already has been erased."));
    }
    ErrorGenerator.erased_iterator = erased_iterator;
    function negative_iterator(instance, method, index) {
        return new OutOfRange_1.OutOfRange("Error on ".concat(get_class_name(instance), ".").concat(method, "(): parametric iterator is directing negative position -> (index = ").concat(index, ")."));
    }
    ErrorGenerator.negative_iterator = negative_iterator;
    function iterator_end_value(instance, method) {
        if (method === void 0) { method = "end"; }
        var className = get_class_name(instance);
        return new OutOfRange_1.OutOfRange("Error on ".concat(className, ".Iterator.value: cannot access to the ").concat(className, ".").concat(method, "().value."));
    }
    ErrorGenerator.iterator_end_value = iterator_end_value;
    function key_nout_found(instance, method, key) {
        throw new OutOfRange_1.OutOfRange("Error on ".concat(get_class_name(instance), ".").concat(method, "(): unable to find the matched key -> ").concat(key));
    }
    ErrorGenerator.key_nout_found = key_nout_found;
})(ErrorGenerator || (exports.ErrorGenerator = ErrorGenerator = {}));
//# sourceMappingURL=ErrorGenerator.js.map