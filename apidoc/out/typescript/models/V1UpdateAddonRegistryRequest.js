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
exports.V1UpdateAddonRegistryRequestToJSON = exports.V1UpdateAddonRegistryRequestFromJSONTyped = exports.V1UpdateAddonRegistryRequestFromJSON = exports.instanceOfV1UpdateAddonRegistryRequest = void 0;
var runtime_1 = require("../runtime");
var AddonGitAddonSource_1 = require("./AddonGitAddonSource");
var AddonGiteeAddonSource_1 = require("./AddonGiteeAddonSource");
var AddonGitlabAddonSource_1 = require("./AddonGitlabAddonSource");
var AddonHelmSource_1 = require("./AddonHelmSource");
var AddonOSSAddonSource_1 = require("./AddonOSSAddonSource");
/**
 * Check if a given object implements the V1UpdateAddonRegistryRequest interface.
 */
function instanceOfV1UpdateAddonRegistryRequest(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfV1UpdateAddonRegistryRequest = instanceOfV1UpdateAddonRegistryRequest;
function V1UpdateAddonRegistryRequestFromJSON(json) {
    return V1UpdateAddonRegistryRequestFromJSONTyped(json, false);
}
exports.V1UpdateAddonRegistryRequestFromJSON = V1UpdateAddonRegistryRequestFromJSON;
function V1UpdateAddonRegistryRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'git': !(0, runtime_1.exists)(json, 'git') ? undefined : (0, AddonGitAddonSource_1.AddonGitAddonSourceFromJSON)(json['git']),
        'gitee': !(0, runtime_1.exists)(json, 'gitee') ? undefined : (0, AddonGiteeAddonSource_1.AddonGiteeAddonSourceFromJSON)(json['gitee']),
        'gitlab': !(0, runtime_1.exists)(json, 'gitlab') ? undefined : (0, AddonGitlabAddonSource_1.AddonGitlabAddonSourceFromJSON)(json['gitlab']),
        'helm': !(0, runtime_1.exists)(json, 'helm') ? undefined : (0, AddonHelmSource_1.AddonHelmSourceFromJSON)(json['helm']),
        'oss': !(0, runtime_1.exists)(json, 'oss') ? undefined : (0, AddonOSSAddonSource_1.AddonOSSAddonSourceFromJSON)(json['oss']),
    };
}
exports.V1UpdateAddonRegistryRequestFromJSONTyped = V1UpdateAddonRegistryRequestFromJSONTyped;
function V1UpdateAddonRegistryRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'git': (0, AddonGitAddonSource_1.AddonGitAddonSourceToJSON)(value.git),
        'gitee': (0, AddonGiteeAddonSource_1.AddonGiteeAddonSourceToJSON)(value.gitee),
        'gitlab': (0, AddonGitlabAddonSource_1.AddonGitlabAddonSourceToJSON)(value.gitlab),
        'helm': (0, AddonHelmSource_1.AddonHelmSourceToJSON)(value.helm),
        'oss': (0, AddonOSSAddonSource_1.AddonOSSAddonSourceToJSON)(value.oss),
    };
}
exports.V1UpdateAddonRegistryRequestToJSON = V1UpdateAddonRegistryRequestToJSON;
