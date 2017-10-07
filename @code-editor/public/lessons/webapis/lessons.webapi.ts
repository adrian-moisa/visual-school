import { Observable } from 'rxjs/Observable'
import { APP, DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Chapter } from '../../chapters/interfaces/chapter'
import { Lesson } from '../interfaces/lesson'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:lessonsWebApi')
DEBUG.constr && debug('Instantiate LessonsWebApi')

export const lessonsWebApi = {

    getLessons: (chapter: Chapter): Observable<Lesson[]> => {
        DEBUG.webapi && debug(`GET lessons:`, chapter.id)

        return Observable.ajax({
            url: `${APP.hostFiles}/@lessons-metadata/lessons.json`, // ${chapter.id}
            method: 'GET',
            responseType: 'json' // text
        })
            .map((e: any) => e.response)
            .do(lessons => DEBUG.webapi && debug(`GET OK lessons:`, chapter.id, lessons))
    }

}