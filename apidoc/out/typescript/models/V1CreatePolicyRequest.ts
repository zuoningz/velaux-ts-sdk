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
import type { V1WorkflowPolicyBinding } from './V1WorkflowPolicyBinding';
import {
    V1WorkflowPolicyBindingFromJSON,
    V1WorkflowPolicyBindingFromJSONTyped,
    V1WorkflowPolicyBindingToJSON,
} from './V1WorkflowPolicyBinding';

/**
 * 
 * @export
 * @interface V1CreatePolicyRequest
 */
export interface V1CreatePolicyRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreatePolicyRequest
     */
    alias: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreatePolicyRequest
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreatePolicyRequest
     */
    envName: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreatePolicyRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreatePolicyRequest
     */
    properties: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreatePolicyRequest
     */
    type: string;
    /**
     * 
     * @type {Array<V1WorkflowPolicyBinding>}
     * @memberof V1CreatePolicyRequest
     */
    workflowPolicyBind: Array<V1WorkflowPolicyBinding>;
}

/**
 * Check if a given object implements the V1CreatePolicyRequest interface.
 */
export function instanceOfV1CreatePolicyRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "envName" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "properties" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "workflowPolicyBind" in value;

    return isInstance;
}

export function V1CreatePolicyRequestFromJSON(json: any): V1CreatePolicyRequest {
    return V1CreatePolicyRequestFromJSONTyped(json, false);
}

export function V1CreatePolicyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreatePolicyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': json['alias'],
        'description': json['description'],
        'envName': json['envName'],
        'name': json['name'],
        'properties': json['properties'],
        'type': json['type'],
        'workflowPolicyBind': ((json['workflowPolicyBind'] as Array<any>).map(V1WorkflowPolicyBindingFromJSON)),
    };
}

export function V1CreatePolicyRequestToJSON(value?: V1CreatePolicyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'description': value.description,
        'envName': value.envName,
        'name': value.name,
        'properties': value.properties,
        'type': value.type,
        'workflowPolicyBind': ((value.workflowPolicyBind as Array<any>).map(V1WorkflowPolicyBindingToJSON)),
    };
}
