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
import type { SchemaUIParameter } from './SchemaUIParameter';
import {
    SchemaUIParameterFromJSON,
    SchemaUIParameterFromJSONTyped,
    SchemaUIParameterToJSON,
} from './SchemaUIParameter';
import type { V1beta1ComponentDefinitionSpec } from './V1beta1ComponentDefinitionSpec';
import {
    V1beta1ComponentDefinitionSpecFromJSON,
    V1beta1ComponentDefinitionSpecFromJSONTyped,
    V1beta1ComponentDefinitionSpecToJSON,
} from './V1beta1ComponentDefinitionSpec';
import type { V1beta1PolicyDefinitionSpec } from './V1beta1PolicyDefinitionSpec';
import {
    V1beta1PolicyDefinitionSpecFromJSON,
    V1beta1PolicyDefinitionSpecFromJSONTyped,
    V1beta1PolicyDefinitionSpecToJSON,
} from './V1beta1PolicyDefinitionSpec';
import type { V1beta1TraitDefinitionSpec } from './V1beta1TraitDefinitionSpec';
import {
    V1beta1TraitDefinitionSpecFromJSON,
    V1beta1TraitDefinitionSpecFromJSONTyped,
    V1beta1TraitDefinitionSpecToJSON,
} from './V1beta1TraitDefinitionSpec';
import type { V1beta1WorkflowStepDefinitionSpec } from './V1beta1WorkflowStepDefinitionSpec';
import {
    V1beta1WorkflowStepDefinitionSpecFromJSON,
    V1beta1WorkflowStepDefinitionSpecFromJSONTyped,
    V1beta1WorkflowStepDefinitionSpecToJSON,
} from './V1beta1WorkflowStepDefinitionSpec';

/**
 * 
 * @export
 * @interface V1DetailDefinitionResponse
 */
export interface V1DetailDefinitionResponse {
    /**
     * 
     * @type {string}
     * @memberof V1DetailDefinitionResponse
     */
    alias: string;
    /**
     * 
     * @type {V1beta1ComponentDefinitionSpec}
     * @memberof V1DetailDefinitionResponse
     */
    component?: V1beta1ComponentDefinitionSpec;
    /**
     * 
     * @type {string}
     * @memberof V1DetailDefinitionResponse
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof V1DetailDefinitionResponse
     */
    icon: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1DetailDefinitionResponse
     */
    labels: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof V1DetailDefinitionResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V1DetailDefinitionResponse
     */
    ownerAddon: string;
    /**
     * 
     * @type {V1beta1PolicyDefinitionSpec}
     * @memberof V1DetailDefinitionResponse
     */
    policy?: V1beta1PolicyDefinitionSpec;
    /**
     * 
     * @type {string}
     * @memberof V1DetailDefinitionResponse
     */
    schema: string;
    /**
     * 
     * @type {string}
     * @memberof V1DetailDefinitionResponse
     */
    status: string;
    /**
     * 
     * @type {V1beta1TraitDefinitionSpec}
     * @memberof V1DetailDefinitionResponse
     */
    trait?: V1beta1TraitDefinitionSpec;
    /**
     * 
     * @type {Array<SchemaUIParameter>}
     * @memberof V1DetailDefinitionResponse
     */
    uiSchema: Array<SchemaUIParameter>;
    /**
     * 
     * @type {V1beta1WorkflowStepDefinitionSpec}
     * @memberof V1DetailDefinitionResponse
     */
    workflowStep?: V1beta1WorkflowStepDefinitionSpec;
    /**
     * 
     * @type {string}
     * @memberof V1DetailDefinitionResponse
     */
    workloadType?: string;
}

/**
 * Check if a given object implements the V1DetailDefinitionResponse interface.
 */
export function instanceOfV1DetailDefinitionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "labels" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ownerAddon" in value;
    isInstance = isInstance && "schema" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "uiSchema" in value;

    return isInstance;
}

export function V1DetailDefinitionResponseFromJSON(json: any): V1DetailDefinitionResponse {
    return V1DetailDefinitionResponseFromJSONTyped(json, false);
}

export function V1DetailDefinitionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DetailDefinitionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': json['alias'],
        'component': !exists(json, 'component') ? undefined : V1beta1ComponentDefinitionSpecFromJSON(json['component']),
        'description': json['description'],
        'icon': json['icon'],
        'labels': json['labels'],
        'name': json['name'],
        'ownerAddon': json['ownerAddon'],
        'policy': !exists(json, 'policy') ? undefined : V1beta1PolicyDefinitionSpecFromJSON(json['policy']),
        'schema': json['schema'],
        'status': json['status'],
        'trait': !exists(json, 'trait') ? undefined : V1beta1TraitDefinitionSpecFromJSON(json['trait']),
        'uiSchema': ((json['uiSchema'] as Array<any>).map(SchemaUIParameterFromJSON)),
        'workflowStep': !exists(json, 'workflowStep') ? undefined : V1beta1WorkflowStepDefinitionSpecFromJSON(json['workflowStep']),
        'workloadType': !exists(json, 'workloadType') ? undefined : json['workloadType'],
    };
}

export function V1DetailDefinitionResponseToJSON(value?: V1DetailDefinitionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'component': V1beta1ComponentDefinitionSpecToJSON(value.component),
        'description': value.description,
        'icon': value.icon,
        'labels': value.labels,
        'name': value.name,
        'ownerAddon': value.ownerAddon,
        'policy': V1beta1PolicyDefinitionSpecToJSON(value.policy),
        'schema': value.schema,
        'status': value.status,
        'trait': V1beta1TraitDefinitionSpecToJSON(value.trait),
        'uiSchema': ((value.uiSchema as Array<any>).map(SchemaUIParameterToJSON)),
        'workflowStep': V1beta1WorkflowStepDefinitionSpecToJSON(value.workflowStep),
        'workloadType': value.workloadType,
    };
}

