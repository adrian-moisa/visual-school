import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { ChaptersDataState } from '../interfaces/chapters-state'

// State
import { chaptersDataActions } from './chapters-data.actions'
import { chaptersInitialState } from './chapters-initial-state'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:chaptersDataReducer')
DEBUG.constr && debug('Instantiate chaptersDataReducer')

export const chaptersDataReducer = (state: ChaptersDataState = chaptersInitialState.data, action: Action<any>) => {
    switch (action.type) {

        // ====== GET CHAPTERS ======

        case chaptersDataActions.GET_CHAPTERS_OK:
            DEBUG.reduce && debug('GET_CHAPTERS_OK', action.payload)
            return Object.assign({}, state, <ChaptersDataState>{ 
                chapters: action.payload, 
                chapter: action.payload[0], // TODO proper routing 
            })

        default:
            return state
    }
}