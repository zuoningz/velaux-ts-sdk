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
import type { V1OutputVar } from './V1OutputVar';
import {
    V1OutputVarFromJSON,
    V1OutputVarFromJSONTyped,
    V1OutputVarToJSON,
} from './V1OutputVar';

/**
 * 
 * @export
 * @interface V1StepOutputBase
 */
export interface V1StepOutputBase {
    /**
     * 
     * @type {string}
     * @memberof V1StepOutputBase
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof V1StepOutputBase
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V1StepOutputBase
     */
    phase: string;
    /**
     * 
     * @type {string}
     * @memberof V1StepOutputBase
     */
    type: string;
    /**
     * 
     * @type {Array<V1OutputVar>}
     * @memberof V1StepOutputBase
     */
    values: Array<V1OutputVar>;
}

/**
 * Check if a given object implements the V1StepOutputBase interface.
 */
export function instanceOfV1StepOutputBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "phase" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "values" in value;

    return isInstance;
}

export function V1StepOutputBaseFromJSON(json: any): V1StepOutputBase {
    return V1StepOutputBaseFromJSONTyped(json, false);
}

export function V1StepOutputBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StepOutputBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'phase': json['phase'],
        'type': json['type'],
        'values': ((json['values'] as Array<any>).map(V1OutputVarFromJSON)),
    };
}

export function V1StepOutputBaseToJSON(value?: V1StepOutputBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'phase': value.phase,
        'type': value.type,
        'values': ((value.values as Array<any>).map(V1OutputVarToJSON)),
    };
}

