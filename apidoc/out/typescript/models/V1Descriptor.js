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
exports.V1DescriptorToJSON = exports.V1DescriptorFromJSONTyped = exports.V1DescriptorFromJSON = exports.instanceOfV1Descriptor = void 0;
var runtime_1 = require("../runtime");
var V1Platform_1 = require("./V1Platform");
/**
 * Check if a given object implements the V1Descriptor interface.
 */
function instanceOfV1Descriptor(value) {
    var isInstance = true;
    isInstance = isInstance && "digest" in value;
    isInstance = isInstance && "mediaType" in value;
    isInstance = isInstance && "size" in value;
    return isInstance;
}
exports.instanceOfV1Descriptor = instanceOfV1Descriptor;
function V1DescriptorFromJSON(json) {
    return V1DescriptorFromJSONTyped(json, false);
}
exports.V1DescriptorFromJSON = V1DescriptorFromJSON;
function V1DescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'annotations': !(0, runtime_1.exists)(json, 'annotations') ? undefined : json['annotations'],
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : json['data'],
        'digest': json['digest'],
        'mediaType': json['mediaType'],
        'platform': !(0, runtime_1.exists)(json, 'platform') ? undefined : (0, V1Platform_1.V1PlatformFromJSON)(json['platform']),
        'size': json['size'],
        'urls': !(0, runtime_1.exists)(json, 'urls') ? undefined : json['urls'],
    };
}
exports.V1DescriptorFromJSONTyped = V1DescriptorFromJSONTyped;
function V1DescriptorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'annotations': value.annotations,
        'data': value.data,
        'digest': value.digest,
        'mediaType': value.mediaType,
        'platform': (0, V1Platform_1.V1PlatformToJSON)(value.platform),
        'size': value.size,
        'urls': value.urls,
    };
}
exports.V1DescriptorToJSON = V1DescriptorToJSON;