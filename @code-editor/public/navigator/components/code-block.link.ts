import { DEBUG } from '../../../config/app'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeBlockLink')

// DOM selector
declare var $: any

export class CodeBlockLink extends HTMLElement {

    get active(): boolean {
        return this.hasAttribute('active')
    }

    set active(val: boolean) {
        DEBUG.input && debug('Input active:', val)
        this.isActive = val

        // Reflect as an attribute.
        if (val) this.setAttribute('active', '')
        else this.removeAttribute('active')
    }

    // State
    private caption: string
    private isActive: boolean = true
    private icon: string
    private url: string
    private description: string

    constructor() {
        super()
        DEBUG.constr && debug('Construct CodeBlockLink')
    }

    connectedCallback() {
        DEBUG.init && debug('Connect CodeBlockLink')
        this.render()
    }

    render() {
        DEBUG.render && debug('Render CodeBlockLink')
        
        this.innerHTML = `
        <a href="${this.url}">
            <div class="icon fa fa-${this.icon}"></div>
            <div class="info">
                <div class="caption">${this.caption}</div>
                <div class="description">${this.description}</div>
            </div>
        </a>
        `
    }

    static get observedAttributes() {
        return ['icon', 'href', 'caption', 'description']
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        DEBUG.input && debug('Attribute:', name, newValue)
        switch (name) {
            case 'icon':
                this.icon = newValue
                break
            case 'url':
                this.url = newValue
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
require('./code-block.link.scss')
window.customElements.define('code-block-link', CodeBlockLink)