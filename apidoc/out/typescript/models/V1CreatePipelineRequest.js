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
exports.V1CreatePipelineRequestToJSON = exports.V1CreatePipelineRequestFromJSONTyped = exports.V1CreatePipelineRequestFromJSON = exports.instanceOfV1CreatePipelineRequest = void 0;
var runtime_1 = require("../runtime");
var ModelWorkflowSpec_1 = require("./ModelWorkflowSpec");
/**
 * Check if a given object implements the V1CreatePipelineRequest interface.
 */
function instanceOfV1CreatePipelineRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "spec" in value;
    return isInstance;
}
exports.instanceOfV1CreatePipelineRequest = instanceOfV1CreatePipelineRequest;
function V1CreatePipelineRequestFromJSON(json) {
    return V1CreatePipelineRequestFromJSONTyped(json, false);
}
exports.V1CreatePipelineRequestFromJSON = V1CreatePipelineRequestFromJSON;
function V1CreatePipelineRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !(0, runtime_1.exists)(json, 'alias') ? undefined : json['alias'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'name': json['name'],
        'spec': (0, ModelWorkflowSpec_1.ModelWorkflowSpecFromJSON)(json['spec']),
    };
}
exports.V1CreatePipelineRequestFromJSONTyped = V1CreatePipelineRequestFromJSONTyped;
function V1CreatePipelineRequestToJSON(value) {
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
        'spec': (0, ModelWorkflowSpec_1.ModelWorkflowSpecToJSON)(value.spec),
    };
}
exports.V1CreatePipelineRequestToJSON = V1CreatePipelineRequestToJSON;
