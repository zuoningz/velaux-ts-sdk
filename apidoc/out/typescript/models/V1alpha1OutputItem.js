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
exports.V1alpha1OutputItemToJSON = exports.V1alpha1OutputItemFromJSONTyped = exports.V1alpha1OutputItemFromJSON = exports.instanceOfV1alpha1OutputItem = void 0;
/**
 * Check if a given object implements the V1alpha1OutputItem interface.
 */
function instanceOfV1alpha1OutputItem(value) {
    var isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "valueFrom" in value;
    return isInstance;
}
exports.instanceOfV1alpha1OutputItem = instanceOfV1alpha1OutputItem;
function V1alpha1OutputItemFromJSON(json) {
    return V1alpha1OutputItemFromJSONTyped(json, false);
}
exports.V1alpha1OutputItemFromJSON = V1alpha1OutputItemFromJSON;
function V1alpha1OutputItemFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'valueFrom': json['valueFrom'],
    };
}
exports.V1alpha1OutputItemFromJSONTyped = V1alpha1OutputItemFromJSONTyped;
function V1alpha1OutputItemToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'valueFrom': value.valueFrom,
    };
}
exports.V1alpha1OutputItemToJSON = V1alpha1OutputItemToJSON;