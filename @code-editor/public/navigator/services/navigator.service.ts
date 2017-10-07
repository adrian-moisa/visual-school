import { Observable } from 'rxjs/Observable'
import { Store } from 'redux'
import { APP, DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { AppState } from '../../shared/interfaces/app-state'
import { NavItem } from '../interfaces/navigator'
import { Chapter } from '../../chapters/interfaces/chapter'
import { Lesson } from '../../lessons/interfaces/lesson'
import { CodeBlock } from '../../code-blocks/interfaces/code-block'

// Services
import { chaptersService } from '../../chapters/services/chapters.service'
import { lessonsService } from '../../lessons/services/lessons.service'
import { codeBlocksService } from '../../code-blocks/services/code-blocks.service'

// State
import { NavigatorUiActions } from '../state/navigator-ui.actions'
import { NAV_IS_VISIBLE } from '../state/navigator.selectors'

// Constants
import { LINK_TYPE } from '../constants/navigator.const'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:navigatorService')
DEBUG.constr && debug('Instantiate navigatorService')

// State
declare var store: Store<AppState>
declare var store$: Observable<AppState>

/**
 * Navigator service is a higher order service that can interact with several data services.
 * It takes information from several sources and it asembles it into the navLinks data structure.
 */
export const navigatorService = {

    // ====== DATA ======

    getNavLinks: (chapter: Chapter, lesson: Lesson) => {
        DEBUG.data && debug('Get navigator links')
        
        // Parallel requests
        chaptersService.getChapters()
        lessonsService.getLessons(chapter)
        codeBlocksService.getCodeBlocks(lesson)

        return navigatorService.navLinks$
    },

    navLinks$: (): Observable<NavItem[]> => {
        DEBUG.data && debug('Observable navigator links')

        let nav = Observable.combineLatest(
            chaptersService.chapters$(),
            lessonsService.lessons$(),
            codeBlocksService.codeBlocks$()
        ).switchMap(data => {
            let [chapters, lessons, codeBlocks] = data
            DEBUG.data && debugOff('Chapters, lessons, codeBlocks', data)

            let links = navigatorService.mapChaptersLessonsCodeToNav(chapters, lessons, codeBlocks)
            return Observable.of(links)
        })

        return nav
    },

    // ====== MAPS ======

    mapChaptersLessonsCodeToNav: (chapters: Chapter[], lessons: Lesson[], codeBlocks: CodeBlock[]): NavItem[] => {

        // Code blocks
        let codeBlocksLinks: NavItem[] = codeBlocksService.mapCodeBlocksToNav(codeBlocks)
        codeBlocksLinks.forEach(link => {
            link.type = LINK_TYPE.CodeBlock
        })
        
        // Lessons
        let lessonsLinks: NavItem[] = lessonsService.mapLessonsToNav(lessons)
        lessonsLinks.forEach(link => {
            link.type = LINK_TYPE.Lesson
            link.children = codeBlocksLinks.filter( cbLink => cbLink.parentId === link.id )
        })

        // Chapters
        let chaptersLinks: NavItem[] = chaptersService.mapChaptersToNav(chapters)
        chaptersLinks.forEach(link => {
            link.type = LINK_TYPE.Chapter
            link.children = lessonsLinks.filter( lsnLink => lsnLink.parentId === link.id )
        })

        // URLs
        chaptersLinks.forEach(chLink => {

            // Chapters
            chLink.url = `${APP.host}/modern-web-apps/${chLink.urlSlug}`
            chLink.children.forEach( lsnLink => {

                // Lessons
                lsnLink.url = `${chLink.url}/${lsnLink.urlSlug}`
                    lsnLink.children.forEach( cbLink => {

                        // Code blocks
                        cbLink.url = `${lsnLink.url}/${cbLink.urlSlug}`
                    })
            })
        })

        DEBUG.map && debug('Map chapters, lessons, code blocks to navigation items')
        DEBUG.map && debugOff('Navigation items:', JSON.stringify(chaptersLinks, null, 4))
        return chaptersLinks
    },

    // ====== LOGIC ======

    toggleNavigatorVis: (value?: boolean) => {
        DEBUG.logic && debug('Toggle navigator visibility:', value)
        store.dispatch(NavigatorUiActions.toggleNavigator())
        return navigatorService.navigatorIsVis$()
    },

    navigatorIsVis$: (): Observable<boolean> => {
        DEBUG.logic && debug('Observable navigator is visible')
        return store$.map(NAV_IS_VISIBLE).distinctUntilChanged()
    }

    // ====== UTILS ======

}