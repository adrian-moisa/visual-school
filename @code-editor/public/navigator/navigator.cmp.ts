import { APP } from '../../config/app';

// Interfaces
import { NavItem } from './interfaces/navigator';
import { Chapter } from './../chapters/interfaces/chapter';
import { Lesson } from './../lessons/interfaces/lesson';

// Services
import { NavigatorService } from './services/navigator.service';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:NavigatorCmp');

// DOM selector
declare var $: any;

/**
 * Navigator component
 * Navigation for the entire course. From chapter, lesson and file down to code code block.
 */
export class NavigatorCmp extends HTMLElement {

    // State
    private isVisible: boolean;
    private links: NavItem[] = []; 
    private chapter: Chapter;
    private lesson: Lesson;

    constructor() {
        super();
        debug('Construct NavigatorCmp');
    }
    
    connectedCallback() {
        debug('Connect NavigatorCmp');
        this.render();

        // Navigator visibility
        NavigatorService.navigatorIsVis$().subscribe( isVis => {
            debugOff('Navigator visibility:', isVis);
            this.visible = isVis;
        });
    }
    
    private render() {
        debug('Render NavigatorCmp');
        this.innerHTML = `

            <!-- Header -->
            <div class="header"></div>
            
            <div class="links main">

                <!-- Home -->
                <a class="link" href="https://github.com/visual-space/visual-school">
                    <div class="icon fa fa-home"></div>
                    <div class="info">
                        <div class="title">Home</div>
                        <div class="label">Return to VisualSchool on Github</div>
                    </div>
                </a>
            
                <!-- Code samples -->
                <a class="link" href="${APP.host}/index.html">
                    <div class="icon fa fa-code"></div>
                    <div class="info">
                        <div class="title">Code samples</div>
                        <div class="label">View all chapters</div>
                    </div>
                </a>
                
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
                
                <a class="link ${link.active === true ? 'active' : ''}"  href="${APP.host}${link.url}">
                    <div class="icon fa fa-${link.icon}"></div>
                    <div class="info">
                        <div class="title">${link.title}</div>
                        <div class="label">${link.description}</div>
                    </div>
                </a>

                `, '')}
            </div>

            <!-- Footer -->
            <div class="footer"></div>
        `;


    }

    get visible(): boolean {
        return this.hasAttribute('visible');
    }

    set visible(val: boolean) {
        debug('Set visible:', val);
        this.isVisible = val;

        // Reflect as an attribute.
        if (val) {
            this.setAttribute('visible', '');
        } else {
            this.removeAttribute('visible');
        }
    }
}

// Component
require('./navigator.cmp.scss');
window.customElements.define('navigator-vsc', NavigatorCmp);