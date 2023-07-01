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
exports.V1ListWorkflowResponseToJSON = exports.V1ListWorkflowResponseFromJSONTyped = exports.V1ListWorkflowResponseFromJSON = exports.instanceOfV1ListWorkflowResponse = void 0;
var V1WorkflowBase_1 = require("./V1WorkflowBase");
/**
 * Check if a given object implements the V1ListWorkflowResponse interface.
 */
function instanceOfV1ListWorkflowResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "workflows" in value;
    return isInstance;
}
exports.instanceOfV1ListWorkflowResponse = instanceOfV1ListWorkflowResponse;
function V1ListWorkflowResponseFromJSON(json) {
    return V1ListWorkflowResponseFromJSONTyped(json, false);
}
exports.V1ListWorkflowResponseFromJSON = V1ListWorkflowResponseFromJSON;
function V1ListWorkflowResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'workflows': (json['workflows'].map(V1WorkflowBase_1.V1WorkflowBaseFromJSON)),
    };
}
exports.V1ListWorkflowResponseFromJSONTyped = V1ListWorkflowResponseFromJSONTyped;
function V1ListWorkflowResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'workflows': (value.workflows.map(V1WorkflowBase_1.V1WorkflowBaseToJSON)),
    };
}
exports.V1ListWorkflowResponseToJSON = V1ListWorkflowResponseToJSON;