// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:ButtonLinkCmp');

// DOM selector
declare var $: any;

/**
 * ButtonLinkCmp
 * Used to render links in the quick menu.
 * Initialy developed just to experiment with web components and data update strategies.
 */
export class ButtonLinkCmp extends HTMLElement {

    get active(): boolean {
        return this.hasAttribute('active');
    }

    set active(val: boolean) {
        debug('Set active:', val);
        this.isActive = val;

        // Reflect as an attribute.
        if (val) {
            this.setAttribute('active', '');
        } else {
            this.removeAttribute('active');
        }
    }


    // State
    private isActive: boolean = true;
    private faIcon: string;

    constructor() {
        super();
        debug('Construct ButtonLinkCmp');
    }

    connectedCallback() {
        debug('Connect ButtonLinkCmp');
        this.render();
    }

    render() {
        debug('Render ButtonLinkCmp');
        this.innerHTML = `
            <i class="fa fa-${this.faIcon}" aria-hidden="true"></i>
        `;
    }

    static get observedAttributes() {
        return ['fa-icon'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        debug('Attribute:', name, newValue);
        if (name === 'fa-icon') this.faIcon = newValue;
    }
}

// Component
require('./button-link.cmp.scss');
window.customElements.define('btn-link-vsc', ButtonLinkCmp);