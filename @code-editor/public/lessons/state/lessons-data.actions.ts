// Interfaces
import { Action } from '../../shared/interfaces/action'
import { Chapter } from '../../chapters/interfaces/chapter'
import { Lesson } from '../interfaces/lesson'

export class lessonsDataActions {

    // ====== GET LESSONS ======

    static GET_LESSONS = 'GET_LESSONS'
    static getLessons(chapter: Chapter): Action<Chapter> {
        return {
            type: lessonsDataActions.GET_LESSONS,
            payload: chapter
        }
    }

    static GET_LESSONS_OK = 'GET_LESSONS_OK'
    static getLessonsSuccess(lessons: Lesson[]): Action<Lesson[]> {
        return {
            type: lessonsDataActions.GET_LESSONS_OK,
            payload: lessons
        }
    }

    static GET_LESSONS_ERR = 'GET_LESSONS_ERR'
    static getLessonsFail(response: string): Action<string> {
        return {
            type: lessonsDataActions.GET_LESSONS_ERR,
            payload: response
        }
    }

}