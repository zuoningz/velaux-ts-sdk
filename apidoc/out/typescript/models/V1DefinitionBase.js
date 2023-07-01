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
exports.V1DefinitionBaseToJSON = exports.V1DefinitionBaseFromJSONTyped = exports.V1DefinitionBaseFromJSON = exports.instanceOfV1DefinitionBase = void 0;
var runtime_1 = require("../runtime");
var V1beta1ComponentDefinitionSpec_1 = require("./V1beta1ComponentDefinitionSpec");
var V1beta1PolicyDefinitionSpec_1 = require("./V1beta1PolicyDefinitionSpec");
var V1beta1TraitDefinitionSpec_1 = require("./V1beta1TraitDefinitionSpec");
var V1beta1WorkflowStepDefinitionSpec_1 = require("./V1beta1WorkflowStepDefinitionSpec");
/**
 * Check if a given object implements the V1DefinitionBase interface.
 */
function instanceOfV1DefinitionBase(value) {
    var isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "labels" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ownerAddon" in value;
    isInstance = isInstance && "status" in value;
    return isInstance;
}
exports.instanceOfV1DefinitionBase = instanceOfV1DefinitionBase;
function V1DefinitionBaseFromJSON(json) {
    return V1DefinitionBaseFromJSONTyped(json, false);
}
exports.V1DefinitionBaseFromJSON = V1DefinitionBaseFromJSON;
function V1DefinitionBaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': json['alias'],
        'component': !(0, runtime_1.exists)(json, 'component') ? undefined : (0, V1beta1ComponentDefinitionSpec_1.V1beta1ComponentDefinitionSpecFromJSON)(json['component']),
        'description': json['description'],
        'icon': json['icon'],
        'labels': json['labels'],
        'name': json['name'],
        'ownerAddon': json['ownerAddon'],
        'policy': !(0, runtime_1.exists)(json, 'policy') ? undefined : (0, V1beta1PolicyDefinitionSpec_1.V1beta1PolicyDefinitionSpecFromJSON)(json['policy']),
        'status': json['status'],
        'trait': !(0, runtime_1.exists)(json, 'trait') ? undefined : (0, V1beta1TraitDefinitionSpec_1.V1beta1TraitDefinitionSpecFromJSON)(json['trait']),
        'workflowStep': !(0, runtime_1.exists)(json, 'workflowStep') ? undefined : (0, V1beta1WorkflowStepDefinitionSpec_1.V1beta1WorkflowStepDefinitionSpecFromJSON)(json['workflowStep']),
        'workloadType': !(0, runtime_1.exists)(json, 'workloadType') ? undefined : json['workloadType'],
    };
}
exports.V1DefinitionBaseFromJSONTyped = V1DefinitionBaseFromJSONTyped;
function V1DefinitionBaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'component': (0, V1beta1ComponentDefinitionSpec_1.V1beta1ComponentDefinitionSpecToJSON)(value.component),
        'description': value.description,
        'icon': value.icon,
        'labels': value.labels,
        'name': value.name,
        'ownerAddon': value.ownerAddon,
        'policy': (0, V1beta1PolicyDefinitionSpec_1.V1beta1PolicyDefinitionSpecToJSON)(value.policy),
        'status': value.status,
        'trait': (0, V1beta1TraitDefinitionSpec_1.V1beta1TraitDefinitionSpecToJSON)(value.trait),
        'workflowStep': (0, V1beta1WorkflowStepDefinitionSpec_1.V1beta1WorkflowStepDefinitionSpecToJSON)(value.workflowStep),
        'workloadType': value.workloadType,
    };
}
exports.V1DefinitionBaseToJSON = V1DefinitionBaseToJSON;