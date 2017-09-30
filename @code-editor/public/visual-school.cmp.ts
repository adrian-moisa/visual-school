// Components
import { CodeEditorCmp } from './code-editor/code-editor.cmp';
import { NavigatorCmp } from './navigator/navigator.cmp';
import { QuickMenuCmp } from './navigator/components/quick-menu.cmp';
CodeEditorCmp; NavigatorCmp; QuickMenuCmp;

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:VisualSchoolCmp');

/**
 * App
 */
export class VisualSchoolCmp extends HTMLElement {
    
    constructor() {
        super();
        debug('Construct VisualSchoolCmp');
    }
    
    connectedCallback() {
        debug('Connect VisualSchoolCmp');
        this.innerHTML = this.template;
    }

    get template() {
        return `

            <!-- Live code editor -->
            <editor-vsc></editor-vsc>

            <!-- Lesson navigator -->
            <navigator-vsc></navigator-vsc>

            <!-- Quick access menu -->
            <quick-menu-vsc></quick-menu-vsc>
        `;
    }
}

// Component
require('./visual-school.cmp.scss');
window.customElements.define('visual-school', VisualSchoolCmp);