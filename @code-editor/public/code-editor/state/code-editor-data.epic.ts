import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { Lesson } from '../../lessons/interfaces/lesson'

// State
import { codeEditorDataActions } from './code-editor-data.actions'

// Webapi
import { codeEditorWebApi} from '../webapis/code-editor.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeEditorDataEpic')
DEBUG.init && debug('Instantiate codeEditorDataEpic')

// ====== CODE EDITOR DATA EPIC ======

export const codeEditorDataEpic: any = []