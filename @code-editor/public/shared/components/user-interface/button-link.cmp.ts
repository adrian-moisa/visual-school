import { DEBUG } from '../../../../config/app'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:ButtonLinkCmp')

// DOM selector
declare var $: any

/**
 * Renders links in the quick menu.
 */
export class ButtonLinkCmp extends HTMLElement {

    get active(): boolean {
        return this.hasAttribute('active')
    }

    set active(val: boolean) {
        DEBUG.input && debug('Set active:', val)
        this.isActive = val

        // Reflect as an attribute.
        if (val) {
            this.setAttribute('active', '')
        } else {
            this.removeAttribute('active')
        }
    }


    // State
    private isActive: boolean = true
    private faIcon: string

    constructor() {
        super()
        DEBUG.constr && debug('Construct ButtonLinkCmp')
    }

    connectedCallback() {
        DEBUG.init && debug('Connect ButtonLinkCmp')
        this.render()
    }

    render() {
        DEBUG.render && debug('Render ButtonLinkCmp')
        this.innerHTML = `
            <i class="fa fa-${this.faIcon}" aria-hidden="true"></i>
        `
    }

    static get observedAttributes() {
        return ['fa-icon']
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        DEBUG.input && debug('Attribute:', name, newValue)
        if (name === 'fa-icon') this.faIcon = newValue
    }
}

// Component
require('./button-link.cmp.scss')
window.customElements.define('btn-link-vsc', ButtonLinkCmp)