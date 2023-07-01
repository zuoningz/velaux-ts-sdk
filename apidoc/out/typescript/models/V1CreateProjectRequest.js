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
exports.V1CreateProjectRequestToJSON = exports.V1CreateProjectRequestFromJSONTyped = exports.V1CreateProjectRequestFromJSON = exports.instanceOfV1CreateProjectRequest = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the V1CreateProjectRequest interface.
 */
function instanceOfV1CreateProjectRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfV1CreateProjectRequest = instanceOfV1CreateProjectRequest;
function V1CreateProjectRequestFromJSON(json) {
    return V1CreateProjectRequestFromJSONTyped(json, false);
}
exports.V1CreateProjectRequestFromJSON = V1CreateProjectRequestFromJSON;
function V1CreateProjectRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !(0, runtime_1.exists)(json, 'alias') ? undefined : json['alias'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'name': json['name'],
        'namespace': !(0, runtime_1.exists)(json, 'namespace') ? undefined : json['namespace'],
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : json['owner'],
    };
}
exports.V1CreateProjectRequestFromJSONTyped = V1CreateProjectRequestFromJSONTyped;
function V1CreateProjectRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'description': value.description,
        'name': value.name,
        'namespace': value.namespace,
        'owner': value.owner,
    };
}
exports.V1CreateProjectRequestToJSON = V1CreateProjectRequestToJSON;
