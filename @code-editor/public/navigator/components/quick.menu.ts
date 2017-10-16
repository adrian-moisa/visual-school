import { DEBUG } from '../../../config/app'

// Components
import { ButtonLink } from '../../shared/components/user-interface/button.link'
ButtonLink

// Services
import { navigatorService } from '../services/navigator.service'
import { codeEditorService } from '../../code-editor/services/code-editor.service'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:QuickMenu')

// DOM selector
declare var $: any

/**
 * This is a menu fixed on the top right of the page.
 * Allows easy access to navigation menu, code editor (and user profile in the future)
 * <!> Only one instance
 */
export class QuickMenu extends HTMLElement {

    // State
    private isNavMenuVis: boolean = true
    private isCodeEditorVis: boolean = true

    // DOM
    private quickMenuEl: Element
    private navigatorEl: any // Element // TODO extend Element 
    private codeEditorEl: any // Element

    constructor() {
        super()
        DEBUG.constr && debug('Construct QuickMenu')
    }
    
    connectedCallback() {
        DEBUG.init && debug('Connect QuickMenu')
        this.render()

        // Code editor visibility
        codeEditorService.codeEditorIsVis$().subscribe( isVis => {
            debugOff('Code editor visibility:', isVis)
            this.codeEditorEl.active = isVis
        })
        
        // Navigator visibility
        navigatorService.navigatorIsVis$().subscribe( isVis => {
            debugOff('Navigator visibility:', isVis)
            this.navigatorEl.active = isVis
        })

    }

    render() {
        DEBUG.render && debug('Render QuickMenu')
        this.innerHTML = `
        
            <!-- Logo -->
            <!-- <div class="logo">Visual School</div> -->
            <div class="logo">Visual School</div>

            <!-- Code editor -->
            <!-- <div class="user"></div> -->
            <div class="user"></div>

            <!-- Code editor -->
            <btn-link class="editor" icon="code" title="Code editor"></btn-link>
        
            <!-- Navigator -->
            <btn-link class="navigator" icon="list" title="Lessons menu"></btn-link>
        `

        // DOM cache
        this.navigatorEl = $('quick-menu > .navigator')
        this.codeEditorEl = $('quick-menu > .editor')
        debugOff('Navigator link:', this.navigatorEl)
        debugOff('Editor link:', this.codeEditorEl)
        
        // Toggle panels
        this.navigatorEl.on('click', (el: Element) => navigatorService.toggleNavigatorVis())
        this.codeEditorEl.on('click', (el: Element) => codeEditorService.toggleCodeEditorVis())
    }

}

// Component
require('./quick.menu.scss')
window.customElements.define('quick-menu', QuickMenu)