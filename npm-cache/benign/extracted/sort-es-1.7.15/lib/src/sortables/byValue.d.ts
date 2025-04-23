import { sortable } from "../types/types";
/**
 * the sortable to sort a specific property (or **function that return a value**) of a **complex object or class**.
 * @param discriminator the property to be sorted
 * @param sortFn the sortable to be applied to the property
 *
 * {@link https://sort-es.netlify.app/by-value byValue docs}
 * @version 1.0.0
 */
declare function byValue<T, K extends keyof T>(discriminator: K, sortFn: sortable<NonNullable<T[K]>>): sortable<T>;
/**
 * the sortable to sort a specific property (or **function that return a value**) of a **complex object or class**.
 * @param discriminator the function that return the property
 * @param sortFn the sortable to be applied to the property
 *
 * {@link https://sort-es.netlify.app/by-value byValue docs}
 * @version 1.0.0
 */
declare function byValue<T, TReturn>(discriminator: (item: T) => TReturn, sortFn: sortable<NonNullable<TReturn>>): sortable<T>;
export default byValue;
