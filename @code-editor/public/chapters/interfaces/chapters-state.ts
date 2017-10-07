// Interfaces
import { Chapter } from './chapter'

// Data
export interface ChaptersDataState {
    chapters: Chapter[]
    chapter: Chapter
}

// Ui
export interface ChaptersUiState {
    // Empty
}

// Chapters
export interface ChaptersState {
    data: ChaptersDataState
    ui: ChaptersUiState
}
