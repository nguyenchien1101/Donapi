/**
 * @packageDocumentation
 * @module std
 */
import { RuntimeError } from "./RuntimeError";
/**
 * Underflow Error.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare class UnderflowError extends RuntimeError {
    /**
     * Initializer Constructor.
     *
     * @param message The error messgae.
     */
    constructor(message: string);
}
