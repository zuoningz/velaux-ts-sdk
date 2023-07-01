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
import type { CommonAppStatus } from './CommonAppStatus';
import {
    CommonAppStatusFromJSON,
    CommonAppStatusFromJSONTyped,
    CommonAppStatusToJSON,
} from './CommonAppStatus';
import type { V1EnablingProgress } from './V1EnablingProgress';
import {
    V1EnablingProgressFromJSON,
    V1EnablingProgressFromJSONTyped,
    V1EnablingProgressToJSON,
} from './V1EnablingProgress';
import type { V1NameAlias } from './V1NameAlias';
import {
    V1NameAliasFromJSON,
    V1NameAliasFromJSONTyped,
    V1NameAliasToJSON,
} from './V1NameAlias';

/**
 * 
 * @export
 * @interface V1AddonStatusResponse
 */
export interface V1AddonStatusResponse {
    /**
     * 
     * @type {Array<V1NameAlias>}
     * @memberof V1AddonStatusResponse
     */
    allClusters?: Array<V1NameAlias>;
    /**
     * 
     * @type {CommonAppStatus}
     * @memberof V1AddonStatusResponse
     */
    appStatus?: CommonAppStatus;
    /**
     * 
     * @type {object}
     * @memberof V1AddonStatusResponse
     */
    args: object;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof V1AddonStatusResponse
     */
    clusters?: { [key: string]: object; };
    /**
     * 
     * @type {V1EnablingProgress}
     * @memberof V1AddonStatusResponse
     */
    enablingProgress?: V1EnablingProgress;
    /**
     * 
     * @type {string}
     * @memberof V1AddonStatusResponse
     */
    installedVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof V1AddonStatusResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V1AddonStatusResponse
     */
    phase: string;
}

/**
 * Check if a given object implements the V1AddonStatusResponse interface.
 */
export function instanceOfV1AddonStatusResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "args" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "phase" in value;

    return isInstance;
}

export function V1AddonStatusResponseFromJSON(json: any): V1AddonStatusResponse {
    return V1AddonStatusResponseFromJSONTyped(json, false);
}

export function V1AddonStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AddonStatusResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allClusters': !exists(json, 'allClusters') ? undefined : ((json['allClusters'] as Array<any>).map(V1NameAliasFromJSON)),
        'appStatus': !exists(json, 'appStatus') ? undefined : CommonAppStatusFromJSON(json['appStatus']),
        'args': json['args'],
        'clusters': !exists(json, 'clusters') ? undefined : json['clusters'],
        'enablingProgress': !exists(json, 'enabling_progress') ? undefined : V1EnablingProgressFromJSON(json['enabling_progress']),
        'installedVersion': !exists(json, 'installedVersion') ? undefined : json['installedVersion'],
        'name': json['name'],
        'phase': json['phase'],
    };
}

export function V1AddonStatusResponseToJSON(value?: V1AddonStatusResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allClusters': value.allClusters === undefined ? undefined : ((value.allClusters as Array<any>).map(V1NameAliasToJSON)),
        'appStatus': CommonAppStatusToJSON(value.appStatus),
        'args': value.args,
        'clusters': value.clusters,
        'enabling_progress': V1EnablingProgressToJSON(value.enablingProgress),
        'installedVersion': value.installedVersion,
        'name': value.name,
        'phase': value.phase,
    };
}
