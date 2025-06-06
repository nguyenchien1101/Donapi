import { FormatDefaults } from './formats';
import { JsonSchema, PlainObject, SchemaCollection } from './objects';
declare const isDynamicFormat: (formatDefaults: FormatDefaults | undefined) => (format: string) => boolean;
declare const isJsonSchema: (o: any) => any;
declare const hasPropertiesArray: (prop: any) => any;
declare const sanitizeBySchema: (schema: JsonSchema, formatDefaults?: FormatDefaults) => (object: PlainObject) => PlainObject;
declare const sanitize: (schemas: SchemaCollection, formatDefaults?: FormatDefaults) => (name: string, version: string) => (object: PlainObject) => PlainObject;
export { sanitize, sanitizeBySchema, isDynamicFormat, isJsonSchema, hasPropertiesArray, };
