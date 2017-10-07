import { Observable } from 'rxjs/Observable'
import { Store } from 'redux'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { AppState } from '../../shared/interfaces/app-state'

// State
import { codeEditorUiActions } from '../state/code-editor-ui.actions'
import { CODE_EDIT_IS_VISIBLE } from '../state/code-editor.selectors'

// Webapi
import { codeEditorWebApi } from '../webapis/code-editor.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeEditorService')
DEBUG.init && debug('Instantiate codeEditorService')

// State
declare var store: Store<AppState>
declare var store$: Observable<AppState>

export const codeEditorService = {

    // ====== DATA ======
    
    /** <!> Bypassing state store */
    getLessonContent: (url: string): Observable<string> => {
        DEBUG.data && debug('Get lesson content:', url) 
        return codeEditorWebApi.getLessonContent(url)
    },
    
    // ====== MAPS ======

    // ====== LOGIC ======

    toggleCodeEditorVis: (value?: boolean) => {
        DEBUG.logic && debug('Toggle code editor visibility:', value)
        store.dispatch(codeEditorUiActions.toggleCodeEditor())
    },

    codeEditorIsVis$: (): Observable<boolean> => {
        DEBUG.logic && debug('Observable code editor is visible')
        return store$.map(CODE_EDIT_IS_VISIBLE).distinctUntilChanged()
    },
    
    // ====== UTILS ======

}