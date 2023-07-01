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
exports.V1ApplicationRequestToJSON = exports.V1ApplicationRequestFromJSONTyped = exports.V1ApplicationRequestFromJSON = exports.instanceOfV1ApplicationRequest = void 0;
var runtime_1 = require("../runtime");
var CommonApplicationComponent_1 = require("./CommonApplicationComponent");
var V1beta1AppPolicy_1 = require("./V1beta1AppPolicy");
var V1beta1Workflow_1 = require("./V1beta1Workflow");
/**
 * Check if a given object implements the V1ApplicationRequest interface.
 */
function instanceOfV1ApplicationRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "components" in value;
    return isInstance;
}
exports.instanceOfV1ApplicationRequest = instanceOfV1ApplicationRequest;
function V1ApplicationRequestFromJSON(json) {
    return V1ApplicationRequestFromJSONTyped(json, false);
}
exports.V1ApplicationRequestFromJSON = V1ApplicationRequestFromJSON;
function V1ApplicationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'components': (json['components'].map(CommonApplicationComponent_1.CommonApplicationComponentFromJSON)),
        'policies': !(0, runtime_1.exists)(json, 'policies') ? undefined : (json['policies'].map(V1beta1AppPolicy_1.V1beta1AppPolicyFromJSON)),
        'workflow': !(0, runtime_1.exists)(json, 'workflow') ? undefined : (0, V1beta1Workflow_1.V1beta1WorkflowFromJSON)(json['workflow']),
    };
}
exports.V1ApplicationRequestFromJSONTyped = V1ApplicationRequestFromJSONTyped;
function V1ApplicationRequestToJSON(value) {
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
exports.V1ApplicationRequestToJSON = V1ApplicationRequestToJSON;
