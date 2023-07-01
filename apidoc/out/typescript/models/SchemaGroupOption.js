"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Kubevela api doc
 * Kubevela api doc
 *
 * The version of the OpenAPI document: v1beta1
 * Contact: feedback@mail.kubevela.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaGroupOptionToJSON = exports.SchemaGroupOptionFromJSONTyped = exports.SchemaGroupOptionFromJSON = exports.instanceOfSchemaGroupOption = void 0;
/**
 * Check if a given object implements the SchemaGroupOption interface.
 */
function instanceOfSchemaGroupOption(value) {
    var isInstance = true;
    isInstance = isInstance && "keys" in value;
    isInstance = isInstance && "label" in value;
    return isInstance;
}
exports.instanceOfSchemaGroupOption = instanceOfSchemaGroupOption;
function SchemaGroupOptionFromJSON(json) {
    return SchemaGroupOptionFromJSONTyped(json, false);
}
exports.SchemaGroupOptionFromJSON = SchemaGroupOptionFromJSON;
function SchemaGroupOptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keys': json['keys'],
        'label': json['label'],
    };
}
exports.SchemaGroupOptionFromJSONTyped = SchemaGroupOptionFromJSONTyped;
function SchemaGroupOptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keys': value.keys,
        'label': value.label,
    };
}
exports.SchemaGroupOptionToJSON = SchemaGroupOptionToJSON;
