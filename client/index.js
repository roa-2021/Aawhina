import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Auth0Provider } from "@auth0/auth0-react";

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
    domain="dev-mtmo2d9w.us.auth0.com"
    clientId="E9gg2nB473dDTUiYKPaa4wsxaJxXcWnN"
    redirectUri={window.location.origin}
    audience="https://dev-mtmo2d9w.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <Provider store={store} >
      <App />
    </Provider>,
    </Auth0Provider>,
    document.getElementById('app')
  )
})


