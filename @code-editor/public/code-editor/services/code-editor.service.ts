import { Observable } from 'rxjs/Observable';
import { Store } from 'redux';
import 'rxjs';

// Interfaces
import { AppState } from '../../shared/interfaces/app-state';

// State
import { CodeEditorUiActions } from '../state/code-editor-ui.actions';
import { CODE_EDIT_IS_VISIBLE } from '../state/code-editor.selectors';

// Webapi
import { CodeEditorWebApi } from '../webapis/code-editor.webapi';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeEditorService');
debug('Instantiate CodeEditorService');

// State
declare var store: Store<AppState>;
declare var store$: Observable<AppState>;

// DOM cache
let lessonContentEl: HTMLElement;

/** 
 * Code editor service 
 * Handles code updates in the lesson page.
 */
export const CodeEditorService = {

    // ====== DATA ======
    
    /** 
     * Get the content of the request lesson (file)
     * <!> Not connected to state store
     */
    getLessonContent: (url: string): Observable<string> => {
        debug('Get lesson content'); 
        return CodeEditorWebApi.getLessonContent(url)
    },

    // ====== LOGIC ======

    /** 
     * Toggle code editor panel visibility
     */
    toggleCodeEditor: (value?: boolean) => {
        debug('Toggle code editor:', value);
        store.dispatch(CodeEditorUiActions.toggleCodeEditor());
    },

    /** 
     * Is code editor panel visible?
     */
    codeEditorIsVis$: (): Observable<boolean> => {
        debug('Get code editor is visible observable');
        return store$.map(CODE_EDIT_IS_VISIBLE).distinctUntilChanged();
    },

    /** 
     * Keep a reference to the content element
     * TODO This starts to feels as overengineering a bit
     */
    setLessonContentEl: (html: HTMLElement) => {
        debug('Set lesson content element'); 
        lessonContentEl = html;
    },
    
    /** 
     * Updates the lesson content
     * TODO This starts to feels as overengineering a bit
     */
    updateLessonContent: (code: string) => {
        debug('Update lesson content'); 
        lessonContentEl.innerHTML = code;
        return lessonContentEl;
    }

}