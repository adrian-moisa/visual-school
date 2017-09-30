// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { CodeEditorDataActions } from './code-editor-data.actions';
import { CodeEditorDataState } from '../interfaces/code-editor-state';
import { codeEditorInitialState } from './code-editor-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeEditorReducer');

export const CodeEditorDataReducer = (state: CodeEditorDataState = codeEditorInitialState.data, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}