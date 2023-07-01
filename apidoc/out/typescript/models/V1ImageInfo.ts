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

import { exists, mapValues } from '../runtime';
import type { V1ConfigFile } from './V1ConfigFile';
import {
    V1ConfigFileFromJSON,
    V1ConfigFileFromJSONTyped,
    V1ConfigFileToJSON,
} from './V1ConfigFile';
import type { V1Manifest } from './V1Manifest';
import {
    V1ManifestFromJSON,
    V1ManifestFromJSONTyped,
    V1ManifestToJSON,
} from './V1Manifest';

/**
 * 
 * @export
 * @interface V1ImageInfo
 */
export interface V1ImageInfo {
    /**
     * 
     * @type {V1ConfigFile}
     * @memberof V1ImageInfo
     */
    info?: V1ConfigFile;
    /**
     * 
     * @type {V1Manifest}
     * @memberof V1ImageInfo
     */
    manifest: V1Manifest;
    /**
     * 
     * @type {string}
     * @memberof V1ImageInfo
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ImageInfo
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V1ImageInfo
     */
    registry: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ImageInfo
     */
    secretNames: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof V1ImageInfo
     */
    size: number;
}

/**
 * Check if a given object implements the V1ImageInfo interface.
 */
export function instanceOfV1ImageInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "manifest" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "registry" in value;
    isInstance = isInstance && "secretNames" in value;
    isInstance = isInstance && "size" in value;

    return isInstance;
}

export function V1ImageInfoFromJSON(json: any): V1ImageInfo {
    return V1ImageInfoFromJSONTyped(json, false);
}

export function V1ImageInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ImageInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'info': !exists(json, 'info') ? undefined : V1ConfigFileFromJSON(json['info']),
        'manifest': V1ManifestFromJSON(json['manifest']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'name': json['name'],
        'registry': json['registry'],
        'secretNames': json['secretNames'],
        'size': json['size'],
    };
}

export function V1ImageInfoToJSON(value?: V1ImageInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'info': V1ConfigFileToJSON(value.info),
        'manifest': V1ManifestToJSON(value.manifest),
        'message': value.message,
        'name': value.name,
        'registry': value.registry,
        'secretNames': value.secretNames,
        'size': value.size,
    };
}

