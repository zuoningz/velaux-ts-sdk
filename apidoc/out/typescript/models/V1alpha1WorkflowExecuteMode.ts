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
 * @interface V1alpha1WorkflowExecuteMode
 */
export interface V1alpha1WorkflowExecuteMode {
    /**
     * 
     * @type {string}
     * @memberof V1alpha1WorkflowExecuteMode
     */
    steps?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1WorkflowExecuteMode
     */
    subSteps?: string;
}

/**
 * Check if a given object implements the V1alpha1WorkflowExecuteMode interface.
 */
export function instanceOfV1alpha1WorkflowExecuteMode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1alpha1WorkflowExecuteModeFromJSON(json: any): V1alpha1WorkflowExecuteMode {
    return V1alpha1WorkflowExecuteModeFromJSONTyped(json, false);
}

export function V1alpha1WorkflowExecuteModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1WorkflowExecuteMode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'steps': !exists(json, 'steps') ? undefined : json['steps'],
        'subSteps': !exists(json, 'subSteps') ? undefined : json['subSteps'],
    };
}

export function V1alpha1WorkflowExecuteModeToJSON(value?: V1alpha1WorkflowExecuteMode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'steps': value.steps,
        'subSteps': value.subSteps,
    };
}

