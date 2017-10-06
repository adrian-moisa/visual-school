import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { codeEditorUiActions } from './code-editor-ui.actions';
import { CodeEditorUiState } from '../interfaces/code-editor-state';
import { codeEditorInitialState } from './code-editor-initial-state';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeEditorUiReducer');
DEBUG.init && debug('Instantiate codeEditorUiReducer');

export const codeEditorUiReducer = (state: CodeEditorUiState = codeEditorInitialState.ui, action: Action<any>) => {
    
    switch (action.type) {
        
        // ====== TOGGLE CODE EDITOR ======

        case codeEditorUiActions.TOGGLE_CODE_EDITOR:
            let isVisible: boolean = action.payload !== undefined ? action.payload : !state.isVisible;
            DEBUG.reduce && debug('TOGGLE_CODE_EDITOR:', isVisible);
            return Object.assign({}, state, {isVisible: isVisible});

        default:
            return state
    }
}