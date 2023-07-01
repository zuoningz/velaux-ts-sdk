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
 * @interface V1UpdateUserRequest
 */
export interface V1UpdateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUserRequest
     */
    alias?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUserRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUserRequest
     */
    password?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1UpdateUserRequest
     */
    roles: Array<string>;
}

/**
 * Check if a given object implements the V1UpdateUserRequest interface.
 */
export function instanceOfV1UpdateUserRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "roles" in value;

    return isInstance;
}

export function V1UpdateUserRequestFromJSON(json: any): V1UpdateUserRequest {
    return V1UpdateUserRequestFromJSONTyped(json, false);
}

export function V1UpdateUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UpdateUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'roles': json['roles'],
    };
}

export function V1UpdateUserRequestToJSON(value?: V1UpdateUserRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'email': value.email,
        'password': value.password,
        'roles': value.roles,
    };
}
