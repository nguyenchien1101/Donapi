import { type Integer } from 'type-fest';
/**
An alternative to `Number.isSafeInteger()` that properly acts as a type guard.

@category Improved builtin
@category Type guard
*/
export declare const isSafeInteger: <T extends number>(value: T) => value is Integer<T>;
