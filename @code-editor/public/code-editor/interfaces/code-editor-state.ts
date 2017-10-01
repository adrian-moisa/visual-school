// Interfaces

// Data
export interface CodeEditorDataState {
    // empty
}

// Ui
export interface CodeEditorUiState {
    isVisible: boolean;
}

// CodeEditor
export interface CodeEditorState {
    data: CodeEditorDataState;
    ui: CodeEditorUiState;
}
