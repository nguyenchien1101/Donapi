import { promises } from "fs";
const { stat } = promises;
import { normalize } from "path";
/**
 * Converts given path to Posix (replacing \ with /)
 *
 * @param {string} givenPath Path to convert
 * @returns {string} Converted filepath
 */
export function posixifyPath(givenPath) {
    return normalize(givenPath).replace(/\\/g, "/");
}
/**
 * Converts given path to Posix (replacing \ with /) and removing ending slashes
 *
 * @param {string} givenPath Path to convert
 * @returns {string} Converted filepath
 */
export function posixifyPathNormalized(givenPath) {
    return posixifyPath(givenPath).replace(/\/$/, "");
}
/** Enum that specifies the path type. 1 for directory, 2 for file, 0 for others */
export var PATH_TYPE;
(function (PATH_TYPE) {
    PATH_TYPE[PATH_TYPE["OTHER"] = 0] = "OTHER";
    PATH_TYPE[PATH_TYPE["DIRECTORY"] = 1] = "DIRECTORY";
    PATH_TYPE[PATH_TYPE["FILE"] = 2] = "FILE";
})(PATH_TYPE || (PATH_TYPE = {}));
/**
 * Get the type of the given path
 *
 * @param {string} givenPath Absolute path
 * @returns {Promise<PATH_TYPE>}
 */
export async function getPathType(filepath) {
    let pathStat;
    try {
        pathStat = await stat(filepath);
    }
    catch (error) {
        return PATH_TYPE.OTHER;
    }
    if (pathStat.isDirectory()) {
        return PATH_TYPE.DIRECTORY;
    }
    else if (pathStat.isFile()) {
        return PATH_TYPE.FILE;
    }
    return PATH_TYPE.OTHER;
}
//# sourceMappingURL=path-utils.mjs.map