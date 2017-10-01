// Interfaces
import { AppState } from '../interfaces/app-state';

// State 
import { assistantInitialState } from '../../assistant/state/assistant-initial-state';
import { chaptersInitialState } from '../../chapters/state/chapters-initial-state';
import { codeEditorInitialState } from '../../code-editor/state/code-editor-initial-state';
import { lessonsInitialState } from '../../lessons/state/lessons-initial-state';
import { navigatorInitialState } from '../../navigator/state/navigator-initial-state';
import { sharedInitialState } from './shared-initial-state';

/**
 * Core initial state
 * <!> Not used for the moment
 * TODO find why reducers execute before state store
 */
export const appInitialState: AppState = {
    assistant: assistantInitialState,
    chapters: chaptersInitialState,
    codeEditor: codeEditorInitialState,
    lessons: lessonsInitialState,
    navigator: navigatorInitialState,
    shared: sharedInitialState,
};
