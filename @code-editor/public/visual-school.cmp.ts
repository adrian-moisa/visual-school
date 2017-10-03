// Components
import { CodeEditorCmp } from './code-editor/code-editor.cmp';
import { NavigatorCmp } from './navigator/navigator.cmp';
import { QuickMenuCmp } from './navigator/components/quick-menu.cmp';
CodeEditorCmp; NavigatorCmp; QuickMenuCmp;

// Services
import { CodeEditorService } from './code-editor/services/code-editor.service';
import { NavigatorService } from './navigator/services/navigator.service';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:VisualSchoolCmp');

// DOM selector
declare var $: any;

/**
 * Visual School App
 */
export class VisualSchoolCmp extends HTMLElement {

    constructor() {
        super();
        debug('Construct VisualSchoolCmp');
    }
    
    connectedCallback() {
        debug('Connect VisualSchoolCmp');
        this.render();
        
        // Remote cache
        let lessonContentEl: HTMLElement = $('.lesson.content');
        let bodyEl: HTMLElement = $('body');
        CodeEditorService.setLessonContentEl(lessonContentEl);
        debugOff('Lesson content:', lessonContentEl);
        
        // Navigator visibility
        NavigatorService.navigatorIsVis$().subscribe( isVis => {
            debugOff('Navigator visibility:', isVis);
            isVis === true ? bodyEl.classList.add('has-navigator') : 
            bodyEl.classList.remove('has-navigator');
        });
        
        // Code editor visibility
        CodeEditorService.codeEditorIsVis$().subscribe( isVis => {
            debugOff('Code editor visibility:', isVis);
            isVis === true ? bodyEl.classList.add('has-editor') : 
            bodyEl.classList.remove('has-editor');
        });
        
    }

    render() {
        debug('Render QuickMenuCmp');
        this.innerHTML = `
            <!-- Quick access menu -->
            <quick-menu-vsc></quick-menu-vsc>

            <!-- Live code editor -->
            <editor-vsc></editor-vsc>

            <!-- Lesson navigator -->
            <navigator-vsc></navigator-vsc>
        `;
    }
}

// Component
require('./visual-school.cmp.scss');
window.customElements.define('visual-school', VisualSchoolCmp);