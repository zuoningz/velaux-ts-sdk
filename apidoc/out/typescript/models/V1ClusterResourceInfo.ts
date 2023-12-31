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
 * @interface V1ClusterResourceInfo
 */
export interface V1ClusterResourceInfo {
    /**
     * 
     * @type {number}
     * @memberof V1ClusterResourceInfo
     */
    cpuCapacity: number;
    /**
     * 
     * @type {number}
     * @memberof V1ClusterResourceInfo
     */
    cpuUsed: number;
    /**
     * 
     * @type {number}
     * @memberof V1ClusterResourceInfo
     */
    gpuCapacity?: number;
    /**
     * 
     * @type {number}
     * @memberof V1ClusterResourceInfo
     */
    gpuUsed?: number;
    /**
     * 
     * @type {number}
     * @memberof V1ClusterResourceInfo
     */
    masterNumber: number;
    /**
     * 
     * @type {number}
     * @memberof V1ClusterResourceInfo
     */
    memoryCapacity: number;
    /**
     * 
     * @type {number}
     * @memberof V1ClusterResourceInfo
     */
    memoryUsed: number;
    /**
     * 
     * @type {number}
     * @memberof V1ClusterResourceInfo
     */
    podCapacity: number;
    /**
     * 
     * @type {number}
     * @memberof V1ClusterResourceInfo
     */
    podUsed: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ClusterResourceInfo
     */
    storageClassList?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof V1ClusterResourceInfo
     */
    workerNumber: number;
}

/**
 * Check if a given object implements the V1ClusterResourceInfo interface.
 */
export function instanceOfV1ClusterResourceInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cpuCapacity" in value;
    isInstance = isInstance && "cpuUsed" in value;
    isInstance = isInstance && "masterNumber" in value;
    isInstance = isInstance && "memoryCapacity" in value;
    isInstance = isInstance && "memoryUsed" in value;
    isInstance = isInstance && "podCapacity" in value;
    isInstance = isInstance && "podUsed" in value;
    isInstance = isInstance && "workerNumber" in value;

    return isInstance;
}

export function V1ClusterResourceInfoFromJSON(json: any): V1ClusterResourceInfo {
    return V1ClusterResourceInfoFromJSONTyped(json, false);
}

export function V1ClusterResourceInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ClusterResourceInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cpuCapacity': json['cpuCapacity'],
        'cpuUsed': json['cpuUsed'],
        'gpuCapacity': !exists(json, 'gpuCapacity') ? undefined : json['gpuCapacity'],
        'gpuUsed': !exists(json, 'gpuUsed') ? undefined : json['gpuUsed'],
        'masterNumber': json['masterNumber'],
        'memoryCapacity': json['memoryCapacity'],
        'memoryUsed': json['memoryUsed'],
        'podCapacity': json['podCapacity'],
        'podUsed': json['podUsed'],
        'storageClassList': !exists(json, 'storageClassList') ? undefined : json['storageClassList'],
        'workerNumber': json['workerNumber'],
    };
}

export function V1ClusterResourceInfoToJSON(value?: V1ClusterResourceInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cpuCapacity': value.cpuCapacity,
        'cpuUsed': value.cpuUsed,
        'gpuCapacity': value.gpuCapacity,
        'gpuUsed': value.gpuUsed,
        'masterNumber': value.masterNumber,
        'memoryCapacity': value.memoryCapacity,
        'memoryUsed': value.memoryUsed,
        'podCapacity': value.podCapacity,
        'podUsed': value.podUsed,
        'storageClassList': value.storageClassList,
        'workerNumber': value.workerNumber,
    };
}

