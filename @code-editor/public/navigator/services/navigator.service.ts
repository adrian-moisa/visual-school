import { Observable } from 'rxjs/Observable';
import { Store } from 'redux';
import 'rxjs';

// Interfaces
import { AppState } from '../../shared/interfaces/app-state';

// State
import { NavigatorUiActions } from '../state/navigator-ui.actions';
import { NAV_IS_VISIBLE } from '../state/navigator.selectors';

// Webapi
import { NavigatorWebApi } from '../webapis/navigator.webapi';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:NavigatorService');
debug('Instantiate NavigatorService');

// State
declare var store: Store<AppState>;
declare var store$: Observable<AppState>;

/** 
 * Navigator service 
 * Handles navigation panel.
 */
export const NavigatorService = {

    // ====== DATA ======

    /** 
     * Get lessons from a specific chapter
     */
    // getLessons: (chapter: Chapter): Observable<Lesson[]> => {
    //     debug('Get lesson content'); 
    //     return NavigatorWebApi.getLessons(chapter);
    // },

    // ====== LOGIC ======

    /** 
     * Toggle navigation panel visibility
     */
    toggleNavigator: (value?: boolean) => {
        debug('Toggle navigator:', value);
        store.dispatch(NavigatorUiActions.toggleNavigator());
    },

    /** 
     * Is navigation panel visible?
     */
    navigatorIsVis$: (): Observable<boolean> => {
        debug('Get navigator is visible observable');
        return store$.map(NAV_IS_VISIBLE).distinctUntilChanged();
    }

}