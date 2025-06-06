"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.back_inserter = exports.front_inserter = exports.inserter = exports.make_reverse_iterator = exports.rend = exports.rbegin = exports.end = exports.begin = void 0;
var InsertIterator_1 = require("./InsertIterator");
var FrontInsertIterator_1 = require("./FrontInsertIterator");
var BackInsertIterator_1 = require("./BackInsertIterator");
var Vector_1 = require("../container/Vector");
function begin(container) {
    if (container instanceof Array)
        container = Vector_1.Vector.wrap(container);
    return container.begin();
}
exports.begin = begin;
function end(container) {
    if (container instanceof Array)
        container = Vector_1.Vector.wrap(container);
    return container.end();
}
exports.end = end;
function rbegin(container) {
    if (container instanceof Array)
        container = Vector_1.Vector.wrap(container);
    return container.rbegin();
}
exports.rbegin = rbegin;
function rend(container) {
    if (container instanceof Array)
        container = Vector_1.Vector.wrap(container);
    return container.rend();
}
exports.rend = rend;
/**
 * Construct reverse iterator.
 *
 * @param it Target iterator that reversable.
 * @return The reverse iterator object.
 */
function make_reverse_iterator(it) {
    return it.reverse();
}
exports.make_reverse_iterator = make_reverse_iterator;
/* ---------------------------------------------------------
    INSERTERS
--------------------------------------------------------- */
/**
 * Construct insert iterator.
 *
 * @param container Target container.
 * @param it Iterator to the first insertion position.
 * @return The {@link InsertIterator insert iterator} object.
 */
function inserter(container, it) {
    return new InsertIterator_1.InsertIterator(container, it);
}
exports.inserter = inserter;
/**
 * Construct front insert iterator.
 *
 * @param source Target container.
 * @return The {@link FrontInsertIterator front insert iterator} object.
 */
function front_inserter(source) {
    return new FrontInsertIterator_1.FrontInsertIterator(source);
}
exports.front_inserter = front_inserter;
function back_inserter(source) {
    if (source instanceof Array)
        source = Vector_1.Vector.wrap(source);
    return new BackInsertIterator_1.BackInsertIterator(source);
}
exports.back_inserter = back_inserter;
//# sourceMappingURL=factory.js.map