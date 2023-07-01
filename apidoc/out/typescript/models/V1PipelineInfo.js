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
exports.V1PipelineInfoToJSON = exports.V1PipelineInfoFromJSONTyped = exports.V1PipelineInfoFromJSON = exports.instanceOfV1PipelineInfo = void 0;
var V1PipelineRun_1 = require("./V1PipelineRun");
var V1RunStat_1 = require("./V1RunStat");
/**
 * Check if a given object implements the V1PipelineInfo interface.
 */
function instanceOfV1PipelineInfo(value) {
    var isInstance = true;
    isInstance = isInstance && "lastRun" in value;
    isInstance = isInstance && "runStat" in value;
    return isInstance;
}
exports.instanceOfV1PipelineInfo = instanceOfV1PipelineInfo;
function V1PipelineInfoFromJSON(json) {
    return V1PipelineInfoFromJSONTyped(json, false);
}
exports.V1PipelineInfoFromJSON = V1PipelineInfoFromJSON;
function V1PipelineInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lastRun': (0, V1PipelineRun_1.V1PipelineRunFromJSON)(json['lastRun']),
        'runStat': (0, V1RunStat_1.V1RunStatFromJSON)(json['runStat']),
    };
}
exports.V1PipelineInfoFromJSONTyped = V1PipelineInfoFromJSONTyped;
function V1PipelineInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lastRun': (0, V1PipelineRun_1.V1PipelineRunToJSON)(value.lastRun),
        'runStat': (0, V1RunStat_1.V1RunStatToJSON)(value.runStat),
    };
}
exports.V1PipelineInfoToJSON = V1PipelineInfoToJSON;