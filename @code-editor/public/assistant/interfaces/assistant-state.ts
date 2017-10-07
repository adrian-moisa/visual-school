// Interfaces
import { AssistAction } from '../interfaces/assist-action'

export interface AssistantDataState {
    assistActions: AssistAction[]
    assistAction: AssistAction
}

export interface AssistantUiState {}

export interface AssistantState {
    data: AssistantDataState
    ui: AssistantUiState
}
