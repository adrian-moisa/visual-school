import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { assistantDataActions } from './assistant-data.actions';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:assistantDataEpic');
DEBUG.init && debug('Instantiate assistantDataEpic');

export const assistantDataEpic: any = [];