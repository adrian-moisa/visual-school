import { Observable } from 'rxjs/Observable'
import { APP } from '../../../config/app';
import 'rxjs'

// Interfaces
import { Chapter } from '../../chapters/interfaces/chapter';
import { Lesson } from '../interfaces/lesson';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:LessonsWebApi');
debug('Instantiate LessonsWebApi');

/**
 * LessonsWebApi
 */
export const LessonsWebApi = {

    /**
     * Get Lessons
     */
    getLessons: (chapter: Chapter): Observable<Lesson[]> => {
        debug(`GET lessons:`, chapter.id);

        return Observable.ajax({
            url: `${APP.hostFiles}/@lessons-metadata/lessons-ch${chapter.id}.json`,
            method: 'GET',
            responseType: 'json' // text
        })
            .map((e: any) => e.response)
            .do(lessons => debug(`GET OK lessons:`, chapter.id, lessons));
    }

};