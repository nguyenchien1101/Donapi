/// <reference types="ramda" />
import { CustomFormats, JsonSchemaFormats } from './formats';
import { JsonSchema, ObjectSchema, PlainObject, SchemaCollection, SchemaVersion } from './objects';
export declare const getVersionedSchema: (schemas: SchemaCollection) => (name: string) => import("./objects").VersionedSchema;
export declare const getObjectSchema: import("ramda").CurriedFunction3<SchemaCollection, string, string, ObjectSchema | undefined>;
export declare const hasSchema: import("ramda").CurriedFunction3<SchemaCollection, string, string, boolean>;
export declare const schemaNames: (schemas: SchemaCollection) => string[];
export declare const getSchemaVersions: (schemas: SchemaCollection) => (schemaName: string) => string[];
export declare const getExample: import("ramda").CurriedFunction3<SchemaCollection, string, string, PlainObject | undefined>;
export declare const validateBySchema: (schema: JsonSchema, formats?: JsonSchemaFormats, greedy?: boolean) => (object: object) => true | string[];
export declare const validate: (schemas: SchemaCollection, formats?: JsonSchemaFormats, greedy?: boolean) => (schemaName: string, version: string) => (object: object) => true | string[];
export declare class SchemaError extends Error {
    errors: string[];
    object: PlainObject;
    example: PlainObject;
    schemaName: string;
    schemaVersion?: string;
    constructor(message: string, errors: string[], object: PlainObject, example: PlainObject, schemaName: string, schemaVersion?: string);
}
declare type ErrorMessageWhiteList = {
    errors: boolean;
    object: boolean;
    example: boolean;
};
declare type AssertBySchemaOptions = {
    greedy: boolean;
    substitutions: string[];
    omit: Partial<ErrorMessageWhiteList>;
};
export declare const assertBySchema: (schema: JsonSchema, example?: PlainObject, options?: Partial<AssertBySchemaOptions>, label?: string, formats?: JsonSchemaFormats, schemaVersion?: SchemaVersion) => (object: PlainObject) => PlainObject;
export declare const assertSchema: (schemas: SchemaCollection, formats?: JsonSchemaFormats) => (name: string, version: string, options?: Partial<AssertBySchemaOptions>) => (object: PlainObject) => PlainObject;
declare type BindOptions = {
    schemas: SchemaCollection;
    formats?: CustomFormats;
};
export declare const bind: (...options: BindOptions[]) => {
    assertSchema: (name: string, version: string, options?: Partial<AssertBySchemaOptions>) => (object: PlainObject) => PlainObject;
    schemaNames: string[];
    getExample: import("ramda").CurriedFunction2<string, string, PlainObject | undefined>;
    sanitize: (name: string, version: string) => (object: PlainObject) => PlainObject;
    validate: (schemaName: string, version: string) => (object: object) => true | string[];
    trim: import("ramda").CurriedFunction3<string, string, PlainObject, PlainObject>;
    hasSchema: import("ramda").CurriedFunction2<string, string, boolean>;
    fill: import("ramda").CurriedFunction3<string, string, object, PlainObject>;
};
export {};
