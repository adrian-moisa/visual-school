import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../interfaces/action';

// State
import { SharedUiActions } from './shared-ui.actions';
import { SharedUiState } from '../interfaces/shared-state';
import { sharedInitialState } from './shared-initial-state';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:sharedUiReducer');
DEBUG.init && debug('Instantiate sharedUiReducer');

export const sharedUiReducer = (state: SharedUiState = sharedInitialState.ui, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}