import { N as NarrowedTo } from './NarrowedTo-CDIykNaN.js';
import 'type-fest';

/**
 * A function that checks if the passed parameter is a number and narrows its
 * type accordingly.
 *
 * @param data - The variable to check.
 * @returns True if the passed input is a number, false otherwise.
 * @signature
 *    R.isNumber(data)
 * @example
 *    R.isNumber(1); // => true
 *    R.isNumber(1n); // => false
 *    R.isNumber('notANumber'); // => false
 * @category Guard
 */
declare function isNumber<T>(data: T | number): data is NarrowedTo<T, number>;

export { isNumber };
