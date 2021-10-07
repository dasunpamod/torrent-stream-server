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
    TorrentFileModel,
    TorrentFileModelFromJSON,
    TorrentFileModelFromJSONTyped,
    TorrentFileModelToJSON,
} from './'

/**
 *
 * @export
 * @interface TorrentModel
 */
export interface TorrentModel {
    /**
     *
     * @type {string}
     * @memberof TorrentModel
     */
    link: string
    /**
     *
     * @type {string}
     * @memberof TorrentModel
     */
    infoHash: string
    /**
     *
     * @type {string}
     * @memberof TorrentModel
     */
    name: string
    /**
     *
     * @type {number}
     * @memberof TorrentModel
     */
    started: number
    /**
     *
     * @type {number}
     * @memberof TorrentModel
     */
    updated: number
    /**
     *
     * @type {Array<TorrentFileModel>}
     * @memberof TorrentModel
     */
    files: Array<TorrentFileModel>
    /**
     *
     * @type {number}
     * @memberof TorrentModel
     */
    downloaded: number
    /**
     *
     * @type {number}
     * @memberof TorrentModel
     */
    downloadSpeed: number
    /**
     *
     * @type {string}
     * @memberof TorrentModel
     */
    playlist: string
    /**
     *
     * @type {string}
     * @memberof TorrentModel
     */
    streamZip: string
}

export function TorrentModelFromJSON(json: any): TorrentModel {
    return TorrentModelFromJSONTyped(json, false)
}

export function TorrentModelFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): TorrentModel {
    if (json === undefined || json === null) {
        return json
    }
    return {
        link: json['link'],
        infoHash: json['infoHash'],
        name: json['name'],
        started: json['started'],
        updated: json['updated'],
        files: (json['files'] as Array<any>).map(TorrentFileModelFromJSON),
        downloaded: json['downloaded'],
        downloadSpeed: json['downloadSpeed'],
        playlist: json['playlist'],
        streamZip: json['streamZip'],
    }
}

export function TorrentModelToJSON(value?: TorrentModel | null): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        link: value.link,
        infoHash: value.infoHash,
        name: value.name,
        started: value.started,
        updated: value.updated,
        files: (value.files as Array<any>).map(TorrentFileModelToJSON),
        downloaded: value.downloaded,
        downloadSpeed: value.downloadSpeed,
        playlist: value.playlist,
        streamZip: value.streamZip,
    }
}
