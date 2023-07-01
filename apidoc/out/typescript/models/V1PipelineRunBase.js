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
exports.V1PipelineRunBaseToJSON = exports.V1PipelineRunBaseFromJSONTyped = exports.V1PipelineRunBaseFromJSON = exports.instanceOfV1PipelineRunBase = void 0;
var ModelValue_1 = require("./ModelValue");
var V1NameAlias_1 = require("./V1NameAlias");
var V1alpha1WorkflowRunSpec_1 = require("./V1alpha1WorkflowRunSpec");
/**
 * Check if a given object implements the V1PipelineRunBase interface.
 */
function instanceOfV1PipelineRunBase(value) {
    var isInstance = true;
    isInstance = isInstance && "contextName" in value;
    isInstance = isInstance && "contextValues" in value;
    isInstance = isInstance && "pipelineName" in value;
    isInstance = isInstance && "pipelineRunName" in value;
    isInstance = isInstance && "project" in value;
    isInstance = isInstance && "record" in value;
    isInstance = isInstance && "spec" in value;
    return isInstance;
}
exports.instanceOfV1PipelineRunBase = instanceOfV1PipelineRunBase;
function V1PipelineRunBaseFromJSON(json) {
    return V1PipelineRunBaseFromJSONTyped(json, false);
}
exports.V1PipelineRunBaseFromJSON = V1PipelineRunBaseFromJSON;
function V1PipelineRunBaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'contextName': json['contextName'],
        'contextValues': (json['contextValues'].map(ModelValue_1.ModelValueFromJSON)),
        'pipelineName': json['pipelineName'],
        'pipelineRunName': json['pipelineRunName'],
        'project': (0, V1NameAlias_1.V1NameAliasFromJSON)(json['project']),
        'record': json['record'],
        'spec': (0, V1alpha1WorkflowRunSpec_1.V1alpha1WorkflowRunSpecFromJSON)(json['spec']),
    };
}
exports.V1PipelineRunBaseFromJSONTyped = V1PipelineRunBaseFromJSONTyped;
function V1PipelineRunBaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'contextName': value.contextName,
        'contextValues': (value.contextValues.map(ModelValue_1.ModelValueToJSON)),
        'pipelineName': value.pipelineName,
        'pipelineRunName': value.pipelineRunName,
        'project': (0, V1NameAlias_1.V1NameAliasToJSON)(value.project),
        'record': value.record,
        'spec': (0, V1alpha1WorkflowRunSpec_1.V1alpha1WorkflowRunSpecToJSON)(value.spec),
    };
}
exports.V1PipelineRunBaseToJSON = V1PipelineRunBaseToJSON;