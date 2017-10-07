import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { ChaptersUiState } from '../interfaces/chapters-state'

// State
import { ChaptersUiActions } from './chapters-ui.actions'
import { chaptersInitialState } from './chapters-initial-state'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:chaptersUiReducer')
DEBUG.init && debug('Instantiate chaptersUiReducer')

export const chaptersUiReducer = (state: ChaptersUiState = chaptersInitialState.ui, action: Action<any>) => {
    switch (action.type) {

        default:
            return state
    }
}