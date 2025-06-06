import { CustomFormats } from '../formats';
import { JsonProperties, JsonProperty, JsonSchema, ObjectSchema, SchemaCollection } from '../objects';
export declare const checkMark = "\u2714";
export declare const emptyMark = "";
export declare const anchor: (s: string) => string;
export declare const anchorForSchema: (s: ObjectSchema) => string;
export declare const enumToMarkdown: (enumeration: any) => any;
export declare const formatToMarkdown: (schemas?: SchemaCollection, formats?: CustomFormats) => (value: JsonProperty) => string;
export declare const findUsedColumns: (headers: string[], rows: object[]) => string[];
declare type PropertyDescription = {
    name: string;
    type: string;
    required: string;
    format: string;
    description: string;
    enum: string;
    deprecated: string;
    minLength: string;
    maxLength: string;
    defaultValue: string;
};
export declare const documentProperty: (requiredProperties: string[], schemas?: SchemaCollection, formats?: CustomFormats) => (prop: string, value: JsonProperty) => PropertyDescription;
export declare const documentProperties: (properties: JsonProperties, required?: string[] | true, schemas?: SchemaCollection, formats?: CustomFormats) => PropertyDescription[];
export declare const documentSchema: (schema: JsonSchema, schemas?: SchemaCollection, formats?: CustomFormats) => object[] | {
    p: string;
};
export declare const documentObjectSchema: (schema: ObjectSchema, schemas?: SchemaCollection, formats?: CustomFormats) => object[];
export {};
