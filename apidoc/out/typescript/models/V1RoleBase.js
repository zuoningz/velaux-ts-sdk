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
exports.V1RoleBaseToJSON = exports.V1RoleBaseFromJSONTyped = exports.V1RoleBaseFromJSON = exports.instanceOfV1RoleBase = void 0;
var runtime_1 = require("../runtime");
var V1NameAlias_1 = require("./V1NameAlias");
/**
 * Check if a given object implements the V1RoleBase interface.
 */
function instanceOfV1RoleBase(value) {
    var isInstance = true;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "permissions" in value;
    isInstance = isInstance && "updateTime" in value;
    return isInstance;
}
exports.instanceOfV1RoleBase = instanceOfV1RoleBase;
function V1RoleBaseFromJSON(json) {
    return V1RoleBaseFromJSONTyped(json, false);
}
exports.V1RoleBaseFromJSON = V1RoleBaseFromJSON;
function V1RoleBaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !(0, runtime_1.exists)(json, 'alias') ? undefined : json['alias'],
        'createTime': (new Date(json['createTime'])),
        'name': json['name'],
        'permissions': (json['permissions'].map(V1NameAlias_1.V1NameAliasFromJSON)),
        'updateTime': (new Date(json['updateTime'])),
    };
}
exports.V1RoleBaseFromJSONTyped = V1RoleBaseFromJSONTyped;
function V1RoleBaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'createTime': (value.createTime.toISOString()),
        'name': value.name,
        'permissions': (value.permissions.map(V1NameAlias_1.V1NameAliasToJSON)),
        'updateTime': (value.updateTime.toISOString()),
    };
}
exports.V1RoleBaseToJSON = V1RoleBaseToJSON;
