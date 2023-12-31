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
import type { V1WorkflowStep } from './V1WorkflowStep';
import {
    V1WorkflowStepFromJSON,
    V1WorkflowStepFromJSONTyped,
    V1WorkflowStepToJSON,
} from './V1WorkflowStep';

/**
 * 
 * @export
 * @interface V1CreateWorkflowRequest
 */
export interface V1CreateWorkflowRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreateWorkflowRequest
     */
    alias?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1CreateWorkflowRequest
     */
    _default: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1CreateWorkflowRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateWorkflowRequest
     */
    envName: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateWorkflowRequest
     */
    mode: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateWorkflowRequest
     */
    name: string;
    /**
     * 
     * @type {Array<V1WorkflowStep>}
     * @memberof V1CreateWorkflowRequest
     */
    steps?: Array<V1WorkflowStep>;
    /**
     * 
     * @type {string}
     * @memberof V1CreateWorkflowRequest
     */
    subMode: string;
}

/**
 * Check if a given object implements the V1CreateWorkflowRequest interface.
 */
export function instanceOfV1CreateWorkflowRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "_default" in value;
    isInstance = isInstance && "envName" in value;
    isInstance = isInstance && "mode" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "subMode" in value;

    return isInstance;
}

export function V1CreateWorkflowRequestFromJSON(json: any): V1CreateWorkflowRequest {
    return V1CreateWorkflowRequestFromJSONTyped(json, false);
}

export function V1CreateWorkflowRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateWorkflowRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        '_default': json['default'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'envName': json['envName'],
        'mode': json['mode'],
        'name': json['name'],
        'steps': !exists(json, 'steps') ? undefined : ((json['steps'] as Array<any>).map(V1WorkflowStepFromJSON)),
        'subMode': json['subMode'],
    };
}

export function V1CreateWorkflowRequestToJSON(value?: V1CreateWorkflowRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'default': value._default,
        'description': value.description,
        'envName': value.envName,
        'mode': value.mode,
        'name': value.name,
        'steps': value.steps === undefined ? undefined : ((value.steps as Array<any>).map(V1WorkflowStepToJSON)),
        'subMode': value.subMode,
    };
}

