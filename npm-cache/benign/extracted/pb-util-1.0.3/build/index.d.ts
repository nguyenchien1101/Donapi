/**
 * Matches a JSON object.
 */
export declare type JsonObject = {
    [key: string]: JsonValue;
};
/**
 * Matches a JSON array.
 */
export interface JsonArray extends Array<JsonValue> {
}
/**
 * Matches any valid JSON value.
 */
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
/**
 * @typedef {Object} Value
 * @property {string} kind The kind of value. Valid values for this fields are
 *     - `nullValue`
 *     - `numberValue`
 *     - `stringValue`
 *     - `boolValue`
 *     - `structValue`
 *     - `listValue`
 * @property {number} [nullValue] Represents a null value, actual field value
 *     should be `0`.
 * @property {number} [numberValue] Represents a number.
 * @property {string} [stringValue] Represents a string.
 * @property {boolean} [boolValue] Represents a boolean.
 * @property {Struct} [structValue] Represents an object.
 * @property {ListValue} [listValue] Represents an array of values.
 */
export interface Value {
    kind?: string;
    nullValue?: number;
    numberValue?: number;
    stringValue?: string;
    boolValue?: boolean;
    structValue?: Struct;
    listValue?: ListValue;
}
/**
 * @typedef {Object} Struct
 * @property {Object.<string, Value>} fields The struct fields.
 */
export interface Struct {
    fields?: {
        [key: string]: Value;
    };
}
/**
 * @typedef {Object} ListValue
 * @property {Value[]} values The list values.
 */
export interface ListValue {
    values?: Value[];
}
/**
 * Used to encode/decode {@link Value} objects.
 */
export declare const value: {
    /**
     * Encodes a JSON value into a protobuf {@link Value}.
     *
     * @param {*} value The JSON value.
     * @returns {Value}
     */
    encode(value: JsonValue): Value;
    /**
     * Decodes a protobuf {@link Value} into a JSON value.
     *
     * @throws {TypeError} If unable to determine value `kind`.
     *
     * @param {Value} value the protobuf value.
     * @returns {*}
     */
    decode(value: Value): JsonValue;
};
/**
 * Used to encode/decode {@link Struct} objects.
 */
export declare const struct: {
    /**
     * Encodes a JSON object into a protobuf {@link Struct}.
     *
     * @param {Object.<string, *>} value the JSON object.
     * @returns {Struct}
     */
    encode(json: JsonObject): Struct;
    /**
     * Decodes a protobuf {@link Struct} into a JSON object.
     *
     * @param {Struct} struct the protobuf struct.
     * @returns {Object.<string, *>}
     */
    decode({ fields }: Struct): JsonObject;
};
/**
 * Used to encode/decode {@link ListValue} objects.
 */
export declare const list: {
    /**
     * Encodes an array of JSON values into a protobuf {@link ListValue}.
     *
     * @param {Array.<*>} values the JSON values.
     * @returns {ListValue}
     */
    encode(values: JsonArray): ListValue;
    /**
     * Decodes a protobuf {@link ListValue} into an array of JSON values.
     *
     * @param {ListValue} list the protobuf list value.
     * @returns {Array.<*>}
     */
    decode({ values }: ListValue): JsonArray;
};
