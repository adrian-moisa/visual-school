import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { AssistantDataState } from '../interfaces/assistant-state'

// State
import { assistantDataActions } from './assistant-data.actions'
import { assistantInitialState } from './assistant-initial-state'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:assistantDataReducer')
DEBUG.constr && debug('Instantiate assistantDataReducer')

export const assistantDataReducer = (state: AssistantDataState = assistantInitialState.data, action: Action<any>) => {
    switch (action.type) {

        // ====== GET ASSIST ACTIONS ======

        case assistantDataActions.GET_ASSIST_ACTIONS_OK:
            DEBUG.reduce && debug('GET_ASSIST_ACTIONS_OK', action.payload)
            return Object.assign({}, state, <AssistantDataState>{ 
                assistActions: action.payload, 
                assistAction: action.payload[0], // TODO proper routing 
            })

        default:
            return state
    }
}