import { type Finite } from 'type-fest';
/**
An alternative to `Number.isFinite()` that properly acts as a type guard.

@category Improved builtin
@category Type guard
*/
export declare const isFinite: <T extends number>(value: T) => value is Finite<T>;
