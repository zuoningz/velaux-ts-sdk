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
 * @interface V1AccessKeyRequest
 */
export interface V1AccessKeyRequest {
    /**
     * 
     * @type {string}
     * @memberof V1AccessKeyRequest
     */
    accessKeyID: string;
    /**
     * 
     * @type {string}
     * @memberof V1AccessKeyRequest
     */
    accessKeySecret: string;
}

/**
 * Check if a given object implements the V1AccessKeyRequest interface.
 */
export function instanceOfV1AccessKeyRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accessKeyID" in value;
    isInstance = isInstance && "accessKeySecret" in value;

    return isInstance;
}

export function V1AccessKeyRequestFromJSON(json: any): V1AccessKeyRequest {
    return V1AccessKeyRequestFromJSONTyped(json, false);
}

export function V1AccessKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AccessKeyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessKeyID': json['accessKeyID'],
        'accessKeySecret': json['accessKeySecret'],
    };
}

export function V1AccessKeyRequestToJSON(value?: V1AccessKeyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessKeyID': value.accessKeyID,
        'accessKeySecret': value.accessKeySecret,
    };
}
