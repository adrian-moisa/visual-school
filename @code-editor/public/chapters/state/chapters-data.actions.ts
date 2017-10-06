// Interfaces
import { Action } from '../../shared/interfaces/action';
import { Chapter } from '../../chapters/interfaces/chapter';

/**
 * Chapters actions
 */
export class ChaptersDataActions {

    // ====== GET CHAPTERS LIST ======

    static GET_CHAPTERS = 'GET_CHAPTERS';
    static getChapters(): Action<Chapter> {
        return {
            type: ChaptersDataActions.GET_CHAPTERS
        };
    }

    static GET_CHAPTERS_SUCCESS = 'GET_CHAPTERS_SUCCESS';
    static getChaptersSuccess(lessons: Chapter[]): Action<Chapter[]> {
        return {
            type: ChaptersDataActions.GET_CHAPTERS_SUCCESS,
            payload: lessons
        };
    }

    static GET_CHAPTERS_FAIL = 'GET_CHAPTERS_FAIL';
    static getChaptersFail(response: string): Action<string> {
        return {
            type: ChaptersDataActions.GET_CHAPTERS_FAIL,
            payload: response
        };
    }

}