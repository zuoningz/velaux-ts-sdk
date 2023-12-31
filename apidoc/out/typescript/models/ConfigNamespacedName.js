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
exports.ConfigNamespacedNameToJSON = exports.ConfigNamespacedNameFromJSONTyped = exports.ConfigNamespacedNameFromJSON = exports.instanceOfConfigNamespacedName = void 0;
/**
 * Check if a given object implements the ConfigNamespacedName interface.
 */
function instanceOfConfigNamespacedName(value) {
    var isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "namespace" in value;
    return isInstance;
}
exports.instanceOfConfigNamespacedName = instanceOfConfigNamespacedName;
function ConfigNamespacedNameFromJSON(json) {
    return ConfigNamespacedNameFromJSONTyped(json, false);
}
exports.ConfigNamespacedNameFromJSON = ConfigNamespacedNameFromJSON;
function ConfigNamespacedNameFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'namespace': json['namespace'],
    };
}
exports.ConfigNamespacedNameFromJSONTyped = ConfigNamespacedNameFromJSONTyped;
function ConfigNamespacedNameToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'namespace': value.namespace,
    };
}
exports.ConfigNamespacedNameToJSON = ConfigNamespacedNameToJSON;
