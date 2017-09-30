// Interfaces
import { Action } from '../../shared/interfaces/action';

/**
 * Navigator ui actions
 */
export class NavigatorUiActions {

    // ====== TOGGLE NAVIGATOR ======

    static TOGGLE_NAVIGATOR = 'TOGGLE_NAVIGATOR';
    static toggleNavigator(state?: boolean): Action<boolean> {
        return {
            type: NavigatorUiActions.TOGGLE_NAVIGATOR,
            payload: state
        };
    }
    
}