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
 * @interface V1PolicyBase
 */
export interface V1PolicyBase {
    /**
     * 
     * @type {string}
     * @memberof V1PolicyBase
     */
    alias: string;
    /**
     * 
     * @type {Date}
     * @memberof V1PolicyBase
     */
    createTime: Date;
    /**
     * 
     * @type {string}
     * @memberof V1PolicyBase
     */
    creator: string;
    /**
     * 
     * @type {string}
     * @memberof V1PolicyBase
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof V1PolicyBase
     */
    envName: string;
    /**
     * 
     * @type {string}
     * @memberof V1PolicyBase
     */
    name: string;
    /**
     * 
     * @type {object}
     * @memberof V1PolicyBase
     */
    properties: object;
    /**
     * 
     * @type {string}
     * @memberof V1PolicyBase
     */
    type: string;
    /**
     * 
     * @type {Date}
     * @memberof V1PolicyBase
     */
    updateTime: Date;
}

/**
 * Check if a given object implements the V1PolicyBase interface.
 */
export function instanceOfV1PolicyBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "creator" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "envName" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "properties" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "updateTime" in value;

    return isInstance;
}

export function V1PolicyBaseFromJSON(json: any): V1PolicyBase {
    return V1PolicyBaseFromJSONTyped(json, false);
}

export function V1PolicyBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PolicyBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': json['alias'],
        'createTime': (new Date(json['createTime'])),
        'creator': json['creator'],
        'description': json['description'],
        'envName': json['envName'],
        'name': json['name'],
        'properties': json['properties'],
        'type': json['type'],
        'updateTime': (new Date(json['updateTime'])),
    };
}

export function V1PolicyBaseToJSON(value?: V1PolicyBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'createTime': (value.createTime.toISOString()),
        'creator': value.creator,
        'description': value.description,
        'envName': value.envName,
        'name': value.name,
        'properties': value.properties,
        'type': value.type,
        'updateTime': (value.updateTime.toISOString()),
    };
}

