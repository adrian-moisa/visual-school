import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { NavigatorDataActions } from './navigator-data.actions';
import { NavigatorDataState } from '../interfaces/navigator-state';
import { navigatorInitialState } from './navigator-initial-state';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:navigatorDataReducer');
DEBUG.constr && debug('Instantiate navigatorDataReducer');

export const navigatorDataReducer = (state: NavigatorDataState = navigatorInitialState.data, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}