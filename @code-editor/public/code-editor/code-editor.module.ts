import { APP, DEBUG } from '../../config/app'
import * as SimpleBar from 'simplebar'
import * as ace from 'brace'
import 'brace/mode/html'
import 'brace/theme/xcode'

// Interfaces
import { onHTMLElement } from '../shared/interfaces/html-element'

// Services
import { codeEditorService } from './services/code-editor.service'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeEditorModule')

// DOM selector
declare var $: any

/**
 * Code editor allows the modification of the source code in the samples at runtime
 * TODO Reflow code when sidebar is toggled
 * TODO Code editor knows too much about lesson content. Might be a problem in the future.
 */
export class CodeEditorModule extends HTMLElement {

    get visible(): boolean {
        return this.hasAttribute('visible')
    }

    set visible(val: boolean) {
        DEBUG.input && debug('Input visible:', val)
        this.isVisible = val

        // Reflect as an attribute.
        if (val) this.setAttribute('visible', '')
        else this.removeAttribute('visible')
    }

    // State
    private isVisible: boolean
    private isEditorHovered: boolean = false
    private isEditorSbClicked: boolean = false

    // Editor, lesson
    private lessonContentEl: onHTMLElement
    private lessonSbContentEl: onHTMLElement
    private editorEl: onHTMLElement
    private aceContentEl: onHTMLElement

    // Scroll
    private fauxScrollRegionEl: onHTMLElement
    private fauxScrollContentEl: onHTMLElement
    private aceVScrollEl: onHTMLElement
    private aceVScrollInnerEl: onHTMLElement

    // Plugins
    private editorSimpleBar: any
    private contentSimpleBar: any
    private editor: ace.Editor
    private session: ace.IEditSession

    constructor() {
        super()
        DEBUG.constr && debug('Construct CodeEditorModule')
    }

    connectedCallback() {
        DEBUG.init && debug('Connect CodeEditorModule')

        // Render
        this.render()

        // Wait for page layout to be fully loaded
        // <!> Final layout dimensions are needed
        setTimeout(() => {
            this.initAceCodeEditor()
            this.initCustomScrolls()
            this.syncAceAndSimpleBar()
            this.initSubscriptions()
        }, 0)
    }

    private render() {
        DEBUG.render && debug('Render CodeEditorModule')

        this.innerHTML = `
            <div class="editor"></div>
            <div class="simplebar">
                <div class="inner"></div>
            </div>
        `

        // Editor and content
        this.editorEl = $('code-editor-module .editor')
        this.lessonContentEl = $('.lesson.content')
        DEBUG.dom && debugOff('Code editor:', this.editorEl)
        DEBUG.dom && debug('Lesson content:', this.lessonContentEl)

        // Faux scroll
        this.fauxScrollRegionEl = $('code-editor-module .simplebar')
        this.fauxScrollContentEl = $('code-editor-module .simplebar .inner')
        DEBUG.dom && debugOff('Faux scroll region:', this.fauxScrollRegionEl)
        DEBUG.dom && debugOff('Faux scroll content:', this.fauxScrollContentEl)
    }

    private initAceCodeEditor() {
        DEBUG.cmp && debug('Init ace code editor')

        // Ace editor
        this.editor = ace.edit(this.editorEl)
        this.editor.setTheme("ace/theme/xcode")
        this.editor.setOptions({
            enableBasicAutocompletion: true,
            showPrintMargin: false
        })

        // Session
        this.session = this.editor.getSession()
        this.session.setMode('ace/mode/html')
        this.session.setTabSize(4)
        this.session.setUseSoftTabs(true)
        this.session.setUseWrapMode(true)
        this.session.on('change', () => this.updateLessonContent())
    }

    /**
     * Sync ace code editor and simplebar scroll
     * <!> Due to ace editor this was not a straight forward task to do.
     *     The trick is to hide ace scroll and link up the scroll events in both directions.
     *     This creates the feeling that simplebar controls ace directly when in fact it controls it's scrollbar.
     */
    private syncAceAndSimpleBar() {
        DEBUG.cmp && debug('Init ace code editor')

        // DOM cache
        this.aceVScrollEl = $('.ace_scrollbar-v')
        this.aceVScrollInnerEl = $('.ace_scrollbar-v .ace_scrollbar-inner')
        this.aceContentEl = $('code-editor-module .ace_content')
        debugOff('Ace scroll:', this.aceVScrollEl)
        debugOff('Ace scroll inner content:', this.aceVScrollInnerEl)
        debugOff('Ace content:', this.aceContentEl)

        // Editor simplebar
        let scrollEl = this.editorSimpleBar.el.SimpleBar.getScrollElement()

        // Block ciruclar references between scrollbars (improves scroll animation)
        this.aceContentEl.on('mouseenter', () => this.isEditorHovered = true)
        this.aceContentEl.on('mouseleave', () => this.isEditorHovered = false)
        $('code-editor-module').on('mousedown', () => this.isEditorSbClicked = true)
        $('code-editor-module').on('mouseup', () => this.isEditorSbClicked = false)

        // Control simplebar via ace scroll
        this.aceVScrollEl.onscroll = () => {
            if (this.isEditorHovered === true) {
                this.fauxScrollContentEl.style.height = this.aceVScrollInnerEl.clientHeight + 'px'
                scrollEl.scrollTop = this.aceVScrollEl.scrollTop
            }
        }

        // Control ace scroll via simplebar
        scrollEl.addEventListener('scroll', (e: any) => {
            if (this.isEditorSbClicked === true) {
                this.aceVScrollEl.scrollTop = scrollEl.scrollTop
            }
        })
    }

    private initCustomScrolls() {
        DEBUG.cmp && debug('Init custom scroll')

        // Code editor
        this.editorSimpleBar = new SimpleBar(this.fauxScrollRegionEl)
        this.fauxScrollRegionEl.removeEventListener('mouseenter', this.editorSimpleBar.onMouseEnter)
        
        // Lesson content
        this.contentSimpleBar = new SimpleBar(this.lessonContentEl)
        this.lessonContentEl.removeEventListener('mouseenter', this.contentSimpleBar.onMouseEnter)

        // Prevents any simplebar overwrites on editor changes
        this.lessonSbContentEl = $('.lesson.content .simplebar-content')
    }

    private initSubscriptions() {
        DEBUG.cmp && debug('Initialise subscriptions')

        // Initial editor source code
        codeEditorService.getLessonContent('index.html') // '01-html/01-text.html'
            .subscribe(sourceCode => this.updateEditorSourceCode(sourceCode))

        // Code editor visibility
        codeEditorService.codeEditorIsVis$().subscribe(isVis => {
            debugOff('CodeEditor visibility:', isVis)
            this.visible = isVis
        })
    }

    private updateEditorSourceCode(sourceCode: string) {
        DEBUG.cmp && debug('Update editor source code')

        // -1 moves cursor to the start (prevents select all text)
        this.editor.setValue(sourceCode, -1)
        this.editor.resize()
    }

    private updateLessonContent() {
        DEBUG.cmp && debug('On editor change')

        // Update lesson content
        let sourceCode: string = this.editor.getValue()
        this.lessonSbContentEl.innerHTML = sourceCode

        // Editor resize
        this.editor.resize()

        // Update scrollbars
        this.editorSimpleBar.recalculate()
        this.contentSimpleBar.recalculate()
    }

}

// Component
require('./code-editor.module.scss')
window.customElements.define('code-editor-module', CodeEditorModule)