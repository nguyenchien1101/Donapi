/**
 * Calls the given function with the given value, then returns the given value.
 * The return value of the provided function is ignored.
 *
 * This allows "tapping into" a function sequence in a pipe, to perform side
 * effects on intermediate results.
 *
 * @param value - The value to pass into the function.
 * @param fn - The function to call.
 * @signature
 *    R.tap(value, fn)
 * @example
 *    R.tap("foo", console.log) // => "foo"
 * @dataFirst
 * @category Other
 */
declare function tap<T>(value: T, fn: (value: T) => void): T;
/**
 * Calls the given function with the given value, then returns the given value.
 * The return value of the provided function is ignored.
 *
 * This allows "tapping into" a function sequence in a pipe, to perform side
 * effects on intermediate results.
 *
 * @param fn - The function to call.
 * @signature
 *    R.tap(fn)(value)
 * @example
 *    R.pipe(
 *      [-5, -1, 2, 3],
 *      R.filter(n => n > 0),
 *      R.tap(console.log), // prints [2, 3]
 *      R.map(n => n * 2)
 *    ) // => [4, 6]
 * @dataLast
 * @category Other
 */
declare function tap<T, F extends (value: T) => unknown>(fn: F): (value: T) => T;

export { tap };
