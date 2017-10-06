// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { LessonsDataActions } from './lessons-data.actions';
import { LessonsDataState } from '../interfaces/lessons-state';
import { lessonsInitialState } from './lessons-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:LessonsReducer');

export const LessonsDataReducer = (state: LessonsDataState = lessonsInitialState.data, action: Action<any>) => {
    switch (action.type) {

        // ====== GET LESSONS LIST ======

        case LessonsDataActions.GET_LESSONS_SUCCESS:
            debug('GET_LESSONS_SUCCESS', action.payload)
            return Object.assign({}, state, <LessonsDataState>{ 
                lessons: action.payload 
            })

        default:
            return state
    }
}