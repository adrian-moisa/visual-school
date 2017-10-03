import { APP } from '../../config/app'
import * as SimpleBar from 'simplebar'
import * as ace from 'brace'
import 'brace/mode/html'
import 'brace/theme/xcode'

// Interfaces
import { onHTMLElement } from '../shared/interfaces/html-element'

// Services
import { CodeEditorService } from './services/code-editor.service'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeEditorCmp')

// DOM selector
declare var $: any


/**
 * Code editor
 * Code editor allows the modification of the source code in the samples at runtime
 * TODO Reflow code when sidebar is toggled
 * TODO Code editor knows too much about lesson content. Might be a problem in the future.
 */
export class CodeEditorCmp extends HTMLElement {

    get visible(): boolean {
        return this.hasAttribute('visible')
    }

    set visible(val: boolean) {
        debug('Set visible:', val)
        this.isVisible = val

        // Reflect as an attribute.
        if (val) {
            this.setAttribute('visible', '')
        } else {
            this.removeAttribute('visible')
        }
    }

    // State
    private isVisible: boolean
    private isEditorHovered: boolean = false
    private isEditorSbClicked: boolean = false

    // Editor, lesson
    private lessonContentEl: onHTMLElement
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
        debug('Construct CodeEditorCmp')
    }

    connectedCallback() {
        debug('Connect CodeEditorCmp')

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

    /**
     * Render CodeEditorCmp
     */
    private render() {
        debug('Render CodeEditorCmp')

        this.innerHTML = `
            <div class="editor"></div>
            <div class="simplebar">
                <div class="inner"></div>
            </div>
        `

        // Editor and content
        this.editorEl = $('editor-vsc .editor')
        this.lessonContentEl = $('.lesson.content')
        debugOff('Code editor:', this.editorEl)
        debug('Lesson content:', this.lessonContentEl)

        // Faux scroll
        this.fauxScrollRegionEl = $('editor-vsc .simplebar')
        this.fauxScrollContentEl = $('editor-vsc .simplebar .inner')
        debugOff('Faux scroll region:', this.fauxScrollRegionEl)
        debugOff('Faux scroll content:', this.fauxScrollContentEl)
    }

    /**
     * Init ace code editor
     */
    private initAceCodeEditor() {
        debug('Init ace code editor')

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
        debug('Init ace code editor')

        // DOM cache
        this.aceVScrollEl = $('.ace_scrollbar-v')
        this.aceVScrollInnerEl = $('.ace_scrollbar-v .ace_scrollbar-inner')
        this.aceContentEl = $('editor-vsc .ace_content')
        debugOff('Ace scroll:', this.aceVScrollEl)
        debugOff('Ace scroll inner content:', this.aceVScrollInnerEl)
        debugOff('Ace content:', this.aceContentEl)

        // Editor simplebar
        let scrollEl = this.editorSimpleBar.el.SimpleBar.getScrollElement()

        // Block ciruclar references between scrollbars (improves scroll animation)
        this.aceContentEl.on('mouseenter', () => this.isEditorHovered = true)
        this.aceContentEl.on('mouseleave', () => this.isEditorHovered = false)
        $('editor-vsc').on('mousedown', () => this.isEditorSbClicked = true)
        $('editor-vsc').on('mouseup', () => this.isEditorSbClicked = false)

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

    /**
     * Setup custom scroll bars for lesson content and code editor
     */
    private initCustomScrolls() {
        debug('Init custom scroll')

        // Code editor
        this.editorSimpleBar = new SimpleBar(this.fauxScrollRegionEl)

        // Lesson content
        this.contentSimpleBar = new SimpleBar(this.lessonContentEl)

        // Prevents any simplebar overwrites on editor changes
        CodeEditorService.setLessonContentEl($('.lesson.content .simplebar-content'))
    }

    /**
     * Initialise subscriptions
     */
    private initSubscriptions() {
        debug('Initialise subscriptions')

        // Initial editor source code
        CodeEditorService.getLessonContent('index.html') // '01-html/01-text.html'
            .subscribe(sourceCode => this.updateEditorSourceCode(sourceCode))

        // Code editor visibility
        CodeEditorService.codeEditorIsVis$().subscribe(isVis => {
            debugOff('CodeEditor visibility:', isVis)
            this.visible = isVis
        })
    }

    /**
     * Update editor source code
     */
    private updateEditorSourceCode(sourceCode: string) {
        debug('Update editor source code')

        // -1 moves cursor to the start (prevents select all text)
        this.editor.setValue(sourceCode, -1)
        this.editor.resize()
    }

    /**
     * On editor change
     */
    private updateLessonContent() {
        debug('On editor change')

        // Update lesson content
        let sourceCode: string = this.editor.getValue()
        CodeEditorService.updateLessonContent(sourceCode)

        // Editor resize
        this.editor.resize()

        // Update scrollbars
        this.editorSimpleBar.recalculate()
        this.contentSimpleBar.recalculate()
    }

}

// Component
require('./code-editor.cmp.scss')
window.customElements.define('editor-vsc', CodeEditorCmp)