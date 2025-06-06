"use strict";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.ranges
 */
//================================================================
var base = __importStar(require("../../algorithm/random"));
var factory_1 = require("../../iterator/factory");
/**
 * Pick sample elements up.
 *
 * @param range An iterable ranged container.
 * @param output Output iterator of the first position.
 * @param n Number of elements to pick up.
 *
 * @return Output Iterator of the last position by advancing.
 */
function sample(range, first, n) {
    return base.sample((0, factory_1.begin)(range), (0, factory_1.end)(range), first, n);
}
exports.sample = sample;
//# sourceMappingURL=random.js.map