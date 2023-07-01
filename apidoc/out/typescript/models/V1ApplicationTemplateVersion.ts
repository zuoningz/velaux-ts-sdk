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
 * @interface V1ApplicationTemplateVersion
 */
export interface V1ApplicationTemplateVersion {
    /**
     * 
     * @type {Date}
     * @memberof V1ApplicationTemplateVersion
     */
    createTime: Date;
    /**
     * 
     * @type {string}
     * @memberof V1ApplicationTemplateVersion
     */
    createUser: string;
    /**
     * 
     * @type {string}
     * @memberof V1ApplicationTemplateVersion
     */
    description: string;
    /**
     * 
     * @type {Date}
     * @memberof V1ApplicationTemplateVersion
     */
    updateTime: Date;
    /**
     * 
     * @type {string}
     * @memberof V1ApplicationTemplateVersion
     */
    version: string;
}

/**
 * Check if a given object implements the V1ApplicationTemplateVersion interface.
 */
export function instanceOfV1ApplicationTemplateVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "createUser" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "updateTime" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function V1ApplicationTemplateVersionFromJSON(json: any): V1ApplicationTemplateVersion {
    return V1ApplicationTemplateVersionFromJSONTyped(json, false);
}

export function V1ApplicationTemplateVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ApplicationTemplateVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createTime': (new Date(json['createTime'])),
        'createUser': json['createUser'],
        'description': json['description'],
        'updateTime': (new Date(json['updateTime'])),
        'version': json['version'],
    };
}

export function V1ApplicationTemplateVersionToJSON(value?: V1ApplicationTemplateVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createTime': (value.createTime.toISOString()),
        'createUser': value.createUser,
        'description': value.description,
        'updateTime': (value.updateTime.toISOString()),
        'version': value.version,
    };
}
