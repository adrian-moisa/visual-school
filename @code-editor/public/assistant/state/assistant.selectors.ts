import { createSelector } from 'reselect'

// Interfaces
import { AssistantState, AssistantDataState, AssistantUiState } from '../interfaces/assistant-state'
import { AppState } from '../../shared/interfaces/app-state'
import { AssistAction } from '../interfaces/assist-action'

// ====== ASSISTANT ======

const _ASSISTANT = (state: AppState)  => state.assistant

export const _DATA = createSelector<AppState, AssistantState, AssistantDataState>(
    _ASSISTANT, (state: AssistantState) => state.data
)

const _UI = createSelector<AppState, AssistantState, AssistantUiState>(
    _ASSISTANT, (state: AssistantState) => state.ui
)

// ====== DATA ======

/** Current action */
export const ASSIST_ACTION = createSelector<AppState, AssistantDataState, AssistAction>(
    _DATA, (state: AssistantDataState) => state.assistAction
)

export const ASSIST_ACTIONS = createSelector<AppState, AssistantDataState, AssistAction[]>(
    _DATA, (state: AssistantDataState) => state.assistActions
)

// ====== UI ======