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
import type { V1Platform } from './V1Platform';
import {
    V1PlatformFromJSON,
    V1PlatformFromJSONTyped,
    V1PlatformToJSON,
} from './V1Platform';

/**
 * 
 * @export
 * @interface V1Descriptor
 */
export interface V1Descriptor {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1Descriptor
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof V1Descriptor
     */
    data?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Descriptor
     */
    digest: string;
    /**
     * 
     * @type {string}
     * @memberof V1Descriptor
     */
    mediaType: string;
    /**
     * 
     * @type {V1Platform}
     * @memberof V1Descriptor
     */
    platform?: V1Platform;
    /**
     * 
     * @type {number}
     * @memberof V1Descriptor
     */
    size: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Descriptor
     */
    urls?: Array<string>;
}

/**
 * Check if a given object implements the V1Descriptor interface.
 */
export function instanceOfV1Descriptor(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "digest" in value;
    isInstance = isInstance && "mediaType" in value;
    isInstance = isInstance && "size" in value;

    return isInstance;
}

export function V1DescriptorFromJSON(json: any): V1Descriptor {
    return V1DescriptorFromJSONTyped(json, false);
}

export function V1DescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Descriptor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'annotations': !exists(json, 'annotations') ? undefined : json['annotations'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'digest': json['digest'],
        'mediaType': json['mediaType'],
        'platform': !exists(json, 'platform') ? undefined : V1PlatformFromJSON(json['platform']),
        'size': json['size'],
        'urls': !exists(json, 'urls') ? undefined : json['urls'],
    };
}

export function V1DescriptorToJSON(value?: V1Descriptor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'annotations': value.annotations,
        'data': value.data,
        'digest': value.digest,
        'mediaType': value.mediaType,
        'platform': V1PlatformToJSON(value.platform),
        'size': value.size,
        'urls': value.urls,
    };
}

