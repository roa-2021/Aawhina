import React from 'react'
import toggleRegisterForm from './Welcome'
// import connect from 'react-redux'

function Register () {
  return (
    <>
      <h3>Register Component</h3 >
      <p>form goes here</p>
      <button>Submit</button>
      <button onClick={toggleRegisterForm}>Cancel</button>

    </>
  )
}

export default Register
// export default connect(mapReduxToProps)(Register)
