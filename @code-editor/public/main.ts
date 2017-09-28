module.hot && module.hot.accept();

// Components
import { App } from './app';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vs:Main');
(window as any).debug = require('debug');
debug('Initialise Main');

// Styles
require('./shared/scss/main.scss');

