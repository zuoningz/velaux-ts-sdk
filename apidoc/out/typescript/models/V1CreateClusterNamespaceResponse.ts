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
 * @interface V1CreateClusterNamespaceResponse
 */
export interface V1CreateClusterNamespaceResponse {
    /**
     * 
     * @type {boolean}
     * @memberof V1CreateClusterNamespaceResponse
     */
    _exists: boolean;
}

/**
 * Check if a given object implements the V1CreateClusterNamespaceResponse interface.
 */
export function instanceOfV1CreateClusterNamespaceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "_exists" in value;

    return isInstance;
}

export function V1CreateClusterNamespaceResponseFromJSON(json: any): V1CreateClusterNamespaceResponse {
    return V1CreateClusterNamespaceResponseFromJSONTyped(json, false);
}

export function V1CreateClusterNamespaceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateClusterNamespaceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_exists': json['exists'],
    };
}

export function V1CreateClusterNamespaceResponseToJSON(value?: V1CreateClusterNamespaceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exists': value._exists,
    };
}
