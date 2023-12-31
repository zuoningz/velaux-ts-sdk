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
exports.V1UpdatePipelineRequestToJSON = exports.V1UpdatePipelineRequestFromJSONTyped = exports.V1UpdatePipelineRequestFromJSON = exports.instanceOfV1UpdatePipelineRequest = void 0;
var runtime_1 = require("../runtime");
var ModelWorkflowSpec_1 = require("./ModelWorkflowSpec");
/**
 * Check if a given object implements the V1UpdatePipelineRequest interface.
 */
function instanceOfV1UpdatePipelineRequest(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfV1UpdatePipelineRequest = instanceOfV1UpdatePipelineRequest;
function V1UpdatePipelineRequestFromJSON(json) {
    return V1UpdatePipelineRequestFromJSONTyped(json, false);
}
exports.V1UpdatePipelineRequestFromJSON = V1UpdatePipelineRequestFromJSON;
function V1UpdatePipelineRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !(0, runtime_1.exists)(json, 'alias') ? undefined : json['alias'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'spec': !(0, runtime_1.exists)(json, 'spec') ? undefined : (0, ModelWorkflowSpec_1.ModelWorkflowSpecFromJSON)(json['spec']),
    };
}
exports.V1UpdatePipelineRequestFromJSONTyped = V1UpdatePipelineRequestFromJSONTyped;
function V1UpdatePipelineRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'description': value.description,
        'spec': (0, ModelWorkflowSpec_1.ModelWorkflowSpecToJSON)(value.spec),
    };
}
exports.V1UpdatePipelineRequestToJSON = V1UpdatePipelineRequestToJSON;
