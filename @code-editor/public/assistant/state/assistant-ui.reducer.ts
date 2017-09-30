// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { AssistantUiActions } from './assistant-ui.actions';
import { AssistantUiState } from '../interfaces/assistant-state';
import { assistantInitialState } from './assistant-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:AssistantUiReducer');

export const AssistantUiReducer = (state: AssistantUiState = assistantInitialState.ui, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}