import { combineReducers } from 'redux'

// Assitant
import { AssistantDataReducer } from '../../assistant/state/assistant-data.reducer';
import { AssistantUiReducer } from '../../assistant/state/assistant-ui.reducer';

// Chapters
import { ChaptersDataReducer } from '../../chapters/state/chapters-data.reducer';
import { ChaptersUiReducer } from '../../chapters/state/chapters-ui.reducer';

// Code editor
import { CodeEditorDataReducer } from '../../code-editor/state/code-editor-data.reducer';
import { CodeEditorUiReducer } from '../../code-editor/state/code-editor-ui.reducer';

// Lessons
import { LessonsDataReducer } from '../../lessons/state/lessons-data.reducer';
import { LessonsUiReducer } from '../../lessons/state/lessons-ui.reducer';

// Navigator
import { NavigatorDataReducer } from '../../navigator/state/navigator-data.reducer';
import { NavigatorUiReducer } from '../../navigator/state/navigator-ui.reducer';

// Shared
import { SharedDataReducer } from '../../shared/state/shared-data.reducer';
import { SharedUiReducer } from '../../shared/state/shared-ui.reducer';

/**
 * App reducers
 */
export const appReducers = combineReducers({
    assitant: combineReducers({
        data: AssistantDataReducer,
        ui: AssistantUiReducer,
    }),
    codeEditor: combineReducers({
        data: CodeEditorDataReducer,
        ui: CodeEditorUiReducer,
    }),
    chapters: combineReducers({
        data: ChaptersDataReducer,
        ui: ChaptersUiReducer,
    }),
    lessons: combineReducers({
        data: LessonsDataReducer,
        ui: LessonsUiReducer,
    }),
    navigator: combineReducers({
        data: NavigatorDataReducer,
        ui: NavigatorUiReducer,
    }),
    shared: combineReducers({
        data: SharedDataReducer,
        ui: SharedUiReducer,
    }),
});