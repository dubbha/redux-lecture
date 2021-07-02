import thunk from 'redux-thunk'

const api = 'jsonplaceholder.typicode.com';

// withExtraArgument
const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));

// later
const fetchUser = id => (dispatch, getState, api) => {
  // you can use api here
}
