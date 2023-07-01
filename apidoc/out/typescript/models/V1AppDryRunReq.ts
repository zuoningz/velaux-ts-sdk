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
 * @interface V1AppDryRunReq
 */
export interface V1AppDryRunReq {
    /**
     * 
     * @type {string}
     * @memberof V1AppDryRunReq
     */
    dryRunType: string;
    /**
     * 
     * @type {string}
     * @memberof V1AppDryRunReq
     */
    env: string;
    /**
     * 
     * @type {string}
     * @memberof V1AppDryRunReq
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof V1AppDryRunReq
     */
    workflow: string;
}

/**
 * Check if a given object implements the V1AppDryRunReq interface.
 */
export function instanceOfV1AppDryRunReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "dryRunType" in value;
    isInstance = isInstance && "env" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "workflow" in value;

    return isInstance;
}

export function V1AppDryRunReqFromJSON(json: any): V1AppDryRunReq {
    return V1AppDryRunReqFromJSONTyped(json, false);
}

export function V1AppDryRunReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AppDryRunReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRunType': json['dryRunType'],
        'env': json['env'],
        'version': json['version'],
        'workflow': json['workflow'],
    };
}

export function V1AppDryRunReqToJSON(value?: V1AppDryRunReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dryRunType': value.dryRunType,
        'env': value.env,
        'version': value.version,
        'workflow': value.workflow,
    };
}
