import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { useAuth0 } from '@auth0/auth0-react'
import {setCurrentUserThunk} from '../actions/currentUser'
import { postUserThunk } from '../actions/users'
import Nav from './Nav'
import { getSuburbs} from '../apis/suburb_api'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import ListSubHeader from '@mui/material/ListSubheader'
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles'
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
// import { makeStyles } from '@material-ui/core'

// const useStyles = makeStyles({

// })


function MakeProfile (props) {
  const { dispatch } = props
  const { user } = useAuth0()
  // const classes = useStyles()
  
  const [theSuburbs, setSuburbs] = useState([])
  const [gender, setGender] = useState('')
  
  const [values, setValues] = useState({
    first: '',
    last: '',
    email: '',
    bio: '',
    language: '',
  })  
  
  useEffect(() => {
    getSuburbs()
    .then(res => setSuburbs(res)
    )
  
  },[])

  
  const [newSuburb, setSuburb] = useState(0)

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

  const [image, setImage ] = useState("")
  const [ url, setUrl ] = useState("")


  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "refb93xz")
    data.append("cloud_name","dvctkzwbh")

    fetch('https://api.cloudinary.com/v1_1/dvctkzwbh/image/upload',{
      method:"post",
      body: data})
      .then(resp => resp.json())
      .then(data => {
        setUrl(data.url)
        alert('Image Uploaded')
      })
      .catch(err => console.log(err))
    }
    const Input = styled('input')({
      display: 'none',
    })

  let history = useHistory()

  const handleSubmit = (e) => {
     e.preventDefault()
     const newUser = {
       first_name: values.first,
       last_name: values.last,
       email: user.email,
       suburb_id: newSuburb,
       bio: values.bio,
       gender: gender, 
       spoken_languages: values.language,
       image: url
     }  
     console.log(user)
     console.log(newUser)
     dispatch(postUserThunk(newUser)) 
    //  dispatch(setCurrentUserThunk(user.email))
     history.push('/') 
    }  

  const { first, last, language, bio } = values

  return (

    <Container component='main' maxWidth='xs'>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography  component='h1' color='secondary' focused variant='h5'>Create Profile</Typography>
        <Box sx={{ my:3 }} component='form'>
      
          <Grid container spacing={2} >

            <Grid item xs={6}>
              <TextField required fullWidth id = 'outlined-required' color='primary' focused label = 'First Name' name='first' value={first} onChange={handleChange}/>
            </Grid>
            <Grid item xs={6}>
              <TextField required fullWidth id = 'outlined-required' color='primary' focused label = 'Last Name' name='last' value={last} onChange={handleChange}/>
            </Grid>

            <Grid item xs={14}>
              <input label = 'image uploader' color='primary' focused type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
              <Button variant="outlined" color = 'primary' onClick={uploadImage}>Upload</Button> 
            </Grid>

            <Grid item xs={12}>
              <TextField sx={{mt:3 }} required fullWidth id='outlined-required' color='primary' focused defaultValue={user.email} label='Email' name='email' onChange={handleChange}/>
            </Grid>
        
            <Grid item xs={6}>

            <InputLabel>Suburb</InputLabel>
            <Select
              defaultValue=''
              
              color='primary' 
              onChange={handleSuburb}
              value={newSuburb}
              sx={{ width: '21ch' }}
              label='Suburb'>
              

              <ListSubHeader>Wellington</ListSubHeader>
              {theSuburbs && theSuburbs.filter(s => s.region === 'Wellington').map(s => ( 
              <MenuItem value={s.id}>{s.name}</MenuItem>
              ))}
              <ListSubHeader>Lower Hutt</ListSubHeader>
              {theSuburbs && theSuburbs.filter(s => s.region === 'Lower Hutt').map(s => (
              <MenuItem value={s.id}>{s.name}</MenuItem>
              ))}


              <ListSubHeader>Upper Hutt</ListSubHeader>
              {theSuburbs && theSuburbs.filter(s => s.region === 'Upper Hutt').map(s => (
              <MenuItem value={s.id}>{s.name}</MenuItem>
              ))}

              <ListSubHeader>Porirua</ListSubHeader>
              {theSuburbs && theSuburbs.filter(s => s.region === 'Porirua').map(s => (
              <MenuItem value={s.id}>{s.name}</MenuItem>
              ))}

            </Select>
            </Grid>

            <Grid item xs={6}>
            <InputLabel>Gender</InputLabel>
              <Select
                label='Gender'
                value={gender}
                color='primary' focused
                onChange={handleGender}
                sx={{ width: '21ch' }}>
                <MenuItem value='female'>Female</MenuItem>
                <MenuItem value='male'>Male</MenuItem>
                <MenuItem value='gender diverse'>Gender Diverse</MenuItem>
                <MenuItem value='prefer not to say'>Prefer not to say</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12}>
              <TextField required fullWidth id = 'outlined-required' color='primary' focused label = 'Languages Spoken' name='language' value={language} onChange={handleChange}/>
            </Grid>
      
            <Grid item xs={12}>
              <TextField sx={{ mt: 4 }} required fullWidth id = 'outlined-required' color='primary' focused multiline rows={6}  label = 'About you' name='bio' value={bio} onChange={handleChange}/>
            </Grid>

            <Grid item xs={5} style={{textAlign: "center"}}>
              <Button variant="outlined" color='primary' focused onClick={handleSubmit}>Create profile</Button>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </Container>
  
  )
}

function mapState2Props (globalState) {
  return {
    offers: globalState.offers,
    requests: globalState.requests,
    users: globalState.users,
    suburb: globalState.suburb
  }
}

export default connect(mapState2Props)(MakeProfile)



