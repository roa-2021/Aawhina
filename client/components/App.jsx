import React from 'react'
import { Route } from 'react-router-dom'
// import { connect } from 'react-redux'

import Welcome from './Welcome'

const App = () => {
  return (
    <>
      <Route exact path='/' component={Welcome} />
    </>
  )
}

export default App
// export default connect()(App)
