import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'

const App = () => {
  return (
    <>
      <h1>Welcome to Aawhina</h1>
      <Route exact path='/' component={Home} />
    </>
  )
}

export default App
