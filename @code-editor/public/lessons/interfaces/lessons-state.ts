// Interfaces
import { Lesson } from './lesson'

// Data
export interface LessonsDataState {
    lessons: Lesson[]
    lesson: Lesson
}

// Ui
export interface LessonsUiState {
    // empty
}

// Lessons
export interface LessonsState {
    data: LessonsDataState
    ui: LessonsUiState
}
