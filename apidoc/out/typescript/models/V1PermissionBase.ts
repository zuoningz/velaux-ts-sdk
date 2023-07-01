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
 * @interface V1PermissionBase
 */
export interface V1PermissionBase {
    /**
     * 
     * @type {Array<string>}
     * @memberof V1PermissionBase
     */
    actions: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1PermissionBase
     */
    alias: string;
    /**
     * 
     * @type {Date}
     * @memberof V1PermissionBase
     */
    createTime: Date;
    /**
     * 
     * @type {string}
     * @memberof V1PermissionBase
     */
    effect: string;
    /**
     * 
     * @type {string}
     * @memberof V1PermissionBase
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1PermissionBase
     */
    resources: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof V1PermissionBase
     */
    updateTime: Date;
}

/**
 * Check if a given object implements the V1PermissionBase interface.
 */
export function instanceOfV1PermissionBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "actions" in value;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "effect" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "resources" in value;
    isInstance = isInstance && "updateTime" in value;

    return isInstance;
}

export function V1PermissionBaseFromJSON(json: any): V1PermissionBase {
    return V1PermissionBaseFromJSONTyped(json, false);
}

export function V1PermissionBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PermissionBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actions': json['actions'],
        'alias': json['alias'],
        'createTime': (new Date(json['createTime'])),
        'effect': json['effect'],
        'name': json['name'],
        'resources': json['resources'],
        'updateTime': (new Date(json['updateTime'])),
    };
}

export function V1PermissionBaseToJSON(value?: V1PermissionBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actions': value.actions,
        'alias': value.alias,
        'createTime': (value.createTime.toISOString()),
        'effect': value.effect,
        'name': value.name,
        'resources': value.resources,
        'updateTime': (value.updateTime.toISOString()),
    };
}

