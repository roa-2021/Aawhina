import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// import Home from './Home'
import Register from './Register'
import Login from './Login'

const App = () => {
  return (
    <>
      <h1>Welcome to Aawhina</h1>
      <Router>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Router>
    </>
  )
}

// export default App
export default connect()(App)
