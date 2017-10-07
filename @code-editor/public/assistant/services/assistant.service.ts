import { Observable } from 'rxjs/Observable'
import { Store } from 'redux'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { AppState } from '../../shared/interfaces/app-state'
import { AssistAction } from '../interfaces/assist-action'
import { Lesson } from '../../lessons/interfaces/lesson'
import { NavItem } from '../../navigator/interfaces/navigator'

// State
import { assistantDataActions } from '../state/assistant-data.actions'
import { ASSIST_ACTIONS, ASSIST_ACTION } from '../state/assistant.selectors'

// Webapi
import { assistantWebApi } from '../webapis/assistant.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:assistantService')
DEBUG.init && debug('Instantiate assistantService')

// State
declare var store: Store<AppState>
declare var store$: Observable<AppState>

export const assistantService = {

    // ====== DATA ======

    getAssistActions: (lesson: Lesson): Observable<AssistAction[]> => {
        DEBUG.data && debug('Get assistant:', lesson.title) 
        store.dispatch(assistantDataActions.getAssistActions(lesson))
        return assistantService.assistant$()
    },
    
    assistant$: (): Observable<AssistAction[]> => {
        DEBUG.data && debug('Observable assistant')
        return store$.map(ASSIST_ACTIONS)
            .filter(e => e !== undefined && e !== null)
            .distinctUntilChanged()
    },
    
    codeBlock$: (): Observable<AssistAction> => {
        DEBUG.data && debug('Observable current codeBlock')
        return store$.map(ASSIST_ACTION)
            .filter(e => e !== undefined && e !== null)
            .distinctUntilChanged()
    },

    // ====== MAPS ======

    mapAssistActionsToNav: (assistActions: AssistAction[]): NavItem[] => {
        let navItems: NavItem[] = assistActions.map(action => ({
            active: false, 
            caption: action.title,
            description: action.description,
            icon: action.icon,
            url: action.urlSlug,
        }))
        
        DEBUG.map && debug('Map assistant to navigation items:', navItems)
        return navItems
    },

    // ====== LOGIC ======
    
    // ====== UTILS ======

}