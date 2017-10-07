import { Observable } from 'rxjs/Observable'
import { Store } from 'redux'
import { DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { AppState } from '../../shared/interfaces/app-state'
import { Chapter } from '../../chapters/interfaces/chapter'
import { NavItem } from '../../navigator/interfaces/navigator'

// State
import { chaptersDataActions } from '../state/chapters-data.actions'
import { CHAPTERS, CHAPTER } from '../state/chapters.selectors'

// Webapi
import { chaptersWebApi } from '../webapis/chapters.webapi'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:chaptersService')
DEBUG.constr && debug('Instantiate chaptersService')

// State
declare var store: Store<AppState>
declare var store$: Observable<AppState>

export const chaptersService = {

    // ====== DATA ======

    getChapters: (): Observable<Chapter[]> => {
        DEBUG.data && debug('Get chapters') 
        store.dispatch(chaptersDataActions.getChapters())
        return chaptersService.chapters$()
    },
    
    chapters$: (): Observable<Chapter[]> => {
        DEBUG.data && debug('Observable chapters ')
        return store$.map(CHAPTERS)
            .filter(e => e !== undefined && e !== null)
            .distinctUntilChanged()
    },
    
    /** Current chapter */
    chapter$: (): Observable<Chapter> => {
        DEBUG.data && debug('Observable current chapter ')
        return store$.map(CHAPTER)
            .filter(e => e !== undefined && e !== null)
            .distinctUntilChanged()
    },

    // ====== MAPS ======

    mapChaptersToNav: (chapters: Chapter[]): NavItem[] => {
        let navItems: NavItem[] = chapters.map(chapter => (<NavItem>{
            id: chapter.id, 
            active: false, 
            caption: chapter.title,
            description: chapter.description,
            icon: chapter.icon,
            urlSlug: chapter.urlSlug,
        }))
        
        DEBUG.map && debug('Map chapters to navigation items:', navItems)
        return navItems
    },
    
    // ====== LOGIC ======
    
    // ====== UTILS ======

}