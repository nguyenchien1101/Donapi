/**
 * Merge emoticons in a `SentenceNode` into `EmoticonNode`s.
 *
 * @param {Sentence}  node
 *   nlcst sentence to transform.
 * @returns {undefined}
 *   Nothing.
 */
export function emoticonModifier(node: Sentence): undefined;
export type Sentence = import('nlcst').Sentence;
export type SentenceContent = import('nlcst').SentenceContent;
export type Emoticon = import('../index.js').Emoticon;
