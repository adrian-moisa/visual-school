import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable'

// Emulate jQuery selector (global var, before other components)
require('script-loader!../node_modules/blingdotjs/bling.js');

// Main app component (loaded last)
import { VisualSchoolCmp } from './visual-school.cmp';

// Reducers
import { appReducers } from './shared/state/app.reducers';

// Epics
import { appEpics } from './shared/state/app.epics';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:Main');
(window as any).debug = require('debug');
debug.enabled === false && console.log('Enable console logs by typing: debug.enable(\'vsc:*\')');

// State store
const epicMiddleware = createEpicMiddleware(appEpics);

// Make the state store available globally
(<any>window).store = createStore(
    appReducers,
    compose(
        applyMiddleware(epicMiddleware),
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
    )
);
declare var store: any;

// Enable Webpack hot module replacement for reducers
if (module.hot) {
    module.hot.accept('./shared/state/app.reducers', () => {
        const nextRootReducer = require('./shared/state/app.reducers');
        store.replaceReducer(nextRootReducer);
    });
} 

// Styles
require('./shared/scss/main.scss');

// <!> Instantiate app after the other utilities
VisualSchoolCmp;

debug('Initialise Main');
