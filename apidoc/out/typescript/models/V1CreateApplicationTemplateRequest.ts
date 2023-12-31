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
 * @interface V1CreateApplicationTemplateRequest
 */
export interface V1CreateApplicationTemplateRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreateApplicationTemplateRequest
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateApplicationTemplateRequest
     */
    templateName: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateApplicationTemplateRequest
     */
    version: string;
}

/**
 * Check if a given object implements the V1CreateApplicationTemplateRequest interface.
 */
export function instanceOfV1CreateApplicationTemplateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "templateName" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function V1CreateApplicationTemplateRequestFromJSON(json: any): V1CreateApplicationTemplateRequest {
    return V1CreateApplicationTemplateRequestFromJSONTyped(json, false);
}

export function V1CreateApplicationTemplateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateApplicationTemplateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'templateName': json['templateName'],
        'version': json['version'],
    };
}

export function V1CreateApplicationTemplateRequestToJSON(value?: V1CreateApplicationTemplateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'templateName': value.templateName,
        'version': value.version,
    };
}

