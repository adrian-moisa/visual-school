import { createSelector } from 'reselect';

// Interfaces
import { LessonsState, LessonsDataState, LessonsUiState } from '../interfaces/lessons-state';
import { AppState } from '../../shared/interfaces/app-state';
import { Lesson } from '../interfaces/lesson'

// ====== LESSONS ======

const _LESSONS = (state: AppState) => state.lessons;

const _DATA = createSelector<AppState, LessonsState, LessonsDataState>(
    _LESSONS, (state: LessonsState) => state.data
);

const _UI = createSelector<AppState, LessonsState, LessonsUiState>(
    _LESSONS, (state: LessonsState) => state.ui
);

// ====== DATA ======

/** Current lesson */
export const LESSON = createSelector<AppState, LessonsDataState, Lesson>(
    _DATA, (state: LessonsDataState) => state.lesson
);

export const LESSONS = createSelector<AppState, LessonsDataState, Lesson[]>(
    _DATA, (state: LessonsDataState) => state.lessons
);

// ====== UI ======