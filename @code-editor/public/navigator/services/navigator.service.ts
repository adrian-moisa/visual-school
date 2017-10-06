import { Observable } from 'rxjs/Observable';
import { Store } from 'redux';
import 'rxjs';

// Interfaces
import { AppState } from '../../shared/interfaces/app-state';

// State
import { NavigatorUiActions } from '../state/navigator-ui.actions';
import { NAV_IS_VISIBLE } from '../state/navigator.selectors';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:NavigatorService');
debug('Instantiate NavigatorService');

// State
declare var store: Store<AppState>;
declare var store$: Observable<AppState>;

/** 
 * NavigatorService 
 * Handles navigation panel.
 */
export const NavigatorService = {

    // ====== DATA ======

    // ====== MAPS ======

    // ====== LOGIC ======

    /** 
     * Toggle navigation panel visibility
     */
    toggleNavigator: (value?: boolean) => {
        debug('Toggle navigator:', value);
        store.dispatch(NavigatorUiActions.toggleNavigator());
        return NavigatorService.navigatorIsVis$()
    },

    /** 
     * Is navigation panel visible observable
     */
    navigatorIsVis$: (): Observable<boolean> => {
        debug('Get navigator is visible observable');
        return store$.map(NAV_IS_VISIBLE).distinctUntilChanged();
    }
    
    // ====== UTILS ======

}