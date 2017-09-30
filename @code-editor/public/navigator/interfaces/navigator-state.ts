// Interfaces

// Data
export interface NavigatorDataState {
    // empty
}

// Ui
export interface NavigatorUiState {
    isVisible: boolean;
}

// Navigator
export interface NavigatorState {
    data: NavigatorDataState;
    ui: NavigatorUiState;
}
