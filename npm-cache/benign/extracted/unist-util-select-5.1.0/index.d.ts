/**
 * Check that the given `node` matches `selector`.
 *
 * This only checks the node itself, not the surrounding tree.
 * Thus, nesting in selectors is not supported (`paragraph strong`,
 * `paragraph > strong`), neither are selectors like `:first-child`, etc.
 * This only checks that the given node matches the selector.
 *
 * @param {string} selector
 *   CSS selector, such as (`heading`, `link, linkReference`).
 * @param {Node | NodeLike | null | undefined} [node]
 *   Node that might match `selector`.
 * @returns {boolean}
 *   Whether `node` matches `selector`.
 */
export function matches(selector: string, node?: Node | NodeLike | null | undefined): boolean;
/**
 * Select the first node that matches `selector` in the given `tree`.
 *
 * Searches the tree in *preorder*.
 *
 * @param {string} selector
 *   CSS selector, such as (`heading`, `link, linkReference`).
 * @param {Node | NodeLike | null | undefined} [tree]
 *   Tree to search.
 * @returns {Node | undefined}
 *   First node in `tree` that matches `selector` or `null` if nothing is
 *   found.
 *
 *   This could be `tree` itself.
 */
export function select(selector: string, tree?: Node | NodeLike | null | undefined): Node | undefined;
/**
 * Select all nodes that match `selector` in the given `tree`.
 *
 * Searches the tree in *preorder*.
 *
 * @param {string} selector
 *   CSS selector, such as (`heading`, `link, linkReference`).
 * @param {Node | NodeLike | null | undefined} [tree]
 *   Tree to search.
 * @returns {Array<Node>}
 *   Nodes in `tree` that match `selector`.
 *
 *   This could include `tree` itself.
 */
export function selectAll(selector: string, tree?: Node | NodeLike | null | undefined): Array<Node>;
export type Position = import('unist').Position;
export type Node = import('unist').Node;
export type SelectState = import('./lib/types.js').SelectState;
export type NodeLike = Record<string, unknown> & {
    type: string;
    position?: Position | undefined;
};
