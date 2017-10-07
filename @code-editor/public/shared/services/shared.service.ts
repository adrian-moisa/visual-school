import { DEBUG } from '../../../config/app'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:sharedService')
DEBUG.constr && debug('Instantiate sharedService')

/** Most generic methods */
export const sharedService = {

}