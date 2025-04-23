/**
 * Turn a hast tree into an nlcst tree.
 *
 * > 👉 **Note**: `tree` must have positional info and `file` must be a `VFile`
 * > corresponding to `tree`.
 *
 * ##### Notes
 *
 * ###### Implied paragraphs
 *
 * The algorithm supports implicit and explicit paragraphs, such as:
 *
 * ```html
 * <article>
 *   An implicit paragraph.
 *   <h1>An explicit paragraph.</h1>
 * </article>
 * ```
 *
 * Overlapping paragraphs are also supported (see the tests or the HTML spec for
 * more info).
 *
 * ###### Ignored nodes
 *
 * Some elements are ignored and their content will not be present in
 * **[nlcst][]**: `<script>`, `<style>`, `<svg>`, `<math>`, `<del>`.
 *
 * To ignore other elements, add a `data-nlcst` attribute with a value of `ignore`:
 *
 * ```html
 * <p>This is <span data-nlcst="ignore">hidden</span>.</p>
 * <p data-nlcst="ignore">Completely hidden.</p>
 * ```
 *
 * ###### Source nodes
 *
 * `<code>` elements are mapped to [`Source`][nlcst-source] nodes in
 * **[nlcst][]**.
 *
 * To mark other elements as source, add a `data-nlcst` attribute with a value
 * of `source`:
 *
 * ```html
 * <p>This is <span data-nlcst="source">marked as source</span>.</p>
 * <p data-nlcst="source">Completely marked.</p>
 * ```
 *
 * @param {HastNodes} tree
 *   hast tree to transform.
 * @param {VFile} file
 *   Virtual file.
 * @param {ParserConstructor | ParserInstance} Parser
 *   Parser to use.
 * @returns {NlcstRoot}
 *   nlcst tree.
 */
export function toNlcst(tree: HastNodes, file: VFile, Parser: ParserConstructor | ParserInstance): NlcstRoot;
export type HastElement = import('hast').Element;
export type HastElementContent = import('hast').ElementContent;
export type HastNodes = import('hast').Nodes;
export type HastRootContent = import('hast').RootContent;
export type NlcstRoot = import('nlcst').Root;
export type NlcstRootContent = import('nlcst').RootContent;
export type NlcstParagraph = import('nlcst').Paragraph;
export type NlcstParents = import('nlcst').Parents;
export type NlcstSentence = import('nlcst').Sentence;
export type NlcstSentenceContent = import('nlcst').SentenceContent;
export type VFile = import('vfile').VFile;
/**
 * Create a new parser.
 */
export type ParserConstructor = new () => ParserInstance;
/**
 * nlcst parser.
 *
 * For example, `parse-dutch`, `parse-english`, or `parse-latin`.
 */
export type ParserInstance = {
    parse(value?: string | null | undefined): NlcstRoot;
    tokenize(value?: string | null | undefined): Array<NlcstSentenceContent>;
    tokenizeParagraph(value?: string | null | undefined): NlcstParagraph;
    tokenizeParagraphPlugins: ((node: NlcstParagraph) => undefined | void)[];
    tokenizeSentencePlugins: ((node: NlcstSentence) => undefined | void)[];
};
