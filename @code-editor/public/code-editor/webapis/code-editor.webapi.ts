import { Observable } from 'rxjs/Observable'
import { APP, DEBUG } from '../../../config/app'
import 'rxjs'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeEditorWebApi');
DEBUG.init && debug('Instantiate codeEditorWebApi');

export const codeEditorWebApi = {

    getLessonContent: (url: string): Observable<string> => {
        DEBUG.webapi && debug(`GET lesson content:`, url);

        return Observable.ajax({
            // url: `${APP.host}/code-samples/${url}`,
            url: `${APP.hostFiles}/${url}`,
            method: 'GET',
            responseType: 'text' // json
        })
            .map((e: any) => e.response)
            .do(e => DEBUG.webapi && debug(`GET OK lesson content:`, url, e));
    }

};