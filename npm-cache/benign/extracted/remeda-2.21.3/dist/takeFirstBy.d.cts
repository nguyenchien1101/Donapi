import { O as OrderRule } from './purryOrderRules-BKXCPBNx.cjs';
import { N as NonEmptyArray } from './NonEmptyArray-C9Od1wmF.cjs';

/**
 * Take the first `n` items from `data` based on the provided ordering criteria. This allows you to avoid sorting the array before taking the items. The complexity of this function is *O(Nlogn)* where `N` is the length of the array.
 *
 * For the opposite operation (to drop `n` elements) see `dropFirstBy`.
 *
 * @param data - The input array.
 * @param n - The number of items to take. If `n` is non-positive no items would be returned, if `n` is bigger then data.length a *clone* of `data` would be returned.
 * @param rules - A variadic array of order rules defining the sorting criteria. Each order rule is a projection function that extracts a comparable value from the data. Sorting is based on these extracted values using the native `<` and `>` operators. Earlier rules take precedence over later ones. Use the syntax `[projection, "desc"]` for descending order.
 * @returns A subset of the input array.
 * @signature
 *   R.takeFirstBy(data, n, ...rules);
 * @example
 *   R.takeFirstBy(['aa', 'aaaa', 'a', 'aaa'], 2, x => x.length); // => ['a', 'aa']
 * @dataFirst
 * @category Array
 */
declare function takeFirstBy<T>(data: ReadonlyArray<T>, n: number, ...rules: Readonly<NonEmptyArray<OrderRule<T>>>): Array<T>;
/**
 * Take the first `n` items from `data` based on the provided ordering criteria. This allows you to avoid sorting the array before taking the items. The complexity of this function is *O(Nlogn)* where `N` is the length of the array.
 *
 * For the opposite operation (to drop `n` elements) see `dropFirstBy`.
 *
 * @param n - The number of items to take. If `n` is non-positive no items would be returned, if `n` is bigger then data.length a *clone* of `data` would be returned.
 * @param rules - A variadic array of order rules defining the sorting criteria. Each order rule is a projection function that extracts a comparable value from the data. Sorting is based on these extracted values using the native `<` and `>` operators. Earlier rules take precedence over later ones. Use the syntax `[projection, "desc"]` for descending order.
 * @returns A subset of the input array.
 * @signature
 *   R.takeFirstBy(n, ...rules)(data);
 * @example
 *   R.pipe(['aa', 'aaaa', 'a', 'aaa'], R.takeFirstBy(2, x => x.length)); // => ['a', 'aa']
 * @dataLast
 * @category Array
 */
declare function takeFirstBy<T>(n: number, ...rules: Readonly<NonEmptyArray<OrderRule<T>>>): (data: ReadonlyArray<T>) => Array<T>;

export { takeFirstBy };
