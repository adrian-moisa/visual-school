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
    private chapter: Chapter
    private lesson: Lesson

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
    }
    
    /**
     * Render NavigatorCmp
     */
    private render() {
        debug('Render NavigatorCmp')
        this.innerHTML = `

            <!-- Header -->
            <div class="header"></div>
            
            <!-- Main links -->
            <div class="links main">
                ${ this.mainLinks.reduce((t, link) => t + `
                <nav-link-vsc href="${link.url}" fa-icon="${link.icon}" caption="${link.caption}" description="${link.description}">
                </nav-link-vsc>
                `, '')}
            </div>

            <!-- Chapter -->
            ${ this.chapter !== undefined ? 
            `<div class="chapter">
                <h1 class="title">${this.chapter.title}</h1>
                <h2 class="subtitle">${this.chapter.description}</h2>
                <a class="lesson" href="https://github.com/visual-space/visual-school/tree/master${this.chapter.url}">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Read the lesson
                </a>
            </div>` : ``
            }
            
            <!-- Lessons links -->
            <div class="links lessons">
                ${ this.links.reduce((t, link) => t + `
                <nav-link-vsc href="${link.url}" fa-icon="${link.icon}" caption="${link.caption}" description="${link.description}">
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
    }
}

// Component
require('./navigator.cmp.scss')
window.customElements.define('navigator-vsc', NavigatorCmp)