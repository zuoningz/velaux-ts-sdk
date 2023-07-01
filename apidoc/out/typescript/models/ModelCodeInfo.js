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
exports.ModelCodeInfoToJSON = exports.ModelCodeInfoFromJSONTyped = exports.ModelCodeInfoFromJSON = exports.instanceOfModelCodeInfo = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ModelCodeInfo interface.
 */
function instanceOfModelCodeInfo(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfModelCodeInfo = instanceOfModelCodeInfo;
function ModelCodeInfoFromJSON(json) {
    return ModelCodeInfoFromJSONTyped(json, false);
}
exports.ModelCodeInfoFromJSON = ModelCodeInfoFromJSON;
function ModelCodeInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
        'commit': !(0, runtime_1.exists)(json, 'commit') ? undefined : json['commit'],
        'user': !(0, runtime_1.exists)(json, 'user') ? undefined : json['user'],
    };
}
exports.ModelCodeInfoFromJSONTyped = ModelCodeInfoFromJSONTyped;
function ModelCodeInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'branch': value.branch,
        'commit': value.commit,
        'user': value.user,
    };
}
exports.ModelCodeInfoToJSON = ModelCodeInfoToJSON;
