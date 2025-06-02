import { type Integer } from 'type-fest';
/**
An alternative to `Number.isInteger()` that properly acts as a type guard.

@category Improved builtin
@category Type guard
*/
export declare const isInteger: <T extends number>(value: T) => value is Integer<T>;
