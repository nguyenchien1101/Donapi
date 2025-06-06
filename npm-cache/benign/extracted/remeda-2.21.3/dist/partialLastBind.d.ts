import { I as IterableContainer } from './IterableContainer-CtfinwiH.js';
import { R as RemedaTypeError } from './RemedaTypeError-C4mozr3m.js';
import { T as TupleSplits } from './TupleSplits-eRE__Ilo.js';
import 'type-fest';
import './TupleParts-CP0H7BrE.js';
import './CoercedArray-DRz3tqda.js';

type PartialLastBindError<Message extends string | number> = RemedaTypeError<"partialLastBind", Message>;
type TupleSuffix<T extends IterableContainer> = TupleSplits<T>["right"];
type RemoveSuffix<T extends IterableContainer, Suffix extends TupleSuffix<T>> = Suffix extends readonly [] ? T : T extends readonly [...infer TRest, infer TLast] ? Suffix extends readonly [...infer SuffixRest, infer _SuffixLast] ? RemoveSuffix<TRest, SuffixRest> : [
    ...RemoveSuffix<TRest, Suffix>,
    TLast?
] : T extends readonly [...infer TRest, (infer _TLast)?] ? Suffix extends readonly [...infer SuffixRest, infer _SuffixLast] ? RemoveSuffix<TRest, SuffixRest> : TRest : PartialLastBindError<1>;
/**
 * Creates a function that calls `func` with `partial` put after the arguments
 * it receives. Note that this doesn't support functions with both optional
 * and rest parameters.
 *
 * Can be thought of as "freezing" some portion of a function's arguments,
 * resulting in a new function with a simplified signature.
 *
 * Useful for converting a data-first function to a data-last one.
 *
 * @param func - The function to wrap.
 * @param partial - The arguments to put after.
 * @returns A partially bound function.
 * @signature
 *    R.partialLastBind(func, partial)
 * @example
 *    const fn = (x, y, z) => `${x}, ${y}, and ${z}`
 *    const partialFn = R.partialLastBind(fn, [2, 3])
 *    partialFn(1) // => 1, 2, and 3
 *
 *    const parseBinary = R.partialLastBind(parseInt, ["2"])
 *    parseBinary("101") // => 5
 *
 *    R.pipe(
 *      { a: 1 },
 *      // instead of (arg) => JSON.stringify(arg, null, 2)
 *      R.partialLastBind(JSON.stringify, [null, 2]),
 *    ) // => '{\n  "a": 1\n}'
 * @dataFirst
 * @category Function
 * @see partialBind
 */
declare function partialLastBind<F extends (...args: any) => any, SuffixArgs extends TupleSuffix<Parameters<F>>, RemovedSuffix extends RemoveSuffix<Parameters<F>, SuffixArgs>>(func: F, ...partial: SuffixArgs): (...rest: RemovedSuffix extends IterableContainer ? RemovedSuffix : never) => ReturnType<F>;

export { partialLastBind };
