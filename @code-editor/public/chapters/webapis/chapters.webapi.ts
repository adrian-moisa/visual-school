import { Observable } from 'rxjs/Observable'
import { APP, DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Chapter } from '../interfaces/chapter';
import { Lesson } from '../../lessons/interfaces/lesson';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:chaptersWebApi');
DEBUG.init && debug('Instantiate chaptersWebApi');

/**
 * ChaptersWebApi
 */
export const chaptersWebApi = {

    getChapters: (): Observable<Chapter[]> => {
        DEBUG.webapi && debug(`GET chapters:`);

        return Observable.ajax({
            url: `${APP.hostFiles}/@lessons-metadata/chapters.json`,
            method: 'GET',
            responseType: 'json' // text
        })
            .map((e: any) => e.response)
            .do(chapters => DEBUG.webapi && debug(`GET OK chapters:`, chapters));
    },

};