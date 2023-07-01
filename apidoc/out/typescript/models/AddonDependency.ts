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
 * @interface AddonDependency
 */
export interface AddonDependency {
    /**
     * 
     * @type {string}
     * @memberof AddonDependency
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AddonDependency
     */
    version?: string;
}

/**
 * Check if a given object implements the AddonDependency interface.
 */
export function instanceOfAddonDependency(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddonDependencyFromJSON(json: any): AddonDependency {
    return AddonDependencyFromJSONTyped(json, false);
}

export function AddonDependencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddonDependency {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function AddonDependencyToJSON(value?: AddonDependency | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'version': value.version,
    };
}

