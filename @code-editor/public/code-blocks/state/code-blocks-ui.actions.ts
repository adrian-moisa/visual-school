// Interfaces
import { Action } from '../../shared/interfaces/action'

export class codeBlocksUiActions {
    
        // ====== TOGGLE CODE EDITOR ======
    
        static TOGGLE_CODE_EDITOR = 'TOGGLE_CODE_EDITOR'
        static toggleCodeBlocks(state?: boolean): Action<boolean> {
            return {
                type: codeBlocksUiActions.TOGGLE_CODE_EDITOR,
                payload: state
            }
        }

}