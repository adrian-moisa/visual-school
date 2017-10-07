import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { chaptersDataActions } from './chapters-data.actions'
import { Chapter } from '../../chapters/interfaces/chapter'

// Webapi
import { chaptersWebApi } from '../webapis/chapters.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:chaptersDataEpic')
DEBUG.constr && debug('Instantiate chaptersDataEpic')

// ====== CHAPTERS DATA EPIC ======

const getChapters = (action$: any) =>
    action$.ofType(chaptersDataActions.GET_CHAPTERS)
        .mergeMap((action: Action<Chapter>) => {
                DEBUG.epic && debug('GET_CHAPTERS')
                return chaptersWebApi.getChapters()
                    .map(response => chaptersDataActions.getChaptersSuccess(response))
                    .catch(error => Observable.of(chaptersDataActions.getChaptersFail(error)))
            }
        )

export const chaptersDataEpic: any = [
    getChapters
]