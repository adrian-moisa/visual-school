import { Observable } from 'rxjs/Observable'
import { APP } from '../../../config/app';
import 'rxjs'

// Interfaces
import { Chapter } from '../interfaces/chapter';
import { Lesson } from '../../lessons/interfaces/lesson';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:ChaptersWebApi');
debug('Instantiate ChaptersWebApi');

/**
 * ChaptersWebApi
 */
export const ChaptersWebApi = {

    /**
     * Get chapters
     */
    getChapters: (): Observable<Chapter[]> => {
        debug(`GET chapters:`);

        return Observable.ajax({
            url: `${APP.hostFiles}/@lessons-metadata/chapters.json`,
            method: 'GET',
            responseType: 'json' // text
        })
            .map((e: any) => e.response)
            .do(chapters => debug(`GET OK chapters:`, chapters));
    },

};