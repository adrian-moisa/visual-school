import { APP, DEBUG } from '../../config/app'
import * as SimpleBar from 'simplebar'

// Components
import { NavNodeCmp } from './components/navigation.node'
NavNodeCmp

// Interfaces
import { NavNode } from './interfaces/navigator'

// Services
import { navigatorService } from './services/navigator.service'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:NavigatorModule')

// DOM selector
declare var $: any

/**
 * Navigation for the entire course. 
 * From chapters, lessons and files down to code blocks.
 */
export class NavigatorModule extends HTMLElement {

    get visible(): boolean {
        return this.hasAttribute('visible')
    }
    set visible(val: boolean) {
        DEBUG.input && debug('Input visible:', val)
        this.isVisible = val

        // Reflect as an attribute.
        if (val) this.setAttribute('visible', null) 
        else this.removeAttribute('visible')
    }

    private isVisible: boolean
    private rootNavNode: NavNode
    private rootLinkEl: NavNodeCmp
    private navSimplebar: any

    constructor() {
        super()
        DEBUG.constr && debug('Construct NavigatorModule')
    }
    
    connectedCallback() {
        DEBUG.init && debug('Connect NavigatorModule')
        this.render()
        this.initSubscriptions()

        // TODO Move to routes
        navigatorService.getRootNavNode(<any>{id:1}, <any>{id:1});
    }

    private render() {
        DEBUG.render && debug('Render NavigatorModule')
        this.innerHTML = `

            <!-- Header -->
            <div class="header"></div>
            
            <!-- Links -->
            <navigation-node id="nav-root" class="links"></navigation-node>

            <!-- Footer -->
            <div class="footer"></div>
        `
        // Bind root node data
        this.rootLinkEl = $('#nav-root')
        this.rootLinkEl.navNode = this.rootNavNode;

        // Simplebar
        this.navSimplebar = new SimpleBar(this)
        this.removeEventListener('mouseenter', this.navSimplebar.onMouseEnter)
        
    }
    
    private initSubscriptions() {
        DEBUG.cmp && debug('Initialise subscriptions')

        // Navigator visibility
        navigatorService.navigatorIsVis$().subscribe( isVis => {
            DEBUG.cmp && debugOff('Navigator visibility:', isVis)
            this.visible = isVis
        })

        // Navigator nested links
        navigatorService.rootNavNode$().subscribe( rootNavNode => {
            DEBUG.cmp && debugOff('Root navigator node:', rootNavNode)
            this.rootNavNode = rootNavNode
            this.render()
        })

    }
}

// Component
require('./navigator.module.scss')
window.customElements.define('navigator-module', NavigatorModule)