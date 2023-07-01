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
exports.V1PipelineMetaToJSON = exports.V1PipelineMetaFromJSONTyped = exports.V1PipelineMetaFromJSON = exports.instanceOfV1PipelineMeta = void 0;
var V1NameAlias_1 = require("./V1NameAlias");
/**
 * Check if a given object implements the V1PipelineMeta interface.
 */
function instanceOfV1PipelineMeta(value) {
    var isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "project" in value;
    return isInstance;
}
exports.instanceOfV1PipelineMeta = instanceOfV1PipelineMeta;
function V1PipelineMetaFromJSON(json) {
    return V1PipelineMetaFromJSONTyped(json, false);
}
exports.V1PipelineMetaFromJSON = V1PipelineMetaFromJSON;
function V1PipelineMetaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': json['alias'],
        'createTime': (new Date(json['createTime'])),
        'description': json['description'],
        'name': json['name'],
        'project': (0, V1NameAlias_1.V1NameAliasFromJSON)(json['project']),
    };
}
exports.V1PipelineMetaFromJSONTyped = V1PipelineMetaFromJSONTyped;
function V1PipelineMetaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'createTime': (value.createTime.toISOString()),
        'description': value.description,
        'name': value.name,
        'project': (0, V1NameAlias_1.V1NameAliasToJSON)(value.project),
    };
}
exports.V1PipelineMetaToJSON = V1PipelineMetaToJSON;