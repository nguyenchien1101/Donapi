// @ts-expect-error Allow any
export const transform = (value, fn) => 
// @ts-expect-error Allow any
value instanceof Set
    ? new Set([...value].map(fn))
    : value instanceof Map
        ? // @ts-expect-error Allow any
            new Map([...value].map(fn))
        : // @ts-expect-error Allow any
            Object.fromEntries(Object.entries(value).map(fn));

