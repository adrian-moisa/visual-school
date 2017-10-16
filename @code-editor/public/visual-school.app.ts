import { DEBUG } from '../config/app'

// Components
import { CodeEditorModule } from './code-editor/code-editor.module'
import { NavigatorModule } from './navigator/navigator.module'
import { QuickMenu } from './navigator/components/quick.menu'
CodeEditorModule 
NavigatorModule 
QuickMenu

// Services
import { codeEditorService } from './code-editor/services/code-editor.service'
import { navigatorService } from './navigator/services/navigator.service'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:VisualSchoolApp')

// DOM selector
declare var $: any

export class VisualSchoolApp extends HTMLElement {

    constructor() {
        super()
        DEBUG.constr && debug('Construct VisualSchoolApp')
    }
    
    connectedCallback() {
        DEBUG.init && debug('Connect VisualSchoolApp')
        this.render()
        
        // Remote cache
        let lessonContentEl: HTMLElement = $('.lesson.content')
        let bodyEl: HTMLElement = $('body')
        debugOff('Lesson content:', lessonContentEl)
        
        // Navigator visibility
        navigatorService.navigatorIsVis$().subscribe( isVis => {
            debugOff('Navigator visibility:', isVis)
            isVis === true ? bodyEl.classList.add('has-navigator') : 
            bodyEl.classList.remove('has-navigator')
        })
        
        // Code editor visibility
        codeEditorService.codeEditorIsVis$().subscribe( isVis => {
            debugOff('Code editor visibility:', isVis)
            isVis === true ? bodyEl.classList.add('has-editor') : 
            bodyEl.classList.remove('has-editor')
        })
        
    }

    render() {
        DEBUG.render && debug('Render VisualSchoolApp')
        this.innerHTML = `
            <!-- Quick access menu -->
            <quick-menu></quick-menu>

            <!-- Live code editor -->
            <code-editor-module></code-editor-module>

            <!-- Lesson navigator -->
            <navigator-module></navigator-module>
        `
    }
}

// Component
require('./visual-school.app.scss')
window.customElements.define('visual-school-app', VisualSchoolApp)