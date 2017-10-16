import { DEBUG } from '../../../config/app'

// Components
import { ChapterLink } from './chapter.link'
import { CodeBlockLink } from './code-block.link'
import { LessonLink } from './lesson.link'
ChapterLink
CodeBlockLink
LessonLink

// Interfaces
import { NavNode } from '../interfaces/navigator'

// Constants
import { LINK_TYPE } from '../constants/navigator.const'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:NavNodeCmp')

// DOM selector
declare var $: any

/** Used to render navigation links in navigator panel. */
export class NavNodeCmp extends HTMLElement {

    get navNode(): NavNode {
        return this._navNode
    }
    set navNode(navNode: NavNode) {
        DEBUG.input && debug('Input navNode:', navNode)
        this._navNode = navNode || <NavNode>{}

        this.className += this.getCssClass()
        this.render()
    }

    private _navNode: NavNode
    $: (...any: any[]) => NavNodeCmp[] // TODO Better solution, HTMLElement is also possible output from custom bling

    constructor() {
        super()
        DEBUG.constr && debug('Construct NavNodeCmp')
    }

    connectedCallback() {
        DEBUG.init && debug('Connect NavNodeCmp')
    }

    render() {
        DEBUG.render && debug('Render NavNodeCmp')

        // Aliases
        const { children, type, active, index, caption, description, icon, url } = this._navNode,
            isActive = active ? 'active' : '',
            isChapter = type === LINK_TYPE.Chapter || '',
            isLesson = type === LINK_TYPE.Lesson || '',
            isCodeBlock = type === LINK_TYPE.CodeBlock || '',
            hasChildren = children && children.length !== 0 && active === true || '',

            // REFACTOR Separate this to utils
            forEachChild = (callback: (item: NavNode) => {}) => {
                return children.reduce((template, item) => 
                    template + callback(item), 
                '')
            }

        this.innerHTML = `

            ${ isChapter && `
                <chapter-link class="${isActive}" number="${index}" url="${url}" caption="${caption}" 
                    active="${active}" description="${description}">
                </chapter-link>
            `}

            ${ isLesson && `
                <lesson-link class="${isActive}" icon="${icon}" url="${url}" caption="${caption}" 
                    active="${active}" description="${description}">
                </lesson-link>
            `}

            ${ isCodeBlock && `
                <code-block-link class="${isActive}" icon="${icon}" url="${url}" caption="${caption}" 
                    active="${active}" description="${description}">
                </code-block-link>
            `}
            
            ${ (hasChildren) && forEachChild( link => `
                <navigation-node></navigation-node>
            `)}
        `

        // Bind children data
        this.$('navigation-node > navigation-node')
            .forEach((linkEl, i) => {
                linkEl.navNode = children[i];
            });
    }

    private getCssClass (): string{
        const { type, index } = this._navNode
        let cssClass: string = ''
        
        switch (type) {
            case LINK_TYPE.Chapter:
                cssClass += 'chapter'
                break
            case LINK_TYPE.Lesson:
                cssClass += 'lesson'
                break
            case LINK_TYPE.CodeBlock:
                cssClass += 'code-block'
                break
        }

        if (index) cssClass += `-${index}`

        DEBUG.cmp && debug('Get css class', cssClass)
        return cssClass
    }

}

// Component
require('./navigation.node.scss')
window.customElements.define('navigation-node', NavNodeCmp)