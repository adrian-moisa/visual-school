declare var $: any;

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:QuickMenuCmp');

// Public
let toggleNavMenu;

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

        toggleNavMenu = this.toggleNavMenu;
    }
    
    connectedCallback() {
        debug('Connect QuickMenuCmp');
        this.innerHTML = this.template;

        // Cache page elements
        this.navMenuEl = $('quick-menu-vsc > .navigator');
        debugOff('Navigation menu:', this.navMenuEl);
        
        // Bind events
        $('quick-menu-vsc > .navigator').on('click', (el: Element) => this.toggleNavMenu());
        $('quick-menu-vsc > .editor').on('click', (el: Element) => this.toggleCodeEditor());

    }

    get template() {
        return `
        
            <!-- Toggle menu -->
            <div class="button navigator ${this.isNavMenuVis ? 'active' : ''}" title="Lessons menu">
                <i class="fa fa-list" aria-hidden="true"></i>
            </div>
        
            <!-- Toggle code editor -->
            <div class="button editor ${this.isCodeEditorVis ? 'active' : ''}" title="Code editor">
                <i class="fa fa-code" aria-hidden="true"></i>
            </div>
    
        `;

    }

    /**
     * Toggle lesson navigation menu
     */
    private toggleNavMenu(){
        console.warn('toggleNavMenu');
    }

    /**
     * Toggle code editor
     */
    private toggleCodeEditor(){
        console.warn('toggleCodeEditor');
    }

}

// Component
require('./quick-menu.cmp.scss');
window.customElements.define('quick-menu-vsc', QuickMenuCmp);