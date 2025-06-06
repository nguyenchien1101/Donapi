import { Tree } from '@angular-devkit/schematics';
import { DefaultTreeElement } from 'parse5';
/** Appends the given element HTML fragment to the `<head>` element of the specified HTML file. */
export declare function appendHtmlElementToHead(host: Tree, htmlFilePath: string, elementHtml: string): void;
/** Parses the given HTML file and returns the head element if available. */
export declare function getHtmlHeadTagElement(htmlContent: string): DefaultTreeElement | null;
