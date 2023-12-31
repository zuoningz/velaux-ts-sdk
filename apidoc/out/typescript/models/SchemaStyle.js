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
exports.SchemaStyleToJSON = exports.SchemaStyleFromJSONTyped = exports.SchemaStyleFromJSON = exports.instanceOfSchemaStyle = void 0;
/**
 * Check if a given object implements the SchemaStyle interface.
 */
function instanceOfSchemaStyle(value) {
    var isInstance = true;
    isInstance = isInstance && "colSpan" in value;
    return isInstance;
}
exports.instanceOfSchemaStyle = instanceOfSchemaStyle;
function SchemaStyleFromJSON(json) {
    return SchemaStyleFromJSONTyped(json, false);
}
exports.SchemaStyleFromJSON = SchemaStyleFromJSON;
function SchemaStyleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'colSpan': json['colSpan'],
    };
}
exports.SchemaStyleFromJSONTyped = SchemaStyleFromJSONTyped;
function SchemaStyleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'colSpan': value.colSpan,
    };
}
exports.SchemaStyleToJSON = SchemaStyleToJSON;
