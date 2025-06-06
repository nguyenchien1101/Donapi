import { type Predicate } from '../predicates/predicate.js';
/**
Operator which inverts the following validation.

@hidden

@param predictate - Predicate to wrap inside the operator.
*/
export declare const not: (predicate: Predicate) => Predicate;
