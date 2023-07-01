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
exports.V1ListConfigResponseToJSON = exports.V1ListConfigResponseFromJSONTyped = exports.V1ListConfigResponseFromJSON = exports.instanceOfV1ListConfigResponse = void 0;
var V1Config_1 = require("./V1Config");
/**
 * Check if a given object implements the V1ListConfigResponse interface.
 */
function instanceOfV1ListConfigResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "configs" in value;
    return isInstance;
}
exports.instanceOfV1ListConfigResponse = instanceOfV1ListConfigResponse;
function V1ListConfigResponseFromJSON(json) {
    return V1ListConfigResponseFromJSONTyped(json, false);
}
exports.V1ListConfigResponseFromJSON = V1ListConfigResponseFromJSON;
function V1ListConfigResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'configs': (json['configs'].map(V1Config_1.V1ConfigFromJSON)),
    };
}
exports.V1ListConfigResponseFromJSONTyped = V1ListConfigResponseFromJSONTyped;
function V1ListConfigResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'configs': (value.configs.map(V1Config_1.V1ConfigToJSON)),
    };
}
exports.V1ListConfigResponseToJSON = V1ListConfigResponseToJSON;