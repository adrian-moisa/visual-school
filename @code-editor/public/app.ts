// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vs:App');

/**
 * App
 */
export class App extends HTMLElement {
    
    constructor() {
        debug('Construct App');
        super();
    }

    connectedCallback() {
        this.innerHTML = this.template;
    }

    get template() {
        return `
          <div>App component</div>
        `;
    }
}