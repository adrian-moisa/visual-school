import { createSelector } from 'reselect'

// Interfaces
import { ChaptersState, ChaptersDataState, ChaptersUiState } from '../interfaces/chapters-state'
import { AppState } from '../../shared/interfaces/app-state'
import { Chapter } from '../interfaces/chapter'

// ====== CHAPTERS ======

const _CHAPTERS = (state: AppState) => state.chapters

const _DATA = createSelector<AppState, ChaptersState, ChaptersDataState>(
    _CHAPTERS, (state: ChaptersState) => state.data
)

const _UI = createSelector<AppState, ChaptersState, ChaptersUiState>(
    _CHAPTERS, (state: ChaptersState) => state.ui
)

// ====== DATA ======

/** Current chapter */
export const CHAPTER = createSelector<AppState, ChaptersDataState, Chapter>(
    _DATA, (state: ChaptersDataState) => state.chapter
)

export const CHAPTERS = createSelector<AppState, ChaptersDataState, Chapter[]>(
    _DATA, (state: ChaptersDataState) => state.chapters
)

// ====== UI ======