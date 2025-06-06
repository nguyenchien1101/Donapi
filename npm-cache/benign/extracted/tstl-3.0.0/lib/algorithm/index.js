"use strict";
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
// <algorithm>
//
// @reference http://www.cplusplus.com/reference/algorithm
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
__exportStar(require("./binary_search"), exports);
__exportStar(require("./heap"), exports);
__exportStar(require("./iterations"), exports);
__exportStar(require("./mathematics"), exports);
__exportStar(require("./modifiers"), exports);
__exportStar(require("./partition"), exports);
__exportStar(require("./random"), exports);
__exportStar(require("./sorting"), exports);
__exportStar(require("./merge"), exports);
//# sourceMappingURL=index.js.map