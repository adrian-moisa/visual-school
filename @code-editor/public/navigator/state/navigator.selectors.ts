import { createSelector } from 'reselect';

// Interfaces
import { NavigatorState, NavigatorDataState, NavigatorUiState } from '../interfaces/navigator-state';
import { AppState } from '../../shared/interfaces/app-state';

export const NAVIGATOR = (state: AppState)  => state.navigator;

// ====== DATA ======

export const NAVIGATOR_DATA = createSelector<AppState, NavigatorState, NavigatorDataState>(
    NAVIGATOR,
    (state: NavigatorState) => state.data
);

// ====== UI ======

export const NAVIGATOR_UI = createSelector<AppState, NavigatorState, NavigatorUiState>(
    NAVIGATOR,
    (state: NavigatorState) => state.ui
);

/** Visibility of the navigator panel */
export const NAV_IS_VISIBLE = createSelector<AppState, NavigatorUiState, boolean>(
    NAVIGATOR_UI,
    (state: NavigatorUiState) => state.isVisible
);