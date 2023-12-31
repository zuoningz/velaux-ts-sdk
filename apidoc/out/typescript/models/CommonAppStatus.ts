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
import type { CommonApplicationComponentStatus } from './CommonApplicationComponentStatus';
import {
    CommonApplicationComponentStatusFromJSON,
    CommonApplicationComponentStatusFromJSONTyped,
    CommonApplicationComponentStatusToJSON,
} from './CommonApplicationComponentStatus';
import type { CommonClusterObjectReference } from './CommonClusterObjectReference';
import {
    CommonClusterObjectReferenceFromJSON,
    CommonClusterObjectReferenceFromJSONTyped,
    CommonClusterObjectReferenceToJSON,
} from './CommonClusterObjectReference';
import type { CommonPolicyStatus } from './CommonPolicyStatus';
import {
    CommonPolicyStatusFromJSON,
    CommonPolicyStatusFromJSONTyped,
    CommonPolicyStatusToJSON,
} from './CommonPolicyStatus';
import type { CommonRevision } from './CommonRevision';
import {
    CommonRevisionFromJSON,
    CommonRevisionFromJSONTyped,
    CommonRevisionToJSON,
} from './CommonRevision';
import type { CommonWorkflowStatus } from './CommonWorkflowStatus';
import {
    CommonWorkflowStatusFromJSON,
    CommonWorkflowStatusFromJSONTyped,
    CommonWorkflowStatusToJSON,
} from './CommonWorkflowStatus';
import type { ConditionCondition } from './ConditionCondition';
import {
    ConditionConditionFromJSON,
    ConditionConditionFromJSONTyped,
    ConditionConditionToJSON,
} from './ConditionCondition';
import type { V1ObjectReference } from './V1ObjectReference';
import {
    V1ObjectReferenceFromJSON,
    V1ObjectReferenceFromJSONTyped,
    V1ObjectReferenceToJSON,
} from './V1ObjectReference';

/**
 * 
 * @export
 * @interface CommonAppStatus
 */
export interface CommonAppStatus {
    /**
     * 
     * @type {Array<CommonClusterObjectReference>}
     * @memberof CommonAppStatus
     */
    appliedResources?: Array<CommonClusterObjectReference>;
    /**
     * 
     * @type {Array<V1ObjectReference>}
     * @memberof CommonAppStatus
     */
    components?: Array<V1ObjectReference>;
    /**
     * 
     * @type {Array<ConditionCondition>}
     * @memberof CommonAppStatus
     */
    conditions?: Array<ConditionCondition>;
    /**
     * 
     * @type {CommonRevision}
     * @memberof CommonAppStatus
     */
    latestRevision?: CommonRevision;
    /**
     * 
     * @type {number}
     * @memberof CommonAppStatus
     */
    observedGeneration?: number;
    /**
     * 
     * @type {Array<CommonPolicyStatus>}
     * @memberof CommonAppStatus
     */
    policy?: Array<CommonPolicyStatus>;
    /**
     * 
     * @type {Array<CommonApplicationComponentStatus>}
     * @memberof CommonAppStatus
     */
    services?: Array<CommonApplicationComponentStatus>;
    /**
     * 
     * @type {string}
     * @memberof CommonAppStatus
     */
    status?: string;
    /**
     * 
     * @type {CommonWorkflowStatus}
     * @memberof CommonAppStatus
     */
    workflow?: CommonWorkflowStatus;
}

/**
 * Check if a given object implements the CommonAppStatus interface.
 */
export function instanceOfCommonAppStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommonAppStatusFromJSON(json: any): CommonAppStatus {
    return CommonAppStatusFromJSONTyped(json, false);
}

export function CommonAppStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonAppStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appliedResources': !exists(json, 'appliedResources') ? undefined : ((json['appliedResources'] as Array<any>).map(CommonClusterObjectReferenceFromJSON)),
        'components': !exists(json, 'components') ? undefined : ((json['components'] as Array<any>).map(V1ObjectReferenceFromJSON)),
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(ConditionConditionFromJSON)),
        'latestRevision': !exists(json, 'latestRevision') ? undefined : CommonRevisionFromJSON(json['latestRevision']),
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
        'policy': !exists(json, 'policy') ? undefined : ((json['policy'] as Array<any>).map(CommonPolicyStatusFromJSON)),
        'services': !exists(json, 'services') ? undefined : ((json['services'] as Array<any>).map(CommonApplicationComponentStatusFromJSON)),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'workflow': !exists(json, 'workflow') ? undefined : CommonWorkflowStatusFromJSON(json['workflow']),
    };
}

export function CommonAppStatusToJSON(value?: CommonAppStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appliedResources': value.appliedResources === undefined ? undefined : ((value.appliedResources as Array<any>).map(CommonClusterObjectReferenceToJSON)),
        'components': value.components === undefined ? undefined : ((value.components as Array<any>).map(V1ObjectReferenceToJSON)),
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(ConditionConditionToJSON)),
        'latestRevision': CommonRevisionToJSON(value.latestRevision),
        'observedGeneration': value.observedGeneration,
        'policy': value.policy === undefined ? undefined : ((value.policy as Array<any>).map(CommonPolicyStatusToJSON)),
        'services': value.services === undefined ? undefined : ((value.services as Array<any>).map(CommonApplicationComponentStatusToJSON)),
        'status': value.status,
        'workflow': CommonWorkflowStatusToJSON(value.workflow),
    };
}

