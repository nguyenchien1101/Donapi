/**
 * Options for writing the .npmrc file.
 */
interface WriteNpmrcOptions {
    /**
     * The prefix to be used for environment variables in the .npmrc file.
     */
    envPrefix?: string | null;
}
/**
 * Writes the npmrc file with the specified environment prefix.
 *
 * @param {WriteNpmrcOptions} options - The options for writing the npmrc file.
 * @returns {void}
 * @throws {Error} If there is an error writing to the npmrc file.
 */
declare function writeNpmrc({ envPrefix }: WriteNpmrcOptions): void;

export { type WriteNpmrcOptions, writeNpmrc };
