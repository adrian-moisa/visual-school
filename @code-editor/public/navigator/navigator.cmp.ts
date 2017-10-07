import { APP, DEBUG } from '../../config/app'
import * as SimpleBar from 'simplebar'

// Components
import { NavLinkCmp } from './components/nav-link.cmp'
NavLinkCmp

// Interfaces
import { NavItem } from './interfaces/navigator'

// Services
import { navigatorService } from './services/navigator.service'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:NavigatorCmp')

// DOM selector
declare var $: any

/**
 * Navigation for the entire course. 
 * From chapters, lessons and files down to code blocks.
 */
export class NavigatorCmp extends HTMLElement {

    get visible(): boolean {
        return this.hasAttribute('visible')
    }

    set visible(val: boolean) {
        DEBUG.input && debug('Set visible:', val)
        this.isVisible = val

        // Reflect as an attribute.
        if (val) {
            this.setAttribute('visible', '')
        } else {
            this.removeAttribute('visible')
        }
    }

    // State
    private isVisible: boolean
    private navLinks: NavItem[]

    // Plugins
    private navSimplebar: any

    constructor() {
        super()
        DEBUG.constr && debug('Construct NavigatorCmp')
    }
    
    connectedCallback() {
        DEBUG.init && debug('Connect NavigatorCmp')
        this.render()
        this.initSubscriptions()

        // TODO Move to routes
        navigatorService.getNavLinks(<any>{id:1}, <any>{id:1});
    }
    
    private render() {
        DEBUG.render && debug('Render NavigatorCmp')
        this.innerHTML = JSON.stringify(this.navLinks)
        
        // `

        //     <!-- Header -->
        //     <div class="header"></div>

        //     <!-- Chapter -->
        //     ${ this.chapter !== undefined ? 
        //     `<div class="chapter clearfix">
        //         <h1 class="title">${this.chapter.title}</h1>
        //         <h2 class="subtitle">${this.chapter.description}</h2>
        //         <a class="lesson" href="https://github.com/visual-space/visual-school/tree/master/${this.chapter.urlSlug}">
        //             <i class="fa fa-angle-right" aria-hidden="true"></i>
        //             Read the lesson
        //         </a>
        //     </div>` : ``
        //     }
            
        //     <!-- Lessons links -->
        //     <div class="links lessons">
        //         ${ this.links && this.links.reduce((t, link) => t + `
        //         <nav-link-vsc href="${link.url}" fa-icon="${link.icon}" caption="${link.caption}" 
        //             description="${link.description}">
        //         </nav-link-vsc>
        //         `, '')}
        //     </div>

        //     <!-- Footer -->
        //     <div class="footer"></div>
        // `

        // Simplebar
        this.navSimplebar = new SimpleBar(this)
        this.removeEventListener('mouseenter', this.navSimplebar.onMouseEnter)
        
    }
    
    private initSubscriptions() {
        DEBUG.cmp && debug('Initialise subscriptions')

        // Navigator visibility
        navigatorService.navigatorIsVis$().subscribe( isVis => {
            DEBUG.cmp && debugOff('Navigator visibility:', isVis)
            this.visible = isVis
        })

        // Navigator links
        navigatorService.navLinks$().subscribe( navLinks => {
            DEBUG.cmp && debugOff('Navigator visibility:', navLinks)
            this.navLinks = navLinks
            this.render()
        })

                                // // Chapters
                                // chaptersService.chapters$().subscribe( chapters => {
                                //     DEBUG.cmp && debugOff('Chapters:', chapters)
                                //     this.chapters = chapters
                                // })

                                // // Chapter
                                // chaptersService.chapter$().subscribe( chapter => {
                                //     DEBUG.cmp && debugOff('Chapters:', chapter)
                                //     this.chapter = chapter
                                // })

                                // // Lessons
                                // lessonsService.lessons$().subscribe( lessons => {
                                //     DEBUG.cmp && debugOff('Lessons:', lessons)
                                //     console.log('---LessonsService.lessons$')
                                //     this.lessons = lessons
                                //     this.links = lessonsService.mapLessonsToNav(lessons) 
                                //     this.render()
                                // })

                                // // Current chapter
                                // chaptersService.chapter$().subscribe( chapter => {
                                //     DEBUG.cmp && debugOff('Chapter:', chapter)
                                //     this.chapter = chapter
                                // })

                                // // Current lesson
                                // lessonsService.lesson$().subscribe( lesson => {
                                //     DEBUG.cmp && debugOff('Lesson:', lesson)
                                //     this.lesson = lesson
                                // })
    }
}

// Component
require('./navigator.cmp.scss')
window.customElements.define('navigator-vsc', NavigatorCmp)