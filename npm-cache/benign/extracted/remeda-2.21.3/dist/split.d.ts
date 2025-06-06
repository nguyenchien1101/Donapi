import { IsFloat, ArraySlice, Split as Split$1, NonNegative } from 'type-fest';

type BuiltInReturnType = ReturnType<typeof String.prototype.split>;
type Split<S extends string, Separator extends string, N extends number | undefined = undefined> = string extends S ? BuiltInReturnType : string extends Separator ? BuiltInReturnType : number extends N ? BuiltInReturnType : IsFloat<N> extends true ? BuiltInReturnType : N extends number ? ArraySlice<Split$1<S, Separator>, 0, NonNegative<N>> : Split$1<S, Separator>;
/**
 * Takes a pattern and divides this string into an ordered list of substrings by
 * searching for the pattern, puts these substrings into an array, and returns
 * the array. This function mirrors the built-in [`String.prototype.split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
 * method.
 *
 * @param data - The string to split.
 * @param separator - The pattern describing where each split should occur. Can
 * be a string, or a regular expression.
 * @param limit - A non-negative integer specifying a limit on the number of
 * substrings to be included in the array. If provided, splits the string at
 * each occurrence of the specified separator, but stops when limit entries have
 * been placed in the array. Any leftover text is not included in the array at
 * all. The array may contain fewer entries than limit if the end of the string
 * is reached before the limit is reached. If limit is 0, [] is returned.
 * @returns An Array of strings, split at each point where the separator occurs
 * in the given string.
 * @signature
 *   R.split(data, separator, limit);
 * @example
 *   R.split("a,b,c", ","); //=> ["a", "b", "c"]
 *   R.split("a,b,c", ",", 2); //=> ["a", "b"]
 *   R.split("a1b2c3d", /\d/u); //=> ["a", "b", "c", "d"]
 * @dataFirst
 * @category String
 */
declare function split(data: string, separator: RegExp, limit?: number): Array<string>;
declare function split<S extends string, Separator extends string, N extends number | undefined = undefined>(data: S, separator: Separator, limit?: N): Split<S, Separator, N>;
/**
 * Takes a pattern and divides this string into an ordered list of substrings by
 * searching for the pattern, puts these substrings into an array, and returns
 * the array. This function mirrors the built-in [`String.prototype.split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
 * method.
 *
 * @param separator - The pattern describing where each split should occur. Can
 * be a string, or a regular expression.
 * @param limit - A non-negative integer specifying a limit on the number of
 * substrings to be included in the array. If provided, splits the string at
 * each occurrence of the specified separator, but stops when limit entries have
 * been placed in the array. Any leftover text is not included in the array at
 * all. The array may contain fewer entries than limit if the end of the string
 * is reached before the limit is reached. If limit is 0, [] is returned.
 * @returns An Array of strings, split at each point where the separator occurs
 * in the given string.
 * @signature
 *   R.split(separator, limit)(data);
 * @example
 *   R.pipe("a,b,c", R.split(",")); //=> ["a", "b", "c"]
 *   R.pipe("a,b,c", R.split(",", 2)); //=> ["a", "b"]
 *   R.pipe("a1b2c3d", R.split(/\d/u)); //=> ["a", "b", "c", "d"]
 * @dataLast
 * @category String
 */
declare function split(separator: RegExp, limit?: number): (data: string) => Array<string>;
declare function split<S extends string, Separator extends string, N extends number | undefined = undefined>(separator: Separator, limit?: N): (data: S) => Split<S, Separator, N>;

export { split };
