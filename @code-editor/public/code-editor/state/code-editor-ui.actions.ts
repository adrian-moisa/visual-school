// Interfaces
import { Action } from '../../shared/interfaces/action';

export class codeEditorUiActions {
    
        // ====== TOGGLE CODE EDITOR ======
    
        static TOGGLE_CODE_EDITOR = 'TOGGLE_CODE_EDITOR';
        static toggleCodeEditor(state?: boolean): Action<boolean> {
            return {
                type: codeEditorUiActions.TOGGLE_CODE_EDITOR,
                payload: state
            };
        }

}