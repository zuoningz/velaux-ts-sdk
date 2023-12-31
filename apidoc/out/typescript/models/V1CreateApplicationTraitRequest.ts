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
 * @interface V1CreateApplicationTraitRequest
 */
export interface V1CreateApplicationTraitRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreateApplicationTraitRequest
     */
    alias?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateApplicationTraitRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateApplicationTraitRequest
     */
    properties: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateApplicationTraitRequest
     */
    type: string;
}

/**
 * Check if a given object implements the V1CreateApplicationTraitRequest interface.
 */
export function instanceOfV1CreateApplicationTraitRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "properties" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function V1CreateApplicationTraitRequestFromJSON(json: any): V1CreateApplicationTraitRequest {
    return V1CreateApplicationTraitRequestFromJSONTyped(json, false);
}

export function V1CreateApplicationTraitRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateApplicationTraitRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'properties': json['properties'],
        'type': json['type'],
    };
}

export function V1CreateApplicationTraitRequestToJSON(value?: V1CreateApplicationTraitRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'description': value.description,
        'properties': value.properties,
        'type': value.type,
    };
}

