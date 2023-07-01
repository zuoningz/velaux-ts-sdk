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
exports.V1ListApplicationEnvBindingToJSON = exports.V1ListApplicationEnvBindingFromJSONTyped = exports.V1ListApplicationEnvBindingFromJSON = exports.instanceOfV1ListApplicationEnvBinding = void 0;
var V1EnvBindingBase_1 = require("./V1EnvBindingBase");
/**
 * Check if a given object implements the V1ListApplicationEnvBinding interface.
 */
function instanceOfV1ListApplicationEnvBinding(value) {
    var isInstance = true;
    isInstance = isInstance && "envBindings" in value;
    return isInstance;
}
exports.instanceOfV1ListApplicationEnvBinding = instanceOfV1ListApplicationEnvBinding;
function V1ListApplicationEnvBindingFromJSON(json) {
    return V1ListApplicationEnvBindingFromJSONTyped(json, false);
}
exports.V1ListApplicationEnvBindingFromJSON = V1ListApplicationEnvBindingFromJSON;
function V1ListApplicationEnvBindingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'envBindings': (json['envBindings'].map(V1EnvBindingBase_1.V1EnvBindingBaseFromJSON)),
    };
}
exports.V1ListApplicationEnvBindingFromJSONTyped = V1ListApplicationEnvBindingFromJSONTyped;
function V1ListApplicationEnvBindingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'envBindings': (value.envBindings.map(V1EnvBindingBase_1.V1EnvBindingBaseToJSON)),
    };
}
exports.V1ListApplicationEnvBindingToJSON = V1ListApplicationEnvBindingToJSON;
