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
exports.V1StepInputBaseToJSON = exports.V1StepInputBaseFromJSONTyped = exports.V1StepInputBaseFromJSON = exports.instanceOfV1StepInputBase = void 0;
var V1InputVar_1 = require("./V1InputVar");
/**
 * Check if a given object implements the V1StepInputBase interface.
 */
function instanceOfV1StepInputBase(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "phase" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "values" in value;
    return isInstance;
}
exports.instanceOfV1StepInputBase = instanceOfV1StepInputBase;
function V1StepInputBaseFromJSON(json) {
    return V1StepInputBaseFromJSONTyped(json, false);
}
exports.V1StepInputBaseFromJSON = V1StepInputBaseFromJSON;
function V1StepInputBaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'phase': json['phase'],
        'type': json['type'],
        'values': (json['values'].map(V1InputVar_1.V1InputVarFromJSON)),
    };
}
exports.V1StepInputBaseFromJSONTyped = V1StepInputBaseFromJSONTyped;
function V1StepInputBaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'phase': value.phase,
        'type': value.type,
        'values': (value.values.map(V1InputVar_1.V1InputVarToJSON)),
    };
}
exports.V1StepInputBaseToJSON = V1StepInputBaseToJSON;
