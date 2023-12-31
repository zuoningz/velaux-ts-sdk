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
exports.CommonKubeToJSON = exports.CommonKubeFromJSONTyped = exports.CommonKubeFromJSON = exports.instanceOfCommonKube = void 0;
var runtime_1 = require("../runtime");
var CommonKubeParameter_1 = require("./CommonKubeParameter");
/**
 * Check if a given object implements the CommonKube interface.
 */
function instanceOfCommonKube(value) {
    var isInstance = true;
    isInstance = isInstance && "template" in value;
    return isInstance;
}
exports.instanceOfCommonKube = instanceOfCommonKube;
function CommonKubeFromJSON(json) {
    return CommonKubeFromJSONTyped(json, false);
}
exports.CommonKubeFromJSON = CommonKubeFromJSON;
function CommonKubeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'parameters': !(0, runtime_1.exists)(json, 'parameters') ? undefined : (json['parameters'].map(CommonKubeParameter_1.CommonKubeParameterFromJSON)),
        'template': json['template'],
    };
}
exports.CommonKubeFromJSONTyped = CommonKubeFromJSONTyped;
function CommonKubeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'parameters': value.parameters === undefined ? undefined : (value.parameters.map(CommonKubeParameter_1.CommonKubeParameterToJSON)),
        'template': value.template,
    };
}
exports.CommonKubeToJSON = CommonKubeToJSON;
