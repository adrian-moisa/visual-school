// Interfaces
import { Action } from '../../shared/interfaces/action';
import { Chapter } from '../../chapters/interfaces/chapter';
import { Lesson } from '../interfaces/lesson';

/**
 * Lessons actions
 */
export class LessonsDataActions {

    // ====== GET LESSONS LIST ======

    static GET_LESSONS = 'GET_LESSONS';
    static getLessons(chapter: Chapter): Action<Chapter> {
        return {
            type: LessonsDataActions.GET_LESSONS,
            payload: chapter
        };
    }

    static GET_LESSONS_SUCCESS = 'GET_LESSONS_SUCCESS';
    static getLessonsSuccess(lessons: Lesson[]): Action<Lesson[]> {
        return {
            type: LessonsDataActions.GET_LESSONS_SUCCESS,
            payload: lessons
        };
    }

    static GET_LESSONS_FAIL = 'GET_LESSONS_FAIL';
    static getLessonsFail(response: string): Action<string> {
        return {
            type: LessonsDataActions.GET_LESSONS_FAIL,
            payload: response
        };
    }

}