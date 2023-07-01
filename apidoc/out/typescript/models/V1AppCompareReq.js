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
exports.V1AppCompareReqToJSON = exports.V1AppCompareReqFromJSONTyped = exports.V1AppCompareReqFromJSON = exports.instanceOfV1AppCompareReq = void 0;
var runtime_1 = require("../runtime");
var V1CompareLatestWithRunningOption_1 = require("./V1CompareLatestWithRunningOption");
var V1CompareRevisionWithLatestOption_1 = require("./V1CompareRevisionWithLatestOption");
var V1CompareRevisionWithRunningOption_1 = require("./V1CompareRevisionWithRunningOption");
/**
 * Check if a given object implements the V1AppCompareReq interface.
 */
function instanceOfV1AppCompareReq(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfV1AppCompareReq = instanceOfV1AppCompareReq;
function V1AppCompareReqFromJSON(json) {
    return V1AppCompareReqFromJSONTyped(json, false);
}
exports.V1AppCompareReqFromJSON = V1AppCompareReqFromJSON;
function V1AppCompareReqFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'compareLatestWithRunning': !(0, runtime_1.exists)(json, 'compareLatestWithRunning') ? undefined : (0, V1CompareLatestWithRunningOption_1.V1CompareLatestWithRunningOptionFromJSON)(json['compareLatestWithRunning']),
        'compareRevisionWithLatest': !(0, runtime_1.exists)(json, 'compareRevisionWithLatest') ? undefined : (0, V1CompareRevisionWithLatestOption_1.V1CompareRevisionWithLatestOptionFromJSON)(json['compareRevisionWithLatest']),
        'compareRevisionWithRunning': !(0, runtime_1.exists)(json, 'compareRevisionWithRunning') ? undefined : (0, V1CompareRevisionWithRunningOption_1.V1CompareRevisionWithRunningOptionFromJSON)(json['compareRevisionWithRunning']),
    };
}
exports.V1AppCompareReqFromJSONTyped = V1AppCompareReqFromJSONTyped;
function V1AppCompareReqToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'compareLatestWithRunning': (0, V1CompareLatestWithRunningOption_1.V1CompareLatestWithRunningOptionToJSON)(value.compareLatestWithRunning),
        'compareRevisionWithLatest': (0, V1CompareRevisionWithLatestOption_1.V1CompareRevisionWithLatestOptionToJSON)(value.compareRevisionWithLatest),
        'compareRevisionWithRunning': (0, V1CompareRevisionWithRunningOption_1.V1CompareRevisionWithRunningOptionToJSON)(value.compareRevisionWithRunning),
    };
}
exports.V1AppCompareReqToJSON = V1AppCompareReqToJSON;
