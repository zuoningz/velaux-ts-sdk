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
exports.V1DetailUserResponseToJSON = exports.V1DetailUserResponseFromJSONTyped = exports.V1DetailUserResponseFromJSON = exports.instanceOfV1DetailUserResponse = void 0;
var runtime_1 = require("../runtime");
var V1NameAlias_1 = require("./V1NameAlias");
var V1ProjectBase_1 = require("./V1ProjectBase");
/**
 * Check if a given object implements the V1DetailUserResponse interface.
 */
function instanceOfV1DetailUserResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "disabled" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "lastLoginTime" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "projects" in value;
    isInstance = isInstance && "roles" in value;
    return isInstance;
}
exports.instanceOfV1DetailUserResponse = instanceOfV1DetailUserResponse;
function V1DetailUserResponseFromJSON(json) {
    return V1DetailUserResponseFromJSONTyped(json, false);
}
exports.V1DetailUserResponseFromJSON = V1DetailUserResponseFromJSON;
function V1DetailUserResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !(0, runtime_1.exists)(json, 'alias') ? undefined : json['alias'],
        'createTime': (new Date(json['createTime'])),
        'disabled': json['disabled'],
        'email': json['email'],
        'lastLoginTime': (new Date(json['lastLoginTime'])),
        'name': json['name'],
        'projects': (json['projects'].map(V1ProjectBase_1.V1ProjectBaseFromJSON)),
        'roles': (json['roles'].map(V1NameAlias_1.V1NameAliasFromJSON)),
    };
}
exports.V1DetailUserResponseFromJSONTyped = V1DetailUserResponseFromJSONTyped;
function V1DetailUserResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'createTime': (value.createTime.toISOString()),
        'disabled': value.disabled,
        'email': value.email,
        'lastLoginTime': (value.lastLoginTime.toISOString()),
        'name': value.name,
        'projects': (value.projects.map(V1ProjectBase_1.V1ProjectBaseToJSON)),
        'roles': (value.roles.map(V1NameAlias_1.V1NameAliasToJSON)),
    };
}
exports.V1DetailUserResponseToJSON = V1DetailUserResponseToJSON;