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

    static GET_CHAPTERS_OK = 'GET_CHAPTERS_OK';
    static getChaptersSuccess(lessons: Chapter[]): Action<Chapter[]> {
        return {
            type: chaptersDataActions.GET_CHAPTERS_OK,
            payload: lessons
        };
    }

    static GET_CHAPTERS_ERR = 'GET_CHAPTERS_ERR';
    static getChaptersFail(response: string): Action<string> {
        return {
            type: chaptersDataActions.GET_CHAPTERS_ERR,
            payload: response
        };
    }

}