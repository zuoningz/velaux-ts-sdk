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
exports.V1CompareLatestWithRunningOptionToJSON = exports.V1CompareLatestWithRunningOptionFromJSONTyped = exports.V1CompareLatestWithRunningOptionFromJSON = exports.instanceOfV1CompareLatestWithRunningOption = void 0;
/**
 * Check if a given object implements the V1CompareLatestWithRunningOption interface.
 */
function instanceOfV1CompareLatestWithRunningOption(value) {
    var isInstance = true;
    isInstance = isInstance && "env" in value;
    return isInstance;
}
exports.instanceOfV1CompareLatestWithRunningOption = instanceOfV1CompareLatestWithRunningOption;
function V1CompareLatestWithRunningOptionFromJSON(json) {
    return V1CompareLatestWithRunningOptionFromJSONTyped(json, false);
}
exports.V1CompareLatestWithRunningOptionFromJSON = V1CompareLatestWithRunningOptionFromJSON;
function V1CompareLatestWithRunningOptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'env': json['env'],
    };
}
exports.V1CompareLatestWithRunningOptionFromJSONTyped = V1CompareLatestWithRunningOptionFromJSONTyped;
function V1CompareLatestWithRunningOptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'env': value.env,
    };
}
exports.V1CompareLatestWithRunningOptionToJSON = V1CompareLatestWithRunningOptionToJSON;