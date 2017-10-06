import { APP } from '../../config/app'
import * as SimpleBar from 'simplebar'

// Components
import { NavLinkCmp } from './components/nav-link.cmp';
NavLinkCmp;

// Interfaces
import { NavItem } from './interfaces/navigator'
import { Chapter } from './../chapters/interfaces/chapter'
import { Lesson } from './../lessons/interfaces/lesson'

// Services
import { NavigatorService } from './services/navigator.service'
import { LessonsService } from '../lessons/services/lessons.service'
import { ChaptersService } from '../chapters/services/chapters.service'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:NavigatorCmp')

// DOM selector
declare var $: any

/**
 * Navigator component
 * Navigation for the entire course. From chapter, lesson and file down to code code block.
 */
export class NavigatorCmp extends HTMLElement {

    get visible(): boolean {
        return this.hasAttribute('visible')
    }

    set visible(val: boolean) {
        debug('Set visible:', val)
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
    private mainLinks: NavItem[] = [
        {
            icon: 'home',
            caption: 'Home',
            description: 'Return to VisualSchool on Github',
            url: 'https://github.com/visual-space/visual-school',
        },
        {
            icon: 'code',
            caption: 'Code samples',
            description: 'View all chapters',
            url: `${APP.host}/index.html`,
        }
    ] 
    private links: NavItem[] = [] 
    private chapter: Chapter // Current
    private lesson: Lesson // Current
    private chapters: Chapter[]
    private lessons: Lesson[]

    // Plugins
    private navSimplebar: any

    constructor() {
        super()
        debug('Construct NavigatorCmp')
    }
    
    connectedCallback() {
        debug('Connect NavigatorCmp')
        this.render()
        this.initSubscriptions()

        // Init data
        ChaptersService.getChapters().subscribe( chapters => 
            LessonsService.getLessons(chapters[0]) // this.chapter
        )
    }
    
    /**
     * Render NavigatorCmp
     */
    private render() {
        debug('Render NavigatorCmp')
        debug('Render NavigatorCmp', this.lessons)
        this.innerHTML = `

            <!-- Header -->
            <div class="header"></div>
            
            <!-- Main links -->
            <div class="links main">
                ${ this.mainLinks.reduce((t, link) => t + `
                <nav-link-vsc href="${link.url}" fa-icon="${link.icon}" caption="${link.caption}" 
                    description="${link.description}">
                </nav-link-vsc>
                `, '')}
            </div>

            <!-- Chapter -->
            ${ this.chapter !== undefined ? 
            `<div class="chapter clearfix">
                <h1 class="title">${this.chapter.title}</h1>
                <h2 class="subtitle">${this.chapter.description}</h2>
                <a class="lesson" href="https://github.com/visual-space/visual-school/tree/master/${this.chapter.folder}">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Read the lesson
                </a>
            </div>` : ``
            }
            
            <!-- Lessons links -->
            <div class="links lessons">
                ${ this.links && this.links.reduce((t, link) => t + `
                <nav-link-vsc href="${link.url}" fa-icon="${link.icon}" caption="${link.caption}" 
                    description="${link.description}">
                </nav-link-vsc>
                `, '')}
            </div>

            <!-- Footer -->
            <div class="footer"></div>
        `

        // Simplebar
        this.navSimplebar = new SimpleBar(this)
        this.removeEventListener('mouseenter', this.navSimplebar.onMouseEnter)
        
    }
    
    /**
     * Initialise subscriptions
     */
    private initSubscriptions() {
        debug('Initialise subscriptions')

        // Navigator visibility
        NavigatorService.navigatorIsVis$().subscribe( isVis => {
            debugOff('Navigator visibility:', isVis)
            this.visible = isVis
        })

        // Chapters
        ChaptersService.chapters$().subscribe( chapters => {
            debugOff('Chapters:', chapters)
            this.chapters = chapters
        })

        // Chapter
        ChaptersService.chapter$().subscribe( chapter => {
            debugOff('Chapters:', chapter)
            this.chapter = chapter
        })

        // Lessons
        LessonsService.lessons$().subscribe( lessons => {
            debugOff('Lessons:', lessons)
            console.log('---LessonsService.lessons$');
            this.lessons = lessons
            this.links = LessonsService.mapLessonsToNav(lessons) 
            this.render()
        })

        // Current chapter
        ChaptersService.chapter$().subscribe( chapter => {
            debugOff('Chapter:', chapter)
            this.chapter = chapter
        })

        // Current lesson
        LessonsService.lesson$().subscribe( lesson => {
            debugOff('Lesson:', lesson)
            this.lesson = lesson
        })
    }
}

// Component
require('./navigator.cmp.scss')
window.customElements.define('navigator-vsc', NavigatorCmp)