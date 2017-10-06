import { Observable } from 'rxjs/Observable';
import { Store } from 'redux';
import 'rxjs';

// Interfaces
import { AppState } from '../../shared/interfaces/app-state';
import { Chapter } from '../../chapters/interfaces/chapter';

// State
import { ChaptersDataActions } from '../state/chapters-data.actions';
import { CHAPTERS_LIST, CHAPTER } from '../state/chapters.selectors';

// Webapi
import { ChaptersWebApi } from '../webapis/chapters.webapi';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:ChaptersService');
debug('Instantiate ChaptersService');

// State
declare var store: Store<AppState>;
declare var store$: Observable<AppState>;

/** 
 * ChaptersService 
 * Handles lesons in the app.
 */
export const ChaptersService = {

    // ====== DATA ======

    /** 
     * Get all chapters
     */
    getChapters: (): Observable<Chapter[]> => {
        debug('Get chapters'); 
        store.dispatch(ChaptersDataActions.getChapters());
        return ChaptersService.chapters$()
    },
    
    /** 
     * Get chapters list observable
     */
    chapters$: (): Observable<Chapter[]> => {
        debug('chapters observable');
        return store$.map(CHAPTERS_LIST)
            .filter(e => e !== undefined && e !== null)
            .distinctUntilChanged();
    },
    
    /** 
     * Get current chapter observable
     */
    chapter$: (): Observable<Chapter> => {
        debug('chapter observable');
        return store$.map(CHAPTER)
            .filter(e => e !== undefined && e !== null)
            .distinctUntilChanged();
    }

    // ====== MAPS ======
    
    // ====== LOGIC ======
    
    // ====== UTILS ======

}