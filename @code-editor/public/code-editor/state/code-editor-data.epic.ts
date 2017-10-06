import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action';
import { codeEditorDataActions } from './code-editor-data.actions';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeEditorDataEpic');
DEBUG.init && debug('Instantiate codeEditorDataEpic');

export const codeEditorDataEpic: any = [];