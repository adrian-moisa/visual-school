import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action'
import { CodeBlocksDataState } from '../interfaces/code-blocks-state'

// State
import { codeBlocksDataActions } from './code-blocks-data.actions'
import { codeBlocksInitialState } from './code-blocks-initial-state'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeBlocksDataReducer')
DEBUG.init && debug('Instantiate codeBlocksDataReducer')

export const codeBlocksDataReducer = (state: CodeBlocksDataState = codeBlocksInitialState.data, action: Action<any>) => {
    switch (action.type) {

        // ====== GET CODE BLOCKS ======

        case codeBlocksDataActions.GET_CODE_BLOCKS_OK:
            DEBUG.reduce && debug('GET_CODE_BLOCKS_OK', action.payload)
            return Object.assign({}, state, <CodeBlocksDataState>{ 
                codeBlocks: action.payload, 
                codeBlock: action.payload[0], // TODO proper routing 
            })

        default:
            return state
    }
}