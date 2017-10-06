// Interfaces
import { Action } from '../../shared/interfaces/action';

// State
import { ChaptersDataActions } from './chapters-data.actions';
import { ChaptersDataState } from '../interfaces/chapters-state';
import { chaptersInitialState } from './chapters-initial-state';

let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:ChaptersReducer');

export const ChaptersDataReducer = (state: ChaptersDataState = chaptersInitialState.data, action: Action<any>) => {
    switch (action.type) {

        // ====== GET CHAPTERS LIST ======

        case ChaptersDataActions.GET_CHAPTERS_SUCCESS:
            debug('GET_CHAPTERS_SUCCESS', action.payload)
            return Object.assign({}, state, <ChaptersDataState>{ 
                chapters: action.payload, 
                chapter: action.payload[0], // TODO proper routing 
            })

        default:
            return state
    }
}