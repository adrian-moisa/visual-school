
// Interfaces
import { AssistantState } from '../../assistant/interfaces/assistant-state';
import { ChaptersState } from '../../chapters/interfaces/chapters-state';
import { CodeEditorState } from '../../code-editor/interfaces/code-editor-state';
import { LessonsState } from '../../lessons/interfaces/lessons-state';
import { NavigatorState } from '../../navigator/interfaces/navigator-state';
import { SharedDataState } from './shared-state';

/**
 * App state
 */
export interface AppState {
    admin: AssistantState;
    catalog: ChaptersState;
    editor: CodeEditorState;
    engine: LessonsState;
    pages: NavigatorState;
    shared: SharedDataState;
}
