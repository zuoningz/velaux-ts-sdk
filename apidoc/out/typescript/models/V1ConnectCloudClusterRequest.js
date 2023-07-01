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
exports.V1ConnectCloudClusterRequestToJSON = exports.V1ConnectCloudClusterRequestFromJSONTyped = exports.V1ConnectCloudClusterRequestFromJSON = exports.instanceOfV1ConnectCloudClusterRequest = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the V1ConnectCloudClusterRequest interface.
 */
function instanceOfV1ConnectCloudClusterRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "accessKeyID" in value;
    isInstance = isInstance && "accessKeySecret" in value;
    isInstance = isInstance && "clusterID" in value;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfV1ConnectCloudClusterRequest = instanceOfV1ConnectCloudClusterRequest;
function V1ConnectCloudClusterRequestFromJSON(json) {
    return V1ConnectCloudClusterRequestFromJSONTyped(json, false);
}
exports.V1ConnectCloudClusterRequestFromJSON = V1ConnectCloudClusterRequestFromJSON;
function V1ConnectCloudClusterRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessKeyID': json['accessKeyID'],
        'accessKeySecret': json['accessKeySecret'],
        'alias': !(0, runtime_1.exists)(json, 'alias') ? undefined : json['alias'],
        'clusterID': json['clusterID'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'icon': json['icon'],
        'labels': !(0, runtime_1.exists)(json, 'labels') ? undefined : json['labels'],
        'name': json['name'],
    };
}
exports.V1ConnectCloudClusterRequestFromJSONTyped = V1ConnectCloudClusterRequestFromJSONTyped;
function V1ConnectCloudClusterRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessKeyID': value.accessKeyID,
        'accessKeySecret': value.accessKeySecret,
        'alias': value.alias,
        'clusterID': value.clusterID,
        'description': value.description,
        'icon': value.icon,
        'labels': value.labels,
        'name': value.name,
    };
}
exports.V1ConnectCloudClusterRequestToJSON = V1ConnectCloudClusterRequestToJSON;