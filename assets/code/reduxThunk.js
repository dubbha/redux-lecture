import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk));

const saveUser = user => ({ type: 'SAVE_USER', user });            // sync action creator

const fetchUser = uid => dispatch =>                              // async action creator
  fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
    .then(response => response.json())
    .then(user => dispatch(saveUser(user)));             // dispatch sync or async action