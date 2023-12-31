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
 * @interface V1ConnectCloudClusterRequest
 */
export interface V1ConnectCloudClusterRequest {
    /**
     * 
     * @type {string}
     * @memberof V1ConnectCloudClusterRequest
     */
    accessKeyID: string;
    /**
     * 
     * @type {string}
     * @memberof V1ConnectCloudClusterRequest
     */
    accessKeySecret: string;
    /**
     * 
     * @type {string}
     * @memberof V1ConnectCloudClusterRequest
     */
    alias?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ConnectCloudClusterRequest
     */
    clusterID: string;
    /**
     * 
     * @type {string}
     * @memberof V1ConnectCloudClusterRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ConnectCloudClusterRequest
     */
    icon: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1ConnectCloudClusterRequest
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof V1ConnectCloudClusterRequest
     */
    name: string;
}

/**
 * Check if a given object implements the V1ConnectCloudClusterRequest interface.
 */
export function instanceOfV1ConnectCloudClusterRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accessKeyID" in value;
    isInstance = isInstance && "accessKeySecret" in value;
    isInstance = isInstance && "clusterID" in value;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1ConnectCloudClusterRequestFromJSON(json: any): V1ConnectCloudClusterRequest {
    return V1ConnectCloudClusterRequestFromJSONTyped(json, false);
}

export function V1ConnectCloudClusterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConnectCloudClusterRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessKeyID': json['accessKeyID'],
        'accessKeySecret': json['accessKeySecret'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'clusterID': json['clusterID'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'icon': json['icon'],
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'name': json['name'],
    };
}

export function V1ConnectCloudClusterRequestToJSON(value?: V1ConnectCloudClusterRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessKeyID': value.accessKeyID,
        'accessKeySecret': value.accessKeySecret,
        'alias': value.alias,
        'clusterID': value.clusterID,
        'description': value.description,
        'icon': value.icon,
        'labels': value.labels,
        'name': value.name,
    };
}

