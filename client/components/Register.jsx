import React from 'react'
// import connect from 'react-redux'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function Register (props) {

  return (
    <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      </Box>
      <div>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        </div>
        <div>
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        </div>
        <div>
              <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        </div>
        <Button>Submit</Button>
        <Button>Cancel</Button>
      
    </>
  )
}

export default Register
// export default connect(mapReduxToProps)(Register)
