import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action';
import { chaptersDataActions } from './chapters-data.actions';
import { Chapter } from '../../chapters/interfaces/chapter';

// Webapi
import { chaptersWebApi } from '../webapis/chapters.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:chaptersDataEpic')
DEBUG.init && debug('Instantiate chaptersDataEpic');

const getChaptersList = (action$: any) =>
    action$.ofType(chaptersDataActions.GET_CHAPTERS)
        .do(DEBUG.epic && debug('GET_CHAPTERS'))
        .mergeMap((action: Action<Chapter>) =>
            chaptersWebApi.getChapters()
                .map(response => chaptersDataActions.getChaptersSuccess(response))
                .catch(error => Observable.of(chaptersDataActions.getChaptersFail(error)))
        )

export const chaptersDataEpic: any = [
    getChaptersList
];