import { I as IterableContainer } from './IterableContainer-CtfinwiH.cjs';

/**
 * Takes the last `n` elements from the `array`.
 *
 * @param array - The target array.
 * @param n - The number of elements to take.
 * @signature
 *    R.takeLast(array, n)
 * @example
 *    R.takeLast([1, 2, 3, 4, 5], 2) // => [4, 5]
 * @dataFirst
 * @category Array
 */
declare function takeLast<T extends IterableContainer>(array: T, n: number): Array<T[number]>;
/**
 * Take the last `n` elements from the `array`.
 *
 * @param n - The number of elements to take.
 * @signature
 *    R.takeLast(n)(array)
 * @example
 *    R.takeLast(2)([1, 2, 3, 4, 5]) // => [4, 5]
 * @dataLast
 * @category Array
 */
declare function takeLast<T extends IterableContainer>(n: number): (array: T) => Array<T[number]>;

export { takeLast };
