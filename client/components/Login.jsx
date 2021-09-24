import React from 'react'
import toggleLoginForm from './Welcome'
import connect from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'



function Login ()  {
  const { loginWithRedirect } = useAuth0()

  return <button onClick={() => loginWithRedirect()}>Log In</button>
}

export default Login

// function Login () {
//   return (
//     <>
//       <h3>Login Component</h3 >
//       <p>form goes here</p>
//       <button >Submit</button>
//       <button onClick={toggleLoginForm}>Cancel</button>

//     </>
//   )
// }

// export default Login
// // export default connect()(Login)
