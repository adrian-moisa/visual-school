// Interfaces

export interface CodeEditorDataState {}

export interface CodeEditorUiState {
    isVisible: boolean
}

export interface CodeEditorState {
    data: CodeEditorDataState
    ui: CodeEditorUiState
}
