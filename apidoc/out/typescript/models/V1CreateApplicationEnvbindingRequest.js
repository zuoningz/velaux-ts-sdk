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
exports.V1CreateApplicationEnvbindingRequestToJSON = exports.V1CreateApplicationEnvbindingRequestFromJSONTyped = exports.V1CreateApplicationEnvbindingRequestFromJSON = exports.instanceOfV1CreateApplicationEnvbindingRequest = void 0;
/**
 * Check if a given object implements the V1CreateApplicationEnvbindingRequest interface.
 */
function instanceOfV1CreateApplicationEnvbindingRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfV1CreateApplicationEnvbindingRequest = instanceOfV1CreateApplicationEnvbindingRequest;
function V1CreateApplicationEnvbindingRequestFromJSON(json) {
    return V1CreateApplicationEnvbindingRequestFromJSONTyped(json, false);
}
exports.V1CreateApplicationEnvbindingRequestFromJSON = V1CreateApplicationEnvbindingRequestFromJSON;
function V1CreateApplicationEnvbindingRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
    };
}
exports.V1CreateApplicationEnvbindingRequestFromJSONTyped = V1CreateApplicationEnvbindingRequestFromJSONTyped;
function V1CreateApplicationEnvbindingRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
    };
}
exports.V1CreateApplicationEnvbindingRequestToJSON = V1CreateApplicationEnvbindingRequestToJSON;
