// Interfaces
import { AppState } from '../interfaces/app-state'

// State 
import { assistantInitialState } from '../../assistant/state/assistant-initial-state'
import { chaptersInitialState } from '../../chapters/state/chapters-initial-state'
import { codeBlocksInitialState } from '../../code-blocks/state/code-blocks-initial-state'
import { codeEditorInitialState } from '../../code-editor/state/code-editor-initial-state'
import { lessonsInitialState } from '../../lessons/state/lessons-initial-state'
import { navigatorInitialState } from '../../navigator/state/navigator-initial-state'

/**
 * Core initial state
 * <!> Not used for the moment
 * TODO find why reducers execute before state store
 */
export const appInitialState: AppState = {
    assistant: assistantInitialState,
    chapters: chaptersInitialState,
    codeBlocks: codeBlocksInitialState,
    codeEditor: codeEditorInitialState,
    lessons: lessonsInitialState,
    navigator: navigatorInitialState,
}
