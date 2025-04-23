import { byString, byValue } from "sort-es";
import unique from "make-unique";
export function getGlob(g) {
    return g.glob;
}
export const globSorter = byValue(getGlob, byString());
export function uniqueMatcher(a, b) {
    return a.glob === b.glob;
}
export function uniqueGlobs(globs) {
    return unique(globs, uniqueMatcher);
}
export function uniqueSortGlobs(globs) {
    return uniqueGlobs(globs).sort(globSorter);
}
//# sourceMappingURL=utils.mjs.map