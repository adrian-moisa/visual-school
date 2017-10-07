// Interfaces
import { Lesson } from '../../lessons/interfaces/lesson'

/**
 * Chapter
 * Container many lessons
 */
export interface Chapter {
    id: string
    icon: string
    title: string
    description: string
    urlSlug: string
    // lessons: Lesson[]
}