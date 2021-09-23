import React from 'react'
import toggleOfferForm from './Dashboard'
// import connect from 'react-redux'

function Login () {
  return (
    <>
      <h3>Login Component</h3 >
      <p>form goes here</p>
      <button >Submit</button>
      <button onClick={toggleLoginForm}>Cancel</button>

    </>
  )
}

export default Login
// export default connect(mapReduxToProps)(Login)
