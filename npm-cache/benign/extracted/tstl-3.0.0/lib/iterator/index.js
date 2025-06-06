"use strict";
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
// <iterator>
//
// @reference http://www.cplusplus.com/reference/iterator
// @author Jeongho Nam - https://github.com/samchon
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./IForwardIterator"), exports);
__exportStar(require("./IBidirectionalIterator"), exports);
__exportStar(require("./IRandomAccessIterator"), exports);
__exportStar(require("./IReverseIterator"), exports);
__exportStar(require("./IReversableIterator"), exports);
__exportStar(require("./InsertIterator"), exports);
__exportStar(require("./FrontInsertIterator"), exports);
__exportStar(require("./BackInsertIterator"), exports);
__exportStar(require("./factory"), exports);
__exportStar(require("./global"), exports);
//# sourceMappingURL=index.js.map