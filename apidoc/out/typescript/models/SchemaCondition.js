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
exports.SchemaConditionToJSON = exports.SchemaConditionFromJSONTyped = exports.SchemaConditionFromJSON = exports.instanceOfSchemaCondition = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SchemaCondition interface.
 */
function instanceOfSchemaCondition(value) {
    var isInstance = true;
    isInstance = isInstance && "jsonKey" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfSchemaCondition = instanceOfSchemaCondition;
function SchemaConditionFromJSON(json) {
    return SchemaConditionFromJSONTyped(json, false);
}
exports.SchemaConditionFromJSON = SchemaConditionFromJSON;
function SchemaConditionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'action': !(0, runtime_1.exists)(json, 'action') ? undefined : json['action'],
        'jsonKey': json['jsonKey'],
        'op': !(0, runtime_1.exists)(json, 'op') ? undefined : json['op'],
        'value': json['value'],
    };
}
exports.SchemaConditionFromJSONTyped = SchemaConditionFromJSONTyped;
function SchemaConditionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'action': value.action,
        'jsonKey': value.jsonKey,
        'op': value.op,
        'value': value.value,
    };
}
exports.SchemaConditionToJSON = SchemaConditionToJSON;
