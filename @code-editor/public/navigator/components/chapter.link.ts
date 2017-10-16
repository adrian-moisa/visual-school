import { DEBUG } from '../../../config/app'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:ChapterLink')

// DOM selector
declare var $: any

export class ChapterLink extends HTMLElement {

    // As long as the attribute is served via attributes and not DOM props this is not needed
    // get active(): boolean {
    //     return this.hasAttribute('active')
    // }

    // set active(val: boolean) {
    //     DEBUG.input && debug('Input active:', val)
    //     this.isActive = val

    //     // Reflect as an attribute.
    //     if (val) this.setAttribute('active', '')
    //     else this.removeAttribute('active')
    // }

    // State
    private caption: string
    private active: boolean
    private number: string
    private url: string
    private description: string

    constructor() {
        super()
        DEBUG.constr && debug('Construct ChapterLink')
    }

    connectedCallback() {
        DEBUG.init && debug('Connect ChapterLink')
        this.render()
    }

    render() {
        DEBUG.render && debug('Render ChapterLink')
        
        // Aliases
        const isActive = this.active === true || ''

        this.innerHTML = `
            <div class="info clearfix">
                <div class="number">${this.number}</div>
                <h1 class="title">${this.caption}</h1>
            </div>
            
            <h2 class="caption">${this.description}</h2>

            ${ isActive && `
            <a class="lesson" href="${this.url}">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                Read the lesson
            </a>
            `}
        `
    }

    static get observedAttributes() {
        return ['number', 'href', 'caption', 'description']
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        DEBUG.input && debug('Attribute:', name, newValue)
        switch (name) {
            case 'number':
                this.number = newValue
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
            case 'active':
                this.active = newValue === 'true'
                break
        }
    }

}

// Component
require('./chapter.link.scss')
window.customElements.define('chapter-link', ChapterLink)