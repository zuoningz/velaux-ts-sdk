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
exports.V1EnvBindingBaseToJSON = exports.V1EnvBindingBaseFromJSONTyped = exports.V1EnvBindingBaseFromJSON = exports.instanceOfV1EnvBindingBase = void 0;
var runtime_1 = require("../runtime");
var V1ComponentSelector_1 = require("./V1ComponentSelector");
var V1EnvBindingTarget_1 = require("./V1EnvBindingTarget");
var V1NameAlias_1 = require("./V1NameAlias");
/**
 * Check if a given object implements the V1EnvBindingBase interface.
 */
function instanceOfV1EnvBindingBase(value) {
    var isInstance = true;
    isInstance = isInstance && "appDeployName" in value;
    isInstance = isInstance && "appDeployNamespace" in value;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "targetNames" in value;
    isInstance = isInstance && "updateTime" in value;
    isInstance = isInstance && "workflow" in value;
    return isInstance;
}
exports.instanceOfV1EnvBindingBase = instanceOfV1EnvBindingBase;
function V1EnvBindingBaseFromJSON(json) {
    return V1EnvBindingBaseFromJSONTyped(json, false);
}
exports.V1EnvBindingBaseFromJSON = V1EnvBindingBaseFromJSON;
function V1EnvBindingBaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !(0, runtime_1.exists)(json, 'alias') ? undefined : json['alias'],
        'appDeployName': json['appDeployName'],
        'appDeployNamespace': json['appDeployNamespace'],
        'componentSelector': !(0, runtime_1.exists)(json, 'componentSelector') ? undefined : (0, V1ComponentSelector_1.V1ComponentSelectorFromJSON)(json['componentSelector']),
        'createTime': (new Date(json['createTime'])),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'name': json['name'],
        'targetNames': json['targetNames'],
        'targets': !(0, runtime_1.exists)(json, 'targets') ? undefined : (json['targets'].map(V1EnvBindingTarget_1.V1EnvBindingTargetFromJSON)),
        'updateTime': (new Date(json['updateTime'])),
        'workflow': (0, V1NameAlias_1.V1NameAliasFromJSON)(json['workflow']),
    };
}
exports.V1EnvBindingBaseFromJSONTyped = V1EnvBindingBaseFromJSONTyped;
function V1EnvBindingBaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'appDeployName': value.appDeployName,
        'appDeployNamespace': value.appDeployNamespace,
        'componentSelector': (0, V1ComponentSelector_1.V1ComponentSelectorToJSON)(value.componentSelector),
        'createTime': (value.createTime.toISOString()),
        'description': value.description,
        'name': value.name,
        'targetNames': value.targetNames,
        'targets': value.targets === undefined ? undefined : (value.targets.map(V1EnvBindingTarget_1.V1EnvBindingTargetToJSON)),
        'updateTime': (value.updateTime.toISOString()),
        'workflow': (0, V1NameAlias_1.V1NameAliasToJSON)(value.workflow),
    };
}
exports.V1EnvBindingBaseToJSON = V1EnvBindingBaseToJSON;
