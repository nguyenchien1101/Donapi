/**
 * Turn HTML into a syntax tree, using browser APIs when available, so it has
 * a smaller bundle size there.
 *
 * @param {string} value
 *   Serialized HTML to parse.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {Root}
 *   Tree.
 */
export function fromHtmlIsomorphic(value: string, options?: Options | null | undefined): Root;
export type Root = import('hast').Root;
export type Options = Pick<import('hast-util-from-html').Options, 'fragment'>;
