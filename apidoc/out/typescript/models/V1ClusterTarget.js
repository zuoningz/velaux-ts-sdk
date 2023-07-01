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
exports.V1ClusterTargetToJSON = exports.V1ClusterTargetFromJSONTyped = exports.V1ClusterTargetFromJSON = exports.instanceOfV1ClusterTarget = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the V1ClusterTarget interface.
 */
function instanceOfV1ClusterTarget(value) {
    var isInstance = true;
    isInstance = isInstance && "clusterName" in value;
    return isInstance;
}
exports.instanceOfV1ClusterTarget = instanceOfV1ClusterTarget;
function V1ClusterTargetFromJSON(json) {
    return V1ClusterTargetFromJSONTyped(json, false);
}
exports.V1ClusterTargetFromJSON = V1ClusterTargetFromJSON;
function V1ClusterTargetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clusterName': json['clusterName'],
        'namespace': !(0, runtime_1.exists)(json, 'namespace') ? undefined : json['namespace'],
    };
}
exports.V1ClusterTargetFromJSONTyped = V1ClusterTargetFromJSONTyped;
function V1ClusterTargetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clusterName': value.clusterName,
        'namespace': value.namespace,
    };
}
exports.V1ClusterTargetToJSON = V1ClusterTargetToJSON;
