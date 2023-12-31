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
exports.V1CreateApplicationTraitRequestToJSON = exports.V1CreateApplicationTraitRequestFromJSONTyped = exports.V1CreateApplicationTraitRequestFromJSON = exports.instanceOfV1CreateApplicationTraitRequest = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the V1CreateApplicationTraitRequest interface.
 */
function instanceOfV1CreateApplicationTraitRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "properties" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfV1CreateApplicationTraitRequest = instanceOfV1CreateApplicationTraitRequest;
function V1CreateApplicationTraitRequestFromJSON(json) {
    return V1CreateApplicationTraitRequestFromJSONTyped(json, false);
}
exports.V1CreateApplicationTraitRequestFromJSON = V1CreateApplicationTraitRequestFromJSON;
function V1CreateApplicationTraitRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !(0, runtime_1.exists)(json, 'alias') ? undefined : json['alias'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'properties': json['properties'],
        'type': json['type'],
    };
}
exports.V1CreateApplicationTraitRequestFromJSONTyped = V1CreateApplicationTraitRequestFromJSONTyped;
function V1CreateApplicationTraitRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'description': value.description,
        'properties': value.properties,
        'type': value.type,
    };
}
exports.V1CreateApplicationTraitRequestToJSON = V1CreateApplicationTraitRequestToJSON;
