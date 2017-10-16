import { DEBUG } from '../../../../config/app'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:ButtonLink')

// DOM selector
declare var $: any

/**
 * Renders links in the quick menu.
 */
export class ButtonLink extends HTMLElement {

    get active(): boolean {
        return this.hasAttribute('active')
    }

    set active(val: boolean) {
        DEBUG.input && debug('Input active:', val)
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
    private icon: string

    constructor() {
        super()
        DEBUG.constr && debug('Construct ButtonLink')
    }

    connectedCallback() {
        DEBUG.init && debug('Connect ButtonLink')
        this.render()
    }

    render() {
        DEBUG.render && debug('Render ButtonLink')
        this.innerHTML = `
            <i class="fa fa-${this.icon}" aria-hidden="true"></i>
        `
    }

    static get observedAttributes() {
        return ['icon']
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        DEBUG.input && debug('Attribute:', name, newValue)
        if (name === 'icon') this.icon = newValue
    }
}

// Component
require('./button.link.scss')
window.customElements.define('btn-link', ButtonLink)