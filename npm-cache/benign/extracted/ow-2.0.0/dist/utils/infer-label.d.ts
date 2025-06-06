import type { CallSite } from 'callsites';
/**
Infer the label of the caller.

@hidden

@param callsites - List of stack frames.
*/
export declare const inferLabel: (callsites: readonly CallSite[]) => void | string;
