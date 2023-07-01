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
exports.CommonStatusToJSON = exports.CommonStatusFromJSONTyped = exports.CommonStatusFromJSON = exports.instanceOfCommonStatus = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CommonStatus interface.
 */
function instanceOfCommonStatus(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfCommonStatus = instanceOfCommonStatus;
function CommonStatusFromJSON(json) {
    return CommonStatusFromJSONTyped(json, false);
}
exports.CommonStatusFromJSON = CommonStatusFromJSON;
function CommonStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customStatus': !(0, runtime_1.exists)(json, 'customStatus') ? undefined : json['customStatus'],
        'healthPolicy': !(0, runtime_1.exists)(json, 'healthPolicy') ? undefined : json['healthPolicy'],
    };
}
exports.CommonStatusFromJSONTyped = CommonStatusFromJSONTyped;
function CommonStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customStatus': value.customStatus,
        'healthPolicy': value.healthPolicy,
    };
}
exports.CommonStatusToJSON = CommonStatusToJSON;
