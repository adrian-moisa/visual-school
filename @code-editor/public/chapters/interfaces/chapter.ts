// Interfaces
import { Lesson } from '../../lessons/interfaces/lesson';

/**
 * Chapter
 * Container many lessons
 */
export interface Chapter {
    title: string;
    description: string;
    url: string;
    lessons: Lesson[];
}