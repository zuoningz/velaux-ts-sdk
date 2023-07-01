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
exports.V1ListTargetResponseToJSON = exports.V1ListTargetResponseFromJSONTyped = exports.V1ListTargetResponseFromJSON = exports.instanceOfV1ListTargetResponse = void 0;
var V1TargetBase_1 = require("./V1TargetBase");
/**
 * Check if a given object implements the V1ListTargetResponse interface.
 */
function instanceOfV1ListTargetResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "targets" in value;
    isInstance = isInstance && "total" in value;
    return isInstance;
}
exports.instanceOfV1ListTargetResponse = instanceOfV1ListTargetResponse;
function V1ListTargetResponseFromJSON(json) {
    return V1ListTargetResponseFromJSONTyped(json, false);
}
exports.V1ListTargetResponseFromJSON = V1ListTargetResponseFromJSON;
function V1ListTargetResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'targets': (json['targets'].map(V1TargetBase_1.V1TargetBaseFromJSON)),
        'total': json['total'],
    };
}
exports.V1ListTargetResponseFromJSONTyped = V1ListTargetResponseFromJSONTyped;
function V1ListTargetResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'targets': (value.targets.map(V1TargetBase_1.V1TargetBaseToJSON)),
        'total': value.total,
    };
}
exports.V1ListTargetResponseToJSON = V1ListTargetResponseToJSON;
