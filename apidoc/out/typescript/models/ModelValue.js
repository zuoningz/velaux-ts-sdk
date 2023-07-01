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
exports.ModelValueToJSON = exports.ModelValueFromJSONTyped = exports.ModelValueFromJSON = exports.instanceOfModelValue = void 0;
/**
 * Check if a given object implements the ModelValue interface.
 */
function instanceOfModelValue(value) {
    var isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfModelValue = instanceOfModelValue;
function ModelValueFromJSON(json) {
    return ModelValueFromJSONTyped(json, false);
}
exports.ModelValueFromJSON = ModelValueFromJSON;
function ModelValueFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': json['key'],
        'value': json['value'],
    };
}
exports.ModelValueFromJSONTyped = ModelValueFromJSONTyped;
function ModelValueToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': value.key,
        'value': value.value,
    };
}
exports.ModelValueToJSON = ModelValueToJSON;
