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
exports.ChartMetadataToJSON = exports.ChartMetadataFromJSONTyped = exports.ChartMetadataFromJSON = exports.instanceOfChartMetadata = void 0;
var runtime_1 = require("../runtime");
var ChartDependency_1 = require("./ChartDependency");
var ChartMaintainer_1 = require("./ChartMaintainer");
/**
 * Check if a given object implements the ChartMetadata interface.
 */
function instanceOfChartMetadata(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfChartMetadata = instanceOfChartMetadata;
function ChartMetadataFromJSON(json) {
    return ChartMetadataFromJSONTyped(json, false);
}
exports.ChartMetadataFromJSON = ChartMetadataFromJSON;
function ChartMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'annotations': !(0, runtime_1.exists)(json, 'annotations') ? undefined : json['annotations'],
        'apiVersion': !(0, runtime_1.exists)(json, 'apiVersion') ? undefined : json['apiVersion'],
        'appVersion': !(0, runtime_1.exists)(json, 'appVersion') ? undefined : json['appVersion'],
        'condition': !(0, runtime_1.exists)(json, 'condition') ? undefined : json['condition'],
        'dependencies': !(0, runtime_1.exists)(json, 'dependencies') ? undefined : (json['dependencies'].map(ChartDependency_1.ChartDependencyFromJSON)),
        'deprecated': !(0, runtime_1.exists)(json, 'deprecated') ? undefined : json['deprecated'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'home': !(0, runtime_1.exists)(json, 'home') ? undefined : json['home'],
        'icon': !(0, runtime_1.exists)(json, 'icon') ? undefined : json['icon'],
        'keywords': !(0, runtime_1.exists)(json, 'keywords') ? undefined : json['keywords'],
        'kubeVersion': !(0, runtime_1.exists)(json, 'kubeVersion') ? undefined : json['kubeVersion'],
        'maintainers': !(0, runtime_1.exists)(json, 'maintainers') ? undefined : (json['maintainers'].map(ChartMaintainer_1.ChartMaintainerFromJSON)),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'sources': !(0, runtime_1.exists)(json, 'sources') ? undefined : json['sources'],
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.ChartMetadataFromJSONTyped = ChartMetadataFromJSONTyped;
function ChartMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'annotations': value.annotations,
        'apiVersion': value.apiVersion,
        'appVersion': value.appVersion,
        'condition': value.condition,
        'dependencies': value.dependencies === undefined ? undefined : (value.dependencies.map(ChartDependency_1.ChartDependencyToJSON)),
        'deprecated': value.deprecated,
        'description': value.description,
        'home': value.home,
        'icon': value.icon,
        'keywords': value.keywords,
        'kubeVersion': value.kubeVersion,
        'maintainers': value.maintainers === undefined ? undefined : (value.maintainers.map(ChartMaintainer_1.ChartMaintainerToJSON)),
        'name': value.name,
        'sources': value.sources,
        'tags': value.tags,
        'type': value.type,
        'version': value.version,
    };
}
exports.ChartMetadataToJSON = ChartMetadataToJSON;
