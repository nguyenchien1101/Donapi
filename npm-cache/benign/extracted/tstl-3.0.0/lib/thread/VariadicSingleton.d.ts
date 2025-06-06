/**
 * Variadic singleton generator.
 *
 * @author Jeongho Nam - https://github.comm/samchon
 */
export declare class VariadicSingleton<T, Args extends any[]> {
    private readonly closure_;
    private readonly dict_;
    constructor(closure: (...args: Args) => T, hashFunc?: (args: Args) => number, pred?: (x: Args, y: Args) => boolean);
    get(...args: Args): T;
}
