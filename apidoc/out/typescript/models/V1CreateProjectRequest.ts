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
 * @interface V1CreateProjectRequest
 */
export interface V1CreateProjectRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreateProjectRequest
     */
    alias?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateProjectRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateProjectRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateProjectRequest
     */
    namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateProjectRequest
     */
    owner?: string;
}

/**
 * Check if a given object implements the V1CreateProjectRequest interface.
 */
export function instanceOfV1CreateProjectRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1CreateProjectRequestFromJSON(json: any): V1CreateProjectRequest {
    return V1CreateProjectRequestFromJSONTyped(json, false);
}

export function V1CreateProjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateProjectRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
    };
}

export function V1CreateProjectRequestToJSON(value?: V1CreateProjectRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'description': value.description,
        'name': value.name,
        'namespace': value.namespace,
        'owner': value.owner,
    };
}

