/**
 * Classify emoji (👍) and Gemoji (GitHub emoji, :+1:) in `node` as
 * `Emoticon`s.
 *
 * @param {Sentence} node
 *   Sentence to transform.
 * @returns {undefined}
 *   Nothing.
 */
export function emojiModifier(node: Sentence): undefined;
export type Parents = import('nlcst').Parents;
export type Sentence = import('nlcst').Sentence;
export type Emoticon = import('nlcst-emoticon-modifier').Emoticon;
export type Point = import('unist').Point;
export type SentenceInclusiveDescendant = import('unist-util-visit-parents').InclusiveDescendant<Sentence>;
export type SentenceInclusiveDescendantParents = Extract<SentenceInclusiveDescendant, Parents>;
export type SentenceInclusiveDescendantLeafs = Exclude<SentenceInclusiveDescendant, Parents>;
export type FindMatch = {
    start: number;
    end: number;
};
export type ChangeResult = {
    end: number;
    nodes: Array<SentenceInclusiveDescendant>;
};
