// Interfaces
import { AssistAction } from '../../assistant/interfaces/assist-action';

/**
 * Lessons are composed of code blocks and assitant steps
 */
export interface Lesson {
    id: string;
    chapterId: string;
    urlSlug: string;
    title: string;
    description: string;
    icon: string;
    // steps: AssistAction[];
}