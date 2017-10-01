import { createSelector } from 'reselect';

// Interfaces
import { CodeEditorState, CodeEditorDataState, CodeEditorUiState } from '../interfaces/code-editor-state';
import { AppState } from '../../shared/interfaces/app-state';

export const CODE_EDITOR = (state: AppState)  => state.codeEditor;

// ====== DATA ======

// export const CODE_EDITOR_DATA = createSelector<AppState, CodeEditorState, CodeEditorDataState>(
//     CODE_EDITOR,
//     (state: CodeEditorDataState) => state.someProp
// );

// ====== UI ======

export const CODE_EDITOR_UI = createSelector<AppState, CodeEditorState, CodeEditorUiState>(
    CODE_EDITOR,
    (state: CodeEditorState) => state.ui
);

/** Visibility of the code editor panel */
export const CODE_EDIT_IS_VISIBLE = createSelector<AppState, CodeEditorUiState, boolean>(
    CODE_EDITOR_UI,
    (state: CodeEditorUiState) => state.isVisible
);