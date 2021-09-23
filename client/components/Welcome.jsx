import React from 'react'
// import { connect } from 'react-redux'

// import Register from './Register'
// import Login from './Login'

function Welcome () {
  return (
    <>
      <h3>Welcome Component</h3 >

      <button>Login</button>  {/* onClick toggles Welcome component not-visible & Login component visible */}
      <button>Register</button> {/* onClick toggles Welcome component not-visible & Register component visible */}

    </>
  )
}

export default Welcome
// export default connect(mapReduxToProps)(Welcome)
