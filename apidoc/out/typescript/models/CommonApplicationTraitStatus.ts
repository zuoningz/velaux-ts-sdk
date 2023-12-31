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
/**
 * 
 * @export
 * @interface CommonApplicationTraitStatus
 */
export interface CommonApplicationTraitStatus {
    /**
     * 
     * @type {boolean}
     * @memberof CommonApplicationTraitStatus
     */
    healthy: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommonApplicationTraitStatus
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonApplicationTraitStatus
     */
    type: string;
}

/**
 * Check if a given object implements the CommonApplicationTraitStatus interface.
 */
export function instanceOfCommonApplicationTraitStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "healthy" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CommonApplicationTraitStatusFromJSON(json: any): CommonApplicationTraitStatus {
    return CommonApplicationTraitStatusFromJSONTyped(json, false);
}

export function CommonApplicationTraitStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonApplicationTraitStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'healthy': json['healthy'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'type': json['type'],
    };
}

export function CommonApplicationTraitStatusToJSON(value?: CommonApplicationTraitStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'healthy': value.healthy,
        'message': value.message,
        'type': value.type,
    };
}

