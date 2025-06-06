import { N as NarrowedTo } from './NarrowedTo-CDIykNaN.js';
import 'type-fest';

/**
 * Checks if `data` is a "plain" object. A plain object is defined as an object with string keys and values of any type, including primitives, other objects, functions, classes, etc (aka struct/shape/record/simple). Technically, a plain object is one whose prototype is either `Object.prototype` or `null`, ensuring it does not inherit properties or methods from other object types.
 *
 * This function is narrower in scope than `isObjectType`, which accepts any entity considered an `"object"` by JavaScript's `typeof`.
 *
 * Note that Maps, Arrays, and Sets are not considered plain objects and would return `false`.
 *
 * @param data - The variable to check.
 * @returns The input type, narrowed to only plain objects.
 * @signature
 *    R.isPlainObject(data)
 * @example
 *    // true
 *    R.isPlainObject({}) //=> true
 *    R.isPlainObject({ a: 123 }) //=> true
 *
 *    // false
 *    R.isPlainObject([]) //=> false
 *    R.isPlainObject(Promise.resolve("something")) //=> false
 *    R.isPlainObject(new Date()) //=> false
 *    R.isPlainObject(new Error("error")) //=> false
 *    R.isPlainObject('somethingElse') //=> false
 *    R.isPlainObject(null) //=> false
 * @category Guard
 */
declare function isPlainObject<T>(data: Readonly<Record<PropertyKey, unknown>> | T): data is NarrowedTo<T, Record<PropertyKey, unknown>>;

export { isPlainObject };
