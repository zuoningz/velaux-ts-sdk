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
 * @interface V1StepBase
 */
export interface V1StepBase {
    /**
     * 
     * @type {string}
     * @memberof V1StepBase
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof V1StepBase
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V1StepBase
     */
    phase: string;
    /**
     * 
     * @type {string}
     * @memberof V1StepBase
     */
    type: string;
}

/**
 * Check if a given object implements the V1StepBase interface.
 */
export function instanceOfV1StepBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "phase" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function V1StepBaseFromJSON(json: any): V1StepBase {
    return V1StepBaseFromJSONTyped(json, false);
}

export function V1StepBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StepBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'phase': json['phase'],
        'type': json['type'],
    };
}

export function V1StepBaseToJSON(value?: V1StepBase | null): any {
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
    };
}

