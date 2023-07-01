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
import type { ModelValue } from './ModelValue';
import {
    ModelValueFromJSON,
    ModelValueFromJSONTyped,
    ModelValueToJSON,
} from './ModelValue';

/**
 * 
 * @export
 * @interface V1PipelineRunBriefing
 */
export interface V1PipelineRunBriefing {
    /**
     * 
     * @type {string}
     * @memberof V1PipelineRunBriefing
     */
    contextName: string;
    /**
     * 
     * @type {Array<ModelValue>}
     * @memberof V1PipelineRunBriefing
     */
    contextValues: Array<ModelValue>;
    /**
     * 
     * @type {string}
     * @memberof V1PipelineRunBriefing
     */
    endTime: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1PipelineRunBriefing
     */
    finished: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1PipelineRunBriefing
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof V1PipelineRunBriefing
     */
    phase: string;
    /**
     * 
     * @type {string}
     * @memberof V1PipelineRunBriefing
     */
    pipelineRunName: string;
    /**
     * 
     * @type {string}
     * @memberof V1PipelineRunBriefing
     */
    startTime: string;
}

/**
 * Check if a given object implements the V1PipelineRunBriefing interface.
 */
export function instanceOfV1PipelineRunBriefing(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contextName" in value;
    isInstance = isInstance && "contextValues" in value;
    isInstance = isInstance && "endTime" in value;
    isInstance = isInstance && "finished" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "phase" in value;
    isInstance = isInstance && "pipelineRunName" in value;
    isInstance = isInstance && "startTime" in value;

    return isInstance;
}

export function V1PipelineRunBriefingFromJSON(json: any): V1PipelineRunBriefing {
    return V1PipelineRunBriefingFromJSONTyped(json, false);
}

export function V1PipelineRunBriefingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PipelineRunBriefing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contextName': json['contextName'],
        'contextValues': ((json['contextValues'] as Array<any>).map(ModelValueFromJSON)),
        'endTime': json['endTime'],
        'finished': json['finished'],
        'message': json['message'],
        'phase': json['phase'],
        'pipelineRunName': json['pipelineRunName'],
        'startTime': json['startTime'],
    };
}

export function V1PipelineRunBriefingToJSON(value?: V1PipelineRunBriefing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contextName': value.contextName,
        'contextValues': ((value.contextValues as Array<any>).map(ModelValueToJSON)),
        'endTime': value.endTime,
        'finished': value.finished,
        'message': value.message,
        'phase': value.phase,
        'pipelineRunName': value.pipelineRunName,
        'startTime': value.startTime,
    };
}
