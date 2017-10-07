import { Observable } from 'rxjs/Observable'
import { Store } from 'redux'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { AppState } from '../../shared/interfaces/app-state'
import { CodeBlock } from '../interfaces/code-block'
import { Lesson } from '../../lessons/interfaces/lesson'
import { NavItem } from '../../navigator/interfaces/navigator'

// State
import { codeBlocksDataActions } from '../state/code-blocks-data.actions'
import { CODE_BLOCKS, CODE_BLOCK } from '../state/code-blocks.selectors'

// Webapi
import { codeBlocksWebApi } from '../webapis/code-blocks.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeBlocksService')
DEBUG.constr && debug('Instantiate codeBlocksService')

// State
declare var store: Store<AppState>
declare var store$: Observable<AppState>

export const codeBlocksService = {

    // ====== DATA ======

    getCodeBlocks: (lesson: Lesson): Observable<CodeBlock[]> => {
        DEBUG.data && debug('Get codeBlocks:', lesson.title) 
        store.dispatch(codeBlocksDataActions.getCodeBlocks(lesson))
        return codeBlocksService.codeBlocks$()
    },
    
    codeBlocks$: (): Observable<CodeBlock[]> => {
        DEBUG.data && debug('Observable codeBlocks')
        return store$.map(CODE_BLOCKS)
            .filter(e => e !== undefined && e !== null)
            .distinctUntilChanged()
    },
    
    codeBlock$: (): Observable<CodeBlock> => {
        DEBUG.data && debug('Observable current codeBlock')
        return store$.map(CODE_BLOCK)
            .filter(e => e !== undefined && e !== null)
            .distinctUntilChanged()
    },

    // ====== MAPS ======

    mapCodeBlocksToNav: (codeBlocks: CodeBlock[]): NavItem[] => {
        let navItems: NavItem[] = codeBlocks.map(codeBlock => ({
            id: codeBlock.id, 
            parentId: codeBlock.lessonId, 
            active: false, 
            caption: codeBlock.title,
            description: codeBlock.description,
            icon: codeBlock.icon,
            urlSlug: codeBlock.urlSlug,
        }))
        
        DEBUG.map && debug('Map codeBlocks to navigation items:', navItems)
        return navItems
    },

    // ====== LOGIC ======
    
    // ====== UTILS ======

}