"use strict";
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
// <exception>
//
// @reference http://www.cplusplus.com/reference/exception/
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
__exportStar(require("./Exception"), exports);
__exportStar(require("./LogicError"), exports);
__exportStar(require("./DomainError"), exports);
__exportStar(require("./InvalidArgument"), exports);
__exportStar(require("./LengthError"), exports);
__exportStar(require("./OutOfRange"), exports);
__exportStar(require("./RuntimeError"), exports);
__exportStar(require("./RangeError"), exports);
__exportStar(require("./OverflowError"), exports);
__exportStar(require("./UnderflowError"), exports);
__exportStar(require("./SystemError"), exports);
__exportStar(require("./ErrorCategory"), exports);
__exportStar(require("./ErrorCode"), exports);
__exportStar(require("./ErrorCondition"), exports);
//# sourceMappingURL=index.js.map