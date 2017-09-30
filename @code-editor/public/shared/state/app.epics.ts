import { combineEpics } from 'redux-observable';

// Assitant
import { assistantDataEpic } from '../../assistant/state/assistant-data.epic';
import { assistantUiEpic } from '../../assistant/state/assistant-ui.epic';

// Chapters
import { chaptersDataEpic } from '../../chapters/state/chapters-data.epic';
import { chaptersUiEpic } from '../../chapters/state/chapters-ui.epic';

// Code editor
import { codeEditorDataEpic } from '../../code-editor/state/code-editor-data.epic';
import { codeEditorUiEpic } from '../../code-editor/state/code-editor-ui.epic';

// Lessons
import { lessonsDataEpic } from '../../lessons/state/lessons-data.epic';
import { lessonsUiEpic } from '../../lessons/state/lessons-ui.epic';

// Navigator
import { navigatorDataEpic } from '../../navigator/state/navigator-data.epic';
import { navigatorUiEpic } from '../../navigator/state/navigator-ui.epic';

// Shared
import { sharedDataEpic } from '../../shared/state/shared-data.epic';
import { sharedUiEpic } from '../../shared/state/shared-ui.epic';

/**
 * App epics
 */
export const appEpics = combineEpics(
    ...assistantDataEpic,
    ...assistantUiEpic,
    ...chaptersDataEpic,
    ...chaptersUiEpic,
    ...codeEditorDataEpic,
    ...codeEditorUiEpic,
    ...lessonsDataEpic,
    ...lessonsUiEpic,
    ...navigatorDataEpic,
    ...navigatorUiEpic,
    ...sharedDataEpic,
    ...sharedUiEpic,
);