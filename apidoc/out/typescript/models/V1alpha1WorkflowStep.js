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
exports.V1alpha1WorkflowStepToJSON = exports.V1alpha1WorkflowStepFromJSONTyped = exports.V1alpha1WorkflowStepFromJSON = exports.instanceOfV1alpha1WorkflowStep = void 0;
var runtime_1 = require("../runtime");
var V1alpha1InputItem_1 = require("./V1alpha1InputItem");
var V1alpha1OutputItem_1 = require("./V1alpha1OutputItem");
var V1alpha1WorkflowStepBase_1 = require("./V1alpha1WorkflowStepBase");
var V1alpha1WorkflowStepMeta_1 = require("./V1alpha1WorkflowStepMeta");
/**
 * Check if a given object implements the V1alpha1WorkflowStep interface.
 */
function instanceOfV1alpha1WorkflowStep(value) {
    var isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfV1alpha1WorkflowStep = instanceOfV1alpha1WorkflowStep;
function V1alpha1WorkflowStepFromJSON(json) {
    return V1alpha1WorkflowStepFromJSONTyped(json, false);
}
exports.V1alpha1WorkflowStepFromJSON = V1alpha1WorkflowStepFromJSON;
function V1alpha1WorkflowStepFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dependsOn': !(0, runtime_1.exists)(json, 'dependsOn') ? undefined : json['dependsOn'],
        '_if': !(0, runtime_1.exists)(json, 'if') ? undefined : json['if'],
        'inputs': !(0, runtime_1.exists)(json, 'inputs') ? undefined : (json['inputs'].map(V1alpha1InputItem_1.V1alpha1InputItemFromJSON)),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, V1alpha1WorkflowStepMeta_1.V1alpha1WorkflowStepMetaFromJSON)(json['meta']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'outputs': !(0, runtime_1.exists)(json, 'outputs') ? undefined : (json['outputs'].map(V1alpha1OutputItem_1.V1alpha1OutputItemFromJSON)),
        'properties': !(0, runtime_1.exists)(json, 'properties') ? undefined : json['properties'],
        'subSteps': !(0, runtime_1.exists)(json, 'subSteps') ? undefined : (json['subSteps'].map(V1alpha1WorkflowStepBase_1.V1alpha1WorkflowStepBaseFromJSON)),
        'timeout': !(0, runtime_1.exists)(json, 'timeout') ? undefined : json['timeout'],
        'type': json['type'],
    };
}
exports.V1alpha1WorkflowStepFromJSONTyped = V1alpha1WorkflowStepFromJSONTyped;
function V1alpha1WorkflowStepToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dependsOn': value.dependsOn,
        'if': value._if,
        'inputs': value.inputs === undefined ? undefined : (value.inputs.map(V1alpha1InputItem_1.V1alpha1InputItemToJSON)),
        'meta': (0, V1alpha1WorkflowStepMeta_1.V1alpha1WorkflowStepMetaToJSON)(value.meta),
        'name': value.name,
        'outputs': value.outputs === undefined ? undefined : (value.outputs.map(V1alpha1OutputItem_1.V1alpha1OutputItemToJSON)),
        'properties': value.properties,
        'subSteps': value.subSteps === undefined ? undefined : (value.subSteps.map(V1alpha1WorkflowStepBase_1.V1alpha1WorkflowStepBaseToJSON)),
        'timeout': value.timeout,
        'type': value.type,
    };
}
exports.V1alpha1WorkflowStepToJSON = V1alpha1WorkflowStepToJSON;