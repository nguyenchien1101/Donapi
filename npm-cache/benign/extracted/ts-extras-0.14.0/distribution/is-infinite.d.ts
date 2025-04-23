import { type NegativeInfinity, type PositiveInfinity } from 'type-fest';
/**
Check whether a value is infinite.

@category Type guard
*/
export declare function isInfinite(value: unknown): value is NegativeInfinity | PositiveInfinity;
