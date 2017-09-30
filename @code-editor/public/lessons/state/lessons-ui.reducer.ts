// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { LessonsUiActions } from './lessons-ui.actions';
import { LessonsUiState } from '../interfaces/lessons-state';
import { lessonsInitialState } from './lessons-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:LessonsUiReducer');

export const LessonsUiReducer = (state: LessonsUiState = lessonsInitialState.ui, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}