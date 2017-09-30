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
          <navigator-vsc></navigator-vsc>
          <div>App component</div>
        `;
    }
}

// Component
require('./app.cmp.scss');
window.customElements.define('app-vsc', AppCmp);