store.dispatch(
  {                                 // action object
    type: 'SET_VISIBILITY_FILTER',  // type property MUST exist
    filter: 'SHOW_COMPLETED',
  }
);

store.dispatch({ type: 'COMPLETE_TODO', index: 1 });