import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { CodeEditorDataState } from '../interfaces/code-editor-state'

// State
import { codeEditorDataActions } from './code-editor-data.actions'
import { codeEditorInitialState } from './code-editor-initial-state'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeEditorDataReducer')
DEBUG.constr && debug('Instantiate codeEditorDataReducer')

export const codeEditorDataReducer = (state: CodeEditorDataState = codeEditorInitialState.data, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}