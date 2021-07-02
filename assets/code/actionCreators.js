// action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// action creators
const addTodo = text => ({ type: ADD_TODO, text });
const toggleTodo = index => ({ type: TOGGLE_TODO, index });
const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter });

// using action creators to dispatch actions
store.dispatch(addTodo('First Task'));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));