import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { LessonsUiActions } from './lessons-ui.actions';
import { LessonsUiState } from '../interfaces/lessons-state';
import { lessonsInitialState } from './lessons-initial-state';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:lessonsUiReducer');
DEBUG.init && debug('Instantiate lessonsUiReducer');

export const lessonsUiReducer = (state: LessonsUiState = lessonsInitialState.ui, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}