// Components
import { VisualSchoolCmp } from './visual-school.cmp';
VisualSchoolCmp;

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:Main');
(window as any).debug = require('debug');
debug.enabled === false && console.log('Enable console logs by typing: debug.enable(\'vsc:*\')');

// Styles
require('./shared/scss/main.scss');

debug('Initialise Main');
