import { Observable } from 'rxjs/Observable'
import 'rxjs'

// Config
import { APP } from '../../../config/app';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeEditorWebApi');
debug('Instantiate CodeEditorWebApi');

/**
 * Code editor web api
 */
export const CodeEditorWebApi = {

    /**
     * Get entities list async
     */
    getLessonContent: (url: string): Observable<string> => {
        debug(`GET lesson content:`, url);

        return Observable.ajax({
            // url: `${APP.host}/code-samples/${url}`,
            url: `${APP.hostFiles}/${url}`,
            method: 'GET',
            responseType: 'text' // json
        })
            .map((e: any) => e.response)
            .do(e => debug(`GET OK lesson content:`, url, e));
    }

};