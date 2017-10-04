// Interfaces
import { AssistAction } from '../../assistant/interfaces/assist-action';

/**
 * Chapter lesson
 */
export interface Lesson {
    id: string;
    chId: string;
    file: string;
    title: string;
    description: string;
    icon: string;
    steps: AssistAction[];
}