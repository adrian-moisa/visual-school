import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { codeBlocksUiActions } from './code-blocks-ui.actions'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeBlocksUiEpic')
DEBUG.constr && debug('Instantiate codeBlocksUiEpic')

export const codeBlocksUiEpic: any = []