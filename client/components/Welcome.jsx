import React, { useState } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Register from './Register'
import Link from 'react-router-dom'

function Welcome () {
  // const [loginFormVisible, setLoginFormVisible] = useState(false)
  // const [registerFormVisible, setRegisterFormVisible] = useState(false)
  // const [logoutFormVisible, setLogoutFormVisible] = useState(false)


  // const toggleLoginForm = () => {
  //   setLoginFormVisible(true)
  // }

  // const toggleRegisterForm = () => {
  //   setRegisterFormVisible(true)
  // }

  // const toggleLoginForm = () => {
  //   setLoginFormVisible(!loginFormVisible)
  // }


  // const toggleLogoutForm = () => {
  //   setLogoutFormVisible(!logoutFormVisible)
  // }


  // const toggleRegisterForm = () => {
  //   setRegisterFormVisible(!registerFormVisible)
  // }

  return (
    <>
      {/* {
        loginFormVisible
          ? <Login />
          : registerFormVisible
            ? <Register />
            : <> */}
              <h3>Welcome Component</h3 >
              <Link to ><button>Login</button></Link>
              <Link to ><button>Logout</button></Link>
              <Link to ><button>Register</button></Link>
    </>
  )
}

export default connect()(Welcome)
