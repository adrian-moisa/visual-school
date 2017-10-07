import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { LessonsDataState } from '../interfaces/lessons-state'

// State
import { lessonsDataActions } from './lessons-data.actions'
import { lessonsInitialState } from './lessons-initial-state'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:lessonsDataReducer')
DEBUG.init && debug('Instantiate lessonsDataReducer')

export const lessonsDataReducer = (state: LessonsDataState = lessonsInitialState.data, action: Action<any>) => {
    switch (action.type) {

        // ====== GET LESSONS ======

        case lessonsDataActions.GET_LESSONS_OK:
            DEBUG.reduce && debug('GET_LESSONS_OK', action.payload)
            return Object.assign({}, state, <LessonsDataState>{ 
                lessons: action.payload 
            })

        default:
            return state
    }
}