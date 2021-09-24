import React, { useState } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Register from './Register'

function Welcome () {
  const [loginFormVisible, setLoginFormVisible] = useState(false)
  const [registerFormVisible, setRegisterFormVisible] = useState(false)

  // const toggleLoginForm = () => {
  //   setLoginFormVisible(true)
  // }

  // const toggleRegisterForm = () => {
  //   setRegisterFormVisible(true)
  // }

  const toggleLoginForm = () => {
    setLoginFormVisible(!loginFormVisible)
  }

  const toggleRegisterForm = () => {
    setRegisterFormVisible(!registerFormVisible)
  }

  return (
    <>
      {
        loginFormVisible
          ? <Login />
          : registerFormVisible
            ? <Register />
            : <>
              <h3>Welcome Component</h3 >
              <button onClick={toggleLoginForm}>Login</button>
              <button onClick={toggleRegisterForm}>Register</button>
            </>}
    </>
  )
}

// export default connect()(Welcome)
export default Welcome
