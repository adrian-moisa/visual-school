import { DEBUG } from '../../../config/app'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:sharedService')
DEBUG.init && debug('Instantiate sharedService')

/** Most generic methods */
export const sharedService = {

}