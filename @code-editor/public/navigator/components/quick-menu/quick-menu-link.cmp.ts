// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:QuickMenuLinkCmp');

// DOM selector
declare var $: any;

/**
 * Quick menu link
 * Used to render links in the quick menu.
 * Initialy developed just to experiment with web components and data update strategies.
 */
export class QuickMenuLinkCmp extends HTMLElement {

    // State
    private isActive: boolean = true;
    private faIcon: string;

    // DOM cache
    private linkEl: Element;

    constructor() {
        super();
        debug('Construct QuickMenuLinkCmp');
    }

    connectedCallback() {
        debug('Connect QuickMenuLinkCmp');
        this.render();
    }

    render() {
        debug('Render QuickMenuLinkCmp');
        this.innerHTML = `
            <i class="fa fa-list" aria-hidden="true"></i>
        `;

        // DOM cache
        this.linkEl = $('quick-menu-vsc');
        debugOff('Quick menu link:', this.linkEl);
    }

    static get observedAttributes() {
        return ['fa-icon'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === 'fa-icon') this.faIcon = newValue;
    }

    get active(): boolean {
        return this.hasAttribute('active');
    }

    set active(val: boolean) {
        debug('Active:', val);
        this.isActive = val;

        // Reflect as an attribute.
        if (val) {
            this.setAttribute('active', '');
        } else {
            this.removeAttribute('active');
        }
    }

}

// Component
require('./quick-menu-link.cmp.scss');
window.customElements.define('qm-link-vsc', QuickMenuLinkCmp);