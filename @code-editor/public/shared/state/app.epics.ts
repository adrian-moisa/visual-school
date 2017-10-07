import { combineEpics } from 'redux-observable';

// Assitant
import { assistantDataEpic } from '../../assistant/state/assistant-data.epic';
import { assistantUiEpic } from '../../assistant/state/assistant-ui.epic';

// Chapters
import { chaptersDataEpic } from '../../chapters/state/chapters-data.epic';
import { chaptersUiEpic } from '../../chapters/state/chapters-ui.epic';

// Code blocks
import { codeBlocksDataEpic } from '../../code-blocks/state/code-blocks-data.epic';
import { codeBlocksUiEpic } from '../../code-blocks/state/code-blocks-ui.epic';

// Code editor
import { codeEditorDataEpic } from '../../code-editor/state/code-editor-data.epic';
import { codeEditorUiEpic } from '../../code-editor/state/code-editor-ui.epic';

// Lessons
import { lessonsDataEpic } from '../../lessons/state/lessons-data.epic';
import { lessonsUiEpic } from '../../lessons/state/lessons-ui.epic';

// Navigator
import { navigatorDataEpic } from '../../navigator/state/navigator-data.epic';
import { navigatorUiEpic } from '../../navigator/state/navigator-ui.epic';

/**
 * App epics
 */
export const appEpics = combineEpics(
    
    // Assitant
    ...assistantDataEpic,
    ...assistantUiEpic,

    // Chapters
    ...chaptersDataEpic,
    ...chaptersUiEpic,

    // Code blocks
    ...codeBlocksDataEpic,
    ...codeBlocksUiEpic,

    // Code editor
    ...codeEditorDataEpic,
    ...codeEditorUiEpic,

    // Lessons
    ...lessonsDataEpic,
    ...lessonsUiEpic,

    // Navigator
    ...navigatorDataEpic,
    ...navigatorUiEpic,
);