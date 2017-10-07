import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { codeEditorUiActions } from './code-editor-ui.actions'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeEditorUiEpic')
DEBUG.init && debug('Instantiate codeEditorUiEpic')

export const codeEditorUiEpic: any = []