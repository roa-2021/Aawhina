import React, { useState, useEffect } from 'react'
import connect from 'react-redux'
import postUserThunk from '../actions/users'

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
import { useAuth0 } from '@auth0/auth0-react'


function MakeProfile (props) {
  const { dispatch } = props
  const { user } = useAuth0()

  console.log(user.email)

function MakeProfile ( {users, dispatch} ) {
  // this is where the postUserThunk(user) gets called and sends the user info to the database
  
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

  const handleChange =(e) => {
    e.preventDefault()
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })

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
      //  image: values.image,
     }
     console.log(newUser)
     dispatch(postUserThunk(newUser))
    //  props.history.push('/')
  }

  const { first, last, email, bio} = values

  return (
    <>
    <Nav/>
    <Container component='main' maxWidth='xs'>
      <Box sx={{ marginTop:8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography  component='h1' variant='h5'>Create Profile</Typography>
        <Box sx={{mt:3}} component='form'>
          <Grid container spacing={2} >

          <Grid item xs={6}>
            <TextField required fullWidth id = 'outlined-required' label = 'First Name' name='first' value={first} onChange={handleChange}/>
          </Grid>
          <Grid item xs={6}>
            <TextField required fullWidth id = 'outlined-required' label = 'Last Name' name='last' value={last} onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}>
            <TextField sx={{mt:3 }} required fullWidth id='outlined-required' defaultValue={user.email} label='Email' name='email' onChange={handleChange}/>
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
              value={gender}
              label='Gender'
              onChange={handleGender}
              sx={{ width: '21ch' }}>
              <MenuItem value='female'>Female</MenuItem>
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='gender diverse'>Gender Diverse</MenuItem>
              <MenuItem value='prefer not to say'>Prefer not to say</MenuItem>
            </Select>
        
          </Grid>
      
        <Grid item xs={12}>
          <TextField sx={{ mt: 4 }} required fullWidth id = 'outlined-required' multiline rows={6}  label = 'About you' name='bio' value={bio} onChange={handleChange}/>
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

function mapState2Props (globalState) {
  return {
    offers: globalState.offers,
    requests: globalState.requests,
    users: globalState.users
  }
}

export default connect(mapState2Props)(MakeProfile)
