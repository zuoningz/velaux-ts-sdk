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
import type { SchemaOption } from './SchemaOption';
import {
    SchemaOptionFromJSON,
    SchemaOptionFromJSONTyped,
    SchemaOptionToJSON,
} from './SchemaOption';

/**
 * 
 * @export
 * @interface SchemaValidate
 */
export interface SchemaValidate {
    /**
     * 
     * @type {object}
     * @memberof SchemaValidate
     */
    defaultValue?: object;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaValidate
     */
    immutable: boolean;
    /**
     * 
     * @type {number}
     * @memberof SchemaValidate
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaValidate
     */
    maxLength?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaValidate
     */
    min?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaValidate
     */
    minLength?: number;
    /**
     * 
     * @type {Array<SchemaOption>}
     * @memberof SchemaValidate
     */
    options?: Array<SchemaOption>;
    /**
     * 
     * @type {string}
     * @memberof SchemaValidate
     */
    pattern?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaValidate
     */
    required?: boolean;
}

/**
 * Check if a given object implements the SchemaValidate interface.
 */
export function instanceOfSchemaValidate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "immutable" in value;

    return isInstance;
}

export function SchemaValidateFromJSON(json: any): SchemaValidate {
    return SchemaValidateFromJSONTyped(json, false);
}

export function SchemaValidateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaValidate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
        'immutable': json['immutable'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'maxLength': !exists(json, 'maxLength') ? undefined : json['maxLength'],
        'min': !exists(json, 'min') ? undefined : json['min'],
        'minLength': !exists(json, 'minLength') ? undefined : json['minLength'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(SchemaOptionFromJSON)),
        'pattern': !exists(json, 'pattern') ? undefined : json['pattern'],
        'required': !exists(json, 'required') ? undefined : json['required'],
    };
}

export function SchemaValidateToJSON(value?: SchemaValidate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultValue': value.defaultValue,
        'immutable': value.immutable,
        'max': value.max,
        'maxLength': value.maxLength,
        'min': value.min,
        'minLength': value.minLength,
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(SchemaOptionToJSON)),
        'pattern': value.pattern,
        'required': value.required,
    };
}

