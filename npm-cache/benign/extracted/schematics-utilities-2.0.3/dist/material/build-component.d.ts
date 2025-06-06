import { Rule } from '@angular-devkit/schematics';
import { Schema as ComponentOptions } from '../angular';
/**
 * Rule that copies and interpolates the files that belong to this schematic context. Additionally
 * a list of file paths can be passed to this rule in order to expose them inside the EJS
 * template context.
 *
 * This allows inlining the external template or stylesheet files in EJS without having
 * to manually duplicate the file content.
 */
export declare function buildComponent(options: ComponentOptions, additionalFiles?: {
    [key: string]: string;
}): Rule;
