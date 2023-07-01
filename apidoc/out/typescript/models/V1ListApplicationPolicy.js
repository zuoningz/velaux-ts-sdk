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
exports.V1ListApplicationPolicyToJSON = exports.V1ListApplicationPolicyFromJSONTyped = exports.V1ListApplicationPolicyFromJSON = exports.instanceOfV1ListApplicationPolicy = void 0;
var V1PolicyBase_1 = require("./V1PolicyBase");
/**
 * Check if a given object implements the V1ListApplicationPolicy interface.
 */
function instanceOfV1ListApplicationPolicy(value) {
    var isInstance = true;
    isInstance = isInstance && "policies" in value;
    return isInstance;
}
exports.instanceOfV1ListApplicationPolicy = instanceOfV1ListApplicationPolicy;
function V1ListApplicationPolicyFromJSON(json) {
    return V1ListApplicationPolicyFromJSONTyped(json, false);
}
exports.V1ListApplicationPolicyFromJSON = V1ListApplicationPolicyFromJSON;
function V1ListApplicationPolicyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'policies': (json['policies'].map(V1PolicyBase_1.V1PolicyBaseFromJSON)),
    };
}
exports.V1ListApplicationPolicyFromJSONTyped = V1ListApplicationPolicyFromJSONTyped;
function V1ListApplicationPolicyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'policies': (value.policies.map(V1PolicyBase_1.V1PolicyBaseToJSON)),
    };
}
exports.V1ListApplicationPolicyToJSON = V1ListApplicationPolicyToJSON;
