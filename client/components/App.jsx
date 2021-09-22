import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
// import Register from './Register'
// import Login from './Login'

const App = () => {
  return (
    <>
      <h1>Welcome to Aawhina</h1>
      <Route exact path='/' component={Home} />
      {/* <Route path='/register' component={Register} />
      <Route path='/login' component={Login} /> */}
    </>
  )
}

export default App
// export default connect()(App)
