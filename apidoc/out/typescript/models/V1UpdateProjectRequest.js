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
exports.V1UpdateProjectRequestToJSON = exports.V1UpdateProjectRequestFromJSONTyped = exports.V1UpdateProjectRequestFromJSON = exports.instanceOfV1UpdateProjectRequest = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the V1UpdateProjectRequest interface.
 */
function instanceOfV1UpdateProjectRequest(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfV1UpdateProjectRequest = instanceOfV1UpdateProjectRequest;
function V1UpdateProjectRequestFromJSON(json) {
    return V1UpdateProjectRequestFromJSONTyped(json, false);
}
exports.V1UpdateProjectRequestFromJSON = V1UpdateProjectRequestFromJSON;
function V1UpdateProjectRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !(0, runtime_1.exists)(json, 'alias') ? undefined : json['alias'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : json['owner'],
    };
}
exports.V1UpdateProjectRequestFromJSONTyped = V1UpdateProjectRequestFromJSONTyped;
function V1UpdateProjectRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'description': value.description,
        'owner': value.owner,
    };
}
exports.V1UpdateProjectRequestToJSON = V1UpdateProjectRequestToJSON;
