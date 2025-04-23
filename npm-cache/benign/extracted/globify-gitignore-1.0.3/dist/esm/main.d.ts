import { GlobifiedEntry } from "./globified-entry";
export { GlobifiedEntry } from "./globified-entry";
export { posixifyPath, posixifyPathNormalized } from "./path-utils";
/**
 * @param {string} givenPath The given path to be globified
 * @param {string} givenDirectory [process.cwd()] The cwd to use to resolve relative path names
 * @param {boolean} absolute [false] If true, the glob will be absolute
 * @returns {Promise<GlobifiedEntry | [GlobifiedEntry, GlobifiedEntry]>} The glob path or the file path itself
 */
export declare function globifyPath(givenPath: string, givenDirectory?: string, absolute?: boolean): Promise<[GlobifiedEntry] | [GlobifiedEntry, GlobifiedEntry]>;
/**
 * Globifies a directory
 *
 * @param {string} givenDirectory The given directory to be globified
 */
export declare function globifyDirectory(givenDirectory: string): string;
/**
 * Parse and globy the `.gitingore` file that exists in a directory
 *
 * @param {string} gitIgnoreDirectory The given directory that has the `.gitignore` file
 * @param {boolean} absolute [false] If true, the glob will be absolute
 * @returns {Promise<GlobifiedEntry[]>} An array of glob patterns
 */
export declare function globifyGitIgnoreFile(gitIgnoreDirectory: string, absolute?: boolean): Promise<Array<GlobifiedEntry>>;
/**
 * Globify the content of a gitignore string
 *
 * @param {string} gitIgnoreContent The content of the gitignore file
 * @param {string | undefined} gitIgnoreDirectory The directory of gitignore
 * @param {boolean} absolute [false] If true, the glob will be absolute
 * @returns {Promise<GlobifiedEntry[]>} An array of glob patterns
 */
export declare function globifyGitIgnore(gitIgnoreContent: string, gitIgnoreDirectory?: string | undefined, absolute?: boolean): Promise<Array<GlobifiedEntry>>;
/**
 * @param {string} gitIgnoreEntry One git ignore entry (it expects a valid non-comment gitignore entry with no
 *   surrounding whitespace)
 * @param {string | undefined} gitIgnoreDirectory The directory of gitignore
 * @param {boolean} absolute [false] If true, the glob will be absolute
 * @returns {Promise<[GlobifiedEntry] | [GlobifiedEntry, GlobifiedEntry]>} The equivalent glob
 */
export declare function globifyGitIgnoreEntry(gitIgnoreEntry: string, gitIgnoreDirectory: string | undefined, absolute: boolean): Promise<[GlobifiedEntry] | [GlobifiedEntry, GlobifiedEntry]>;
