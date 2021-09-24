import React from 'react'
import toggleLoginForm from './Welcome'
import connect from 'react-redux'
import Backdrop from '@mui/material/Backdrop'

function Login () {
  return (
    <>
      <Backdrop
            sx={{ color: '#ccc', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            // onClick={handleClose}
            > <>
      <h3>Login Component</h3 >
      <p>form goes here</p>
      <button >Submit</button>
      <button onClick={toggleLoginForm}>Cancel</button>

    </>
          </Backdrop>
    </>
  )
}

export default Login
// export default connect()(Login)
