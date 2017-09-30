// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { NavigatorDataActions } from './navigator-data.actions';
import { NavigatorDataState } from '../interfaces/navigator-state';
import { navigatorInitialState } from './navigator-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:NavigatorReducer');

export const NavigatorDataReducer = (state: NavigatorDataState = navigatorInitialState.data, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}