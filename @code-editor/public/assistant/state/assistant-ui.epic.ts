import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { assistantUiActions } from './assistant-ui.actions';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:assistantUiEpic');
DEBUG.init && debug('Instantiate assistantUiEpic');

export const assistantUiEpic: any = [];