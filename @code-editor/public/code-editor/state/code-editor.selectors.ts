import { createSelector } from 'reselect'

// Interfaces
import { CodeEditorState, CodeEditorDataState, CodeEditorUiState } from '../interfaces/code-editor-state'
import { AppState } from '../../shared/interfaces/app-state'
import { CodeBlock } from '../interfaces/code-block'

// ====== CODE EDITOR ======

const _EDITOR = (state: AppState)  => state.codeEditor

export const _DATA = createSelector<AppState, CodeEditorState, CodeEditorDataState>(
    _EDITOR, (state: CodeEditorState) => state.data
)

const _UI = createSelector<AppState, CodeEditorState, CodeEditorUiState>(
    _EDITOR, (state: CodeEditorState) => state.ui
)

// ====== DATA ======

/** Current lesson */
export const CODE_BLOCK = createSelector<AppState, CodeEditorDataState, CodeBlock>(
    _DATA, (state: CodeEditorDataState) => state.codeBlock
)

export const CODE_BLOCKS = createSelector<AppState, CodeEditorDataState, CodeBlock[]>(
    _DATA, (state: CodeEditorDataState) => state.codeBlocks
)

// ====== UI ======

export const CODE_EDIT_IS_VISIBLE = createSelector<AppState, CodeEditorUiState, boolean>(
    _UI, (state: CodeEditorUiState) => state.isVisible
)