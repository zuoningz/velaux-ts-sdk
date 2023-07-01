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
exports.V1SystemInfoToJSON = exports.V1SystemInfoFromJSONTyped = exports.V1SystemInfoFromJSON = exports.instanceOfV1SystemInfo = void 0;
var runtime_1 = require("../runtime");
var ModelProjectRef_1 = require("./ModelProjectRef");
/**
 * Check if a given object implements the V1SystemInfo interface.
 */
function instanceOfV1SystemInfo(value) {
    var isInstance = true;
    isInstance = isInstance && "enableCollection" in value;
    isInstance = isInstance && "loginType" in value;
    isInstance = isInstance && "platformID" in value;
    return isInstance;
}
exports.instanceOfV1SystemInfo = instanceOfV1SystemInfo;
function V1SystemInfoFromJSON(json) {
    return V1SystemInfoFromJSONTyped(json, false);
}
exports.V1SystemInfoFromJSON = V1SystemInfoFromJSON;
function V1SystemInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dexUserDefaultPlatformRoles': !(0, runtime_1.exists)(json, 'dexUserDefaultPlatformRoles') ? undefined : json['dexUserDefaultPlatformRoles'],
        'dexUserDefaultProjects': !(0, runtime_1.exists)(json, 'dexUserDefaultProjects') ? undefined : (json['dexUserDefaultProjects'].map(ModelProjectRef_1.ModelProjectRefFromJSON)),
        'enableCollection': json['enableCollection'],
        'installTime': !(0, runtime_1.exists)(json, 'installTime') ? undefined : (new Date(json['installTime'])),
        'loginType': json['loginType'],
        'platformID': json['platformID'],
    };
}
exports.V1SystemInfoFromJSONTyped = V1SystemInfoFromJSONTyped;
function V1SystemInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dexUserDefaultPlatformRoles': value.dexUserDefaultPlatformRoles,
        'dexUserDefaultProjects': value.dexUserDefaultProjects === undefined ? undefined : (value.dexUserDefaultProjects.map(ModelProjectRef_1.ModelProjectRefToJSON)),
        'enableCollection': value.enableCollection,
        'installTime': value.installTime === undefined ? undefined : (value.installTime.toISOString()),
        'loginType': value.loginType,
        'platformID': value.platformID,
    };
}
exports.V1SystemInfoToJSON = V1SystemInfoToJSON;
