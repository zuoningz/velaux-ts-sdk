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
exports.V1UpdateRoleRequestToJSON = exports.V1UpdateRoleRequestFromJSONTyped = exports.V1UpdateRoleRequestFromJSON = exports.instanceOfV1UpdateRoleRequest = void 0;
/**
 * Check if a given object implements the V1UpdateRoleRequest interface.
 */
function instanceOfV1UpdateRoleRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "permissions" in value;
    return isInstance;
}
exports.instanceOfV1UpdateRoleRequest = instanceOfV1UpdateRoleRequest;
function V1UpdateRoleRequestFromJSON(json) {
    return V1UpdateRoleRequestFromJSONTyped(json, false);
}
exports.V1UpdateRoleRequestFromJSON = V1UpdateRoleRequestFromJSON;
function V1UpdateRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': json['alias'],
        'permissions': json['permissions'],
    };
}
exports.V1UpdateRoleRequestFromJSONTyped = V1UpdateRoleRequestFromJSONTyped;
function V1UpdateRoleRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'permissions': value.permissions,
    };
}
exports.V1UpdateRoleRequestToJSON = V1UpdateRoleRequestToJSON;
