/**
 * Make an mdast tree compact by merging adjacent text nodes and block quotes.
 *
 * @param {Nodes} tree
 *   Tree to change.
 * @returns {undefined}
 *   Nothing.
 */
export function compact(tree: Nodes): undefined
export type Nodes = import('mdast').Nodes
