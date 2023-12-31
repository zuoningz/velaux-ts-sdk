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
exports.V1ListConfigDistributionResponseToJSON = exports.V1ListConfigDistributionResponseFromJSONTyped = exports.V1ListConfigDistributionResponseFromJSON = exports.instanceOfV1ListConfigDistributionResponse = void 0;
var ConfigDistribution_1 = require("./ConfigDistribution");
/**
 * Check if a given object implements the V1ListConfigDistributionResponse interface.
 */
function instanceOfV1ListConfigDistributionResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "distributions" in value;
    return isInstance;
}
exports.instanceOfV1ListConfigDistributionResponse = instanceOfV1ListConfigDistributionResponse;
function V1ListConfigDistributionResponseFromJSON(json) {
    return V1ListConfigDistributionResponseFromJSONTyped(json, false);
}
exports.V1ListConfigDistributionResponseFromJSON = V1ListConfigDistributionResponseFromJSON;
function V1ListConfigDistributionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'distributions': (json['distributions'].map(ConfigDistribution_1.ConfigDistributionFromJSON)),
    };
}
exports.V1ListConfigDistributionResponseFromJSONTyped = V1ListConfigDistributionResponseFromJSONTyped;
function V1ListConfigDistributionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'distributions': (value.distributions.map(ConfigDistribution_1.ConfigDistributionToJSON)),
    };
}
exports.V1ListConfigDistributionResponseToJSON = V1ListConfigDistributionResponseToJSON;
