import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { NavigatorUiActions } from './navigator-ui.actions';
import { NavigatorUiState } from '../interfaces/navigator-state';
import { navigatorInitialState } from './navigator-initial-state';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:navigatorUiReducer');
DEBUG.init && debug('Instantiate navigatorUiReducer');

export const navigatorUiReducer = (state: NavigatorUiState = navigatorInitialState.ui, action: Action<any>) => {

    switch (action.type) {

        // ====== TOGGLE NAVIGATOR ======

        case NavigatorUiActions.TOGGLE_NAVIGATOR:
            let isVisible: boolean = action.payload !== undefined ? action.payload : !state.isVisible;
            DEBUG.reduce && debug('TOGGLE_NAVIGATOR:', isVisible);
            return Object.assign({}, state, {isVisible: isVisible});

        default:
            return state
    }
}