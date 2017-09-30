import { APP } from '../../../config/app';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:QuickMenuCmp');

/**
 * Quick menu component
 * This is a menu fixed on the top right of the page.
 * Allows easy access to navigation menu, code editor (and user profile in the future)
 * <!> Only one instance
 */
export class QuickMenuCmp extends HTMLElement {

    // State
    private isNavMenuVis: boolean = true;
    private isCodeEditorVis: boolean = true;

    // DOM
    private navMenuEl: Element;

    constructor() {
        super();
        debug('Construct QuickMenuCmp');
    }
    
    connectedCallback() {
        debug('Connected QuickMenuCmp');
        this.innerHTML = this.template;

        // Cache page elements
        this.navMenuEl = document.querySelector('quick-menu-vsc > .navigator');
        debugOff('Navigation menu:', this.navMenuEl);
    }

    get template() {
        return `
        
            <!-- Toggle menu -->
            <div class="button ${this.isNavMenuVis ? 'active' : ''}" 
                onclick="this.toggleNavMenu()" title="Lessons menu">
                <i class="fa fa-list" aria-hidden="true"></i>
            </div>
        
            <!-- Toggle code editor -->
            <div class="button ${this.isCodeEditorVis ? 'active' : ''}" 
                onclick="this.toggleNavMenu()" title="Code editor">
                <i class="fa fa-code" aria-hidden="true"></i>
            </div>
    
        `;

    }
}

// Component
require('./quick-menu.cmp.scss');
window.customElements.define('quick-menu-vsc', QuickMenuCmp);