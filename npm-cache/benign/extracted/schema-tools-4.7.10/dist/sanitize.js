"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPropertiesArray = exports.isJsonSchema = exports.isDynamicFormat = exports.sanitizeBySchema = exports.sanitize = void 0;
var debug_1 = __importDefault(require("debug"));
var ramda_1 = require("ramda");
var api_1 = require("./api");
var debug = (0, debug_1.default)('schema-tools');
var isDynamicFormat = function (formatDefaults) { return function (format) {
    return formatDefaults ? format in formatDefaults : false;
}; };
exports.isDynamicFormat = isDynamicFormat;
var isString = function (s) { return typeof s === 'string'; };
var canPropertyBeString = function (type) {
    return type === 'string' || (Array.isArray(type) && type.includes('string'));
};
var canPropertyBeArray = function (type) {
    return type === 'array' || (Array.isArray(type) && type.includes('array'));
};
var isArrayType = function (prop) { return canPropertyBeArray(prop.type) && prop.items; };
var isStringArray = function (prop) {
    return isArrayType(prop) && canPropertyBeString(prop.items.type);
};
var isJsonSchema = function (o) {
    return isString(o.title) &&
        o.properties &&
        (o.type === 'object' || (Array.isArray(o.type) && o.type.includes('object')));
};
exports.isJsonSchema = isJsonSchema;
var hasPropertiesArray = function (prop) {
    return isArrayType(prop) && prop.items && isJsonSchema(prop.items);
};
exports.hasPropertiesArray = hasPropertiesArray;
var sanitizeBySchema = function (schema, formatDefaults) {
    return function (object) {
        var isDynamic = isDynamicFormat(formatDefaults);
        var result = (0, ramda_1.clone)(object);
        var props = schema.properties;
        if (props) {
            Object.keys(props).forEach(function (key) {
                if (!(key in object)) {
                    return;
                }
                var prop = props[key];
                debug('looking at property %j', prop);
                if (key in object && Array.isArray(object[key])) {
                    debug('%s is present as an array', key);
                    if (isStringArray(prop)) {
                        debug('%s is a string array', key);
                        var list = result[key];
                        if (prop.items && prop.items.format) {
                            var itemFormat = prop.items.format;
                            debug('items format %s', itemFormat);
                            if (formatDefaults && isDynamic(itemFormat)) {
                                debug('format %s is dynamic, need to replace with default value', itemFormat);
                                var defaultValue = formatDefaults[itemFormat];
                                for (var k = 0; k < list.length; k += 1) {
                                    list[k] = defaultValue;
                                }
                                return;
                            }
                        }
                    }
                    else if (isArrayType(prop) && hasPropertiesArray(prop)) {
                        debug('property %s is array-like and has properties', key);
                        var list = object[key];
                        var propSchema = prop.items;
                        result[key] = list.map(sanitizeBySchema(propSchema, formatDefaults));
                        return;
                    }
                }
                if (!isString(object[key])) {
                    return;
                }
                if (canPropertyBeString(prop.type)) {
                    if (prop.format && formatDefaults && isDynamic(prop.format)) {
                        var defaultValue = formatDefaults[prop.format];
                        if (!defaultValue) {
                            throw new Error("Cannot find default value for format name ".concat(prop.format));
                        }
                        result[key] = defaultValue;
                    }
                }
            });
        }
        return result;
    };
};
exports.sanitizeBySchema = sanitizeBySchema;
var sanitize = function (schemas, formatDefaults) {
    return function (name, version) {
        return function (object) {
            (0, api_1.assertSchema)(schemas)(name, version)(object);
            var schema = (0, api_1.getObjectSchema)(schemas, name, version);
            if (!schema) {
                throw new Error("Could not find schema ".concat(name, "@").concat(version, " to sanitize an object"));
            }
            return sanitizeBySchema(schema.schema, formatDefaults)(object);
        };
    };
};
exports.sanitize = sanitize;
//# sourceMappingURL=sanitize.js.map