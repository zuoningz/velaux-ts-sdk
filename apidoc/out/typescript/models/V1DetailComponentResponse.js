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
exports.V1DetailComponentResponseToJSON = exports.V1DetailComponentResponseFromJSONTyped = exports.V1DetailComponentResponseFromJSON = exports.instanceOfV1DetailComponentResponse = void 0;
var runtime_1 = require("../runtime");
var CommonWorkloadTypeDescriptor_1 = require("./CommonWorkloadTypeDescriptor");
var ModelApplicationTrait_1 = require("./ModelApplicationTrait");
var V1alpha1InputItem_1 = require("./V1alpha1InputItem");
var V1alpha1OutputItem_1 = require("./V1alpha1OutputItem");
var V1beta1ComponentDefinitionSpec_1 = require("./V1beta1ComponentDefinitionSpec");
/**
 * Check if a given object implements the V1DetailComponentResponse interface.
 */
function instanceOfV1DetailComponentResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "appPrimaryKey" in value;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "creator" in value;
    isInstance = isInstance && "definition" in value;
    isInstance = isInstance && "main" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "updateTime" in value;
    return isInstance;
}
exports.instanceOfV1DetailComponentResponse = instanceOfV1DetailComponentResponse;
function V1DetailComponentResponseFromJSON(json) {
    return V1DetailComponentResponseFromJSONTyped(json, false);
}
exports.V1DetailComponentResponseFromJSON = V1DetailComponentResponseFromJSON;
function V1DetailComponentResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': json['alias'],
        'appPrimaryKey': json['appPrimaryKey'],
        'createTime': (new Date(json['createTime'])),
        'creator': json['creator'],
        'definition': (0, V1beta1ComponentDefinitionSpec_1.V1beta1ComponentDefinitionSpecFromJSON)(json['definition']),
        'dependsOn': !(0, runtime_1.exists)(json, 'dependsOn') ? undefined : json['dependsOn'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'externalRevision': !(0, runtime_1.exists)(json, 'externalRevision') ? undefined : json['externalRevision'],
        'icon': !(0, runtime_1.exists)(json, 'icon') ? undefined : json['icon'],
        'inputs': !(0, runtime_1.exists)(json, 'inputs') ? undefined : (json['inputs'].map(V1alpha1InputItem_1.V1alpha1InputItemFromJSON)),
        'labels': !(0, runtime_1.exists)(json, 'labels') ? undefined : json['labels'],
        'main': json['main'],
        'name': json['name'],
        'outputs': !(0, runtime_1.exists)(json, 'outputs') ? undefined : (json['outputs'].map(V1alpha1OutputItem_1.V1alpha1OutputItemFromJSON)),
        'properties': !(0, runtime_1.exists)(json, 'properties') ? undefined : json['properties'],
        'scopes': !(0, runtime_1.exists)(json, 'scopes') ? undefined : json['scopes'],
        'traits': !(0, runtime_1.exists)(json, 'traits') ? undefined : (json['traits'].map(ModelApplicationTrait_1.ModelApplicationTraitFromJSON)),
        'type': json['type'],
        'updateTime': (new Date(json['updateTime'])),
        'workloadType': !(0, runtime_1.exists)(json, 'workloadType') ? undefined : (0, CommonWorkloadTypeDescriptor_1.CommonWorkloadTypeDescriptorFromJSON)(json['workloadType']),
    };
}
exports.V1DetailComponentResponseFromJSONTyped = V1DetailComponentResponseFromJSONTyped;
function V1DetailComponentResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'appPrimaryKey': value.appPrimaryKey,
        'createTime': (value.createTime.toISOString()),
        'creator': value.creator,
        'definition': (0, V1beta1ComponentDefinitionSpec_1.V1beta1ComponentDefinitionSpecToJSON)(value.definition),
        'dependsOn': value.dependsOn,
        'description': value.description,
        'externalRevision': value.externalRevision,
        'icon': value.icon,
        'inputs': value.inputs === undefined ? undefined : (value.inputs.map(V1alpha1InputItem_1.V1alpha1InputItemToJSON)),
        'labels': value.labels,
        'main': value.main,
        'name': value.name,
        'outputs': value.outputs === undefined ? undefined : (value.outputs.map(V1alpha1OutputItem_1.V1alpha1OutputItemToJSON)),
        'properties': value.properties,
        'scopes': value.scopes,
        'traits': value.traits === undefined ? undefined : (value.traits.map(ModelApplicationTrait_1.ModelApplicationTraitToJSON)),
        'type': value.type,
        'updateTime': (value.updateTime.toISOString()),
        'workloadType': (0, CommonWorkloadTypeDescriptor_1.CommonWorkloadTypeDescriptorToJSON)(value.workloadType),
    };
}
exports.V1DetailComponentResponseToJSON = V1DetailComponentResponseToJSON;
