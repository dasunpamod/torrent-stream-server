/* tslint:disable */
/* eslint-disable */
/**
 * Torrents Stream Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface SearchResultsModelErrors
 */
export interface SearchResultsModelErrors {
    /**
     *
     * @type {string}
     * @memberof SearchResultsModelErrors
     */
    provider: string
    /**
     *
     * @type {string}
     * @memberof SearchResultsModelErrors
     */
    error: string
}

export function SearchResultsModelErrorsFromJSON(
    json: any
): SearchResultsModelErrors {
    return SearchResultsModelErrorsFromJSONTyped(json, false)
}

export function SearchResultsModelErrorsFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): SearchResultsModelErrors {
    if (json === undefined || json === null) {
        return json
    }
    return {
        provider: json['provider'],
        error: json['error'],
    }
}

export function SearchResultsModelErrorsToJSON(
    value?: SearchResultsModelErrors | null
): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        provider: value.provider,
        error: value.error,
    }
}
