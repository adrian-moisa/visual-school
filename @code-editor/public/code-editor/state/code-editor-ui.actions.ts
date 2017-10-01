// Interfaces
import { Action } from '../../shared/interfaces/action';

/**
 * CodeEditor ui actions
 */
export class CodeEditorUiActions {
    
        // ====== TOGGLE CODE EDITOR ======
    
        static TOGGLE_CODE_EDITOR = 'TOGGLE_CODE_EDITOR';
        static toggleCodeEditor(state?: boolean): Action<boolean> {
            return {
                type: CodeEditorUiActions.TOGGLE_CODE_EDITOR,
                payload: state
            };
        }

}