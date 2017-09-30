import { APP } from '../../config/app';
import * as ace from 'brace';
import 'brace/mode/html';
import 'brace/theme/xcode';

// Services
import { CodeEditorService } from './services/code-editor.service';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeEditorCmp');

/**
 * Code editor
 * Code editor allows the modification of the source code in the samples at runtime
 * <!> Only one instance
 * <!> TODO For the moment visual-school component itself can be edited leading to app instability.
 */
export class CodeEditorCmp extends HTMLElement {

    // DOM
    private editorEl: HTMLElement;
    private editor: ace.Editor;

    constructor() {
        super();
        debug('Construct CodeEditorCmp');
    }
    
    connectedCallback() {
        debug('Connect CodeEditorCmp');

        // DOM cache
        this.editorEl = <HTMLElement>document.querySelector('editor-vsc');
        this.editorEl.classList.add('editor');
        debugOff('Code editor:', this.editorEl);

        // Wait for page layout to be fully loaded.
        setTimeout(() => {
            this.initCodeEditor();
        }, 0)
    }
    
    /**
     * Initialise ace editor
     */
    initCodeEditor(){
        debug('Initialise CodeEditorCmp');

        // Start ace code editor
        this.editor = ace.edit(this.editorEl);
        this.editor.getSession().setMode('ace/mode/html');
        this.editor.setTheme("ace/theme/xcode");
        this.editor.getSession().setTabSize(4);
        this.editor.getSession().setUseSoftTabs(true);
        this.editor.getSession().setUseWrapMode(true);
        // this.editor.setAutoScrollEditorIntoView(true);
        this.editor.setOptions({
            enableBasicAutocompletion: true
        });

        // Initial content
        CodeEditorService.getLessonContent('01-html/01-text.html')
            .subscribe(sourceCode => {
                // -1 moves cursor to the start (prevents select all text)
                this.editor.setValue(sourceCode, -1);
                this.editor.resize();
                CodeEditorService.updateLessonContent(sourceCode);
            });
    
        // Update document event
        this.editor.getSession().on('change', () => this.onEditorChange());
    }

    /**
     * On editor change
     */
    onEditorChange(){
        debug('On editor change');
        
        let code = this.editor.getValue();
        CodeEditorService.updateLessonContent(code);

    }

}

// Component
require('./code-editor.cmp.scss');
window.customElements.define('editor-vsc', CodeEditorCmp);