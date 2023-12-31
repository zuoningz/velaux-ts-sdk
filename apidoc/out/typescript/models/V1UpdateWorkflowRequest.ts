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
 * @interface V1UpdateWorkflowRequest
 */
export interface V1UpdateWorkflowRequest {
    /**
     * 
     * @type {string}
     * @memberof V1UpdateWorkflowRequest
     */
    alias?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1UpdateWorkflowRequest
     */
    _default: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateWorkflowRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateWorkflowRequest
     */
    mode: string;
    /**
     * 
     * @type {Array<V1WorkflowStep>}
     * @memberof V1UpdateWorkflowRequest
     */
    steps?: Array<V1WorkflowStep>;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateWorkflowRequest
     */
    subMode: string;
}

/**
 * Check if a given object implements the V1UpdateWorkflowRequest interface.
 */
export function instanceOfV1UpdateWorkflowRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "_default" in value;
    isInstance = isInstance && "mode" in value;
    isInstance = isInstance && "subMode" in value;

    return isInstance;
}

export function V1UpdateWorkflowRequestFromJSON(json: any): V1UpdateWorkflowRequest {
    return V1UpdateWorkflowRequestFromJSONTyped(json, false);
}

export function V1UpdateWorkflowRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UpdateWorkflowRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        '_default': json['default'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'mode': json['mode'],
        'steps': !exists(json, 'steps') ? undefined : ((json['steps'] as Array<any>).map(V1WorkflowStepFromJSON)),
        'subMode': json['subMode'],
    };
}

export function V1UpdateWorkflowRequestToJSON(value?: V1UpdateWorkflowRequest | null): any {
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
        'mode': value.mode,
        'steps': value.steps === undefined ? undefined : ((value.steps as Array<any>).map(V1WorkflowStepToJSON)),
        'subMode': value.subMode,
    };
}

