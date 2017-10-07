import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { Lesson } from '../../lessons/interfaces/lesson'

// State
import { codeBlocksDataActions } from './code-blocks-data.actions'

// Webapi
import { codeBlocksWebApi} from '../webapis/code-blocks.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeBlocksDataEpic')
DEBUG.init && debug('Instantiate codeBlocksDataEpic')

// ====== CODE BLOCKS DATA EPIC ======

const getCodeBlocksList = (action$: any) =>
    action$.ofType(codeBlocksDataActions.GET_CODE_BLOCKS)
    .do(DEBUG.epic && debug('GET_CODE_BLOCKS'))
        .mergeMap((action: Action<Lesson>) =>
        codeBlocksWebApi.getCodeBlocks(action.payload)
                .map(response => codeBlocksDataActions.getCodeBlocksSuccess(response))
                .catch(error => Observable.of(codeBlocksDataActions.getCodeBlocksFail(error)))
        )

export const codeBlocksDataEpic: any = [
    getCodeBlocksList
]