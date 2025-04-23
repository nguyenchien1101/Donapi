/**
 * Converts given path to Posix (replacing \ with /)
 *
 * @param {string} givenPath Path to convert
 * @returns {string} Converted filepath
 */
export declare function posixifyPath(givenPath: string): string;
/**
 * Converts given path to Posix (replacing \ with /) and removing ending slashes
 *
 * @param {string} givenPath Path to convert
 * @returns {string} Converted filepath
 */
export declare function posixifyPathNormalized(givenPath: string): string;
/** Enum that specifies the path type. 1 for directory, 2 for file, 0 for others */
export declare enum PATH_TYPE {
    OTHER = 0,
    DIRECTORY = 1,
    FILE = 2
}
/**
 * Get the type of the given path
 *
 * @param {string} givenPath Absolute path
 * @returns {Promise<PATH_TYPE>}
 */
export declare function getPathType(filepath: string): Promise<PATH_TYPE>;
