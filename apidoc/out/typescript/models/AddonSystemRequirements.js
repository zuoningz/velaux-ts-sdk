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
exports.AddonSystemRequirementsToJSON = exports.AddonSystemRequirementsFromJSONTyped = exports.AddonSystemRequirementsFromJSON = exports.instanceOfAddonSystemRequirements = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AddonSystemRequirements interface.
 */
function instanceOfAddonSystemRequirements(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfAddonSystemRequirements = instanceOfAddonSystemRequirements;
function AddonSystemRequirementsFromJSON(json) {
    return AddonSystemRequirementsFromJSONTyped(json, false);
}
exports.AddonSystemRequirementsFromJSON = AddonSystemRequirementsFromJSON;
function AddonSystemRequirementsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'kubernetes': !(0, runtime_1.exists)(json, 'kubernetes') ? undefined : json['kubernetes'],
        'vela': !(0, runtime_1.exists)(json, 'vela') ? undefined : json['vela'],
    };
}
exports.AddonSystemRequirementsFromJSONTyped = AddonSystemRequirementsFromJSONTyped;
function AddonSystemRequirementsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'kubernetes': value.kubernetes,
        'vela': value.vela,
    };
}
exports.AddonSystemRequirementsToJSON = AddonSystemRequirementsToJSON;