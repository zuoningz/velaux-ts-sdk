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
exports.V1AccessKeyRequestToJSON = exports.V1AccessKeyRequestFromJSONTyped = exports.V1AccessKeyRequestFromJSON = exports.instanceOfV1AccessKeyRequest = void 0;
/**
 * Check if a given object implements the V1AccessKeyRequest interface.
 */
function instanceOfV1AccessKeyRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "accessKeyID" in value;
    isInstance = isInstance && "accessKeySecret" in value;
    return isInstance;
}
exports.instanceOfV1AccessKeyRequest = instanceOfV1AccessKeyRequest;
function V1AccessKeyRequestFromJSON(json) {
    return V1AccessKeyRequestFromJSONTyped(json, false);
}
exports.V1AccessKeyRequestFromJSON = V1AccessKeyRequestFromJSON;
function V1AccessKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessKeyID': json['accessKeyID'],
        'accessKeySecret': json['accessKeySecret'],
    };
}
exports.V1AccessKeyRequestFromJSONTyped = V1AccessKeyRequestFromJSONTyped;
function V1AccessKeyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessKeyID': value.accessKeyID,
        'accessKeySecret': value.accessKeySecret,
    };
}
exports.V1AccessKeyRequestToJSON = V1AccessKeyRequestToJSON;