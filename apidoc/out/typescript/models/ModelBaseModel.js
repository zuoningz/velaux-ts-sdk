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
exports.ModelBaseModelToJSON = exports.ModelBaseModelFromJSONTyped = exports.ModelBaseModelFromJSON = exports.instanceOfModelBaseModel = void 0;
/**
 * Check if a given object implements the ModelBaseModel interface.
 */
function instanceOfModelBaseModel(value) {
    var isInstance = true;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "updateTime" in value;
    return isInstance;
}
exports.instanceOfModelBaseModel = instanceOfModelBaseModel;
function ModelBaseModelFromJSON(json) {
    return ModelBaseModelFromJSONTyped(json, false);
}
exports.ModelBaseModelFromJSON = ModelBaseModelFromJSON;
function ModelBaseModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createTime': (new Date(json['createTime'])),
        'updateTime': (new Date(json['updateTime'])),
    };
}
exports.ModelBaseModelFromJSONTyped = ModelBaseModelFromJSONTyped;
function ModelBaseModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createTime': (value.createTime.toISOString()),
        'updateTime': (value.updateTime.toISOString()),
    };
}
exports.ModelBaseModelToJSON = ModelBaseModelToJSON;