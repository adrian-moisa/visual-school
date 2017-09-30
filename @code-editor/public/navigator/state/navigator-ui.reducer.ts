// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { NavigatorUiActions } from './navigator-ui.actions';
import { NavigatorUiState } from '../interfaces/navigator-state';
import { navigatorInitialState } from './navigator-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:NavigatorUiReducer');

export const NavigatorUiReducer = (state: NavigatorUiState = navigatorInitialState.ui, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}