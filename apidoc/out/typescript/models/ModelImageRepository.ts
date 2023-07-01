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
 * @interface ModelImageRepository
 */
export interface ModelImageRepository {
    /**
     * 
     * @type {Date}
     * @memberof ModelImageRepository
     */
    createTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof ModelImageRepository
     */
    fullName: string;
    /**
     * 
     * @type {string}
     * @memberof ModelImageRepository
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelImageRepository
     */
    namespace: string;
    /**
     * 
     * @type {string}
     * @memberof ModelImageRepository
     */
    region?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelImageRepository
     */
    type: string;
}

/**
 * Check if a given object implements the ModelImageRepository interface.
 */
export function instanceOfModelImageRepository(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fullName" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "namespace" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ModelImageRepositoryFromJSON(json: any): ModelImageRepository {
    return ModelImageRepositoryFromJSONTyped(json, false);
}

export function ModelImageRepositoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelImageRepository {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createTime': !exists(json, 'createTime') ? undefined : (new Date(json['createTime'])),
        'fullName': json['fullName'],
        'name': json['name'],
        'namespace': json['namespace'],
        'region': !exists(json, 'region') ? undefined : json['region'],
        'type': json['type'],
    };
}

export function ModelImageRepositoryToJSON(value?: ModelImageRepository | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createTime': value.createTime === undefined ? undefined : (value.createTime.toISOString()),
        'fullName': value.fullName,
        'name': value.name,
        'namespace': value.namespace,
        'region': value.region,
        'type': value.type,
    };
}
