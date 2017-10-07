import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { Lesson } from '../interfaces/lesson'
import { Chapter } from '../../chapters/interfaces/chapter'

// State
import { lessonsDataActions } from './lessons-data.actions'

// Webapi
import { lessonsWebApi } from '../webapis/lessons.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:lessonsDataEpic')
DEBUG.constr && debug('Instantiate lessonsDataEpic')

// ====== LESSONS DATA EPIC ======

const getLessons = (action$: any) =>
    action$.ofType(lessonsDataActions.GET_LESSONS)
        .mergeMap((action: Action<Chapter>) => {
                DEBUG.epic && debug('GET_LESSONS')
                return lessonsWebApi.getLessons(action.payload)
                    .map(response => lessonsDataActions.getLessonsSuccess(response))
                    .catch(error => Observable.of(lessonsDataActions.getLessonsFail(error)))
            }
        )

export const lessonsDataEpic: any = [
    getLessons
]