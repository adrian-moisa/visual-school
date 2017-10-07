// Interfaces
import { Action } from '../../shared/interfaces/action'
import { CodeBlock } from '../interfaces/code-block'
import { Lesson } from '../../lessons/interfaces/lesson'

export class codeEditorDataActions {

    // ====== GET CODE BLOCKS ======

    static GET_CODE_BLOCKS = 'GET_CODE_BLOCKS'
    static getCodeBlocks(lesson: Lesson): Action<Lesson> {
        return {
            type: codeEditorDataActions.GET_CODE_BLOCKS,
            payload: lesson
        }
    }

    static GET_CODE_BLOCKS_OK = 'GET_CODE_BLOCKS_OK'
    static getCodeBlocksSuccess(codeBlocks: CodeBlock[]): Action<CodeBlock[]> {
        return {
            type: codeEditorDataActions.GET_CODE_BLOCKS_OK,
            payload: codeBlocks
        }
    }

    static GET_CODE_BLOCKS_ERR = 'GET_CODE_BLOCKS_ERR'
    static getCodeBlocksFail(response: string): Action<string> {
        return {
            type: codeEditorDataActions.GET_CODE_BLOCKS_ERR,
            payload: response
        }
    }

}