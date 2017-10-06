import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action';
import { LessonsDataActions } from './lessons-data.actions';
import { Lesson } from '../interfaces/lesson';
import { Chapter } from '../../chapters/interfaces/chapter';

// Webapi
import { lessonsWebApi } from '../webapis/lessons.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:lessonsDataEpic')
DEBUG.init && debug('Instantiate lessonsDataEpic');

const getLessonsList = (action$: any) =>
    action$.ofType(LessonsDataActions.GET_LESSONS)
    .do(DEBUG.epic && debug('GET_LESSONS'))
        .mergeMap((action: Action<Chapter>) =>
            lessonsWebApi.getLessons(action.payload)
                .map(response => LessonsDataActions.getLessonsSuccess(response))
                .catch(error => Observable.of(LessonsDataActions.getLessonsFail(error)))
        )

export const lessonsDataEpic: any = [
    getLessonsList
];