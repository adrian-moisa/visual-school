import { Observable } from 'rxjs/Observable'
import { APP, DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { AssistAction } from '../interfaces/assist-action'
import { Lesson } from '../../lessons/interfaces/lesson'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:assistantWebApi');
DEBUG.init && debug('Instantiate assistantWebApi');

export const assistantWebApi = {
    
    getAssistActions: (lesson: Lesson): Observable<AssistAction[]> => {
        DEBUG.webapi && debug(`GET assistActionss:`, lesson.id);

        return Observable.ajax({
            url: `${APP.hostFiles}/@lessons-metadata/assist-actions.json`, // ${lesson.id}
            method: 'GET',
            responseType: 'json' // text
        })
            .map((e: any) => e.response)
            .do(assistants => DEBUG.webapi && debug(`GET OK assistActions:`, lesson.id, assistants));
    }

};