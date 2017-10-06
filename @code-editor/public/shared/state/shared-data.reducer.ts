import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../interfaces/action';

// State
import { SharedDataActions } from './shared-data.actions';
import { SharedDataState } from '../interfaces/shared-state';
import { sharedInitialState } from './shared-initial-state';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:sharedDataReducer');
DEBUG.init && debug('Instantiate sharedDataReducer');

export const sharedDataReducer = (state: SharedDataState = sharedInitialState.data, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}