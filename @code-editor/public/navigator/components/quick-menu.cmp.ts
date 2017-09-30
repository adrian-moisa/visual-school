declare var $: any;

// Services
import { NavigatorService } from '../services/navigator.service';

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
    private quickMenuEl: Element;
    private navigatorEl: any; // Element // TODO extend Element 
    private editorEl: any; // Element;

    constructor() {
        super();
        debug('Construct QuickMenuCmp');
    }
    
    connectedCallback() {
        debug('Connect QuickMenuCmp');
        this.innerHTML = this.template;

        // Cache page elements
        this.quickMenuEl = $('quick-menu-vsc');
        this.navigatorEl = $('quick-menu-vsc > .navigator');
        this.editorEl = $('quick-menu-vsc > .editor');
        debugOff('Quick menu:', this.quickMenuEl);
        
        // Bind events
        this.navigatorEl.on('click', (el: Element) => this.toggleNavMenu());
        this.editorEl.on('click', (el: Element) => this.toggleCodeEditor());

        // Subscribe
        NavigatorService.navigation$().subscribe(() => {
            console.warn('Redux rxjs success!')
        });

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
        debug('Toggle navigation menu');
        NavigatorService.toggleNavigation();
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