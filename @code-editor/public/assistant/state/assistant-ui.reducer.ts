import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { AssistantUiState } from '../interfaces/assistant-state'

// State
import { assistantUiActions } from './assistant-ui.actions'
import { assistantInitialState } from './assistant-initial-state'

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:assistantUiReducer')
DEBUG.constr && debug('Instantiate assistantUiReducer')

export const assistantUiReducer = (state: AssistantUiState = assistantInitialState.ui, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}