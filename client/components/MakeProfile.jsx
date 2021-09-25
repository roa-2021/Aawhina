import React, { useState, useEffect } from 'react'

// import connect from 'react-redux'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import Nav from './Nav'


function MakeProfile (props) {

  const [values, setValues] = useState({
    first: '',
    last: '',
    // gender: '',
    email: '',
    bio: '',
    image: ''
  })

  // const suburb = props.suburb

  const [suburb, setSuburb] = useState('')
  const [gender, setGender] = useState('')

  const handleSuburb = (e) => {
    e.preventDefault()
    setSuburb(e.target.value)
  }

  const handleGender =(e) => {
    e.preventDefault()
    setGender(e.target.value)

  }


  const handleSubmit = (e) => {
     e.preventDefault()
     const newUser = {
       first: values.first,
       last: values.last,
      //  gender: values.gender,
       suburb: suburb,
       email: values.email,
       bio: values.bio,
       image: values.image,
     }
  }

  const { first, last, email, bio, image } = values

  return (
    <>
    <Nav/>
    <Container component='main' maxWidth='xs'>
      <Box sx={{ marginTop:8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography  component='h1' variant='h5'>Create Profile</Typography>
        <Box sx={{mt:3}} component='form'>
          <Grid container spacing={2} >

          <Grid item xs={6}>
            <TextField required fullWidth id = 'outlined-required' label = 'First Name'/>
          </Grid>
          <Grid item xs={6}>
            <TextField required fullWidth id = 'outlined-required' label = 'Last Name'/>
          </Grid>
          <Grid item xs={12}>
            <TextField sx={{mt:3 }} required fullWidth id='outlined-required'label='Email' />
          </Grid>

          <Grid item xs={6}>
          <InputLabel>Suburb</InputLabel>
          <Select
            value={suburb}
            label='Suburb'
            onChange={handleSuburb}
            sx={{ width: '21ch' }}>
          <MenuItem >To map over suburb</MenuItem>
          </Select>
          </Grid>
          
          <Grid item xs={6}>
          <InputLabel>Gender</InputLabel>
            <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
              value={gender}
              label='Gender'
              onChange={handleGender}
              sx={{ width: '21ch' }}>
              <MenuItem value={female}>Female</MenuItem>
              <MenuItem value={male}>Male</MenuItem>
              {/* <MenuItem value={gender}>Gender Diverse</MenuItem> */}
              {/* <MenuItem value={gender}>Prefer not to say</MenuItem> */}
            </Select>
        
          </Grid>
      
        <Grid item xs={12}>
          <TextField sx={{ mt: 4 }} required fullWidth id = 'outlined-required' multiline rows={6}  label = 'About you'/>
        </Grid>
        <Grid>

        </Grid>


          <Button onClick={handleSubmit}>Create profile</Button>
          <Button>Cancel</Button>
          
        </Grid>
        </Box>
        </Box>
        </Container>
      </>
  )
}

export default MakeProfile
// export default connect(mapReduxToProps)(Register)
