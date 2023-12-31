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
exports.V1EnablingProgressToJSON = exports.V1EnablingProgressFromJSONTyped = exports.V1EnablingProgressFromJSON = exports.instanceOfV1EnablingProgress = void 0;
/**
 * Check if a given object implements the V1EnablingProgress interface.
 */
function instanceOfV1EnablingProgress(value) {
    var isInstance = true;
    isInstance = isInstance && "enabledComponents" in value;
    isInstance = isInstance && "totalComponents" in value;
    return isInstance;
}
exports.instanceOfV1EnablingProgress = instanceOfV1EnablingProgress;
function V1EnablingProgressFromJSON(json) {
    return V1EnablingProgressFromJSONTyped(json, false);
}
exports.V1EnablingProgressFromJSON = V1EnablingProgressFromJSON;
function V1EnablingProgressFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabledComponents': json['enabled_components'],
        'totalComponents': json['total_components'],
    };
}
exports.V1EnablingProgressFromJSONTyped = V1EnablingProgressFromJSONTyped;
function V1EnablingProgressToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enabled_components': value.enabledComponents,
        'total_components': value.totalComponents,
    };
}
exports.V1EnablingProgressToJSON = V1EnablingProgressToJSON;
