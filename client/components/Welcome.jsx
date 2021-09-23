import React, { useState } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Register from './Register'

// import Register from './Register'
// import Login from './Login'

function Welcome () {
  const [loginFormVisible, setLoginFormVisible] = useState(false)
  const [registerFormVisible, setRegisterFormVisible] = useState(false)

  const toggleLoginForm = () => {
    setLoginFormVisible(true)
  }

  const toggleRegisterForm = () => {
    setRegisterFormVisible(true)
  }

  return (
    <>
      {
        loginFormVisible ? (
          <>
            <Login />
          </>
        ) : registerFormVisible ? (
          <>
            <Register />
          </>
        )
          : <>
            <h3>Welcome Component</h3 >
            <button onClick={toggleLoginForm}>Login</button>
            <button onClick={toggleRegisterForm}>Register</button>

          </>}

    </>
  )
}

// export default Welcome
export default connect(mapReduxToProps)(Welcome)
