import { Observable } from 'rxjs/Observable'
import { Store } from 'redux'
import { APP, DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { AppState } from '../../shared/interfaces/app-state'
import { NavNode } from '../interfaces/navigator'
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

    getRootNavNode: (chapter: Chapter, lesson: Lesson) => {
        DEBUG.data && debug('Get root navigation node')
        
        // Parallel requests
        chaptersService.getChapters()
        lessonsService.getLessons(chapter)
        codeBlocksService.getCodeBlocks(lesson)

        return navigatorService.rootNavNode$
    },

    // TODO set active properties for active items
    /** Root node has no link by itself, it is rendered already expanded (children links visible) */
    rootNavNode$: (): Observable<NavNode> => {
        DEBUG.data && debug('Observable navigator root node (link and children)')

        let nav = Observable.combineLatest(
            chaptersService.chapters$(),
            chaptersService.chapter$(),
            lessonsService.lessons$(),
            lessonsService.lesson$(),
            codeBlocksService.codeBlocks$(),
            codeBlocksService.codeBlock$(),
        ).switchMap(data => {
            let [chapters, chapter, lessons, lesson, codeBlocks, codeBlock] = data
            DEBUG.data && debugOff('Chapters, lessons, codeBlocks', data)

            let links = navigatorService.mapChaptersLessonsCodeToNav(
                chapters, chapter, lessons, lesson, codeBlocks, codeBlock
            )
            return Observable.of(links)
        })

        return nav
    },

    // ====== MAPS ======

    mapChaptersLessonsCodeToNav: (
        chapters: Chapter[], 
        chapter: Chapter, 
        lessons: Lesson[], 
        lesson: Lesson,
        codeBlocks: CodeBlock[],
        codeBlock: CodeBlock
    ): NavNode => {

        // Code blocks
        let codeBlocksLinks: NavNode[] = codeBlocksService.mapCodeBlocksToNav(codeBlocks)
        codeBlocksLinks.forEach((link, i) => {
            link.type = LINK_TYPE.CodeBlock
            link.index = i
            if (link.id === codeBlock.id) link.active = true
        })
        
        // Lessons
        let lessonsLinks: NavNode[] = lessonsService.mapLessonsToNav(lessons)
        lessonsLinks.forEach((link, i) => {
            link.type = LINK_TYPE.Lesson
            link.index = i
            if (link.id === lesson.id) link.active = true
            link.children = codeBlocksLinks.filter( cbLink => cbLink.parentId === link.id )
        })

        // Chapters
        let chaptersLinks: NavNode[] = chaptersService.mapChaptersToNav(chapters)
        chaptersLinks.forEach((link, i) => {
            link.type = LINK_TYPE.Chapter
            link.index = i
            if (link.id === chapter.id) link.active = true
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

        // Using root node, `navigation-node` component can be reused from top to bottom
        let rootNavNode: NavNode = <NavNode>{
            active: true, // Enables rendering of children
            children: chaptersLinks
        }

        DEBUG.map && debug('Map chapters, lessons, code blocks to navigation items')
        DEBUG.map && debugOff('Navigation items:', JSON.stringify(chaptersLinks, null, 4))
        return rootNavNode
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