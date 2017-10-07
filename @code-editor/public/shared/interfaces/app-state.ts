
// Interfaces
import { AssistantState } from '../../assistant/interfaces/assistant-state';
import { ChaptersState } from '../../chapters/interfaces/chapters-state';
import { CodeEditorState } from '../../code-editor/interfaces/code-editor-state';
import { LessonsState } from '../../lessons/interfaces/lessons-state';
import { NavigatorState } from '../../navigator/interfaces/navigator-state';

export interface AppState {
    assistant: AssistantState;
    chapters: ChaptersState;
    codeEditor: CodeEditorState;
    lessons: LessonsState;
    navigator: NavigatorState;
}
