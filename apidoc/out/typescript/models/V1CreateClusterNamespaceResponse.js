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
exports.V1CreateClusterNamespaceResponseToJSON = exports.V1CreateClusterNamespaceResponseFromJSONTyped = exports.V1CreateClusterNamespaceResponseFromJSON = exports.instanceOfV1CreateClusterNamespaceResponse = void 0;
/**
 * Check if a given object implements the V1CreateClusterNamespaceResponse interface.
 */
function instanceOfV1CreateClusterNamespaceResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "_exists" in value;
    return isInstance;
}
exports.instanceOfV1CreateClusterNamespaceResponse = instanceOfV1CreateClusterNamespaceResponse;
function V1CreateClusterNamespaceResponseFromJSON(json) {
    return V1CreateClusterNamespaceResponseFromJSONTyped(json, false);
}
exports.V1CreateClusterNamespaceResponseFromJSON = V1CreateClusterNamespaceResponseFromJSON;
function V1CreateClusterNamespaceResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        '_exists': json['exists'],
    };
}
exports.V1CreateClusterNamespaceResponseFromJSONTyped = V1CreateClusterNamespaceResponseFromJSONTyped;
function V1CreateClusterNamespaceResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'exists': value._exists,
    };
}
exports.V1CreateClusterNamespaceResponseToJSON = V1CreateClusterNamespaceResponseToJSON;
