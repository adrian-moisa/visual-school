import { Observable } from 'rxjs/Observable';
import { Store } from 'redux';
import { DEBUG } from '../../../config/app'
import 'rxjs';

// Interfaces
import { AppState } from '../../shared/interfaces/app-state';

// State
import { NavigatorUiActions } from '../state/navigator-ui.actions';
import { NAV_IS_VISIBLE } from '../state/navigator.selectors';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:navigatorService');
DEBUG.init && debug('Instantiate navigatorService');

// State
declare var store: Store<AppState>;
declare var store$: Observable<AppState>;

export const navigatorService = {

    // ====== DATA ======

    // ====== MAPS ======

    // ====== LOGIC ======

    toggleNavigatorVis: (value?: boolean) => {
        DEBUG.logic && debug('Toggle navigator visibility:', value);
        store.dispatch(NavigatorUiActions.toggleNavigator());
        return navigatorService.navigatorIsVis$()
    },

    navigatorIsVis$: (): Observable<boolean> => {
        DEBUG.logic && debug('Observable navigator is visible');
        return store$.map(NAV_IS_VISIBLE).distinctUntilChanged();
    }
    
    // ====== UTILS ======

}