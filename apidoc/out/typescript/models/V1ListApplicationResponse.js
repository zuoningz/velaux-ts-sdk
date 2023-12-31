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
exports.V1ListApplicationResponseToJSON = exports.V1ListApplicationResponseFromJSONTyped = exports.V1ListApplicationResponseFromJSON = exports.instanceOfV1ListApplicationResponse = void 0;
var V1ApplicationBase_1 = require("./V1ApplicationBase");
/**
 * Check if a given object implements the V1ListApplicationResponse interface.
 */
function instanceOfV1ListApplicationResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "applications" in value;
    return isInstance;
}
exports.instanceOfV1ListApplicationResponse = instanceOfV1ListApplicationResponse;
function V1ListApplicationResponseFromJSON(json) {
    return V1ListApplicationResponseFromJSONTyped(json, false);
}
exports.V1ListApplicationResponseFromJSON = V1ListApplicationResponseFromJSON;
function V1ListApplicationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'applications': (json['applications'].map(V1ApplicationBase_1.V1ApplicationBaseFromJSON)),
    };
}
exports.V1ListApplicationResponseFromJSONTyped = V1ListApplicationResponseFromJSONTyped;
function V1ListApplicationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'applications': (value.applications.map(V1ApplicationBase_1.V1ApplicationBaseToJSON)),
    };
}
exports.V1ListApplicationResponseToJSON = V1ListApplicationResponseToJSON;
