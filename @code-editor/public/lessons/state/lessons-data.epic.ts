import { Observable } from 'rxjs/Observable'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action';
import { LessonsDataActions } from './lessons-data.actions';
import { Lesson } from '../interfaces/lesson';
import { Chapter } from '../../chapters/interfaces/chapter';

// Webapi
import { LessonsWebApi } from '../webapis/lessons.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:lessonsDataEpic')

/**
 * Get lessons list
 */
const getLessonsList = (action$: any) =>
    action$.ofType(LessonsDataActions.GET_LESSONS)
    .do(debug('GET_LESSONS'))
        .mergeMap((action: Action<Chapter>) =>
            LessonsWebApi.getLessons(action.payload)
                .map(response => LessonsDataActions.getLessonsSuccess(response))
                .catch(error => Observable.of(LessonsDataActions.getLessonsFail(error)))
        )

export const lessonsDataEpic: any = [
    getLessonsList
];