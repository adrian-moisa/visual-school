import { createSelector } from 'reselect';

// Interfaces
import { ChaptersState, ChaptersDataState, ChaptersUiState } from '../interfaces/chapters-state';
import { AppState } from '../../shared/interfaces/app-state';
import { Chapter } from '../interfaces/chapter'

export const CHAPTERS = (state: AppState) => state.chapters;

// ====== DATA ======

export const CHAPTERS_DATA = createSelector<AppState, ChaptersState, ChaptersDataState>(
    CHAPTERS,
    (state: ChaptersState) => state.data
);

/** Current chapter */
export const CHAPTER = createSelector<AppState, ChaptersDataState, Chapter>(
    CHAPTERS_DATA,
    (state: ChaptersDataState) => state.chapter
);

/** Chapters list for the entire course */
export const CHAPTERS_LIST = createSelector<AppState, ChaptersDataState, Chapter[]>(
    CHAPTERS_DATA,
    (state: ChaptersDataState) => state.chapters
);

// ====== UI ======

export const CHAPTERS_UI = createSelector<AppState, ChaptersState, ChaptersUiState>(
    CHAPTERS,
    (state: ChaptersState) => state.ui
);