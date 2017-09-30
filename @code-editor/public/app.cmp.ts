// Components
import { NavigatorCmp } from './navigator/navigator.cmp';
NavigatorCmp;

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vs:AppCmp');

/**
 * App
 */
export class AppCmp extends HTMLElement {
    
    constructor() {
        super();
        debug('Construct AppCmp');
    }
    
    connectedCallback() {
        debug('Connected AppCmp');
        this.innerHTML = this.template;
    }

    get template() {
        return `

            <!-- Live code editor -->
            <editor-vsc></editor-vsc>

            <!-- Lesson navigator -->
            <navigator-vsc></navigator-vsc>
        `;
    }
}

// Component
require('./app.cmp.scss');
window.customElements.define('visual-school', AppCmp);