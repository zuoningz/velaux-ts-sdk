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
import type { V1alpha1InputItem } from './V1alpha1InputItem';
import {
    V1alpha1InputItemFromJSON,
    V1alpha1InputItemFromJSONTyped,
    V1alpha1InputItemToJSON,
} from './V1alpha1InputItem';
import type { V1alpha1OutputItem } from './V1alpha1OutputItem';
import {
    V1alpha1OutputItemFromJSON,
    V1alpha1OutputItemFromJSONTyped,
    V1alpha1OutputItemToJSON,
} from './V1alpha1OutputItem';
import type { V1alpha1WorkflowStepMeta } from './V1alpha1WorkflowStepMeta';
import {
    V1alpha1WorkflowStepMetaFromJSON,
    V1alpha1WorkflowStepMetaFromJSONTyped,
    V1alpha1WorkflowStepMetaToJSON,
} from './V1alpha1WorkflowStepMeta';

/**
 * 
 * @export
 * @interface V1alpha1WorkflowStepBase
 */
export interface V1alpha1WorkflowStepBase {
    /**
     * 
     * @type {Array<string>}
     * @memberof V1alpha1WorkflowStepBase
     */
    dependsOn?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1WorkflowStepBase
     */
    _if?: string;
    /**
     * 
     * @type {Array<V1alpha1InputItem>}
     * @memberof V1alpha1WorkflowStepBase
     */
    inputs?: Array<V1alpha1InputItem>;
    /**
     * 
     * @type {V1alpha1WorkflowStepMeta}
     * @memberof V1alpha1WorkflowStepBase
     */
    meta?: V1alpha1WorkflowStepMeta;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1WorkflowStepBase
     */
    name?: string;
    /**
     * 
     * @type {Array<V1alpha1OutputItem>}
     * @memberof V1alpha1WorkflowStepBase
     */
    outputs?: Array<V1alpha1OutputItem>;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1WorkflowStepBase
     */
    properties?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1WorkflowStepBase
     */
    timeout?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1WorkflowStepBase
     */
    type: string;
}

/**
 * Check if a given object implements the V1alpha1WorkflowStepBase interface.
 */
export function instanceOfV1alpha1WorkflowStepBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function V1alpha1WorkflowStepBaseFromJSON(json: any): V1alpha1WorkflowStepBase {
    return V1alpha1WorkflowStepBaseFromJSONTyped(json, false);
}

export function V1alpha1WorkflowStepBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1WorkflowStepBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dependsOn': !exists(json, 'dependsOn') ? undefined : json['dependsOn'],
        '_if': !exists(json, 'if') ? undefined : json['if'],
        'inputs': !exists(json, 'inputs') ? undefined : ((json['inputs'] as Array<any>).map(V1alpha1InputItemFromJSON)),
        'meta': !exists(json, 'meta') ? undefined : V1alpha1WorkflowStepMetaFromJSON(json['meta']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'outputs': !exists(json, 'outputs') ? undefined : ((json['outputs'] as Array<any>).map(V1alpha1OutputItemFromJSON)),
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'timeout': !exists(json, 'timeout') ? undefined : json['timeout'],
        'type': json['type'],
    };
}

export function V1alpha1WorkflowStepBaseToJSON(value?: V1alpha1WorkflowStepBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dependsOn': value.dependsOn,
        'if': value._if,
        'inputs': value.inputs === undefined ? undefined : ((value.inputs as Array<any>).map(V1alpha1InputItemToJSON)),
        'meta': V1alpha1WorkflowStepMetaToJSON(value.meta),
        'name': value.name,
        'outputs': value.outputs === undefined ? undefined : ((value.outputs as Array<any>).map(V1alpha1OutputItemToJSON)),
        'properties': value.properties,
        'timeout': value.timeout,
        'type': value.type,
    };
}

