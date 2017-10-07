import { DEBUG } from '../../../config/app'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:NavLinkCmp')

// DOM selector
declare var $: any

/** Used to render navigation links in navigator panel. */
export class NavLinkCmp extends HTMLElement {

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
    private caption: string
    private isActive: boolean = true
    private faIcon: string
    private href: string
    private description: string

    constructor() {
        super()
        DEBUG.constr && debug('Construct NavLinkCmp')
    }

    connectedCallback() {
        DEBUG.init && debug('Connect NavLinkCmp')
        this.render()
    }

    render() {
        DEBUG.render && debug('Render NavLinkCmp')
        
        this.innerHTML = `
        <a href="${this.href}">
            <div class="icon fa fa-${this.faIcon}"></div>
            <div class="info">
                <div class="caption">${this.caption}</div>
                <div class="description">${this.description}</div>
            </div>
        </a>
        `
    }

    static get observedAttributes() {
        return ['fa-icon', 'href', 'caption', 'description']
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        DEBUG.input && debug('Attribute:', name, newValue)
        switch (name) {
            case 'fa-icon':
                this.faIcon = newValue
                break
            case 'href':
                this.href = newValue
                break
            case 'caption':
                this.caption = newValue
                break
            case 'description':
                this.description = newValue
                break
        }
    }

}

// Component
require('./nav-link.cmp.scss')
window.customElements.define('nav-link-vsc', NavLinkCmp)