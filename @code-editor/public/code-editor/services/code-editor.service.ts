let Debug: any = require('debug');
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:CodeEditorService');

let contentEl: HTMLElement;

/** 
 * Code editor service 
 * Handles code updates in the lesson page.
 */
export const codeEditorService = {

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
    updateLessonContent: (html: string) => {
        debug('Update lesson content'); 
        contentEl.innerHTML = html;
    }

}