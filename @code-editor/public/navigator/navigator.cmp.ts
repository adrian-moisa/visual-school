import { APP } from '../../config/app';

// Interfaces
import { NavItem } from './interfaces/navigator';
import { Chapter } from './../chapters/interfaces/chapter';
import { Lesson } from './../lessons/interfaces/lesson';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vs:NavigatorCmp');

/**
 * Navigator component
 */
export class NavigatorCmp extends HTMLElement {

    // State
    private isVis: boolean = true; // undefined
    private links: NavItem[] = []; 
    private chapter: Chapter;
    private lesson: Lesson;

    // DOM
    private navMenuEl: Element;
    private navMenuBtnEl: Element;

    constructor() {
        super();
        debug('Construct NavigatorCmp');
    }
    
    connectedCallback() {
        debug('Connected NavigatorCmp');
        this.innerHTML = this.template;

        // Cache page elements
        this.navMenuEl = document.querySelector('#lesson-navigation');
        this.navMenuBtnEl = document.querySelector('#lesson-navigation-btn');
        debugOff('Navigation menu:', this.navMenuEl);
        debugOff('Navigation menu button:', this.navMenuBtnEl);
    }

    get template() {
        return `
        
            <!-- Toggle menu -->
            <div id="lesson-navigation-btn" class="button quick-menu-item ${this.isVis ? 'active' : ''}" 
                onclick="toggleNavMenu()" title="Lessons menu">
                <i class="fa fa-list" aria-hidden="true"></i>
            </div>
    
            <div id="lesson-navigation" class="menu side ${this.isVis ? 'visible' : 'hidden'}">
    
                <!-- Header -->
                <div class="header">
                    <!-- <div class="close fa fa-close" onclick="toggleNavMenu()"></div> -->
                </div>
    
                <!-- Home -->
                <a class="link" href="https://github.com/visual-space/visual-school">
                    <div class="icon fa fa-home"></div>
                    <div class="info">
                        <div class="title">Home</div>
                        <div class="label">Return to VisualSchool on Github</div>
                    </div>
                </a>
                
                <!-- Code samples -->
                <a class="link" href="${APP.domain}/index.html">
                    <div class="icon fa fa-code"></div>
                    <div class="info">
                        <div class="title">Code samples</div>
                        <div class="label">View all chapters</div>
                    </div>
                </a>
    
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
                    
                <!-- Menu items -->
                ${ this.links.reduce((t, link) => t + `
                    
                    <a class="link ${link.active === true ? 'active' : ''}"  href="${APP.domain}${link.url}">
                        <div class="icon fa fa-${link.icon}"></div>
                        <div class="info">
                            <div class="title">${link.title}</div>
                            <div class="label">${link.description}</div>
                        </div>
                    </a>
    
                `, '')}
    
                <!-- Footer -->
                <div class="footer"></div>
            </div>
        `;

    }
}

// Component
require('./navigator.cmp.scss');
window.customElements.define('navigator-vsc', NavigatorCmp);