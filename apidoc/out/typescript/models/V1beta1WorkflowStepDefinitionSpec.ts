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
import type { CommonDefinitionReference } from './CommonDefinitionReference';
import {
    CommonDefinitionReferenceFromJSON,
    CommonDefinitionReferenceFromJSONTyped,
    CommonDefinitionReferenceToJSON,
} from './CommonDefinitionReference';
import type { CommonSchematic } from './CommonSchematic';
import {
    CommonSchematicFromJSON,
    CommonSchematicFromJSONTyped,
    CommonSchematicToJSON,
} from './CommonSchematic';

/**
 * 
 * @export
 * @interface V1beta1WorkflowStepDefinitionSpec
 */
export interface V1beta1WorkflowStepDefinitionSpec {
    /**
     * 
     * @type {CommonDefinitionReference}
     * @memberof V1beta1WorkflowStepDefinitionSpec
     */
    definitionRef?: CommonDefinitionReference;
    /**
     * 
     * @type {CommonSchematic}
     * @memberof V1beta1WorkflowStepDefinitionSpec
     */
    schematic?: CommonSchematic;
}

/**
 * Check if a given object implements the V1beta1WorkflowStepDefinitionSpec interface.
 */
export function instanceOfV1beta1WorkflowStepDefinitionSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1beta1WorkflowStepDefinitionSpecFromJSON(json: any): V1beta1WorkflowStepDefinitionSpec {
    return V1beta1WorkflowStepDefinitionSpecFromJSONTyped(json, false);
}

export function V1beta1WorkflowStepDefinitionSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1WorkflowStepDefinitionSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'definitionRef': !exists(json, 'definitionRef') ? undefined : CommonDefinitionReferenceFromJSON(json['definitionRef']),
        'schematic': !exists(json, 'schematic') ? undefined : CommonSchematicFromJSON(json['schematic']),
    };
}

export function V1beta1WorkflowStepDefinitionSpecToJSON(value?: V1beta1WorkflowStepDefinitionSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'definitionRef': CommonDefinitionReferenceToJSON(value.definitionRef),
        'schematic': CommonSchematicToJSON(value.schematic),
    };
}
