type Key = string | number | symbol;
type Transform = {
    <T, R>(set: Set<T>, fn: (elem: T, index: number) => R): Set<R>;
    <T extends Map<unknown, unknown>, RK, RV>(map: T, fn: (elem: [
        T extends Map<infer U, unknown> ? U : never,
        T extends Map<unknown, infer U> ? U : never
    ], index: number) => [RK, RV]): Map<RK, RV>;
    <T extends Record<Key, unknown>, RK extends Key, RV>(object: T, fn: (elem: [
        T extends Record<infer U, unknown> ? U : never,
        T extends Record<Key, infer U> ? U : never
    ], index: number) => [RK, RV]): Record<RK, RV>;
};
export declare const transform: Transform;
export {};
