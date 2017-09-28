
/**
 * App
 */
export class App extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.template;
    }

    get template() {
        return `
          <div>This is a div</div>
        `;
    }
}
window.customElements.define('vs-app', App);