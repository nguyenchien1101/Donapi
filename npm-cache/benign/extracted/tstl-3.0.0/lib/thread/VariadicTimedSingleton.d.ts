/**
 * Variadic timed singleton generator.
 *
 * The `VariadicTimedSingleton` is a type of {@link VariadicSingleton} class who re-constructs
 * the singleton value repeatedly whenever specific time has been elapsed after the last lazy
 * construction.
 *
 * @template T Type of the value to be lazy-constructed
 * @template Args Type of parameters of the lazy constructor function
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare class VariadicTimedSingleton<T, Args extends any[]> {
    private readonly interval_;
    private readonly closure_;
    private readonly dict_;
    /**
     * Initializer Constructor.
     *
     * @param interval Specific interval time, to determine whether re-generation of the singleton value is required or not, as milliseconds
     * @param closure Lazy constructor function returning the target value
     * @param hasher Hash function for the *lazy constructor* function arguments
     * @param pred Predicator function for the *lazy constructor* function arguments
     */
    constructor(interval: number, closure: (...args: Args) => T, hasher?: (args: Args) => number, pred?: (x: Args, y: Args) => boolean);
    /**
     * Get value.
     *
     * @param args Parameters for the lazy constructor function
     * @returns The lazy constructed value
     */
    get(...args: Args): T;
}
