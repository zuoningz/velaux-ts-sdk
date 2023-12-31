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
import type { ModelProjectRef } from './ModelProjectRef';
import {
    ModelProjectRefFromJSON,
    ModelProjectRefFromJSONTyped,
    ModelProjectRefToJSON,
} from './ModelProjectRef';

/**
 * 
 * @export
 * @interface V1SystemInfoRequest
 */
export interface V1SystemInfoRequest {
    /**
     * 
     * @type {Array<ModelProjectRef>}
     * @memberof V1SystemInfoRequest
     */
    dexUserDefaultProjects?: Array<ModelProjectRef>;
    /**
     * 
     * @type {boolean}
     * @memberof V1SystemInfoRequest
     */
    enableCollection: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1SystemInfoRequest
     */
    loginType: string;
    /**
     * 
     * @type {string}
     * @memberof V1SystemInfoRequest
     */
    velaAddress?: string;
}

/**
 * Check if a given object implements the V1SystemInfoRequest interface.
 */
export function instanceOfV1SystemInfoRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "enableCollection" in value;
    isInstance = isInstance && "loginType" in value;

    return isInstance;
}

export function V1SystemInfoRequestFromJSON(json: any): V1SystemInfoRequest {
    return V1SystemInfoRequestFromJSONTyped(json, false);
}

export function V1SystemInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SystemInfoRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dexUserDefaultProjects': !exists(json, 'dexUserDefaultProjects') ? undefined : ((json['dexUserDefaultProjects'] as Array<any>).map(ModelProjectRefFromJSON)),
        'enableCollection': json['enableCollection'],
        'loginType': json['loginType'],
        'velaAddress': !exists(json, 'velaAddress') ? undefined : json['velaAddress'],
    };
}

export function V1SystemInfoRequestToJSON(value?: V1SystemInfoRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dexUserDefaultProjects': value.dexUserDefaultProjects === undefined ? undefined : ((value.dexUserDefaultProjects as Array<any>).map(ModelProjectRefToJSON)),
        'enableCollection': value.enableCollection,
        'loginType': value.loginType,
        'velaAddress': value.velaAddress,
    };
}

