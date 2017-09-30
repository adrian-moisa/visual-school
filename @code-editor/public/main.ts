// Components
import { AppCmp } from './app.cmp';
AppCmp;

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vs:Main');
(window as any).debug = require('debug');
console.log('Enable console logs by typing: debug.enable(\'vs:*\')');

// Styles
require('./shared/scss/main.scss');

debug('Initialise Main');
