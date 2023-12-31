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
exports.V1ObjectReferenceToJSON = exports.V1ObjectReferenceFromJSONTyped = exports.V1ObjectReferenceFromJSON = exports.instanceOfV1ObjectReference = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the V1ObjectReference interface.
 */
function instanceOfV1ObjectReference(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfV1ObjectReference = instanceOfV1ObjectReference;
function V1ObjectReferenceFromJSON(json) {
    return V1ObjectReferenceFromJSONTyped(json, false);
}
exports.V1ObjectReferenceFromJSON = V1ObjectReferenceFromJSON;
function V1ObjectReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !(0, runtime_1.exists)(json, 'apiVersion') ? undefined : json['apiVersion'],
        'fieldPath': !(0, runtime_1.exists)(json, 'fieldPath') ? undefined : json['fieldPath'],
        'kind': !(0, runtime_1.exists)(json, 'kind') ? undefined : json['kind'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'namespace': !(0, runtime_1.exists)(json, 'namespace') ? undefined : json['namespace'],
        'resourceVersion': !(0, runtime_1.exists)(json, 'resourceVersion') ? undefined : json['resourceVersion'],
        'uid': !(0, runtime_1.exists)(json, 'uid') ? undefined : json['uid'],
    };
}
exports.V1ObjectReferenceFromJSONTyped = V1ObjectReferenceFromJSONTyped;
function V1ObjectReferenceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'fieldPath': value.fieldPath,
        'kind': value.kind,
        'name': value.name,
        'namespace': value.namespace,
        'resourceVersion': value.resourceVersion,
        'uid': value.uid,
    };
}
exports.V1ObjectReferenceToJSON = V1ObjectReferenceToJSON;
