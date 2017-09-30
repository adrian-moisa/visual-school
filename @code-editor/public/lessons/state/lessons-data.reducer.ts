// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { LessonsDataActions } from './lessons-data.actions';
import { LessonsDataState } from '../interfaces/lessons-state';
import { lessonsInitialState } from './lessons-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:LessonsReducer');

export const LessonsDataReducer = (state: LessonsDataState = lessonsInitialState.data, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}