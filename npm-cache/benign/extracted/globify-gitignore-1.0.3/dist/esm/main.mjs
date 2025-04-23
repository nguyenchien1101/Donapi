import { join } from "path";
import { promises } from "fs";
const { readFile } = promises;
import isPath from "is-valid-path";
import dedent from "dedent";
import { getPathType, PATH_TYPE, posixifyPath, posixifyPathNormalized } from "./path-utils.mjs";
export { posixifyPath, posixifyPathNormalized } from "./path-utils.mjs";
/**
 * @param {string} givenPath The given path to be globified
 * @param {string} givenDirectory [process.cwd()] The cwd to use to resolve relative path names
 * @param {boolean} absolute [false] If true, the glob will be absolute
 * @returns {Promise<GlobifiedEntry | [GlobifiedEntry, GlobifiedEntry]>} The glob path or the file path itself
 */
export function globifyPath(givenPath, givenDirectory = process.cwd(), absolute = false) {
    return globifyGitIgnoreEntry(posixifyPath(givenPath), givenDirectory, absolute);
}
/**
 * Globifies a directory
 *
 * @param {string} givenDirectory The given directory to be globified
 */
export function globifyDirectory(givenDirectory) {
    return `${posixifyPathNormalized(givenDirectory)}/**`;
}
/**
 * Parse and globy the `.gitingore` file that exists in a directory
 *
 * @param {string} gitIgnoreDirectory The given directory that has the `.gitignore` file
 * @param {boolean} absolute [false] If true, the glob will be absolute
 * @returns {Promise<GlobifiedEntry[]>} An array of glob patterns
 */
export async function globifyGitIgnoreFile(gitIgnoreDirectory, absolute = false) {
    const gitIgnoreContent = await readFile(join(gitIgnoreDirectory, ".gitignore"), "utf-8");
    return globifyGitIgnore(gitIgnoreContent, gitIgnoreDirectory, absolute);
}
/**
 * Globify the content of a gitignore string
 *
 * @param {string} gitIgnoreContent The content of the gitignore file
 * @param {string | undefined} gitIgnoreDirectory The directory of gitignore
 * @param {boolean} absolute [false] If true, the glob will be absolute
 * @returns {Promise<GlobifiedEntry[]>} An array of glob patterns
 */
export async function globifyGitIgnore(gitIgnoreContent, gitIgnoreDirectory = undefined, absolute = false) {
    const gitIgnoreEntries = dedent(gitIgnoreContent)
        .split("\n") // Remove empty lines and comments.
        .filter((entry) => !(isWhitespace(entry) || isGitIgnoreComment(entry))) // Remove surrounding whitespace
        .map((entry) => trimWhiteSpace(entry));
    const globEntries = [];
    await Promise.all(gitIgnoreEntries.map(async (entry) => {
        const globifyOutput = await globifyGitIgnoreEntry(entry, gitIgnoreDirectory, absolute);
        // synchronus push
        globEntries.push(...globifyOutput);
    }));
    return globEntries;
}
/**
 * @param {string} gitIgnoreEntry One git ignore entry (it expects a valid non-comment gitignore entry with no
 *   surrounding whitespace)
 * @param {string | undefined} gitIgnoreDirectory The directory of gitignore
 * @param {boolean} absolute [false] If true, the glob will be absolute
 * @returns {Promise<[GlobifiedEntry] | [GlobifiedEntry, GlobifiedEntry]>} The equivalent glob
 */
export async function globifyGitIgnoreEntry(gitIgnoreEntry, gitIgnoreDirectory, absolute) {
    // output glob entry
    let entry = gitIgnoreEntry;
    // Process the entry beginning
    // '!' in .gitignore means to force include the pattern
    // remove "!" to allow the processing of the pattern and swap ! in the end of the loop
    let included = false;
    if (entry[0] === "!") {
        entry = entry.substring(1);
        included = true;
    }
    // If there is a separator at the beginning or middle (or both) of the pattern,
    // then the pattern is relative to the directory level of the particular .gitignore file itself
    // Process slash
    /** @type {PATH_TYPE.OTHER | PATH_TYPE.DIRECTORY | PATH_TYPE.FILE} */
    let pathType = PATH_TYPE.OTHER;
    if (entry[0] === "/") {
        // Patterns starting with '/' in gitignore are considered relative to the project directory while glob
        // treats them as relative to the OS root directory.
        // So we trim the slash to make it relative to project folder from glob perspective.
        entry = entry.substring(1);
        // Check if it is a directory or file
        if (isPath(entry)) {
            pathType = await getPathType(gitIgnoreDirectory !== undefined ? join(gitIgnoreDirectory, entry) : entry);
        }
    }
    else {
        const slashPlacement = entry.indexOf("/");
        if (slashPlacement === -1) {
            // Patterns that don't have `/` are '**/' from glob perspective (can match at any level)
            if (!entry.startsWith("**/")) {
                entry = `**/${entry}`;
            }
        }
        else if (slashPlacement === entry.length - 1) {
            // If there is a separator at the end of the pattern then it only matches directories
            // slash is in the end
            pathType = PATH_TYPE.DIRECTORY;
        }
        else {
            // has `/` in the middle so it is a relative path
            // Check if it is a directory or file
            if (isPath(entry)) {
                pathType = await getPathType(gitIgnoreDirectory !== undefined ? join(gitIgnoreDirectory, entry) : entry);
            }
        }
    }
    // prepend the absolute root directory
    if (absolute && gitIgnoreDirectory !== undefined) {
        entry = `${posixifyPath(gitIgnoreDirectory)}/${entry}`;
    }
    // Process the entry ending
    if (pathType === PATH_TYPE.DIRECTORY) {
        // in glob this is equal to `directory/**`
        return [{ glob: entry.endsWith("/") ? `${entry}**` : `${entry}/**`, included }];
    }
    else if (pathType === PATH_TYPE.FILE) {
        // return as is for file
        return [{ glob: entry, included }];
    }
    else if (!entry.endsWith("/**")) {
        // the pattern can match both files and directories
        // so we should include both `entry` and `entry/**`
        return [
            { glob: entry, included },
            { glob: entry.endsWith("/") ? `${entry}**` : `${entry}/**`, included },
        ];
    }
    else {
        return [{ glob: entry, included }];
    }
}
function isWhitespace(str) {
    return /^\s*$/.test(str);
}
/**
 * A line starting with # serves as a comment. Put a backslash ("") in front of the first hash for patterns that begin
 * with a hash.
 */
function isGitIgnoreComment(pattern) {
    return pattern[0] === "#";
}
/** Trailing spaces should be removed unless they are quoted with backslash ("\ "). */
function trimTrailingWhitespace(str) {
    if (!/\\\s+$/.test(str)) {
        // No escaped trailing whitespace, remove
        return str.replace(/\s+$/, "");
    }
    else {
        // Trailing whitespace detected, remove only the backslash
        return str.replace(/\\(\s+)$/, "$1");
    }
}
/** Remove leading whitespace */
function trimLeadingWhiteSpace(str) {
    return str.replace(/^\s+/, "");
}
/** Remove whitespace from a gitignore entry */
function trimWhiteSpace(str) {
    return trimLeadingWhiteSpace(trimTrailingWhitespace(str));
}
//# sourceMappingURL=main.mjs.map