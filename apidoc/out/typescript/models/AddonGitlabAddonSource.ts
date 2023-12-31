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
 * @interface AddonGitlabAddonSource
 */
export interface AddonGitlabAddonSource {
    /**
     * 
     * @type {string}
     * @memberof AddonGitlabAddonSource
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof AddonGitlabAddonSource
     */
    repo?: string;
    /**
     * 
     * @type {string}
     * @memberof AddonGitlabAddonSource
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof AddonGitlabAddonSource
     */
    url?: string;
}

/**
 * Check if a given object implements the AddonGitlabAddonSource interface.
 */
export function instanceOfAddonGitlabAddonSource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddonGitlabAddonSourceFromJSON(json: any): AddonGitlabAddonSource {
    return AddonGitlabAddonSourceFromJSONTyped(json, false);
}

export function AddonGitlabAddonSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddonGitlabAddonSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'path': !exists(json, 'path') ? undefined : json['path'],
        'repo': !exists(json, 'repo') ? undefined : json['repo'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function AddonGitlabAddonSourceToJSON(value?: AddonGitlabAddonSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'path': value.path,
        'repo': value.repo,
        'token': value.token,
        'url': value.url,
    };
}

