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
import type { V1ObjectReference } from './V1ObjectReference';
import {
    V1ObjectReferenceFromJSON,
    V1ObjectReferenceFromJSONTyped,
    V1ObjectReferenceToJSON,
} from './V1ObjectReference';
import type { V1alpha1WorkflowStepStatus } from './V1alpha1WorkflowStepStatus';
import {
    V1alpha1WorkflowStepStatusFromJSON,
    V1alpha1WorkflowStepStatusFromJSONTyped,
    V1alpha1WorkflowStepStatusToJSON,
} from './V1alpha1WorkflowStepStatus';

/**
 * 
 * @export
 * @interface CommonWorkflowStatus
 */
export interface CommonWorkflowStatus {
    /**
     * 
     * @type {string}
     * @memberof CommonWorkflowStatus
     */
    appRevision?: string;
    /**
     * 
     * @type {V1ObjectReference}
     * @memberof CommonWorkflowStatus
     */
    contextBackend?: V1ObjectReference;
    /**
     * 
     * @type {string}
     * @memberof CommonWorkflowStatus
     */
    endTime?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommonWorkflowStatus
     */
    finished: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommonWorkflowStatus
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonWorkflowStatus
     */
    mode: string;
    /**
     * 
     * @type {string}
     * @memberof CommonWorkflowStatus
     */
    startTime?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonWorkflowStatus
     */
    status?: string;
    /**
     * 
     * @type {Array<V1alpha1WorkflowStepStatus>}
     * @memberof CommonWorkflowStatus
     */
    steps?: Array<V1alpha1WorkflowStepStatus>;
    /**
     * 
     * @type {boolean}
     * @memberof CommonWorkflowStatus
     */
    suspend: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommonWorkflowStatus
     */
    suspendState?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommonWorkflowStatus
     */
    terminated: boolean;
}

/**
 * Check if a given object implements the CommonWorkflowStatus interface.
 */
export function instanceOfCommonWorkflowStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "finished" in value;
    isInstance = isInstance && "mode" in value;
    isInstance = isInstance && "suspend" in value;
    isInstance = isInstance && "terminated" in value;

    return isInstance;
}

export function CommonWorkflowStatusFromJSON(json: any): CommonWorkflowStatus {
    return CommonWorkflowStatusFromJSONTyped(json, false);
}

export function CommonWorkflowStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonWorkflowStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appRevision': !exists(json, 'appRevision') ? undefined : json['appRevision'],
        'contextBackend': !exists(json, 'contextBackend') ? undefined : V1ObjectReferenceFromJSON(json['contextBackend']),
        'endTime': !exists(json, 'endTime') ? undefined : json['endTime'],
        'finished': json['finished'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'mode': json['mode'],
        'startTime': !exists(json, 'startTime') ? undefined : json['startTime'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'steps': !exists(json, 'steps') ? undefined : ((json['steps'] as Array<any>).map(V1alpha1WorkflowStepStatusFromJSON)),
        'suspend': json['suspend'],
        'suspendState': !exists(json, 'suspendState') ? undefined : json['suspendState'],
        'terminated': json['terminated'],
    };
}

export function CommonWorkflowStatusToJSON(value?: CommonWorkflowStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appRevision': value.appRevision,
        'contextBackend': V1ObjectReferenceToJSON(value.contextBackend),
        'endTime': value.endTime,
        'finished': value.finished,
        'message': value.message,
        'mode': value.mode,
        'startTime': value.startTime,
        'status': value.status,
        'steps': value.steps === undefined ? undefined : ((value.steps as Array<any>).map(V1alpha1WorkflowStepStatusToJSON)),
        'suspend': value.suspend,
        'suspendState': value.suspendState,
        'terminated': value.terminated,
    };
}

