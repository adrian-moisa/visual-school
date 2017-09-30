// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { CodeEditorUiActions } from './code-editor-ui.actions';
import { CodeEditorUiState } from '../interfaces/code-editor-state';
import { codeEditorInitialState } from './code-editor-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeEditorUiReducer');

export const CodeEditorUiReducer = (state: CodeEditorUiState = codeEditorInitialState.ui, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}