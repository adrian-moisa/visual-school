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

declare var store: Store<AppState>;
declare var store$: Observable<AppState>;

let contentEl: HTMLElement;

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
     * Toggle navigation panel
     */
    toggleNavigation: (value?: boolean) => {
        debug('Toggle navigation:', value);
        store.dispatch(NavigatorUiActions.toggleNavigator());
    },

    /** 
     * Get navigation observable
     */
    navigation$: (): Observable<boolean> => {
        debug('Get navigation observable');
        return store$
            .distinctUntilChanged(NAV_IS_VISIBLE)
            .filter(NAV_IS_VISIBLE)
            .map(NAV_IS_VISIBLE)
    }

}