// createStore(reducer, [preloadedState], [enhancer]);
//   reducer (Function): reducer function
//   [preloadedState] (any): initial state from server or persistent storage
//   [enhancer] (Function): store enhancer, e.g. applyMiddleware()
const store = createStore(rootReducer);

const store = createStore(rootReducer, { visibilityFilter: 'SHOW_ACTIVE', todos: [] });

const logger = store => next => action => {                              // middleware
  console.log('state', store.getState(), 'action', action);
  return next(action);        // call the next dispatch method in the middleware chain
};

const store = createStore(rootReducer, {}, applyMiddleware(logger));

// enhancer can also be passed as a second argument if no preloadedState
const store = createStore(rootReducer, applyMiddleware(logger));