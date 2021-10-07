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
import {
    ProviderCategoryModelSubcategories,
    ProviderCategoryModelSubcategoriesFromJSON,
    ProviderCategoryModelSubcategoriesFromJSONTyped,
    ProviderCategoryModelSubcategoriesToJSON,
} from './'

/**
 *
 * @export
 * @interface ProviderCategoryModel
 */
export interface ProviderCategoryModel {
    /**
     *
     * @type {string}
     * @memberof ProviderCategoryModel
     */
    name: string
    /**
     *
     * @type {string}
     * @memberof ProviderCategoryModel
     */
    id: string
    /**
     *
     * @type {Array<ProviderCategoryModelSubcategories>}
     * @memberof ProviderCategoryModel
     */
    subcategories: Array<ProviderCategoryModelSubcategories>
}

export function ProviderCategoryModelFromJSON(
    json: any
): ProviderCategoryModel {
    return ProviderCategoryModelFromJSONTyped(json, false)
}

export function ProviderCategoryModelFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): ProviderCategoryModel {
    if (json === undefined || json === null) {
        return json
    }
    return {
        name: json['name'],
        id: json['id'],
        subcategories: (json['subcategories'] as Array<any>).map(
            ProviderCategoryModelSubcategoriesFromJSON
        ),
    }
}

export function ProviderCategoryModelToJSON(
    value?: ProviderCategoryModel | null
): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        name: value.name,
        id: value.id,
        subcategories: (value.subcategories as Array<any>).map(
            ProviderCategoryModelSubcategoriesToJSON
        ),
    }
}
