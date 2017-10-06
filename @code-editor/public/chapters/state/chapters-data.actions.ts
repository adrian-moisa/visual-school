// Interfaces
import { Action } from '../../shared/interfaces/action';
import { Chapter } from '../../chapters/interfaces/chapter';

export class chaptersDataActions {

    // ====== GET CHAPTERS LIST ======

    static GET_CHAPTERS = 'GET_CHAPTERS';
    static getChapters(): Action<Chapter> {
        return {
            type: chaptersDataActions.GET_CHAPTERS
        };
    }

    static GET_CHAPTERS_SUCCESS = 'GET_CHAPTERS_SUCCESS';
    static getChaptersSuccess(lessons: Chapter[]): Action<Chapter[]> {
        return {
            type: chaptersDataActions.GET_CHAPTERS_SUCCESS,
            payload: lessons
        };
    }

    static GET_CHAPTERS_FAIL = 'GET_CHAPTERS_FAIL';
    static getChaptersFail(response: string): Action<string> {
        return {
            type: chaptersDataActions.GET_CHAPTERS_FAIL,
            payload: response
        };
    }

}