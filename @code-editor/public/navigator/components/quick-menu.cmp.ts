// Services
import { NavigatorService } from '../services/navigator.service';
import { CodeEditorService } from '../../code-editor/services/code-editor.service';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:QuickMenuCmp');

// DOM selector
declare var $: any;

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
        this.render();

        // DOM cache
        this.quickMenuEl = $('quick-menu-vsc');
        this.navigatorEl = $('quick-menu-vsc > .navigator');
        this.editorEl = $('quick-menu-vsc > .editor');
        debugOff('Quick menu:', this.quickMenuEl);
        
        // Toggle panels
        this.navigatorEl.on('click', (el: Element) => this.toggleNavMenu());
        this.editorEl.on('click', (el: Element) => this.toggleCodeEditor());

        // Navigator visibility
        NavigatorService.navigatorIsVis$().subscribe( isVis => {
            console.warn('Navigator visibility:', isVis)
        });

        // Code editor visibility
        CodeEditorService.codeEditorIsVis$().subscribe( isVis => {
            console.warn('Code editor visibility:', isVis)
        });

    }

    render() {
        debug('Render QuickMenuCmp');
        this.innerHTML = `
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
        NavigatorService.toggleNavigator();
    }

    /**
     * Toggle code editor
     */
    private toggleCodeEditor(){
        debug('Toggle code editor');
        CodeEditorService.toggleCodeEditor();
    }

}

// Component
require('./quick-menu.cmp.scss');
window.customElements.define('quick-menu-vsc', QuickMenuCmp);