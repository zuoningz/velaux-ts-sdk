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
exports.V1alpha1WorkflowRunSpecToJSON = exports.V1alpha1WorkflowRunSpecFromJSONTyped = exports.V1alpha1WorkflowRunSpecFromJSON = exports.instanceOfV1alpha1WorkflowRunSpec = void 0;
var runtime_1 = require("../runtime");
var V1alpha1WorkflowExecuteMode_1 = require("./V1alpha1WorkflowExecuteMode");
var V1alpha1WorkflowSpec_1 = require("./V1alpha1WorkflowSpec");
/**
 * Check if a given object implements the V1alpha1WorkflowRunSpec interface.
 */
function instanceOfV1alpha1WorkflowRunSpec(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfV1alpha1WorkflowRunSpec = instanceOfV1alpha1WorkflowRunSpec;
function V1alpha1WorkflowRunSpecFromJSON(json) {
    return V1alpha1WorkflowRunSpecFromJSONTyped(json, false);
}
exports.V1alpha1WorkflowRunSpecFromJSON = V1alpha1WorkflowRunSpecFromJSON;
function V1alpha1WorkflowRunSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'context': !(0, runtime_1.exists)(json, 'context') ? undefined : json['context'],
        'mode': !(0, runtime_1.exists)(json, 'mode') ? undefined : (0, V1alpha1WorkflowExecuteMode_1.V1alpha1WorkflowExecuteModeFromJSON)(json['mode']),
        'workflowRef': !(0, runtime_1.exists)(json, 'workflowRef') ? undefined : json['workflowRef'],
        'workflowSpec': !(0, runtime_1.exists)(json, 'workflowSpec') ? undefined : (0, V1alpha1WorkflowSpec_1.V1alpha1WorkflowSpecFromJSON)(json['workflowSpec']),
    };
}
exports.V1alpha1WorkflowRunSpecFromJSONTyped = V1alpha1WorkflowRunSpecFromJSONTyped;
function V1alpha1WorkflowRunSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'context': value.context,
        'mode': (0, V1alpha1WorkflowExecuteMode_1.V1alpha1WorkflowExecuteModeToJSON)(value.mode),
        'workflowRef': value.workflowRef,
        'workflowSpec': (0, V1alpha1WorkflowSpec_1.V1alpha1WorkflowSpecToJSON)(value.workflowSpec),
    };
}
exports.V1alpha1WorkflowRunSpecToJSON = V1alpha1WorkflowRunSpecToJSON;