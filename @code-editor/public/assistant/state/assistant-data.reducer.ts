import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action';
import { AssistantDataState } from '../interfaces/assistant-state';

// State
import { assistantDataActions } from './assistant-data.actions';
import { assistantInitialState } from './assistant-initial-state';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:assistantDataReducer');
DEBUG.init && debug('Instantiate assistantDataReducer');

export const assistantDataReducer = (state: AssistantDataState = assistantInitialState.data, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}