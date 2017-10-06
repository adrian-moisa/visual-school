import { createSelector } from 'reselect';

// Interfaces
import { LessonsState, LessonsDataState, LessonsUiState } from '../interfaces/lessons-state';
import { AppState } from '../../shared/interfaces/app-state';
import { Lesson } from '../interfaces/lesson'

export const LESSONS = (state: AppState) => state.lessons;

// ====== DATA ======

export const LESSONS_DATA = createSelector<AppState, LessonsState, LessonsDataState>(
    LESSONS,
    (state: LessonsState) => state.data
);

/** Current lesson */
export const LESSON = createSelector<AppState, LessonsDataState, Lesson>(
    LESSONS_DATA,
    (state: LessonsDataState) => state.lesson
);

/** Chapter lessons */
export const LESSONS_LIST = createSelector<AppState, LessonsDataState, Lesson[]>(
    LESSONS_DATA,
    (state: LessonsDataState) => state.lessons
);

// ====== UI ======

export const LESSONS_UI = createSelector<AppState, LessonsState, LessonsUiState>(
    LESSONS,
    (state: LessonsState) => state.ui
);