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
exports.V1NameAliasToJSON = exports.V1NameAliasFromJSONTyped = exports.V1NameAliasFromJSON = exports.instanceOfV1NameAlias = void 0;
/**
 * Check if a given object implements the V1NameAlias interface.
 */
function instanceOfV1NameAlias(value) {
    var isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfV1NameAlias = instanceOfV1NameAlias;
function V1NameAliasFromJSON(json) {
    return V1NameAliasFromJSONTyped(json, false);
}
exports.V1NameAliasFromJSON = V1NameAliasFromJSON;
function V1NameAliasFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': json['alias'],
        'name': json['name'],
    };
}
exports.V1NameAliasFromJSONTyped = V1NameAliasFromJSONTyped;
function V1NameAliasToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'name': value.name,
    };
}
exports.V1NameAliasToJSON = V1NameAliasToJSON;
