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
exports.V1GetPipelineRunOutputResponseToJSON = exports.V1GetPipelineRunOutputResponseFromJSONTyped = exports.V1GetPipelineRunOutputResponseFromJSON = exports.instanceOfV1GetPipelineRunOutputResponse = void 0;
var V1StepOutputBase_1 = require("./V1StepOutputBase");
/**
 * Check if a given object implements the V1GetPipelineRunOutputResponse interface.
 */
function instanceOfV1GetPipelineRunOutputResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "outputs" in value;
    return isInstance;
}
exports.instanceOfV1GetPipelineRunOutputResponse = instanceOfV1GetPipelineRunOutputResponse;
function V1GetPipelineRunOutputResponseFromJSON(json) {
    return V1GetPipelineRunOutputResponseFromJSONTyped(json, false);
}
exports.V1GetPipelineRunOutputResponseFromJSON = V1GetPipelineRunOutputResponseFromJSON;
function V1GetPipelineRunOutputResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'outputs': (json['outputs'].map(V1StepOutputBase_1.V1StepOutputBaseFromJSON)),
    };
}
exports.V1GetPipelineRunOutputResponseFromJSONTyped = V1GetPipelineRunOutputResponseFromJSONTyped;
function V1GetPipelineRunOutputResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'outputs': (value.outputs.map(V1StepOutputBase_1.V1StepOutputBaseToJSON)),
    };
}
exports.V1GetPipelineRunOutputResponseToJSON = V1GetPipelineRunOutputResponseToJSON;
