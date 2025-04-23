"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathType = exports.PATH_TYPE = exports.posixifyPathNormalized = exports.posixifyPath = void 0;
const fs_1 = require("fs");
const { stat } = fs_1.promises;
const path_1 = require("path");
/**
 * Converts given path to Posix (replacing \ with /)
 *
 * @param {string} givenPath Path to convert
 * @returns {string} Converted filepath
 */
function posixifyPath(givenPath) {
    return (0, path_1.normalize)(givenPath).replace(/\\/g, "/");
}
exports.posixifyPath = posixifyPath;
/**
 * Converts given path to Posix (replacing \ with /) and removing ending slashes
 *
 * @param {string} givenPath Path to convert
 * @returns {string} Converted filepath
 */
function posixifyPathNormalized(givenPath) {
    return posixifyPath(givenPath).replace(/\/$/, "");
}
exports.posixifyPathNormalized = posixifyPathNormalized;
/** Enum that specifies the path type. 1 for directory, 2 for file, 0 for others */
var PATH_TYPE;
(function (PATH_TYPE) {
    PATH_TYPE[PATH_TYPE["OTHER"] = 0] = "OTHER";
    PATH_TYPE[PATH_TYPE["DIRECTORY"] = 1] = "DIRECTORY";
    PATH_TYPE[PATH_TYPE["FILE"] = 2] = "FILE";
})(PATH_TYPE = exports.PATH_TYPE || (exports.PATH_TYPE = {}));
/**
 * Get the type of the given path
 *
 * @param {string} givenPath Absolute path
 * @returns {Promise<PATH_TYPE>}
 */
async function getPathType(filepath) {
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
exports.getPathType = getPathType;
//# sourceMappingURL=path-utils.cjs.map