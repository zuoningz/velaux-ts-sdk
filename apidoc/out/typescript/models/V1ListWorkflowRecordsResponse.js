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
exports.V1ListWorkflowRecordsResponseToJSON = exports.V1ListWorkflowRecordsResponseFromJSONTyped = exports.V1ListWorkflowRecordsResponseFromJSON = exports.instanceOfV1ListWorkflowRecordsResponse = void 0;
var V1WorkflowRecord_1 = require("./V1WorkflowRecord");
/**
 * Check if a given object implements the V1ListWorkflowRecordsResponse interface.
 */
function instanceOfV1ListWorkflowRecordsResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "records" in value;
    isInstance = isInstance && "total" in value;
    return isInstance;
}
exports.instanceOfV1ListWorkflowRecordsResponse = instanceOfV1ListWorkflowRecordsResponse;
function V1ListWorkflowRecordsResponseFromJSON(json) {
    return V1ListWorkflowRecordsResponseFromJSONTyped(json, false);
}
exports.V1ListWorkflowRecordsResponseFromJSON = V1ListWorkflowRecordsResponseFromJSON;
function V1ListWorkflowRecordsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'records': (json['records'].map(V1WorkflowRecord_1.V1WorkflowRecordFromJSON)),
        'total': json['total'],
    };
}
exports.V1ListWorkflowRecordsResponseFromJSONTyped = V1ListWorkflowRecordsResponseFromJSONTyped;
function V1ListWorkflowRecordsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'records': (value.records.map(V1WorkflowRecord_1.V1WorkflowRecordToJSON)),
        'total': value.total,
    };
}
exports.V1ListWorkflowRecordsResponseToJSON = V1ListWorkflowRecordsResponseToJSON;
