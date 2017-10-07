// Interfaces
import {CodeBlock} from '../interfaces/code-block'

// Data
export interface CodeEditorDataState {
    codeBlocks: CodeBlock[]
    codeBlock: CodeBlock
}

// Ui
export interface CodeEditorUiState {
    isVisible: boolean
}

// CodeEditor
export interface CodeEditorState {
    data: CodeEditorDataState
    ui: CodeEditorUiState
}
