import { combineReducers, createStore } from 'redux';
import { visibilityFilter, todos } from './reducers';

const rootReducer = combineReducers({ visibilityFilter, todos });
const store = createStore(rootReducer);

// get state
store.getState();    // { visibilityFilter: SHOW_ALL', todos: [] }

// dispatch action
store.dispatch({ type: 'ADD_TODO', text: 'First Task' });

// subscribe for state changes, returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

unsubscribe();      // unregister the listener