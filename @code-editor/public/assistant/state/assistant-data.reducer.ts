// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { AssistantDataActions } from './assistant-data.actions';
import { AssistantDataState } from '../interfaces/assistant-state';
import { assistantInitialState } from './assistant-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:AssistantReducer');

export const AssistantDataReducer = (state: AssistantDataState = assistantInitialState.data, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}