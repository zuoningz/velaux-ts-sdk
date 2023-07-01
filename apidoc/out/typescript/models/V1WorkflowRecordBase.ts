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
 * @interface V1WorkflowRecordBase
 */
export interface V1WorkflowRecordBase {
    /**
     * 
     * @type {string}
     * @memberof V1WorkflowRecordBase
     */
    applicationRevision: string;
    /**
     * 
     * @type {Date}
     * @memberof V1WorkflowRecordBase
     */
    endTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof V1WorkflowRecordBase
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof V1WorkflowRecordBase
     */
    mode: string;
    /**
     * 
     * @type {string}
     * @memberof V1WorkflowRecordBase
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V1WorkflowRecordBase
     */
    namespace: string;
    /**
     * 
     * @type {Date}
     * @memberof V1WorkflowRecordBase
     */
    startTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof V1WorkflowRecordBase
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof V1WorkflowRecordBase
     */
    workflowAlias: string;
    /**
     * 
     * @type {string}
     * @memberof V1WorkflowRecordBase
     */
    workflowName: string;
}

/**
 * Check if a given object implements the V1WorkflowRecordBase interface.
 */
export function instanceOfV1WorkflowRecordBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "applicationRevision" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "mode" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "namespace" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "workflowAlias" in value;
    isInstance = isInstance && "workflowName" in value;

    return isInstance;
}

export function V1WorkflowRecordBaseFromJSON(json: any): V1WorkflowRecordBase {
    return V1WorkflowRecordBaseFromJSONTyped(json, false);
}

export function V1WorkflowRecordBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1WorkflowRecordBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationRevision': json['applicationRevision'],
        'endTime': !exists(json, 'endTime') ? undefined : (new Date(json['endTime'])),
        'message': json['message'],
        'mode': json['mode'],
        'name': json['name'],
        'namespace': json['namespace'],
        'startTime': !exists(json, 'startTime') ? undefined : (new Date(json['startTime'])),
        'status': json['status'],
        'workflowAlias': json['workflowAlias'],
        'workflowName': json['workflowName'],
    };
}

export function V1WorkflowRecordBaseToJSON(value?: V1WorkflowRecordBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationRevision': value.applicationRevision,
        'endTime': value.endTime === undefined ? undefined : (value.endTime.toISOString()),
        'message': value.message,
        'mode': value.mode,
        'name': value.name,
        'namespace': value.namespace,
        'startTime': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'status': value.status,
        'workflowAlias': value.workflowAlias,
        'workflowName': value.workflowName,
    };
}

