/**
Check whether a value is infinite.

@category Type guard
*/
export function isInfinite(value) {
    return !Number.isNaN(value) && !Number.isFinite(value);
}
