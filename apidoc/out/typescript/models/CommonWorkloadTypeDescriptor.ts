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
import type { CommonWorkloadGVK } from './CommonWorkloadGVK';
import {
    CommonWorkloadGVKFromJSON,
    CommonWorkloadGVKFromJSONTyped,
    CommonWorkloadGVKToJSON,
} from './CommonWorkloadGVK';

/**
 * 
 * @export
 * @interface CommonWorkloadTypeDescriptor
 */
export interface CommonWorkloadTypeDescriptor {
    /**
     * 
     * @type {CommonWorkloadGVK}
     * @memberof CommonWorkloadTypeDescriptor
     */
    definition?: CommonWorkloadGVK;
    /**
     * 
     * @type {string}
     * @memberof CommonWorkloadTypeDescriptor
     */
    type?: string;
}

/**
 * Check if a given object implements the CommonWorkloadTypeDescriptor interface.
 */
export function instanceOfCommonWorkloadTypeDescriptor(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommonWorkloadTypeDescriptorFromJSON(json: any): CommonWorkloadTypeDescriptor {
    return CommonWorkloadTypeDescriptorFromJSONTyped(json, false);
}

export function CommonWorkloadTypeDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonWorkloadTypeDescriptor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'definition': !exists(json, 'definition') ? undefined : CommonWorkloadGVKFromJSON(json['definition']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function CommonWorkloadTypeDescriptorToJSON(value?: CommonWorkloadTypeDescriptor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'definition': CommonWorkloadGVKToJSON(value.definition),
        'type': value.type,
    };
}

