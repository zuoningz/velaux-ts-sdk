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
exports.V1DetailWorkflowRecordResponseToJSON = exports.V1DetailWorkflowRecordResponseFromJSONTyped = exports.V1DetailWorkflowRecordResponseFromJSON = exports.instanceOfV1DetailWorkflowRecordResponse = void 0;
var runtime_1 = require("../runtime");
var ModelWorkflowStepStatus_1 = require("./ModelWorkflowStepStatus");
/**
 * Check if a given object implements the V1DetailWorkflowRecordResponse interface.
 */
function instanceOfV1DetailWorkflowRecordResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "applicationRevision" in value;
    isInstance = isInstance && "deployTime" in value;
    isInstance = isInstance && "deployUser" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "mode" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "namespace" in value;
    isInstance = isInstance && "note" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "triggerType" in value;
    isInstance = isInstance && "workflowAlias" in value;
    isInstance = isInstance && "workflowName" in value;
    return isInstance;
}
exports.instanceOfV1DetailWorkflowRecordResponse = instanceOfV1DetailWorkflowRecordResponse;
function V1DetailWorkflowRecordResponseFromJSON(json) {
    return V1DetailWorkflowRecordResponseFromJSONTyped(json, false);
}
exports.V1DetailWorkflowRecordResponseFromJSON = V1DetailWorkflowRecordResponseFromJSON;
function V1DetailWorkflowRecordResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'applicationRevision': json['applicationRevision'],
        'deployTime': (new Date(json['deployTime'])),
        'deployUser': json['deployUser'],
        'endTime': !(0, runtime_1.exists)(json, 'endTime') ? undefined : (new Date(json['endTime'])),
        'message': json['message'],
        'mode': json['mode'],
        'name': json['name'],
        'namespace': json['namespace'],
        'note': json['note'],
        'startTime': !(0, runtime_1.exists)(json, 'startTime') ? undefined : (new Date(json['startTime'])),
        'status': json['status'],
        'steps': !(0, runtime_1.exists)(json, 'steps') ? undefined : (json['steps'].map(ModelWorkflowStepStatus_1.ModelWorkflowStepStatusFromJSON)),
        'triggerType': json['triggerType'],
        'workflowAlias': json['workflowAlias'],
        'workflowName': json['workflowName'],
    };
}
exports.V1DetailWorkflowRecordResponseFromJSONTyped = V1DetailWorkflowRecordResponseFromJSONTyped;
function V1DetailWorkflowRecordResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'applicationRevision': value.applicationRevision,
        'deployTime': (value.deployTime.toISOString()),
        'deployUser': value.deployUser,
        'endTime': value.endTime === undefined ? undefined : (value.endTime.toISOString()),
        'message': value.message,
        'mode': value.mode,
        'name': value.name,
        'namespace': value.namespace,
        'note': value.note,
        'startTime': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'status': value.status,
        'steps': value.steps === undefined ? undefined : (value.steps.map(ModelWorkflowStepStatus_1.ModelWorkflowStepStatusToJSON)),
        'triggerType': value.triggerType,
        'workflowAlias': value.workflowAlias,
        'workflowName': value.workflowName,
    };
}
exports.V1DetailWorkflowRecordResponseToJSON = V1DetailWorkflowRecordResponseToJSON;
