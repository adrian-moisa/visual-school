// Interfaces
import { Action } from '../interfaces/action';

// State
import { SharedUiActions } from './shared-ui.actions';
import { SharedUiState } from '../interfaces/shared-state';
import { sharedInitialState } from './shared-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:SharedUiReducer');

export const SharedUiReducer = (state: SharedUiState = sharedInitialState.ui, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}