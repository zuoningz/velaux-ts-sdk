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
exports.ConfigClusterTargetStatusToJSON = exports.ConfigClusterTargetStatusFromJSONTyped = exports.ConfigClusterTargetStatusFromJSON = exports.instanceOfConfigClusterTargetStatus = void 0;
var ConfigNamespacedName_1 = require("./ConfigNamespacedName");
/**
 * Check if a given object implements the ConfigClusterTargetStatus interface.
 */
function instanceOfConfigClusterTargetStatus(value) {
    var isInstance = true;
    isInstance = isInstance && "application" in value;
    isInstance = isInstance && "clusterName" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "namespace" in value;
    isInstance = isInstance && "status" in value;
    return isInstance;
}
exports.instanceOfConfigClusterTargetStatus = instanceOfConfigClusterTargetStatus;
function ConfigClusterTargetStatusFromJSON(json) {
    return ConfigClusterTargetStatusFromJSONTyped(json, false);
}
exports.ConfigClusterTargetStatusFromJSON = ConfigClusterTargetStatusFromJSON;
function ConfigClusterTargetStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'application': (0, ConfigNamespacedName_1.ConfigNamespacedNameFromJSON)(json['application']),
        'clusterName': json['clusterName'],
        'message': json['message'],
        'namespace': json['namespace'],
        'status': json['status'],
    };
}
exports.ConfigClusterTargetStatusFromJSONTyped = ConfigClusterTargetStatusFromJSONTyped;
function ConfigClusterTargetStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'application': (0, ConfigNamespacedName_1.ConfigNamespacedNameToJSON)(value.application),
        'clusterName': value.clusterName,
        'message': value.message,
        'namespace': value.namespace,
        'status': value.status,
    };
}
exports.ConfigClusterTargetStatusToJSON = ConfigClusterTargetStatusToJSON;
