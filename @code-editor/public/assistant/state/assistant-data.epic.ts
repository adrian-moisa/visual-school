import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { Lesson } from '../../lessons/interfaces/lesson'

// State
import { assistantDataActions } from './assistant-data.actions'

// Webapi
import { assistantWebApi } from '../webapis/assistant.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:assistantDataEpic')
DEBUG.constr && debug('Instantiate assistantDataEpic')

// ====== ASSISTANT DATA EPIC ======

const getAssistActionsList = (action$: any) =>
    action$.ofType(assistantDataActions.GET_ASSIST_ACTIONS)
        .mergeMap((action: Action<Lesson>) => {
                DEBUG.epic && debug('GET_ASSIST_ACTIONS')
                return assistantWebApi.getAssistActions(action.payload)
                    .map(response => assistantDataActions.getAssistActionsSuccess(response))
                    .catch(error => Observable.of(assistantDataActions.getAssistActionsFail(error)))
            }
        )

export const assistantDataEpic: any = []