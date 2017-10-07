import { createSelector } from 'reselect'

// Interfaces
import { CodeEditorState, CodeEditorDataState, CodeEditorUiState } from '../interfaces/code-editor-state'
import { AppState } from '../../shared/interfaces/app-state'

// ====== CODE EDITOR ======

const _CODE_EDITOR = (state: AppState)  => state.codeEditor

export const _DATA = createSelector<AppState, CodeEditorState, CodeEditorDataState>(
    _CODE_EDITOR, (state: CodeEditorState) => state.data
)

const _UI = createSelector<AppState, CodeEditorState, CodeEditorUiState>(
    _CODE_EDITOR, (state: CodeEditorState) => state.ui
)

// ====== DATA ======

// ====== UI ======

export const CODE_EDIT_IS_VISIBLE = createSelector<AppState, CodeEditorUiState, boolean>(
    _UI, (state: CodeEditorUiState) => state.isVisible
)