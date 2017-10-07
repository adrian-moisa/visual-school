import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action';
import { Lesson } from '../../lessons/interfaces/lesson';

// State
import { codeEditorDataActions } from './code-editor-data.actions';

// Webapi
import { codeEditorWebApi} from '../webapis/code-editor.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeEditorDataEpic');
DEBUG.init && debug('Instantiate codeEditorDataEpic');

// ====== LESSONS DATA EPIC ======

const getCodeBlocksList = (action$: any) =>
    action$.ofType(codeEditorDataActions.GET_CODE_BLOCKS)
    .do(DEBUG.epic && debug('GET_CODE_BLOCKS'))
        .mergeMap((action: Action<Lesson>) =>
        codeEditorWebApi.getCodeBlocks(action.payload)
                .map(response => codeEditorDataActions.getCodeBlocksSuccess(response))
                .catch(error => Observable.of(codeEditorDataActions.getCodeBlocksFail(error)))
        )

export const codeEditorDataEpic: any = [
    getCodeBlocksList
];