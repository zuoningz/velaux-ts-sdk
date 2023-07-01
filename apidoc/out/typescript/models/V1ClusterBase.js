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
exports.V1ClusterBaseToJSON = exports.V1ClusterBaseFromJSONTyped = exports.V1ClusterBaseFromJSON = exports.instanceOfV1ClusterBase = void 0;
var runtime_1 = require("../runtime");
var ModelProviderInfo_1 = require("./ModelProviderInfo");
/**
 * Check if a given object implements the V1ClusterBase interface.
 */
function instanceOfV1ClusterBase(value) {
    var isInstance = true;
    isInstance = isInstance && "apiServerURL" in value;
    isInstance = isInstance && "dashboardURL" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "providerInfo" in value;
    isInstance = isInstance && "reason" in value;
    isInstance = isInstance && "status" in value;
    return isInstance;
}
exports.instanceOfV1ClusterBase = instanceOfV1ClusterBase;
function V1ClusterBaseFromJSON(json) {
    return V1ClusterBaseFromJSONTyped(json, false);
}
exports.V1ClusterBaseFromJSON = V1ClusterBaseFromJSON;
function V1ClusterBaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !(0, runtime_1.exists)(json, 'alias') ? undefined : json['alias'],
        'apiServerURL': json['apiServerURL'],
        'dashboardURL': json['dashboardURL'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'icon': !(0, runtime_1.exists)(json, 'icon') ? undefined : json['icon'],
        'labels': !(0, runtime_1.exists)(json, 'labels') ? undefined : json['labels'],
        'name': json['name'],
        'providerInfo': (0, ModelProviderInfo_1.ModelProviderInfoFromJSON)(json['providerInfo']),
        'reason': json['reason'],
        'status': json['status'],
    };
}
exports.V1ClusterBaseFromJSONTyped = V1ClusterBaseFromJSONTyped;
function V1ClusterBaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'apiServerURL': value.apiServerURL,
        'dashboardURL': value.dashboardURL,
        'description': value.description,
        'icon': value.icon,
        'labels': value.labels,
        'name': value.name,
        'providerInfo': (0, ModelProviderInfo_1.ModelProviderInfoToJSON)(value.providerInfo),
        'reason': value.reason,
        'status': value.status,
    };
}
exports.V1ClusterBaseToJSON = V1ClusterBaseToJSON;