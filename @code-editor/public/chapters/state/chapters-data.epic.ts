import { Observable } from 'rxjs/Observable'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action';
import { ChaptersDataActions } from './chapters-data.actions';
import { Chapter } from '../../chapters/interfaces/chapter';

// Webapi
import { ChaptersWebApi } from '../webapis/chapters.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:chaptersDataEpic')

/**
 * Get chapters list
 */
const getChaptersList = (action$: any) =>
    action$.ofType(ChaptersDataActions.GET_CHAPTERS)
        .do(debug('GET_CHAPTERS'))
        .mergeMap((action: Action<Chapter>) =>
            ChaptersWebApi.getChapters()
                .map(response => ChaptersDataActions.getChaptersSuccess(response))
                .catch(error => Observable.of(ChaptersDataActions.getChaptersFail(error)))
        )

export const chaptersDataEpic: any = [
    getChaptersList
];