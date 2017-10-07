// Interfaces
import { CodeBlock } from '../interfaces/code-block'

export interface CodeBlocksDataState {
    codeBlocks: CodeBlock[]
    codeBlock: CodeBlock
}

export interface CodeBlocksUiState {}

export interface CodeBlocksState {
    data: CodeBlocksDataState
    ui: CodeBlocksUiState
}
