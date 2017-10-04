// Interfaces
import { Lesson } from '../../lessons/interfaces/lesson';

/**
 * Chapter
 * Container many lessons
 */
export interface Chapter {
    id: string;
    title: string;
    description: string;
    folder: string;
    lessons: Lesson[];
}