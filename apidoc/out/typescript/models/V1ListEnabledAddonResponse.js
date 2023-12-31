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
exports.V1ListEnabledAddonResponseToJSON = exports.V1ListEnabledAddonResponseFromJSONTyped = exports.V1ListEnabledAddonResponseFromJSON = exports.instanceOfV1ListEnabledAddonResponse = void 0;
var V1AddonBaseStatus_1 = require("./V1AddonBaseStatus");
/**
 * Check if a given object implements the V1ListEnabledAddonResponse interface.
 */
function instanceOfV1ListEnabledAddonResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "enabledAddons" in value;
    return isInstance;
}
exports.instanceOfV1ListEnabledAddonResponse = instanceOfV1ListEnabledAddonResponse;
function V1ListEnabledAddonResponseFromJSON(json) {
    return V1ListEnabledAddonResponseFromJSONTyped(json, false);
}
exports.V1ListEnabledAddonResponseFromJSON = V1ListEnabledAddonResponseFromJSON;
function V1ListEnabledAddonResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabledAddons': (json['enabledAddons'].map(V1AddonBaseStatus_1.V1AddonBaseStatusFromJSON)),
    };
}
exports.V1ListEnabledAddonResponseFromJSONTyped = V1ListEnabledAddonResponseFromJSONTyped;
function V1ListEnabledAddonResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enabledAddons': (value.enabledAddons.map(V1AddonBaseStatus_1.V1AddonBaseStatusToJSON)),
    };
}
exports.V1ListEnabledAddonResponseToJSON = V1ListEnabledAddonResponseToJSON;
