import { APP } from '../../config/app';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeEditorCmp');

/**
 * Code editor
 * Code editor allows the modification of the source code in the samples at runtime
 * <!> Only one instance
 * <!> TODO For the moment visual-school component itself can be edited leading to app instability.
 */
export class CodeEditorCmp extends HTMLElement {

    // State
    private isNavMenuVis: boolean = true;
    private isCodeEditorVis: boolean = true;

    // DOM
    private navMenuEl: Element;

    constructor() {
        super();
        debug('Construct CodeEditorCmp');
    }
    
    connectedCallback() {
        debug('Connected CodeEditorCmp');
        this.innerHTML = this.template;

        // Cache page elements
        this.navMenuEl = document.querySelector('quick-menu-vsc > .navigator');
        debugOff('Navigation menu:', this.navMenuEl);
    }

    get template() {
        return `
        
            Code editor component
    
        `;

    }
}

// Component
require('./code-editor.cmp.scss');
window.customElements.define('code-editor-vsc', CodeEditorCmp);