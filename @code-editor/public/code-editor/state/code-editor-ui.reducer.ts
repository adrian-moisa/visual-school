// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { CodeEditorUiActions } from './code-editor-ui.actions';
import { CodeEditorUiState } from '../interfaces/code-editor-state';
import { codeEditorInitialState } from './code-editor-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeEditorUiReducer');

export const CodeEditorUiReducer = (state: CodeEditorUiState = codeEditorInitialState.ui, action: Action<any>) => {
    
    switch (action.type) {
        
        // ====== TOGGLE CODE EDITOR ======

        case CodeEditorUiActions.TOGGLE_CODE_EDITOR:
            let isVisible: boolean = action.payload !== undefined ? action.payload : !state.isVisible;
            debug('TOGGLE_CODE_EDITOR:', isVisible);
            return Object.assign({}, state, {isVisible: isVisible});

        default:
            return state
    }
}