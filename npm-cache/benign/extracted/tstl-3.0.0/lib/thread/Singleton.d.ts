/**
 * Singleton generator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare class Singleton<T, Args extends any[] = []> {
    private readonly closure_;
    private value_;
    constructor(closure: (...args: Args) => T);
    get(...args: Args): T;
}
