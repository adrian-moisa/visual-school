import { combineReducers } from 'redux'

// Assitant
import { assistantDataReducer } from '../../assistant/state/assistant-data.reducer'
import { assistantUiReducer } from '../../assistant/state/assistant-ui.reducer'

// Chapters
import { chaptersDataReducer } from '../../chapters/state/chapters-data.reducer'
import { chaptersUiReducer } from '../../chapters/state/chapters-ui.reducer'

// Code blocks
import { codeBlocksDataReducer } from '../../code-blocks/state/code-blocks-data.reducer'
import { codeBlocksUiReducer } from '../../code-blocks/state/code-blocks-ui.reducer'

// Code editor
import { codeEditorDataReducer } from '../../code-editor/state/code-editor-data.reducer'
import { codeEditorUiReducer } from '../../code-editor/state/code-editor-ui.reducer'

// Lessons
import { lessonsDataReducer } from '../../lessons/state/lessons-data.reducer'
import { lessonsUiReducer } from '../../lessons/state/lessons-ui.reducer'

// Navigator
import { navigatorDataReducer } from '../../navigator/state/navigator-data.reducer'
import { navigatorUiReducer } from '../../navigator/state/navigator-ui.reducer'

export const appReducers = combineReducers({
    assitant: combineReducers({
        data: assistantDataReducer,
        ui: assistantUiReducer,
    }),
    codeBlocks: combineReducers({
        data: codeBlocksDataReducer,
        ui: codeBlocksUiReducer,
    }),
    codeEditor: combineReducers({
        data: codeEditorDataReducer,
        ui: codeEditorUiReducer,
    }),
    chapters: combineReducers({
        data: chaptersDataReducer,
        ui: chaptersUiReducer,
    }),
    lessons: combineReducers({
        data: lessonsDataReducer,
        ui: lessonsUiReducer,
    }),
    navigator: combineReducers({
        data: navigatorDataReducer,
        ui: navigatorUiReducer,
    }),
})