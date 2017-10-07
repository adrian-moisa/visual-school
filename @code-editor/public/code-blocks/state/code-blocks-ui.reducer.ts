import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { codeBlocksUiActions } from './code-blocks-ui.actions';
import { CodeBlocksUiState } from '../interfaces/code-blocks-state';
import { codeBlocksInitialState } from './code-blocks-initial-state';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeBlocksUiReducer');
DEBUG.init && debug('Instantiate codeBlocksUiReducer');

export const codeBlocksUiReducer = (state: CodeBlocksUiState = codeBlocksInitialState.ui, action: Action<any>) => {
    
    switch (action.type) {

        default:
            return state
    }
}