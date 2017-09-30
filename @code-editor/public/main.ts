import { createStore, compose, applyMiddleware, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable'
import { Observable } from 'rxjs/Observable';
// import { observableFromStore } from 'redux-rx';

// Interfaces
import { AppState } from './shared/interfaces/app-state';

// Emulate jQuery selector (global var, before other components)
require('script-loader!../node_modules/blingdotjs/bling.js');

// State
import { appReducers } from './shared/state/app.reducers';
import { appEpics } from './shared/state/app.epics';

// Setup debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:Main');
(window as any).debug = require('debug');
debug.enabled === false && console.log('Enable console logs by typing: debug.enable(\'vsc:*\')');

// Setup state store
const epicMiddleware = createEpicMiddleware(appEpics);

// Make the state store available globally
(<any>window).store = createStore(
    appReducers,
    compose(
        applyMiddleware(epicMiddleware),
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
    )
);
declare var store: Store<AppState>;

// Rxjs store observable
let store$ = (<any>window).store$ = observableFromStore(store);
console.log('store$', store$);

// Enable Webpack hot module replacement for reducers
if (module.hot) {
    module.hot.accept('./shared/state/app.reducers', () => {
        const nextRootReducer = require('./shared/state/app.reducers');
        store.replaceReducer(nextRootReducer);
    });
}

// Styles
require('./shared/scss/main.scss');

// Main app component (loaded last)
import { VisualSchoolCmp } from './visual-school.cmp';
VisualSchoolCmp;

debug('Initialise Main');

// TODO move to a service
function observableFromStore(store: Store<AppState>) {
    return Observable.create((observer: any) => {
        return store.subscribe(() => {
            return observer.next(store.getState());
        });
    });
}