import { I as IterableContainer } from './IterableContainer-CtfinwiH.cjs';

type First<T extends IterableContainer> = T extends [] ? undefined : T extends readonly [unknown, ...Array<unknown>] ? T[0] : T extends readonly [...infer Pre, infer Last] ? Last | Pre[0] : T[0] | undefined;
/**
 * Gets the first element of `array`.
 *
 * @param data - The array.
 * @returns The first element of the array.
 * @signature
 *    R.first(array)
 * @example
 *    R.first([1, 2, 3]) // => 1
 *    R.first([]) // => undefined
 * @dataFirst
 * @lazy
 * @category Array
 */
declare function first<T extends IterableContainer>(data: T): First<T>;
/**
 * Gets the first element of `array`.
 *
 * @returns The first element of the array.
 * @signature
 *    R.first()(array)
 * @example
 *    R.pipe(
 *      [1, 2, 4, 8, 16],
 *      R.filter(x => x > 3),
 *      R.first(),
 *      x => x + 1
 *    ); // => 5
 * @dataLast
 * @lazy
 * @category Array
 */
declare function first(): <T extends IterableContainer>(data: T) => First<T>;

export { first };
