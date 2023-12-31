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
exports.V1beta1ApplicationSpecToJSON = exports.V1beta1ApplicationSpecFromJSONTyped = exports.V1beta1ApplicationSpecFromJSON = exports.instanceOfV1beta1ApplicationSpec = void 0;
var runtime_1 = require("../runtime");
var CommonApplicationComponent_1 = require("./CommonApplicationComponent");
var V1beta1AppPolicy_1 = require("./V1beta1AppPolicy");
var V1beta1Workflow_1 = require("./V1beta1Workflow");
/**
 * Check if a given object implements the V1beta1ApplicationSpec interface.
 */
function instanceOfV1beta1ApplicationSpec(value) {
    var isInstance = true;
    isInstance = isInstance && "components" in value;
    return isInstance;
}
exports.instanceOfV1beta1ApplicationSpec = instanceOfV1beta1ApplicationSpec;
function V1beta1ApplicationSpecFromJSON(json) {
    return V1beta1ApplicationSpecFromJSONTyped(json, false);
}
exports.V1beta1ApplicationSpecFromJSON = V1beta1ApplicationSpecFromJSON;
function V1beta1ApplicationSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'components': (json['components'].map(CommonApplicationComponent_1.CommonApplicationComponentFromJSON)),
        'policies': !(0, runtime_1.exists)(json, 'policies') ? undefined : (json['policies'].map(V1beta1AppPolicy_1.V1beta1AppPolicyFromJSON)),
        'workflow': !(0, runtime_1.exists)(json, 'workflow') ? undefined : (0, V1beta1Workflow_1.V1beta1WorkflowFromJSON)(json['workflow']),
    };
}
exports.V1beta1ApplicationSpecFromJSONTyped = V1beta1ApplicationSpecFromJSONTyped;
function V1beta1ApplicationSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'components': (value.components.map(CommonApplicationComponent_1.CommonApplicationComponentToJSON)),
        'policies': value.policies === undefined ? undefined : (value.policies.map(V1beta1AppPolicy_1.V1beta1AppPolicyToJSON)),
        'workflow': (0, V1beta1Workflow_1.V1beta1WorkflowToJSON)(value.workflow),
    };
}
exports.V1beta1ApplicationSpecToJSON = V1beta1ApplicationSpecToJSON;
