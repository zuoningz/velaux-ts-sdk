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
import type { V1ProjectBase } from './V1ProjectBase';
import {
    V1ProjectBaseFromJSON,
    V1ProjectBaseFromJSONTyped,
    V1ProjectBaseToJSON,
} from './V1ProjectBase';

/**
 * 
 * @export
 * @interface V1ListProjectResponse
 */
export interface V1ListProjectResponse {
    /**
     * 
     * @type {Array<V1ProjectBase>}
     * @memberof V1ListProjectResponse
     */
    projects: Array<V1ProjectBase>;
    /**
     * 
     * @type {number}
     * @memberof V1ListProjectResponse
     */
    total: number;
}

/**
 * Check if a given object implements the V1ListProjectResponse interface.
 */
export function instanceOfV1ListProjectResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "projects" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function V1ListProjectResponseFromJSON(json: any): V1ListProjectResponse {
    return V1ListProjectResponseFromJSONTyped(json, false);
}

export function V1ListProjectResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListProjectResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projects': ((json['projects'] as Array<any>).map(V1ProjectBaseFromJSON)),
        'total': json['total'],
    };
}

export function V1ListProjectResponseToJSON(value?: V1ListProjectResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'projects': ((value.projects as Array<any>).map(V1ProjectBaseToJSON)),
        'total': value.total,
    };
}
