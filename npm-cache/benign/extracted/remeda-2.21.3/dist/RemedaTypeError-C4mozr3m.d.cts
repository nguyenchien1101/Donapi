import { Tagged } from 'type-fest';

declare const RemedaErrorSymbol: unique symbol;
/**
 * Used for reporting type errors in a more useful way than `never`. Use
 * numbers for things that should never happen.
 */
type RemedaTypeError<FunctionName extends string, Message extends string | number> = Message extends string ? Tagged<typeof RemedaErrorSymbol, `RemedaTypeError(${FunctionName}): ${Message}.`> : RemedaTypeError<FunctionName, `Internal error ${Message}. Please open a Remeda GitHub issue.`>;

export type { RemedaTypeError as R };
