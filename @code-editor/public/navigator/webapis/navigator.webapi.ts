import { Observable } from 'rxjs/Observable'
import 'rxjs'

// Config
import { APP } from '../../../config/app';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:NavigatorWebApi');
debug('Instantiate NavigatorWebApi');

/**
 * Navigator web api
 */
export const NavigatorWebApi = {

    /**
     * Get Lessons
     */
    // getLessons: (chapter: Chapter): Observable<Lesson[]> => {
    //     debug(`GET lessons:`, chapter.id);

    //     return Observable.ajax({
    //         // url: `${APP.host}/code-samples/${url}`,
    //         url: `${APP.hostFiles}/${chapter.id}`,
    //         method: 'GET',
    //         responseType: 'text' // json
    //     })
    //         .map((e: any) => e.response)
    //         .do(e => debug(`GET OK lessons:`, chapter.id, e));
    // }

};