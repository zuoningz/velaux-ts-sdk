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
exports.V1ContextNameResponseToJSON = exports.V1ContextNameResponseFromJSONTyped = exports.V1ContextNameResponseFromJSON = exports.instanceOfV1ContextNameResponse = void 0;
/**
 * Check if a given object implements the V1ContextNameResponse interface.
 */
function instanceOfV1ContextNameResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfV1ContextNameResponse = instanceOfV1ContextNameResponse;
function V1ContextNameResponseFromJSON(json) {
    return V1ContextNameResponseFromJSONTyped(json, false);
}
exports.V1ContextNameResponseFromJSON = V1ContextNameResponseFromJSON;
function V1ContextNameResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
    };
}
exports.V1ContextNameResponseFromJSONTyped = V1ContextNameResponseFromJSONTyped;
function V1ContextNameResponseToJSON(value) {
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
exports.V1ContextNameResponseToJSON = V1ContextNameResponseToJSON;
