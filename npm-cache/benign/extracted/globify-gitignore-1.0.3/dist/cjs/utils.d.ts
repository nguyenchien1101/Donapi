import { GlobifiedEntry } from "./main";
export declare function getGlob(g: GlobifiedEntry): string;
export declare const globSorter: import("sort-es/lib/src/types/types").sortable<GlobifiedEntry>;
export declare function uniqueMatcher(a: GlobifiedEntry, b: GlobifiedEntry): boolean;
export declare function uniqueGlobs(globs: GlobifiedEntry[]): GlobifiedEntry[];
export declare function uniqueSortGlobs(globs: GlobifiedEntry[]): GlobifiedEntry[];
