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
import type { V1Config } from './V1Config';
import {
    V1ConfigFromJSON,
    V1ConfigFromJSONTyped,
    V1ConfigToJSON,
} from './V1Config';

/**
 * 
 * @export
 * @interface V1ListConfigResponse
 */
export interface V1ListConfigResponse {
    /**
     * 
     * @type {Array<V1Config>}
     * @memberof V1ListConfigResponse
     */
    configs: Array<V1Config>;
}

/**
 * Check if a given object implements the V1ListConfigResponse interface.
 */
export function instanceOfV1ListConfigResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "configs" in value;

    return isInstance;
}

export function V1ListConfigResponseFromJSON(json: any): V1ListConfigResponse {
    return V1ListConfigResponseFromJSONTyped(json, false);
}

export function V1ListConfigResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListConfigResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configs': ((json['configs'] as Array<any>).map(V1ConfigFromJSON)),
    };
}

export function V1ListConfigResponseToJSON(value?: V1ListConfigResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configs': ((value.configs as Array<any>).map(V1ConfigToJSON)),
    };
}

