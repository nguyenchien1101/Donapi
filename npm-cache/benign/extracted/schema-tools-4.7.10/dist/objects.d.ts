export declare type PlainObject = {
    [key: string]: string | number | boolean | null | undefined | string[] | number[] | PlainObject | PlainObject[];
};
export declare type SchemaVersion = string;
export declare type NameVersion = {
    name: string;
    version: SchemaVersion;
};
export declare type JsonPropertyTypes = 'number' | 'integer' | 'string' | 'object' | 'boolean' | 'array' | string[] | number[];
export declare type DefaultValue = null | boolean | number | string;
export declare type JsonProperty = {
    type: JsonPropertyTypes;
    format?: string;
    minimum?: number;
    maximum?: number;
    minItems?: number;
    maxItems?: number;
    minLength?: number;
    maxLength?: number;
    description?: string;
    required?: boolean | string[];
    properties?: JsonProperties;
    items?: JsonProperty;
    see?: string | ObjectSchema;
    title?: string;
    patternProperties?: object;
    additionalProperties?: boolean;
    enum?: string[];
    deprecated?: string;
    defaultValue?: DefaultValue;
};
export declare type JsonProperties = {
    [key: string]: JsonProperty;
};
export declare type JsonSchema = {
    title: string;
    type: 'object';
    description?: string;
    properties?: JsonProperties;
    patternProperties?: object;
    required?: string[] | true;
    additionalProperties: boolean;
    deprecated?: string;
};
export declare type ObjectSchema = {
    version: Semver;
    schema: JsonSchema;
    example: PlainObject;
    package?: string;
};
export declare type VersionedSchema = {
    [key: string]: ObjectSchema;
};
export declare type SchemaCollection = {
    [key: string]: VersionedSchema;
};
export declare type Semver = {
    major: number;
    minor: number;
    patch: number;
};
