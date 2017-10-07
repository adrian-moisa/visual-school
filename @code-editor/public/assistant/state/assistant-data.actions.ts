// Interfaces
import { Action } from '../../shared/interfaces/action'
import { AssistAction } from '../interfaces/assist-action'
import { Lesson } from '../../lessons/interfaces/lesson'

export class assistantDataActions {
    
        // ====== GET ASSIST ACTIONS ======
    
        static GET_ASSIST_ACTIONS = 'GET_ASSIST_ACTIONS'
        static getAssistActions(lesson: Lesson): Action<Lesson> {
            return {
                type: assistantDataActions.GET_ASSIST_ACTIONS,
                payload: lesson
            }
        }
    
        static GET_ASSIST_ACTIONS_OK = 'GET_ASSIST_ACTIONS_OK'
        static getAssistActionsSuccess(assistActions: AssistAction[]): Action<AssistAction[]> {
            return {
                type: assistantDataActions.GET_ASSIST_ACTIONS_OK,
                payload: assistActions
            }
        }
    
        static GET_ASSIST_ACTIONS_ERR = 'GET_ASSIST_ACTIONS_ERR'
        static getAssistActionsFail(response: string): Action<string> {
            return {
                type: assistantDataActions.GET_ASSIST_ACTIONS_ERR,
                payload: response
            }
        }
}