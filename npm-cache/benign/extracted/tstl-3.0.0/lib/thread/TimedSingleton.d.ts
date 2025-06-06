/**
 * Timed singleton generator.
 *
 * The `TimedSingleton` is a type of {@link Singleton} class who re-constructs the singleton
 * value repeatedly whenever specific time has been elapsed after the last lazy construction.
 *
 * @template T Type of the value to be lazy-constructed
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare class TimedSingleton<T, Args extends any[] = []> {
    private readonly interval_;
    private readonly closure_;
    private expired_at_;
    private value_;
    /**
     * Initializer Constructor.
     *
     * @param interval Specific interval time, to determine whether re-generation of the singleton value is required or not, as milliseconds
     * @param closure Lazy constructor function returning the target value
     */
    constructor(interval: number, closure: (...args: Args) => T);
    /**
     * Get value.
     *
     * @returns The lazy constructed value
     */
    get(...args: Args): T;
}
