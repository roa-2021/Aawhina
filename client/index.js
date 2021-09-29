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

// const onRedirectCallback = appState => {
//   history.push(
//     appState && appState.targetUrl
//       ? appState.targetUrl
//       : window.location.pathname

//   )
// }
// loginWithRedirect({ screen_hint: "signup", })

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
    domain="dev-mtmo2d9w.us.auth0.com"
    clientId="E9gg2nB473dDTUiYKPaa4wsxaJxXcWnN"
    redirectUri={window.location.origin}
    // onRedirectCallback={onRedirectCallback}
  >
    <Provider store={store} >
      <App />
    </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})


