// Interfaces
import { Action } from '../interfaces/action';

// State
import { SharedDataActions } from './shared-data.actions';
import { SharedDataState } from '../interfaces/shared-state';
import { sharedInitialState } from './shared-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:SharedReducer');

export const SharedDataReducer = (state: SharedDataState = sharedInitialState.data, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}