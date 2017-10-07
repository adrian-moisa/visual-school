
// Interfaces
import { AssistantState } from '../interfaces/assistant-state'

/**
 * Core initial state
 */
export const assistantInitialState: AssistantState = {
    data: {
        assistAction: null,
        assistActions: null
    },
    ui: null
}
