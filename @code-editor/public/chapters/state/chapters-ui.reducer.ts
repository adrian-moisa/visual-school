// Interfaces
import { Action } from '../../shared/interfaces/action';
import { ChaptersUiState } from '../interfaces/chapters-state';

// State
import { ChaptersUiActions } from './chapters-ui.actions';
import { chaptersInitialState } from './chapters-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:ChaptersUiReducer');

export const ChaptersUiReducer = (state: ChaptersUiState = chaptersInitialState.ui, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}