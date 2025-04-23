/**
 * Find the first file or folder upwards.
 *
 * > 👉 **Note**: files are not read (their `value` is not populated).
 * > use `to-vfile` for that.
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} path
 * @param {Callback} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {Callback} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} [path]
 * @returns {Promise<VFile | undefined>}
 *
 * @param {Test} test
 *   Things to search for.
 * @param {Callback | URL | string | null | undefined} [path]
 *   Place to search from (default: `process.cwd()`).
 * @param {Callback | null | undefined} [callback]
 *   Callback called when done (default: `undefined`).
 * @returns {Promise<VFile | undefined> | undefined}
 *   Nothing when `callback` is given, otherwise a promise that resolves to
 *   a file or `undefined`.
 */
export function findUp(test: Test, path: URL | string | null | undefined, callback: Callback): undefined;
/**
 * Find the first file or folder upwards.
 *
 * > 👉 **Note**: files are not read (their `value` is not populated).
 * > use `to-vfile` for that.
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} path
 * @param {Callback} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {Callback} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} [path]
 * @returns {Promise<VFile | undefined>}
 *
 * @param {Test} test
 *   Things to search for.
 * @param {Callback | URL | string | null | undefined} [path]
 *   Place to search from (default: `process.cwd()`).
 * @param {Callback | null | undefined} [callback]
 *   Callback called when done (default: `undefined`).
 * @returns {Promise<VFile | undefined> | undefined}
 *   Nothing when `callback` is given, otherwise a promise that resolves to
 *   a file or `undefined`.
 */
export function findUp(test: Test, callback: Callback): undefined;
/**
 * Find the first file or folder upwards.
 *
 * > 👉 **Note**: files are not read (their `value` is not populated).
 * > use `to-vfile` for that.
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} path
 * @param {Callback} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {Callback} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} [path]
 * @returns {Promise<VFile | undefined>}
 *
 * @param {Test} test
 *   Things to search for.
 * @param {Callback | URL | string | null | undefined} [path]
 *   Place to search from (default: `process.cwd()`).
 * @param {Callback | null | undefined} [callback]
 *   Callback called when done (default: `undefined`).
 * @returns {Promise<VFile | undefined> | undefined}
 *   Nothing when `callback` is given, otherwise a promise that resolves to
 *   a file or `undefined`.
 */
export function findUp(test: Test, path?: URL | string | null | undefined): Promise<VFile | undefined>;
/**
 * Find files or folders upwards.
 *
 * > 👉 **Note**: files are not read (their `value` is not populated).
 * > use `to-vfile` for that.
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} path
 * @param {CallbackAll} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {CallbackAll} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} [path]
 * @returns {Promise<Array<VFile>>}
 *
 * @param {Test} test
 *   Things to search for.
 * @param {CallbackAll | URL | string | null | undefined} [path]
 *   Place to search from (default: `process.cwd()`).
 * @param {CallbackAll | null | undefined} [callback]
 *   Callback called when done (default: `undefined`).
 * @returns {Promise<Array<VFile>> | undefined}
 *   Nothing when `callback` is given, otherwise a promise that resolves to
 *   files.
 */
export function findUpAll(test: Test, path: URL | string | null | undefined, callback: CallbackAll): undefined;
/**
 * Find files or folders upwards.
 *
 * > 👉 **Note**: files are not read (their `value` is not populated).
 * > use `to-vfile` for that.
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} path
 * @param {CallbackAll} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {CallbackAll} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} [path]
 * @returns {Promise<Array<VFile>>}
 *
 * @param {Test} test
 *   Things to search for.
 * @param {CallbackAll | URL | string | null | undefined} [path]
 *   Place to search from (default: `process.cwd()`).
 * @param {CallbackAll | null | undefined} [callback]
 *   Callback called when done (default: `undefined`).
 * @returns {Promise<Array<VFile>> | undefined}
 *   Nothing when `callback` is given, otherwise a promise that resolves to
 *   files.
 */
export function findUpAll(test: Test, callback: CallbackAll): undefined;
/**
 * Find files or folders upwards.
 *
 * > 👉 **Note**: files are not read (their `value` is not populated).
 * > use `to-vfile` for that.
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} path
 * @param {CallbackAll} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {CallbackAll} callback
 * @returns {undefined}
 *
 * @overload
 * @param {Test} test
 * @param {URL | string | null | undefined} [path]
 * @returns {Promise<Array<VFile>>}
 *
 * @param {Test} test
 *   Things to search for.
 * @param {CallbackAll | URL | string | null | undefined} [path]
 *   Place to search from (default: `process.cwd()`).
 * @param {CallbackAll | null | undefined} [callback]
 *   Callback called when done (default: `undefined`).
 * @returns {Promise<Array<VFile>> | undefined}
 *   Nothing when `callback` is given, otherwise a promise that resolves to
 *   files.
 */
export function findUpAll(test: Test, path?: URL | string | null | undefined): Promise<Array<VFile>>;
/**
 * Handle a file.
 */
export type Assert = (file: VFile) => Result | undefined;
/**
 * Callback called when done finding one file.
 */
export type Callback = (error: Error | undefined, file?: VFile | undefined) => undefined;
/**
 * Callback called when done.
 */
export type CallbackAll = (error: Error | undefined, files?: Array<VFile> | undefined) => undefined;
/**
 * What to do when collecting a file or folder.
 */
export type Result = {
    /**
     * Stop searching after this file or folder.
     */
    break?: boolean | null | undefined;
    /**
     * Include this file or folder.
     */
    include?: boolean | null | undefined;
};
/**
 * Things to search for.
 *
 * For strings, the `basename` or `extname` of files must match them.
 * For arrays, any test in them must match.
 */
export type Test = Array<Assert | string> | Assert | string;
import { VFile } from 'vfile';
