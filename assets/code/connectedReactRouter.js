// reducers.js
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),                             // the key MUST be 'router'
  // ... other reducers
});

export default createRootReducer

// configureStore.js
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares
      ),
    ),
  )

  return store
}

// index.js
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'                          // react-router v4+
import configureStore, { history } from './configureStore'

const store = configureStore(/* provide initial state if any */)

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>      {/* place ConnectedRouter under Provider */}
      <>                                     {/* your usual react-router v4+ routing */}
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<App/>, document.getElementById('react-root'))


// Navigate with redux action - using store.dispatch()
import { push } from 'connected-react-router'

store.dispatch(push('/path/to/somewhere'))

// Navigate with redux action - using connect() from react-redux
import { push } from 'connected-react-router'

  // in component render:
  <div onClick={() => {
    // do something before redirect
    props.push('/home');
  }}>login</div>

export default connect(null, { push })(Component);


// Navigate with redux action - in redux thunk
import { push } from 'connected-react-router'

export const login = () => (dispatch) => {
  // do something before redirect
  dispatch(push('/home'))
}


// Navigate with redux action - in redux saga
import { push } from 'connected-react-router'
import { put } from 'redux-saga/effects'

export function* login() {
  // do something before redirect
  yield put(push('/home'))
}