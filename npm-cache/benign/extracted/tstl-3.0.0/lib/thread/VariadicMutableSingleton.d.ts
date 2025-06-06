/**
 * Variadic mutable singleton generator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare class VariadicMutableSingleton<T, Args extends any[]> {
    /**
     * @hidden
     */
    private readonly closure_;
    /**
     * @hidden
     */
    private readonly dict_;
    constructor(closure: (...args: Args) => Promise<T>, hashFunc?: (args: Args) => number, pred?: (x: Args, y: Args) => boolean);
    set(...items: [...Args, T]): Promise<void>;
    reload(...args: Args): Promise<T>;
    clear(): Promise<void>;
    clear(...args: Args): Promise<void>;
    get(...args: Args): Promise<T>;
    is_loaded(...args: Args): Promise<boolean>;
    /**
     * @hidden
     */
    private _Get_singleton;
}
