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
exports.V1ListConfigTemplateResponseToJSON = exports.V1ListConfigTemplateResponseFromJSONTyped = exports.V1ListConfigTemplateResponseFromJSON = exports.instanceOfV1ListConfigTemplateResponse = void 0;
var V1ConfigTemplate_1 = require("./V1ConfigTemplate");
/**
 * Check if a given object implements the V1ListConfigTemplateResponse interface.
 */
function instanceOfV1ListConfigTemplateResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "templates" in value;
    return isInstance;
}
exports.instanceOfV1ListConfigTemplateResponse = instanceOfV1ListConfigTemplateResponse;
function V1ListConfigTemplateResponseFromJSON(json) {
    return V1ListConfigTemplateResponseFromJSONTyped(json, false);
}
exports.V1ListConfigTemplateResponseFromJSON = V1ListConfigTemplateResponseFromJSON;
function V1ListConfigTemplateResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'templates': (json['templates'].map(V1ConfigTemplate_1.V1ConfigTemplateFromJSON)),
    };
}
exports.V1ListConfigTemplateResponseFromJSONTyped = V1ListConfigTemplateResponseFromJSONTyped;
function V1ListConfigTemplateResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'templates': (value.templates.map(V1ConfigTemplate_1.V1ConfigTemplateToJSON)),
    };
}
exports.V1ListConfigTemplateResponseToJSON = V1ListConfigTemplateResponseToJSON;
