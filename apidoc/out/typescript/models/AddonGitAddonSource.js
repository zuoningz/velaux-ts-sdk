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
exports.AddonGitAddonSourceToJSON = exports.AddonGitAddonSourceFromJSONTyped = exports.AddonGitAddonSourceFromJSON = exports.instanceOfAddonGitAddonSource = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AddonGitAddonSource interface.
 */
function instanceOfAddonGitAddonSource(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfAddonGitAddonSource = instanceOfAddonGitAddonSource;
function AddonGitAddonSourceFromJSON(json) {
    return AddonGitAddonSourceFromJSONTyped(json, false);
}
exports.AddonGitAddonSourceFromJSON = AddonGitAddonSourceFromJSON;
function AddonGitAddonSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'path': !(0, runtime_1.exists)(json, 'path') ? undefined : json['path'],
        'token': !(0, runtime_1.exists)(json, 'token') ? undefined : json['token'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
    };
}
exports.AddonGitAddonSourceFromJSONTyped = AddonGitAddonSourceFromJSONTyped;
function AddonGitAddonSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'path': value.path,
        'token': value.token,
        'url': value.url,
    };
}
exports.AddonGitAddonSourceToJSON = AddonGitAddonSourceToJSON;
