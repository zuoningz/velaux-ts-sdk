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
exports.V1beta1TraitDefinitionSpecToJSON = exports.V1beta1TraitDefinitionSpecFromJSONTyped = exports.V1beta1TraitDefinitionSpecFromJSON = exports.instanceOfV1beta1TraitDefinitionSpec = void 0;
var runtime_1 = require("../runtime");
var CommonDefinitionReference_1 = require("./CommonDefinitionReference");
var CommonSchematic_1 = require("./CommonSchematic");
var CommonStatus_1 = require("./CommonStatus");
/**
 * Check if a given object implements the V1beta1TraitDefinitionSpec interface.
 */
function instanceOfV1beta1TraitDefinitionSpec(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfV1beta1TraitDefinitionSpec = instanceOfV1beta1TraitDefinitionSpec;
function V1beta1TraitDefinitionSpecFromJSON(json) {
    return V1beta1TraitDefinitionSpecFromJSONTyped(json, false);
}
exports.V1beta1TraitDefinitionSpecFromJSON = V1beta1TraitDefinitionSpecFromJSON;
function V1beta1TraitDefinitionSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appliesToWorkloads': !(0, runtime_1.exists)(json, 'appliesToWorkloads') ? undefined : json['appliesToWorkloads'],
        'conflictsWith': !(0, runtime_1.exists)(json, 'conflictsWith') ? undefined : json['conflictsWith'],
        'controlPlaneOnly': !(0, runtime_1.exists)(json, 'controlPlaneOnly') ? undefined : json['controlPlaneOnly'],
        'definitionRef': !(0, runtime_1.exists)(json, 'definitionRef') ? undefined : (0, CommonDefinitionReference_1.CommonDefinitionReferenceFromJSON)(json['definitionRef']),
        'extension': !(0, runtime_1.exists)(json, 'extension') ? undefined : json['extension'],
        'manageWorkload': !(0, runtime_1.exists)(json, 'manageWorkload') ? undefined : json['manageWorkload'],
        'podDisruptive': !(0, runtime_1.exists)(json, 'podDisruptive') ? undefined : json['podDisruptive'],
        'revisionEnabled': !(0, runtime_1.exists)(json, 'revisionEnabled') ? undefined : json['revisionEnabled'],
        'schematic': !(0, runtime_1.exists)(json, 'schematic') ? undefined : (0, CommonSchematic_1.CommonSchematicFromJSON)(json['schematic']),
        'stage': !(0, runtime_1.exists)(json, 'stage') ? undefined : json['stage'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : (0, CommonStatus_1.CommonStatusFromJSON)(json['status']),
        'workloadRefPath': !(0, runtime_1.exists)(json, 'workloadRefPath') ? undefined : json['workloadRefPath'],
    };
}
exports.V1beta1TraitDefinitionSpecFromJSONTyped = V1beta1TraitDefinitionSpecFromJSONTyped;
function V1beta1TraitDefinitionSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appliesToWorkloads': value.appliesToWorkloads,
        'conflictsWith': value.conflictsWith,
        'controlPlaneOnly': value.controlPlaneOnly,
        'definitionRef': (0, CommonDefinitionReference_1.CommonDefinitionReferenceToJSON)(value.definitionRef),
        'extension': value.extension,
        'manageWorkload': value.manageWorkload,
        'podDisruptive': value.podDisruptive,
        'revisionEnabled': value.revisionEnabled,
        'schematic': (0, CommonSchematic_1.CommonSchematicToJSON)(value.schematic),
        'stage': value.stage,
        'status': (0, CommonStatus_1.CommonStatusToJSON)(value.status),
        'workloadRefPath': value.workloadRefPath,
    };
}
exports.V1beta1TraitDefinitionSpecToJSON = V1beta1TraitDefinitionSpecToJSON;
