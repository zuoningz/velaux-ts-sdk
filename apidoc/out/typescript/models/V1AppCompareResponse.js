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
exports.V1AppCompareResponseToJSON = exports.V1AppCompareResponseFromJSONTyped = exports.V1AppCompareResponseFromJSON = exports.instanceOfV1AppCompareResponse = void 0;
/**
 * Check if a given object implements the V1AppCompareResponse interface.
 */
function instanceOfV1AppCompareResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "baseAppYAML" in value;
    isInstance = isInstance && "diffReport" in value;
    isInstance = isInstance && "isDiff" in value;
    isInstance = isInstance && "targetAppYAML" in value;
    return isInstance;
}
exports.instanceOfV1AppCompareResponse = instanceOfV1AppCompareResponse;
function V1AppCompareResponseFromJSON(json) {
    return V1AppCompareResponseFromJSONTyped(json, false);
}
exports.V1AppCompareResponseFromJSON = V1AppCompareResponseFromJSON;
function V1AppCompareResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'baseAppYAML': json['baseAppYAML'],
        'diffReport': json['diffReport'],
        'isDiff': json['isDiff'],
        'targetAppYAML': json['targetAppYAML'],
    };
}
exports.V1AppCompareResponseFromJSONTyped = V1AppCompareResponseFromJSONTyped;
function V1AppCompareResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'baseAppYAML': value.baseAppYAML,
        'diffReport': value.diffReport,
        'isDiff': value.isDiff,
        'targetAppYAML': value.targetAppYAML,
    };
}
exports.V1AppCompareResponseToJSON = V1AppCompareResponseToJSON;
