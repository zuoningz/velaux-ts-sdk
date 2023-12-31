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
exports.V1DetailRevisionResponseToJSON = exports.V1DetailRevisionResponseFromJSONTyped = exports.V1DetailRevisionResponseFromJSON = exports.instanceOfV1DetailRevisionResponse = void 0;
var runtime_1 = require("../runtime");
var ModelCodeInfo_1 = require("./ModelCodeInfo");
var ModelImageInfo_1 = require("./ModelImageInfo");
var V1NameAlias_1 = require("./V1NameAlias");
/**
 * Check if a given object implements the V1DetailRevisionResponse interface.
 */
function instanceOfV1DetailRevisionResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "appPrimaryKey" in value;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "deployUser" in value;
    isInstance = isInstance && "envName" in value;
    isInstance = isInstance && "note" in value;
    isInstance = isInstance && "reason" in value;
    isInstance = isInstance && "revisionCRName" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "triggerType" in value;
    isInstance = isInstance && "updateTime" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "workflowName" in value;
    return isInstance;
}
exports.instanceOfV1DetailRevisionResponse = instanceOfV1DetailRevisionResponse;
function V1DetailRevisionResponseFromJSON(json) {
    return V1DetailRevisionResponseFromJSONTyped(json, false);
}
exports.V1DetailRevisionResponseFromJSON = V1DetailRevisionResponseFromJSON;
function V1DetailRevisionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appPrimaryKey': json['appPrimaryKey'],
        'applyAppConfig': !(0, runtime_1.exists)(json, 'applyAppConfig') ? undefined : json['applyAppConfig'],
        'codeInfo': !(0, runtime_1.exists)(json, 'codeInfo') ? undefined : (0, ModelCodeInfo_1.ModelCodeInfoFromJSON)(json['codeInfo']),
        'createTime': (new Date(json['createTime'])),
        'deployUser': (0, V1NameAlias_1.V1NameAliasFromJSON)(json['deployUser']),
        'envName': json['envName'],
        'imageInfo': !(0, runtime_1.exists)(json, 'imageInfo') ? undefined : (0, ModelImageInfo_1.ModelImageInfoFromJSON)(json['imageInfo']),
        'note': json['note'],
        'reason': json['reason'],
        'revisionCRName': json['revisionCRName'],
        'rollbackVersion': !(0, runtime_1.exists)(json, 'rollbackVersion') ? undefined : json['rollbackVersion'],
        'status': json['status'],
        'triggerType': json['triggerType'],
        'updateTime': (new Date(json['updateTime'])),
        'version': json['version'],
        'workflowName': json['workflowName'],
    };
}
exports.V1DetailRevisionResponseFromJSONTyped = V1DetailRevisionResponseFromJSONTyped;
function V1DetailRevisionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appPrimaryKey': value.appPrimaryKey,
        'applyAppConfig': value.applyAppConfig,
        'codeInfo': (0, ModelCodeInfo_1.ModelCodeInfoToJSON)(value.codeInfo),
        'createTime': (value.createTime.toISOString()),
        'deployUser': (0, V1NameAlias_1.V1NameAliasToJSON)(value.deployUser),
        'envName': value.envName,
        'imageInfo': (0, ModelImageInfo_1.ModelImageInfoToJSON)(value.imageInfo),
        'note': value.note,
        'reason': value.reason,
        'revisionCRName': value.revisionCRName,
        'rollbackVersion': value.rollbackVersion,
        'status': value.status,
        'triggerType': value.triggerType,
        'updateTime': (value.updateTime.toISOString()),
        'version': value.version,
        'workflowName': value.workflowName,
    };
}
exports.V1DetailRevisionResponseToJSON = V1DetailRevisionResponseToJSON;
