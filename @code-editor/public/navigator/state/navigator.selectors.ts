import { createSelector } from 'reselect';

// Interfaces
import { NavigatorState, NavigatorDataState, NavigatorUiState } from '../interfaces/navigator-state';
import { AppState } from '../../shared/interfaces/app-state';

// ====== NAVIGATOR ======

const _NAVIGATOR = (state: AppState)  => state.navigator;

const _DATA = createSelector<AppState, NavigatorState, NavigatorDataState>(
    _NAVIGATOR, (state: NavigatorState) => state.data
);

const _UI = createSelector<AppState, NavigatorState, NavigatorUiState>(
    _NAVIGATOR, (state: NavigatorState) => state.ui
);

// ====== DATA ======

// ====== UI ======

export const NAV_IS_VISIBLE = createSelector<AppState, NavigatorUiState, boolean>(
    _UI, (state: NavigatorUiState) => state.isVisible
);