import { Observable } from 'rxjs/Observable'

// Webapi
import { CodeEditorWebApi } from '../webapis/code-editor.webapi';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeEditorService');
debug('Instantiate CodeEditorService');

let contentEl: HTMLElement;

/** 
 * Code editor service 
 * Handles code updates in the lesson page.
 */
export const CodeEditorService = {

    // ====== DATA ======
    
    /** 
     * Get the content of the request lesson (file)
     */
    getLessonContent: (url: string): Observable<string> => {
        debug('Get lesson content'); 
        return CodeEditorWebApi.getLessonContent(url)
    },

    // ====== LOGIC ======

    /** 
     * Keep a reference to the content element
     */
    setContentElement: (html: HTMLElement) => {
        debug('Update lesson content'); 
        contentEl = html;
    },

    /** 
     * Updates the lesson content
     */
    updateLessonContent: (code: string) => {
        debug('Update lesson content'); 
        contentEl.innerHTML = code;
    }

}