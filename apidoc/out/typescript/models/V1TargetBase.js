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
exports.V1TargetBaseToJSON = exports.V1TargetBaseFromJSONTyped = exports.V1TargetBaseFromJSON = exports.instanceOfV1TargetBase = void 0;
var runtime_1 = require("../runtime");
var V1ClusterTarget_1 = require("./V1ClusterTarget");
var V1NameAlias_1 = require("./V1NameAlias");
/**
 * Check if a given object implements the V1TargetBase interface.
 */
function instanceOfV1TargetBase(value) {
    var isInstance = true;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "project" in value;
    isInstance = isInstance && "updateTime" in value;
    return isInstance;
}
exports.instanceOfV1TargetBase = instanceOfV1TargetBase;
function V1TargetBaseFromJSON(json) {
    return V1TargetBaseFromJSONTyped(json, false);
}
exports.V1TargetBaseFromJSON = V1TargetBaseFromJSON;
function V1TargetBaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !(0, runtime_1.exists)(json, 'alias') ? undefined : json['alias'],
        'appNum': !(0, runtime_1.exists)(json, 'appNum') ? undefined : json['appNum'],
        'cluster': !(0, runtime_1.exists)(json, 'cluster') ? undefined : (0, V1ClusterTarget_1.V1ClusterTargetFromJSON)(json['cluster']),
        'clusterAlias': !(0, runtime_1.exists)(json, 'clusterAlias') ? undefined : json['clusterAlias'],
        'createTime': (new Date(json['createTime'])),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'name': json['name'],
        'project': (0, V1NameAlias_1.V1NameAliasFromJSON)(json['project']),
        'updateTime': (new Date(json['updateTime'])),
        'variable': !(0, runtime_1.exists)(json, 'variable') ? undefined : json['variable'],
    };
}
exports.V1TargetBaseFromJSONTyped = V1TargetBaseFromJSONTyped;
function V1TargetBaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'appNum': value.appNum,
        'cluster': (0, V1ClusterTarget_1.V1ClusterTargetToJSON)(value.cluster),
        'clusterAlias': value.clusterAlias,
        'createTime': (value.createTime.toISOString()),
        'description': value.description,
        'name': value.name,
        'project': (0, V1NameAlias_1.V1NameAliasToJSON)(value.project),
        'updateTime': (value.updateTime.toISOString()),
        'variable': value.variable,
    };
}
exports.V1TargetBaseToJSON = V1TargetBaseToJSON;