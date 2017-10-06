import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { LessonsDataActions } from './lessons-data.actions';
import { LessonsDataState } from '../interfaces/lessons-state';
import { lessonsInitialState } from './lessons-initial-state';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:lessonsDataReducer');
DEBUG.init && debug('Instantiate lessonsDataReducer');

export const lessonsDataReducer = (state: LessonsDataState = lessonsInitialState.data, action: Action<any>) => {
    switch (action.type) {

        // ====== GET LESSONS LIST ======

        case LessonsDataActions.GET_LESSONS_SUCCESS:
            DEBUG.reduce && debug('GET_LESSONS_SUCCESS', action.payload)
            return Object.assign({}, state, <LessonsDataState>{ 
                lessons: action.payload 
            })

        default:
            return state
    }
}