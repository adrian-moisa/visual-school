import { createSelector } from 'reselect'

// Interfaces
import { CodeBlocksState, CodeBlocksDataState, CodeBlocksUiState } from '../interfaces/code-blocks-state'
import { AppState } from '../../shared/interfaces/app-state'
import { CodeBlock } from '../interfaces/code-block'

// ====== CODE BLOCKS ======

const _CODE_BLOCKS = (state: AppState)  => state.codeBlocks

export const _DATA = createSelector<AppState, CodeBlocksState, CodeBlocksDataState>(
    _CODE_BLOCKS, (state: CodeBlocksState) => state.data
)

const _UI = createSelector<AppState, CodeBlocksState, CodeBlocksUiState>(
    _CODE_BLOCKS, (state: CodeBlocksState) => state.ui
)

// ====== DATA ======

/** Current lesson */
export const CODE_BLOCK = createSelector<AppState, CodeBlocksDataState, CodeBlock>(
    _DATA, (state: CodeBlocksDataState) => state.codeBlock
)

export const CODE_BLOCKS = createSelector<AppState, CodeBlocksDataState, CodeBlock[]>(
    _DATA, (state: CodeBlocksDataState) => state.codeBlocks
)

// ====== UI ======