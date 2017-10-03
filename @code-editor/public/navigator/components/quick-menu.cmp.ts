// Components
import { ButtonLinkCmp } from '../../shared/components/user-interface/button-link.cmp';
ButtonLinkCmp;

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
    private codeEditorEl: any; // Element;

    constructor() {
        super();
        debug('Construct QuickMenuCmp');
    }
    
    connectedCallback() {
        debug('Connect QuickMenuCmp');
        this.render();

        // Code editor visibility
        CodeEditorService.codeEditorIsVis$().subscribe( isVis => {
            debugOff('Code editor visibility:', isVis);
            this.codeEditorEl.active = isVis;
        });
        
        // Navigator visibility
        NavigatorService.navigatorIsVis$().subscribe( isVis => {
            debugOff('Navigator visibility:', isVis);
            this.navigatorEl.active = isVis;
        });

    }

    render() {
        debug('Render QuickMenuCmp');
        this.innerHTML = `
        
            <!-- Logo -->
            <!-- <div class="logo">Visual School</div> -->
            <div class="logo">Visual School</div>

            <!-- Code editor -->
            <!-- <div class="user"></div> -->
            <div class="user"></div>
            <!-- <btn-link-vsc class="user2" fa-icon="user-circle" title="Code editor"></btn-link-vsc> -->

            <!-- Code editor -->
            <btn-link-vsc class="editor" fa-icon="code" title="Code editor"></btn-link-vsc>
        
            <!-- Navigator -->
            <btn-link-vsc class="navigator" fa-icon="list" title="Lessons menu"></btn-link-vsc>
        `;

        // DOM cache
        this.navigatorEl = $('quick-menu-vsc > .navigator');
        this.codeEditorEl = $('quick-menu-vsc > .editor');
        debugOff('Navigator link:', this.navigatorEl);
        debugOff('Editor link:', this.codeEditorEl);
        
        // Toggle panels
        this.navigatorEl.on('click', (el: Element) => NavigatorService.toggleNavigator());
        this.codeEditorEl.on('click', (el: Element) => CodeEditorService.toggleCodeEditor());
    }

}

// Component
require('./quick-menu.cmp.scss');
window.customElements.define('quick-menu-vsc', QuickMenuCmp);