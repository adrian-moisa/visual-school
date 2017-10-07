import { createStore, compose, applyMiddleware, Store } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { DEBUG } from '../config/app'
// import { observableFromStore } from 'redux-rx'

// Interfaces
import { AppState } from './shared/interfaces/app-state'

// Emulate jQuery selector (global var)
require('script-loader!./shared/scripts/bling.js')

// State
import { appInitialState } from './shared/state/app-initial-state'
import { appReducers } from './shared/state/app.reducers'
import { appEpics } from './shared/state/app.epics'

// Setup debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:main');
(window as any).debug = require('debug')
debug.enabled === false && console.log('Enable console logs by typing: debug.enable(\'vsc:*\')')
DEBUG.constr && debug('Instantiate main')

// Setup state store
const epicMiddleware = createEpicMiddleware(appEpics); // Why does this semicolon matter?

// Make the state store available globally
(<any>window).store = createStore(
    appReducers,
    compose(
        applyMiddleware(epicMiddleware),
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
    )
)
declare var store: Store<AppState>

// Rxjs store observable (global var)
(<any>window).store$ = observableFromStore(store)

// Enable Webpack hot module replacement for reducers
if (module.hot) {
    module.hot.accept('./shared/state/app.reducers', () => {
        const nextRootReducer = require('./shared/state/app.reducers')
        store.replaceReducer(nextRootReducer)
    })
}

// Styles
require('./shared/scss/main.scss')

// Main app component (loaded last)
import { VisualSchoolCmp } from './visual-school.cmp'
VisualSchoolCmp

// TODO move to a service
function observableFromStore(store: Store<AppState>) {
    return Observable.create((observer: any) => {

        // Make sure distinctUntilChanged() has initial comparison value
        // <!> This prevents all subscriptions from firing all at once at first store update
        observer.next(store.getState())

        // Update store observable each time the redux store updates
        return store.subscribe(() => {
            return observer.next(store.getState())
        })
    })
}
