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
exports.V1CompareRevisionWithRunningOptionToJSON = exports.V1CompareRevisionWithRunningOptionFromJSONTyped = exports.V1CompareRevisionWithRunningOptionFromJSON = exports.instanceOfV1CompareRevisionWithRunningOption = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the V1CompareRevisionWithRunningOption interface.
 */
function instanceOfV1CompareRevisionWithRunningOption(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfV1CompareRevisionWithRunningOption = instanceOfV1CompareRevisionWithRunningOption;
function V1CompareRevisionWithRunningOptionFromJSON(json) {
    return V1CompareRevisionWithRunningOptionFromJSONTyped(json, false);
}
exports.V1CompareRevisionWithRunningOptionFromJSON = V1CompareRevisionWithRunningOptionFromJSON;
function V1CompareRevisionWithRunningOptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'revision': !(0, runtime_1.exists)(json, 'revision') ? undefined : json['revision'],
    };
}
exports.V1CompareRevisionWithRunningOptionFromJSONTyped = V1CompareRevisionWithRunningOptionFromJSONTyped;
function V1CompareRevisionWithRunningOptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'revision': value.revision,
    };
}
exports.V1CompareRevisionWithRunningOptionToJSON = V1CompareRevisionWithRunningOptionToJSON;
