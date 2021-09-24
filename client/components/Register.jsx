import React from 'react'
// import connect from 'react-redux'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function Register (props) {


  // const [values, setValues] = useState({
  //   first: '',
  //   last: '',
  //   email: '',
  // })

  return (
    <>
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
 
      }}
      noValidate
      autoComplete='off'
         >
      <div>
        <TextField required id = 'outlined-required' label = 'First Name'/>
        <TextField required id = 'outlined-required' label = 'Last Name'/>
      </div>
      <div>
        <TextField required id='outlined-required'label='Email' />
      </div>
      <div>
      <FormControl>
        <InputLabel>Suburb</InputLabel>
        <Select labelId='demo-simple-select-label'id='demo-simple-select'
          // value={age}
          // label='Age'
          // onChange={handleChange}
          autoWidth label='Suburb'sx={{ m: 1, width: '20ch' }}>
          
        <MenuItem >To map over suburb</MenuItem>
        </Select>
        </FormControl>
        <FormControl>
        <InputLabel>Gender</InputLabel>
        <Select labelId='demo-simple-select-label'id='demo-simple-select'
          // value={age}
          // label='Age'
          // onChange={handleChange}
          autoWidth label='Gender'sx={{ m: 1, width: '20ch' }}>
          <MenuItem >Female</MenuItem>
          <MenuItem >Male</MenuItem>
          <MenuItem >Gender Diverse</MenuItem>
          <MenuItem >Prefer not to say</MenuItem>
        </Select>
        </FormControl>
      </div>
      </Box>

      <Box sx={{ '& .MuiTextField-root': { m: 1, width: '53ch', height: '30ch'} }}>
      <div>
      <TextField required id = 'outlined-multiline-flexible' multiline maxRows={3}  label = 'About you'/>
      </div>
      </Box>
        <Button>Register</Button>
        <Button>Cancel</Button>
    </>
  )
}

export default Register
// export default connect(mapReduxToProps)(Register)
