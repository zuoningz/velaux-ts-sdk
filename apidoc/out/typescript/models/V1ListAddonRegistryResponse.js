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
exports.V1ListAddonRegistryResponseToJSON = exports.V1ListAddonRegistryResponseFromJSONTyped = exports.V1ListAddonRegistryResponseFromJSON = exports.instanceOfV1ListAddonRegistryResponse = void 0;
var V1AddonRegistry_1 = require("./V1AddonRegistry");
/**
 * Check if a given object implements the V1ListAddonRegistryResponse interface.
 */
function instanceOfV1ListAddonRegistryResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "registries" in value;
    return isInstance;
}
exports.instanceOfV1ListAddonRegistryResponse = instanceOfV1ListAddonRegistryResponse;
function V1ListAddonRegistryResponseFromJSON(json) {
    return V1ListAddonRegistryResponseFromJSONTyped(json, false);
}
exports.V1ListAddonRegistryResponseFromJSON = V1ListAddonRegistryResponseFromJSON;
function V1ListAddonRegistryResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'registries': (json['registries'].map(V1AddonRegistry_1.V1AddonRegistryFromJSON)),
    };
}
exports.V1ListAddonRegistryResponseFromJSONTyped = V1ListAddonRegistryResponseFromJSONTyped;
function V1ListAddonRegistryResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'registries': (value.registries.map(V1AddonRegistry_1.V1AddonRegistryToJSON)),
    };
}
exports.V1ListAddonRegistryResponseToJSON = V1ListAddonRegistryResponseToJSON;
